import React from 'react'
import Image from '../images/wing.png'
import Image1 from '../images/lazboy.png'
import Image2 from '../images/ebay.png'
import Image3 from '../images/bird.png'
import Image4 from '../images/lambo.png'
import Image5 from '../images/facebook.png'

import {
      LogoContainer,
      LogoWrapper,
      Heading,
      ImageContainer,
      ImageItem,
      ImageItem1
} from './LogoElements'

const LogoSection = () => {
  return (
    <>
     <LogoContainer>
      <LogoWrapper>
            <Heading>
            Over 20,000,000 users worldwide
            </Heading>
      </LogoWrapper>

      <ImageContainer>

            
            <ImageItem>
            <img src={Image} alt='Logo' style={{width:'90px'}} />
            </ImageItem>

            <ImageItem1>
            <img src={Image1} alt='Logo' style={{width:'135px'}} />
            </ImageItem1>

           
            <ImageItem1>
            <img src={Image2} alt='Logo' style={{width:'130px'}} />
            </ImageItem1>

            <ImageItem>
            <img src={Image3} alt='Logo' style={{width:'130px'}} />
            </ImageItem>

            <ImageItem>
            <img src={Image4} alt='Logo' style={{width:'80px'}} />
            </ImageItem>

            <ImageItem>
            <img src={Image5} alt='Logo' style={{width:'80px'}} />
            </ImageItem>
      </ImageContainer>
     </LogoContainer>
    </>
  )
}

export default LogoSection