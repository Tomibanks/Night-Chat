import React from 'react'
import Image from '../images/yellow.png'

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
} from './BoxElement6'

const BoxSection6 = ({
    }) => {
  return (
    <>
      <InfoContainer>
            <InfoWrapper>
                  <InfoRow>
                        <Column1>
                              <TextWrapper>
                                    <TopLine>
                                    MAKE MORE CONNECTIONS
                                    </TopLine>
                                    <Heading>
                                    Meet friends across the world
                                    </Heading>
                                    <Subtitle>
                                    We give our users the opportunity to connect with family and friends across the world and also make new connections
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



export default BoxSection6