import React from 'react'
import styled from '@emotion/styled'

const FooterContainer = styled.footer`
  display: flex;
  flex: 1;
  padding: 4rem 0;
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
  @media only screen and (max-width: 800px) {
    font-size: 14px;
    .team {
      font-size: 17px;
    }
    .info {
      font-size: 13px;
    }
  }
`

const LinkTo = styled.a`
  text-decoration: underline;
  padding: 5px 8px;

  &:hover {
    font-weight: 700;
    background-color: rgba(100, 100, 100, 0.1);
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <LinkTo href="https://tally.so/r/mRGjOj">🙋🏻 의견남기기</LinkTo>
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
