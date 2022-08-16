import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import AppBar from '../components/AppBar'
import {
  Title,
  DefaultButton,
  DefaultButton2,
  ColumnCenter,
  BoxContainer,
  ButtonContainer,
  FeatureBox,
  FeatueContainer,
  InputContainer,
  SubmitButton,
  InputCustom,
  ColorText,
  ImageWrapper,
} from '../styles/homestyles'
import Image from 'next/image'
import { Input, Button } from '@chakra-ui/react'

import clipboard from '../assets/clipboard.png'
import light from '../assets/light.png'
import hierarchy from '../assets/hierarchy.png'

const Home: NextPage = () => {
  const [userInfo, setUserInfo] = useState('')
  const [mail, setMail] = useState('')

  useEffect(() => {
    const getLocalStorage = async () => {
      const data = await window.localStorage.getItem('userInfo')
      if (data) setUserInfo(data)
    }
    getLocalStorage()
  }, [])

  const submitMail = () => {
    console.log('메일 제출')
  }

  return (
    <>
      <AppBar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Title>
            <div>
              INKON <ColorText>:</ColorText>
            </div>
            <div>이제 웹상에서 바로 메모하세요.</div>
          </Title>
          <ButtonContainer>
            <Link href="/memo">
              <DefaultButton>내 메모들 보러가기</DefaultButton>
            </Link>
            <Link href="/memo">
              <DefaultButton2>사용하러 가기</DefaultButton2>
            </Link>
          </ButtonContainer>
        </main>
        <div>{/* 특징 설명 */}</div>
        <ColumnCenter>
          <BoxContainer>
            <ColumnCenter>
              <div>Inkon에는 앞으로 아래의 기능들이 추가될 예정이에요!</div>
              <FeatueContainer>
                <FeatureBox>
                  <ImageWrapper>
                    <Image src={clipboard} />
                  </ImageWrapper>
                  내 메모를 공개하고 다른 사람의 메모를 확인
                </FeatureBox>
                <FeatureBox>
                  <ImageWrapper>
                    <Image src={hierarchy} />
                  </ImageWrapper>
                  태그를 통해서 메모의 종류를 구분
                </FeatureBox>
                <FeatureBox>
                  <ImageWrapper>
                    <Image src={light} />
                  </ImageWrapper>
                  페이지에 좋아요를 누르는 기능
                </FeatureBox>
              </FeatueContainer>
            </ColumnCenter>
            <InputContainer>
              <div className="inner">
                <div>
                  Inkon에 기능이 추가될 때<br />
                  알람을 받고싶으시다면 아래에 이메일을 적어주세요.
                </div>
                <div className="label">메일 입력</div>
                <InputCustom
                  value={mail}
                  onChange={(e) => setMail(e.currentTarget.value)}
                />
                <SubmitButton onClick={() => submitMail()}>
                  알림받기
                </SubmitButton>
              </div>
            </InputContainer>
          </BoxContainer>
          {/* 다음에 추가될 기능들에 대해서 알림을 받고싶다면? */}
        </ColumnCenter>
      </div>
    </>
  )
}

export default Home
