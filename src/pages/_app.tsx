import { globalStyles } from '../styles/global'
import {  Container, Header  } from '@/styles/pages/app'

import logoImg from '../assets/logo.svg'

import type { AppProps } from 'next/app'



import Image from 'next/image'
import Link from 'next/link'
import { ShopCartProvider } from '@/context/shopCartContext'

import { Modal } from '@/components/Modal'


globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  
  return(
    <ShopCartProvider>
      <Container>
        <Header>
          <Link href='/'>
            <Image src={logoImg.src} alt='' width="130" height="52"/>
          </Link>
          <Modal/>

        </Header>
        <Component {...pageProps} />
      </Container>  
    </ShopCartProvider>
  ) 
}
