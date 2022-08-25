import React from 'react'
import Image from '../images/blue.png'

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
} from './BoxElement7'

const BoxSection7 = ({
    }) => {
  return (
    <>
      <InfoContainer>
            <InfoWrapper>
                  <InfoRow>
                        <Column1>
                              <TextWrapper>
                                    <TopLine>
                                    GREAT FEATURES
                                    </TopLine>
                                    <Heading>
                                    Enjoy New features
                                    </Heading>
                                    <Subtitle>
                                    We keep updating new features on the app to keep our users engaged
                                    </Subtitle>
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



export default BoxSection7