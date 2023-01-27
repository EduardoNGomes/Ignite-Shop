import { HomeContainer, InfoContainer, Product, ShopCartContainer } from "@/styles/pages/home";

import { Handbag } from 'phosphor-react'


import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

import { GetStaticProps } from "next";

import { useContext } from 'react'
import { shopCartContext } from '../context/shopCartContext'



interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({products}:HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView:3,
      spacing: 48
    }
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {
          products.map(product => {
            return (
              <Link
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
              >
                <Product 
                  className="keen-slider__slide" >
                  
                  <Image src={product.imageUrl} width="520" height="480" alt=""/>
        
                  <footer>
                    <div>
                      <InfoContainer>
                        <strong> {product.name}</strong>
                        <span>{product.price}</span>
                      </InfoContainer>
                      <ShopCartContainer>
                        <Handbag size={32} weight="bold" />
                      </ShopCartContainer>
                    </div>
                  </footer>
                </Product>
              </Link>
            )
          })
        }

      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand:['data.default_price']
  })


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id:product.id,
      name:product.name,
      imageUrl:product.images[0],
      price: new Intl.NumberFormat('pt-BR',{
        style:'currency',
        currency:'BRL',
      }).format(price.unit_amount! / 100)

    }
  })

  return{
    props:{
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}