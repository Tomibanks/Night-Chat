import React from 'react'
import Image from '../images/visual.png'

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
} from './BoxElements5'

const BoxSection5 = ({
    }) => {
  return (
    <>
      <InfoContainer>
            <InfoWrapper>
                  <InfoRow>
                        <Column1>
                              <TextWrapper>
                                    <TopLine>
                                    WORKFLOW MANAGEMENT
                                    </TopLine>
                                    <Heading>
                                    Automatic Notifications
                                    </Heading>
                                    <Subtitle>
                                    Night chat makes you don’t miss
out on any information 
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



export default BoxSection5