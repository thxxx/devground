import React from 'react'
import styled from '@emotion/styled'

const FooterContainer = styled.footer`
  display: flex;
  flex: 1;
  padding: 5rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: nanumsquare;

  .team {
    font-size: 20px;
    font-weight: 600;
  }
  .info {
    margin-top: 30px;
    color: rgba(150, 150, 150, 1);
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <div className="team">
        Scrib <span style={{ color: 'gray' }}>by</span> Cosmic Resonance
      </div>
      <div>Mail : cos.resonance@gmail.com</div>
      <div className="info">
        ⓒ 2022. Cosmic Resonance, Inc. all rights reserved.
      </div>
    </FooterContainer>
  )
}

export default Footer
