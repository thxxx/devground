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
  position: absolute;
  top: 0;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const LinkTo = styled.a`
  text-align: center;
  width: 60px;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;

  &:hover {
    color: black;
    font-weight: 600;
  }
`

const LinkToHome = styled.a`
  width: 150px;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    color: black;
    font-weight: 700;
  }
`

const AppBar = () => {
  return (
    <AppContainer>
      <Link href="/">
        <LinkToHome>INKON</LinkToHome>
      </Link>
      <ButtonContainer>
        <Link href="/memo">
          <LinkTo>내 메모</LinkTo>
        </Link>
        <Link href="/news">
          <LinkTo>문의</LinkTo>
        </Link>
      </ButtonContainer>
    </AppContainer>
  )
}

export default AppBar
