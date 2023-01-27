import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight:'100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const ShopCartContainer = styled('button', {
  position:'absolute',
  right:'100px',
  padding: 12,
  border: 'none',
  cursor:'pointer',
  borderRadius:6,
  background:'#202024',

  svg: {
    color:'$grayIcon'
  },

  span: {
    position: 'absolute',
    width: '24px',
    height: '24px',
    right: '-7px',
    top: '-7px',
    zIndex:1,
    background: '$green500',
    border: '3px solid $gray900',
    borderRadius: '1000px',

    color:'white',

    fontWeight: 700,
    fontSize: '.875rem',
    lineHeight: '160%',
  }

})
