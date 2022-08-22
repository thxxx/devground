import React, { useEffect, useState } from 'react'
import { dbService } from './api/fbase'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const Cosmic = () => {
  const [memos, setMemos] = useState([])
  const [init, setInit] = useState(false)
  const [nums, setNums] = useState([''])

  useEffect(() => {
    getMemo()
  })

  async function getMemo() {
    const didMemo = await dbService
      .collection('memo')
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

  return (
    <div>
      {init && (
        <>
          <TableContainer>
            <Table size="md">
              <Thead>
                <Tr>
                  <Th>시간</Th>
                  <Th>아이디</Th>
                  <Th>메모</Th>
                  <Th>타이틀</Th>
                </Tr>
              </Thead>
              <Tbody>
                {memos.map((item: any) => {
                  const date = returnDate(item.createdAt)
                  let idNum = 0
                  if (nums.includes(item.id)) {
                    idNum = nums.indexOf(item.id)
                  } else {
                    setNums([...nums, item.id])
                    idNum = nums.length
                  }

                  return (
                    <Tr key={item.createdAt}>
                      <Td>
                        {date[0]}.{date[1]}.{date[2]} {date[3]}시
                      </Td>
                      <Td>유저 {idNum}</Td>
                      <Td>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.memo.replace(/\n/g, '<br>'),
                          }}
                        ></div>
                      </Td>
                      <Td>{item.title}</Td>
                      <Td>{item.url}</Td>
                    </Tr>
                  )
                })}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  )
}

export default Cosmic
