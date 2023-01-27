import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logoImg from '../assets/logo.svg'
import { Container, Header, ShopCartContainer } from '@/styles/pages/app'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import Link from 'next/link'
import { ShopCartProvider } from '@/context/shopCartContext'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return(
    <ShopCartProvider>
      <Container>
        <Header>
          <Link href='/'>
            <Image src={logoImg.src} alt='' width="130" height="52"/>
          </Link>
          <ShopCartContainer>
            <Handbag size={32} weight="thin" />
            <span>1</span>
          </ShopCartContainer>
        </Header>
        <Component {...pageProps} />
      </Container>  
    </ShopCartProvider>
  
  ) 
}
