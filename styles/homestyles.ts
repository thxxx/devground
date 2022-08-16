import styled from '@emotion/styled'
import { Input, Button } from '@chakra-ui/react'
import Image from 'next/image'

export const Title = styled.h1`
  font-size: 45px;
  margin: 20px 0px;
  text-align: start;
  @media only screen and (max-width: 800px) {
    text-align: center;
    font-size: 30px;
  }
`
export const ColorText = styled.span`
  color: #5491c4;
`

export const DefaultButton = styled.a`
  border-radius: 5px;
  padding: 15px 20px;
  color: white;
  background-color: #5491c4;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #4986c0;
  }
`
export const DefaultButton2 = styled.a`
  border-radius: 5px;
  padding: 15px 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  border: 1px solid #5481c4;
  margin: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`

export const ColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const BoxContainer = styled.div`
  margin: 30px;
  padding: 50px;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const ButtonContainer = styled(ColumnCenter)`
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const FeatueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 25px 0px;
`

export const FeatureBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  margin: 5px;
  border-radius: 10px;
  padding: 10px;
  flex-direction: row;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const InputContainer = styled(ColumnCenter)`
  margin-left: 30px;
  .inner {
    width: 70%;
  }
  .label {
    width: 100%;
    text-align: start;
    margin: 15px 3px 5px 3px;
  }

  @media only screen and (max-width: 800px) {
    margin-left: 0px;
    .inner {
      width: 100%;
    }
  }
`

export const InputCustom = styled(Input)`
  background-color: white;
`

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 15px;
  background-color: #5491c4;
  color: white;
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 95px;
  background-color: #5491c433;
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 0px 15px;
  @media only screen and (max-width: 800px) {
    margin: 0px 15px 10px 15px;
  }
`
