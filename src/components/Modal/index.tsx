import { ShopCartContainer,Close,Content,ImageBox,Overlay,ProductBox,ValueBox } from '@/styles/components/modal'

import { useContext, useState, useEffect } from 'react'
import { shopCartContext } from '../../context/shopCartContext'

import { Handbag,X } from 'phosphor-react'

import * as Dialog from '@radix-ui/react-dialog';

import Image from 'next/image'
import axios from 'axios'


export function Modal(){
  const {shopCart:{shopCartList},removeItem} = useContext(shopCartContext)
  const [totalPrice, setTotalPrice] = useState('')

  const [isCreatingCheckoutSession,setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyButton() {
    try {
      const priceId = shopCartList.map(item =>{
        return {
          price: item.defaultPriceId,
          quantity:1

        }
      })
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        priceId
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert('Falha ao redirecionar ao checkout!')
    }
  }


  function handleRemoveItem(id:string){
    removeItem(id)
  }
  
  useEffect(()=>{
    function handleQuantity(){
      const soma = shopCartList.reduce((acc, cv) => acc + Number(cv.price.split('$')[1].replace(',','.')),0)
  
  
      const finalPrice = new Intl.NumberFormat('pt-BR',{
        style:'currency',
        currency:'BRL',
      }).format(soma)
  
      setTotalPrice(finalPrice)
    }
    handleQuantity()
  },[shopCartList])
  
  return(
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ShopCartContainer>
          <Handbag 
            size={32} 
            weight="bold" 
            color={shopCartList.length > 0 ? 'white' : '#8D8D99'} 
          />
          {shopCartList.length > 0 ? 
          <span>{shopCartList.length}</span>
          :
          ''
          }
        </ShopCartContainer>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay/>
        <Content>
          <Dialog.Title>
              Sacola de Compras
          </Dialog.Title>

          {shopCartList.length > 0 ?    
          shopCartList.map((product) => {
            return (
              <ProductBox key={product.id}>
              <ImageBox>
                <Image src={product.imageUrl} alt='' width={100} height={90}/>

              </ImageBox>
              <div>
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <button onClick={() => handleRemoveItem(product.id)}>remove</button>
              </div>
            </ProductBox>
            )
          })            
          : ''
          }

          <ValueBox>
            <div>
              <span>Quantidade</span>
              <span>
                {shopCartList.length} 
                {shopCartList.length === 1 ? ' item' : ' itens'}
                </span>
            </div>
            <div>
              <span>Valor total</span>
              <span>
                {
                totalPrice
                }
              </span>
            </div>
            <button
              onClick={handleBuyButton}
              disabled={isCreatingCheckoutSession}
            >Finalizar Compra</button>
          </ValueBox>
          <Close>
            <X size={24} weight='bold'/>
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}