import { globalStyles } from '../styles/global'
import { Close, Container, Content, Header, ImageBox, Overlay, ProductBox, ShopCartContainer, ValueBox } from '@/styles/pages/app'

import logoImg from '../assets/logo.svg'

import type { AppProps } from 'next/app'

import { Handbag,X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';

import Image from 'next/image'
import Link from 'next/link'
import { ShopCartProvider } from '@/context/shopCartContext'

import imgShirt from '../assets/camisetas/1.png'


globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return(
    <Container>
      <Header>
        <Link href='/'>
          <Image src={logoImg.src} alt='' width="130" height="52"/>
        </Link>

        <Dialog.Root>
            <Dialog.Trigger asChild>
                <ShopCartContainer>
                  <Handbag size={32} weight="bold" />
                  <span>1</span>
                </ShopCartContainer>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Overlay/>
              <Content>
                <Dialog.Title>
                    Sacola de Compras
                </Dialog.Title>

                <ProductBox>
                  <ImageBox>
                    <Image src={imgShirt} alt='' width={100}/>

                  </ImageBox>
                  <div>
                    <h3>Nome da Camisa</h3>
                    <h3>Quantidade: 1</h3>

                    <h4>RS 74,90</h4>
                    <button>
                      remove
                    </button>
                  </div>
                </ProductBox>
                

                <ValueBox>
                  <div>
                    <span>Quantidade</span>
                    <span>3 itens</span>
                  </div>
                  <div>
                    <span>Valor total</span>
                    <span>RS 270,00</span>
                  </div>
                  <button>Finalizar Compra</button>
                </ValueBox>

                <Close>
                  <X size={24} weight='bold'/>
                </Close>
              </Content>
            </Dialog.Portal>
        </Dialog.Root>
      </Header>
      <Component {...pageProps} />
    </Container>  
  ) 
}
