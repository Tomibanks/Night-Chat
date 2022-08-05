import React from 'react'
import { Button } from '../ButtonElements'
// import Image from '../images/lp.png'

import { 
      InfoContainer,
      InfoWrapper,
      InfoRow,
      Column1,
      TextWrapper,
      TopLine,
      Heading,
      Subtitle,
      BtnWrap,
      Column2, 
      ImgWrap,
      Img,
      BtnText,
      Signin
} from './InfoElements'

const InfoSection = ({
      lightBg, 
      id, 
      imgStart, 
      topLine, 
      lightText, 
      headLine, 
      darkText, 
      description, 
      buttonLabel, 
      buttonText,
      signIn,
      img, 
      alt}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                        <Column1>
                              <TextWrapper>
                                    <TopLine>
                                    {topLine}
                                    </TopLine>
                                    <Heading lightText={lightText}>
                                          {headLine}
                                    </Heading>
                                    <Subtitle darkText={darkText}>
                                          {description}
                                    </Subtitle>
                                    <BtnWrap>
                                          <Button to='home'>{buttonLabel}</Button>
                                    </BtnWrap>
                                    <BtnText>{buttonText}</BtnText>
                                    <Signin>{signIn}</Signin>
                              </TextWrapper>
                        </Column1>
                        <Column2>
                              <ImgWrap>
                              <Img src={img} alt={alt} />
                              </ImgWrap>
                        </Column2>
                  </InfoRow>
            </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection