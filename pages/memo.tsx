import React, { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { dbService } from './api/fbase'
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'
import { Title } from '../styles/homestyles'
import styles from '../styles/Home.module.css'
import { isMobile } from 'react-device-detect'
import { deleteDoc, doc } from 'firebase/firestore'

const WriteContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: nanumsquare;
  padding: 100px 0px 50vh 0px;
`

const WriteInnerContainer = styled.div`
  width: 900px;
  margin-top: 50px;
  @media only screen and (max-width: 1000px) {
    width: 80vw;
  }
`

const OneMemo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 15px;
  font-size: 16px;
  font-weight: 700;
  transition-duration: 0.3s;
  cursor: pointer;
  text-align: start;
  // border-bottom-width: 1px;
  // border-bottom-color: rgba(0, 0, 0, 0.2);
  margin: 7px 0px;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 8px;

  .arrow {
    width: 10px;
    color: #5491c4;
    opacity: 0;
  }
  &:hover {
    // transform: translateX(2px) translateY(-2px);
    // box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.15);
    border-right-color: #5491c4;
    border-right-width: 13px;

    .arrow {
      opacity: 1;
    }
    .url {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`

const Memo = styled.div`
  font-size: 17px;
  padding: 10px 5px 15px 5px;
  width: 100%;
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 11px;
  margin-top: 6px;
  padding-bottom: 3px;
  color: rgba(0, 0, 0, 0.3);

  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .url {
    width: 50%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .delete {
    z-index: 2;
    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }

  @media only screen and (max-width: 1000px) {
    font-size: 13px;
  }
`

const UrlDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 6px;
  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.1);
  padding-top: 14px;
  padding-bottom: 1px;

  .url {
    width: 50%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .date {
    width: 30%;
    text-align: end;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 12px;
  }
`

const Desc = styled.div`
  .desc {
    color: rgba(100, 100, 100, 1);
  }
`

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90vw;

  a {
    margin-top: 10px;
    color: #5491c4;
    font-weight: 800;
    font-size: 20px;
  }
`

const MobileTitle = styled(Title)`
  font-size: 21px;
  @media only screen and (max-width: 1000px) {
    font-size: 18px;
  }
`

const MemoPage = () => {
  const [userInfo, setUserInfo] = useState('')
  const [memos, setMemos] = useState([])
  const [init, setInit] = useState(false)

  useEffect(() => {
    const getLocalStorage = async () => {
      const data = await window.localStorage.getItem('userInfo')
      if (data) setUserInfo(data)
    }
    getLocalStorage()
  }, [])

  useEffect(() => {
    getMemo()
  }, [userInfo])

  async function getMemo() {
    const didMemo = await dbService
      .collection('memo')
      .where('id', '==', userInfo)
      .orderBy('createdAt', 'desc')
      .get()
    const memoText: any = didMemo.docs.map((doc) => {
      return { ...doc.data(), memo_id: doc.id }
    })
    if (memoText.length > 0) {
      setMemos(memoText)
    }
    setInit(true)
  }

  const openWindow = (url: string) => {
    window.open(url, '_blank')
  }

  const returnDate = (createdAt: number) => {
    const date = new Date(createdAt).toString().split(' ')

    const months: any = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
    }

    return [date[3], months[date[1]], date[2], date[4]?.split(':')[0]]
  }

  const deleteMemo = async (url: string, memo_id: string) => {
    const answer = window.confirm('삭제하시겠습니까?')
    if (answer) {
      await dbService
        .collection('memo')
        .where('url', '==', url)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            if (doc.id === memo_id) {
              doc.ref.delete()
            }
          })
        })
      getMemo()
    } else {
    }
  }

  return (
    <div className={styles.no}>
      <AppBar />
      <WriteContainer>
        {init ? (
          <>
            {userInfo.length > 1 ? (
              <>
                <Title>Scrib에 저장된 메모들</Title>
                <Desc>
                  <div className="desc">
                    직접 작성한 메모들이 최신순으로 정렬되어있습니다.
                  </div>
                </Desc>
              </>
            ) : isMobile ? (
              <MobileContainer>
                <MobileTitle>
                  죄송합니다. 아직까지 모바일에서는 사용이 불가능합니다.
                </MobileTitle>
                <div>
                  만약 불편을 겪으셨다면 아래 문의하기를 클릭해서 의견을
                  남겨주세요! 바로 반영하도록 하겠습니다.
                </div>
                <a href="https://tally.so/r/mRGjOj">문의하기</a>
              </MobileContainer>
            ) : (
              <Title>크롬확장프로그램을 켠 후 로그인을 하셔야 합니다.</Title>
            )}
            <WriteInnerContainer>
              {memos && (
                <>
                  {memos.map((item: any) => {
                    const date = returnDate(item.createdAt)
                    return (
                      <OneMemo
                        onClick={() => openWindow(item.url)}
                        key={item.createdAt}
                      >
                        <Memo
                          dangerouslySetInnerHTML={{
                            __html: item.memo.replace(/\n/g, '<br>'),
                          }}
                        ></Memo>
                        <UrlDateContainer>
                          {/* <div className="url">{item.url}</div> */}
                          <div className="title">{item.title}</div>
                          <div className="date">
                            {date[0]}.{date[1]}.{date[2]} {date[3]}시
                          </div>
                          {/* <span className="arrow">▶</span> */}
                        </UrlDateContainer>
                        <HeadingContainer>
                          <div className="url">{item.url}</div>
                          <div
                            className="delete"
                            onClick={() => deleteMemo(item.url, item.memo_id)}
                          >
                            삭제
                          </div>
                        </HeadingContainer>
                      </OneMemo>
                    )
                  })}
                </>
              )}
            </WriteInnerContainer>
          </>
        ) : (
          <>
            <div>It's Loading...</div>
          </>
        )}
      </WriteContainer>
      <Footer />
    </div>
  )
}

export default MemoPage
