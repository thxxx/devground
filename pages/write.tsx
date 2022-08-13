import React, { useCallback, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import styled from '@emotion/styled'
import { Input, Button } from '@chakra-ui/react'
import { dbService } from './api/fbase'

const WriteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const WriteInnerContainer = styled.div`
  width: 70vw;
  height: 80vh;
  border: 1px solid black;
`

const Write = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(() => {
    async function getMemo() {
      const didMemo = await dbService.collection('memo').get()
      const memoText = didMemo.docs.map((doc) => {
        return { ...doc.data() }
      })
      if (memoText.length > 0) {
        console.log(memoText, 'memoText')
      }
    }

    getMemo()
  }, [])

  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
    },
    [],
  )

  return (
    <WriteContainer>
      <WriteInnerContainer>
        <Input value={title} onChange={onChangeTitle} />
        <Button>작성완료</Button>
      </WriteInnerContainer>
    </WriteContainer>
  )
}

export default Write
