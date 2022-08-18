import styled from '@emotion/styled'
import { Input, Button } from '@chakra-ui/react'
import Image from 'next/image'

export const MainContainer = styled.main`
  min-height: 97vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, white -20%, #7da7f9 80%);
`
export const MainBox = styled.div`
  // background: rgba(255, 255, 255, 0.25);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  // box-shadow: 0 0px 16px 0 rgba(231, 238, 235, 0.37) inset;
  // backdrop-filter: blur(7px);
  // -webkit-backdrop-filter: blur(7px);
  // border-radius: 10px;
  // border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 50px;
  width: 100%;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 45px;
  margin: 20px 0px;
  font-weight: 900;
  text-align: center;
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
  width: 180px;
  color: white;
  background-color: #5491c4;
  cursor: pointer;
  margin: 5px;
  text-align: center;

  &:hover {
    background-color: #4986c0;
  }
`
export const DefaultButton2 = styled.a`
  border-radius: 5px;
  padding: 15px 20px;
  width: 180px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  border: 1px solid #5481c4;
  margin-left: 10px;
  text-align: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
  @media only screen and (max-width: 800px) {
    margin-left: 0px;
  }
`

export const DefaultButton3 = styled(DefaultButton2)`
  font-size: 18px;
  width: 240px;
  padding: 20px 50px;
`

export const ColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .title {
    font-weight: 700;
    font-size: 18px;
  }
`

export const BoxContainer = styled.div`
  margin-top: 80px;
  padding: 70px 50px 70px 50px;
  width: 80%;
  background: #7da7f9bb;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 800px) {
    padding: 70px 25px 70px 25px;
    flex-direction: column;
    width: 95%;
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
  padding: 14px;
  flex-direction: row;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    font-size: 14px;
  }
`

export const InputContainer = styled(ColumnCenter)`
  margin-left: 30px;
  padding: 0px 0px 40px 0px;
  justify-content: start;
  .inner {
    width: 80%;
    font-weight: 700;
  }
  .label {
    width: 100%;
    text-align: start;
    margin: 15px 3px 5px 3px;
  }

  .input_wrapper {
    padding-top: 40px;
  }

  @media only screen and (max-width: 800px) {
    margin-left: 0px;
    .inner {
      width: 100%;
    }
    .label {
      font-size: 14px;
    }
    .input_wrapper {
      padding-top: 10px;
    }
  }
`

export const InputCustom = styled(Input)`
  background-color: white;
`

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 15px;
  background-color: black;
  color: white;

  &:hover {
    background-color: #4481b4;
  }
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

export const ShortcutContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 40px 0px;
  font-size: 18px;

  .url {
    margin-top: 15px;
    width: 350px;
    text-align: center;
  }
  .text {
    margin-top: 30px;
    font-weight: 700;
  }
  .title {
    font-size: 25px;
    font-weight: 700;
  }
  .explain_container {
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
    justify-content: center;

    .one_explain {
      width: 35%;
    }
    @media only screen and (max-width: 800px) {
      flex-direction: column;
      .one_explain {
        width: 100%;
      }
    }
  }
`

export const MainImage = styled(Image)`
  width: 60vw;
`
