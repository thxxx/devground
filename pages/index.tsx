import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'
import {
  MainContainer,
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
  ShortcutContainer,
  MainImage,
  MainBox,
} from '../styles/homestyles'
import Image from 'next/image'
import { Input, Button } from '@chakra-ui/react'
import { dbService } from './api/fbase'

import clipboard from '../assets/clipboard.png'
import light from '../assets/light.png'
import hierarchy from '../assets/hierarchy.png'
import shortcut from '../assets/shortcut.png'
import short from '../assets/short.png'
import main from '../assets/main.png'

const Home: NextPage = () => {
  const [userInfo, setUserInfo] = useState('')
  const [mail, setMail] = useState('')
  const [job, setJob] = useState('')

  useEffect(() => {
    const getLocalStorage = async () => {
      const data = await window.localStorage.getItem('userInfo')
      if (data) setUserInfo(data)
    }
    getLocalStorage()
  }, [])

  const submitMail = async () => {
    if (mail.length < 3 || job.length < 0) {
      alert('올바른 양식을 입력해주세요.')
    } else {
      const data = await window.localStorage.getItem('userInfo')
      const body = {
        userId: data,
        mail: mail,
        createdAt: Date(),
      }
      await dbService.collection('feedback').add(body)
      alert('메일이 제출되었습니다.')
    }
  }

  return (
    <>
      <AppBar />
      <MainContainer>
        <MainBox>
          <Title>
            <div>
              MEMO-ON <ColorText>:</ColorText>
            </div>
            <div style={{ marginTop: '20px' }}>
              이제 웹페이지에 바로 메모하세요.
            </div>
          </Title>
          <ButtonContainer>
            <Link href="/memo">
              <DefaultButton>내 메모들 보러가기</DefaultButton>
            </Link>
            <Link href="/memo">
              <DefaultButton2>사용하러 가기</DefaultButton2>
            </Link>
          </ButtonContainer>
        </MainBox>
      </MainContainer>
      <div className={styles.container}>
        <ColumnCenter>
          {/* 특징 1 : 웹상에서 아주 쉽게 메모를 할 수 있다. */}
          {/* 특징 2 : 모아서 볼 수 있다. */}
          {/* 특징 3 : 기능이 추가될 예정. 아래를 봐주세요! */}
          <MainImage src={main} width={900} height={1250} />
        </ColumnCenter>
        <ShortcutContainer>
          <div className="title">
            <ColorText>MEMO-ON을 더 쉽게 사용하는 방법</ColorText>
          </div>
          <div className="explain_container">
            <div className="one_explain" style={{ marginTop: '20px' }}>
              <div className="text">
                1. 아래의 링크를 <ColorText>복사</ColorText>해서 URL창에
                붙여넣으신 후
              </div>
              <Input
                className="url"
                value="chrome://extensions/shortcuts"
                readOnly
              />
            </div>
            <div className="one_explain">
              <div className="text">
                2.{' '}
                <Image
                  width={25}
                  height={40}
                  src={short}
                  style={{ margin: '0px 3px 0px 3px' }}
                />{' '}
                아이콘을 클릭해서
                <br />
                직접 단축키를 설정하실 수 있습니다.
              </div>
              <Image width={500} height={120} src={shortcut} alt="shortcut" />
            </div>
          </div>
          <div className="text">
            이후 클릭없이 키보드만으로 메모를 저장할 수 있어요!
          </div>
        </ShortcutContainer>
        <div>{/* 특징 설명 */}</div>
        <ColumnCenter>
          <BoxContainer>
            <ColumnCenter>
              <div>MEMO-ON에는 앞으로 아래의 기능들이 추가될 예정이에요!</div>
              <FeatueContainer>
                <FeatureBox>
                  <ImageWrapper>
                    <Image src={clipboard} />
                  </ImageWrapper>
                  접속한 페이지에 다른 사람이 남긴 메모를 확인할 수 있습니다.
                </FeatureBox>
                <FeatureBox>
                  <ImageWrapper>
                    <Image src={hierarchy} />
                  </ImageWrapper>
                  태그를 통해서 메모의 종류를 구분하여 저장할 수 있습니다.
                </FeatureBox>
                <FeatureBox>
                  <ImageWrapper>
                    <Image src={light} />
                  </ImageWrapper>
                  메모와 함께 공유할 수 있습니다.
                </FeatureBox>
              </FeatueContainer>
            </ColumnCenter>
            <InputContainer>
              <div className="inner">
                <div>
                  MEMO-ON에 기능이 추가될 때<br />
                  알람을 받고싶으시다면 아래에 이메일을 적어주세요.
                </div>
                <div className="label">메일 입력</div>
                <InputCustom
                  placeholder="example23@gmail.com"
                  value={mail}
                  onChange={(e) => setMail(e.currentTarget.value)}
                />
                <div className="label">직군</div>
                <InputCustom
                  placeholder="SNS 마케터"
                  value={job}
                  onChange={(e) => setJob(e.currentTarget.value)}
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
      <Footer />
    </>
  )
}

export default Home
