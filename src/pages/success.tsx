import { stripe } from "@/lib/stripe";
import { ImageContainer, ImageContainerRounded, ImageContainerRoundedBox, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
  customerName: string;
  product:{
    id:string;
    name: string;
    imageUrl: string;
  }[]
}

export default function Success({customerName, product}: SuccessProps){ 

  return(
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex"/>
      </Head>
    <SuccessContainer>
    <h1>Compra efetuada</h1>

    {
      product.length > 1 ? 
      <ImageContainerRoundedBox >
        {product.map(image => {
          return (
            <ImageContainerRounded key={image.id}>
              <Image src={image.imageUrl}  width={130} height={130} alt=''/>
            </ImageContainerRounded>
          )
        })}
        </ImageContainerRoundedBox>
      :
      <ImageContainer>
        <Image src={product[0].imageUrl}  width={120} height={120} alt=''/>
      </ImageContainer>
    }

    <p>
      Uhuu! <strong>{customerName}</strong>, sua 
      {product.length > 1 ? 
        ` compra de ${product.length} camisetas `
      :
      <strong> {product[0].name}  </strong>}
      já está a caminho da sua casa 
    </p>
 
    <Link href='/'>
      Voltar ao catálogo
    </Link>

    </SuccessContainer>
    </>

  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {

  if(!query.session_id){
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  const sessionId = String(query.session_id);
  

  const session = await stripe.checkout.sessions.retrieve(sessionId,{
    expand:['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name

  // const product = session.line_items?.data[0].price!.product as Stripe.Product

  const AllProducts = session.line_items?.data.map(item => {
    return item.price!.product as Stripe.Product   
  })
  
  return {
    props:{
      customerName,
      product: AllProducts?.map(product =>{
        return{
          id: product.id,
          name: product.name,
          imageUrl: product.images[0]
        }
      }),
    }
  }
}