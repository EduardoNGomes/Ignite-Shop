import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth:'calc(100vw - ((100vw - 1180px) /2))',
  marginLeft:'auto',
  minHeight:656,

})

export const Product = styled('div', {
  background:'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',
  borderRadius:8,
  cursor:'pointer',
  position: 'relative',
  overflow:'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit:'cover'
  },

  div: {
    display:'flex',
    justifyContent:'space-between',
  },
  footer: {
    position: 'absolute',
    bottom:'0.25rem',
    left:'0.25rem',
    right:'0.25rem',
    padding:'2rem',

    borderRadius:6,


    backgroundColor: 'rgba(0,0,0,0.6)',

    transform:'translateY(110%)',
    opacity: 0,
    transition:'all .2s ease-in-out',



  },

  '&:hover': {
    footer: {
      transform:'translateY(0%)',
      opacity:1
    }
  }
})

export const InfoContainer = styled('div', {
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
  alignItems:'flex-start',
  gap:4,


  strong: {
    fontSize:'$lg',
    color:'$gray100'
  },

  span: {
    fontSize:'$xl',
    fontWeight:'bold',
    color:'$green300',

  }
})


export const ShopCartContainer = styled('button', {
  padding: 12,
  border: 'none',
  cursor:'pointer',
  borderRadius:6,
  background:'$green300',

  svg: {
    color:'$white',
  },

  transition:'all .3s ease-in-out ',


  '&:hover':{
    background:'$green500',

  }

})