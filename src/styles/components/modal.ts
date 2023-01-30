import * as Dialog from '@radix-ui/react-dialog';
import { styled } from "..";

export const ShopCartContainer = styled('button', {
  position:'absolute',
  right:'100px',
  padding: 12,
  border: 'none',
  cursor:'pointer',
  borderRadius:6,
  background:'#202024',
  transition:'all .3s ease-in-out ',

  '&:hover':{
    opacity: .5

  },

  span: {
    position: 'absolute',
    width: '24px',
    height: '24px',
    right: '-7px',
    top: '-7px',
    background: '$green500',
    border: '3px solid $gray900',
    borderRadius: '1000px',

    color:'white',

    fontWeight: 700,
    fontSize: '.875rem',
    lineHeight: '160%',
  }

})


export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)'
})

export const Content = styled(Dialog.Content,{
  height:'100vh',
  width:'480px',
  padding:'72px 48px 0',
  overflow:'auto',

  position:'absolute',
  right: 0,
  top:0,

  background:'#202024;',

  display:'flex',
  flexDirection:'column',
  gap:'24px'

})
export const ProductBox = styled('div',{
  display:'flex',
  gap:'20px',


  'div:nth-child(2)':{
    display:'flex',
    flexDirection: 'column',
    gap:'2px',


    h3:{
      color:'$gray300',
      fontWeight: 400,
      fontSize: '$md',
      lineHeight: '160%'
    },

    h4: {
      marginBottom:'6px',
      color:'$gray100',
      fontWeight: 700,
      fontSize: '$md',
      lineHeight: '160%'
    },


    button:{
      alignSelf:'flex-start',
      background:'none',
      border:'none',
      color:'$green500',
      fontWeight: 700,
      fontSize: '.875rem',
      lineHeight: '160%',
      cursor:'pointer',
      textTransform:'capitalize',
      transition: 'all .2s ease-in-out',


      '&:hover':{
        opacity:.5
      }

    }
  }

})

export const Close = styled(Dialog.Close,{
  position:'absolute',
  top:24,
  right:24,

  background:'none',
  border:'none',
  color:'$grayIcon',

  cursor:'pointer',
  

  '&:hover':{
    opacity:.5
  }
})

export const ImageBox = styled('div',{
  background:'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',
  width: '100px',
  borderRadius: '8px'
})

export const ValueBox = styled('div',{
  div:{
    display: 'flex',

    justifyContent:'space-between',

    span:{
      fontWeight: 400,
      fontSize: '.875rem',
      lineHeight: '160%',
      textTransform:'capitalize',
      color:'$gray100'
    }
  },

  'div:nth-child(2)':{

    span:{
      fontWeight: 700,
      fontSize: '$md',
      lineHeight: '160%',
      textTransform:'capitalize',
      color:'$gray100'

    }
  },



  button:{
    marginTop:'60px',

    width:'100%',
    padding: '20px 32px',

    border:'none',
    borderRadius:'8px',

    background :'$green500',

    color:'$white',
    fontWeight: 700,
    fontSize: '$md',
    lineHeight: '160%',
    textTransform:'capitalize',
    transition: 'all .2s ease-in-out',
    cursor:'pointer',
  

    '&:hover':{
      opacity:.5
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover':{
      backgroundColor:'$green300'
    }
  }
})