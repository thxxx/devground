import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const AppContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3vw;
  position: fixed;
  top: 0;
  z-index: 1200;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const LinkTo = styled.a`
  text-align: center;
  padding: 0px 10px;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    color: black;
    font-weight: 600;
  }
  @media only screen and (max-width: 800px) {
    font-size: 15px;
  }
`

const LinkToHome = styled.a`
  width: 150px;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;

  &:hover {
    color: black;
    font-weight: 700;
  }
  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`

const AppBar = () => {
  return (
    <AppContainer>
      <Link href="/">
        <LinkToHome>SCRIB</LinkToHome>
      </Link>
      <ButtonContainer>
        <LinkTo href="https://bit.ly/3dYsxWB" target="_blank">
          설치하기
        </LinkTo>
        <Link href="/memo">
          <LinkTo>내 메모</LinkTo>
        </Link>
        <LinkTo href="https://tally.so/r/mRGjOj" target="_blank">
          문의
        </LinkTo>
      </ButtonContainer>
    </AppContainer>
  )
}

export default AppBar
