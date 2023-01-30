import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'


import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'

import {shopCartContext} from '../../context/shopCartContext'


import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

interface ProductProps{
  product: PProps
}

interface PProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

export default function Product({product}:ProductProps){

  const {addItem} = useContext(shopCartContext)


  function handleAddItem(product:PProps){
    console.log(product)
    addItem(product)
  }

  return(
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt='' width={520} height={480}/>
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button 
            onClick={() => handleAddItem(product)}
          >
            Colocar na sacola
          </button>
        </ProductDetails>

      </ProductContainer>
    </>
  )
}

export const getStaticPaths:GetStaticPaths = async () =>{
  return {
    paths: [
      { params: {id:'prod_NEfCvSX6fLgWkL'}}
    ],
    fallback:true,
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
  
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand:['default_price']
  })

  const price = product.default_price as Stripe.Price

  return{
    props:{
      product:{  
        id:product.id,
        name:product.name,
        imageUrl:product.images[0],
        price: new Intl.NumberFormat('pt-BR',{
          style:'currency',
          currency:'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId:price.id
      }
    },
    revalidate: 60 * 60 * 1, //1 hour
  }
}