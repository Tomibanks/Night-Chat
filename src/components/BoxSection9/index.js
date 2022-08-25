import React from 'react'
import Image from '../images/phone.png'

import { 
      InfoContainer,
      InfoWrapper,
      InfoRow,
      Column1,
      TextWrapper,
      TopLine,
      Heading,
      Subtitle,
      Column2, 
      ImgWrap,
      Img
} from './BoxElement9'

const BoxSection9 = ({
    }) => {
  return (
    <>
      <InfoContainer>
            <InfoWrapper>
                  <InfoRow>
                        <Column1>
                              <TextWrapper>
                                    <Heading>
                                    Try
Night chat
for free
                                    </Heading>
                                    <Subtitle>
                                    After 30-days trial of our product, enjoy a free and updated version
of Night chat.     </Subtitle>
                                    <TopLine>
                                    For more informations and guide tips
click here.
                                    </TopLine>
                              </TextWrapper>
                        </Column1>
                        <Column2>
                              <ImgWrap>
                              <Img src={Image}/>
                              </ImgWrap>
                        </Column2>
                  </InfoRow>
            </InfoWrapper>
      </InfoContainer>
    </>
  )
}



export default BoxSection9