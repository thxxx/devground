import React from 'react'
import styled from '@emotion/styled'

const FooterContainer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;

  .a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <span> &nbsp;MemoMountain</span>
      </a>
    </FooterContainer>
  )
}

export default Footer
