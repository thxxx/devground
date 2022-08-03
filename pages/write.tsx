import React, { useCallback, useState } from 'react'
import type { NextPage } from 'next'
import styled from '@emotion/styled'
import { Input, Button } from '@chakra-ui/react'

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
