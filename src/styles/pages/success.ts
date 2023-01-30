import { styled } from "@stitches/react";

export const SuccessContainer = styled('main',{
  display:'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  margin:'0 auto',
  height:656,

  h1: {
    fontSize:'$2xl',
    color:'$gray100'
  },


  p: {
    fontSize:'$xl',
    color:'$gray300',

    maxWidth:560,
    textAlign:'center',
    marginTop:'2rem',
    lineHeight:1.4
  },

  a:{
    marginTop:'5rem',
    display:'block',
    fontSize:'$lg',
    color:'$green500',
    textDecoration:'none',
    fontWeight:'bold',

    '&:hover': {
      color:'$green300',

    }
  }
})

export const ImageContainer = styled('div',{
  width:'100%',
  maxWidth:130,
  height:145,
  background:'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  borderRadius:8,
  padding: '.25rem',

  marginTop:'4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img:{
    objectFit:'cover'
  }


})
export const ImageContainerRoundedBox = styled('div',{
  display:'flex',
  alignItems:'center',
  justifyContent: 'center',
  marginLeft:40
  })

export const ImageContainerRounded = styled('div',{
  marginLeft:'-40px', 
  width:'100%',
  maxWidth:140,
  height:140,
  background:'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  borderRadius:1000,
  padding: '.25rem',
  marginTop:'4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img:{
    objectFit:'cover'
  }




})
