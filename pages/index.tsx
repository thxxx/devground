import type { NextPage } from 'next'
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
import { Input } from '@chakra-ui/react'
import { dbService } from './api/fbase'

import clipboard from '../assets/clipboard.png'
import light from '../assets/light.png'
import hierarchy from '../assets/hierarchy.png'
import shortcut from '../assets/shortcut.png'
import short from '../assets/short.png'
import main from '../assets/main.png'
import chrome from '../assets/chrome.png'

const features = [
  {
    text: '접속한 페이지에 다른 사람이 남긴 메모를 확인할 수 있습니다.',
    icon: clipboard,
  },
  {
    text: '태그를 통해 메모를 구분하여 저장할 수 있습니다.',
    icon: hierarchy,
  },
  {
    text: '본인의 메모와 함께 URL을 공유할 수 있습니다.',
    icon: light,
  },
]

const jobs = ['개발자', 'PM/PO', '마케터', '기획', '1인 사업가', '창업자']

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

  const submitMail = async () => {
    if (mail.length < 3) {
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
      setMail('')
    }
  }

  return (
    <>
      <AppBar />
      <MainContainer>
        <MainBox>
          <Title>
            <div>
              Scrib <ColorText>:</ColorText>
            </div>
            <div style={{ marginTop: '20px' }}>
              이제 가장 쉬운 방법으로 <br />
              웹페이지에 바로 메모하세요.
            </div>
          </Title>
          <ButtonContainer>
            <div
              onClick={() => window.open('https://bit.ly/3dYsxWB', '_blank')}
            >
              <DefaultButton>
                <Image width={20} height={20} src={chrome} alt="chrome_icon" />
                <span className="text">설치하러 가기</span>
              </DefaultButton>
            </div>
            {/* <Link href="/memo">
              <DefaultButton2>내 메모들 보러가기</DefaultButton2>
            </Link> */}
          </ButtonContainer>
        </MainBox>
      </MainContainer>
      <div className={styles.container}>
        <ColumnCenter>
          <MainImage src={main} width={900} height={680} />
        </ColumnCenter>
        <ShortcutContainer>
          <div className="title">
            <ColorText>스크립을 더 쉽게 사용하는 방법</ColorText>
          </div>
          <div className="explain_container">
            <div className="one_explain">
              <div className="text2">
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
              <div className="title">
                스크립에는 앞으로 아래의 기능들이 추가될 예정이에요!
              </div>
              <FeatueContainer>
                {features.map((item, index) => (
                  <FeatureBox key={`key_${index}`}>
                    <ImageWrapper>
                      <Image src={item.icon} />
                    </ImageWrapper>
                    {item.text}
                  </FeatureBox>
                ))}
              </FeatueContainer>
            </ColumnCenter>
            <InputContainer>
              <div className="inner">
                <div className="title">
                  스크립에 기능이 추가될 때 알람을 받고싶으시다면
                  <br /> 아래에 이메일을 적어주세요.
                </div>
                <div className="input_wrapper">
                  <div className="label">메일 입력</div>
                  <InputCustom
                    placeholder="example23@gmail.com"
                    value={mail}
                    onChange={(e) => setMail(e.currentTarget.value)}
                  />
                  <SubmitButton onClick={() => submitMail()}>
                    알림받기
                  </SubmitButton>
                </div>
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
