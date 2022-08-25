import React from 'react'
import Image from '../images/girl.png'

import { 
      InfoContainer,
      InfoWrapper,
      InfoRow,
      Column1,
      TextWrapper,
      TopBoy,
      TopLine,
      Heading,
      Subtitle,
      Subtitle2,
      Column2, 
      ImgWrap,
      Img
} from './BoxElement8'

const BoxSection8 = ({
    }) => {
  return (
    <>
      <InfoContainer>
            <InfoWrapper>
                  <InfoRow>
                        <Column2>
                              <ImgWrap>
                              <Img src={Image}/>
                              </ImgWrap>
                        </Column2>

                        <Column1>
                              <TextWrapper>
                              <TopBoy>
                              BITLY
                              </TopBoy>
                                    <TopLine>
“Not only do the SDRs come in
with a whole calendar of 
prospects to speak with,  they
have more prospects show up to
their meetings”.
                                    </TopLine>
                                    <Heading>
                                    Cassie Neol
                                    </Heading>
                                    <Subtitle>
                                    Check out how to use Night chat
                                    </Subtitle>
                                    <Subtitle2>
                                    Tips and guides on how to enjoy all
that the app has to offer.
                                    </Subtitle2>
                              </TextWrapper>
                        </Column1>
                       
                  </InfoRow>
            </InfoWrapper>
      </InfoContainer>
    </>
  )
}



export default BoxSection8