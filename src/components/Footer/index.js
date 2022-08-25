import React, { useState } from 'react'
import Image from '../images/playstore.png'
import Image2 from '../images/social.png'

import { 
      InfoContainer,
      InfoWrapper,
      InfoRow,
      Column1,
      Main,
      DropDownContainer,
      DropDownHeader,
      DropDownListContainer,
      DropDownList,
      ListItem,
      TextWrapper,
      TopLine,
      Heading,
      Heading1,
      Subtitle,
      Subtitle1,
      Column2, 
      ImgWrap,
      Img,
      ImgWrap2,
      Img2,
      Column3,
      Column4
} from './FooterElement'

const Footer = ( {isOpen, toggle} ) => {
  return (
    <>
      <InfoContainer>
            <InfoWrapper>
                  <InfoRow>
                        <Column1>
                              <TextWrapper>
                                    <Heading>
                                   Easy
                                    </Heading>
                                    <Subtitle>
                                    ahead
                    </Subtitle>
                                    <TopLine>
                                    Night chat is your one stop app for easy
and hassle free connection with the
world so you can accomplish more.
click here.
                                    </TopLine>
                                    <Main>

                                    
 <DropDownContainer> 
 <DropDownHeader> English</DropDownHeader> 

 <DropDownListContainer> 
 {/* <DropDownList> 
 
 <ListItem>French</ListItem> 
 
 <ListItem>Spanish</ListItem> 
 
 <ListItem>British</ListItem> 
 
 </DropDownList>  */}
 </DropDownListContainer> 
 </DropDownContainer>
 </Main>

 <ImgWrap>
<Img src={Image}/>
</ImgWrap>

<ImgWrap2>
<Img2 src={Image2}/>
</ImgWrap2>

                              </TextWrapper>
                        </Column1>
                        <Column2>
                        <TextWrapper>
                              <Heading1>
                                    About
                              </Heading1>
                              <Subtitle1>
                                    About Night Chat
                    </Subtitle1>
                    <Subtitle1>
                                   Contact Sales
                    </Subtitle1>
                    <Subtitle1>
                                    Chatroom
                    </Subtitle1>
                    <Subtitle1>
                                    Privacy
                    </Subtitle1>
                    <Subtitle1>
                                    Security
                    </Subtitle1>
                    <Heading1>
                                    Add-Ons
                              </Heading1>
                              <Subtitle1>
                                    Download for Chrome
                    </Subtitle1>
                    <Subtitle1>
                    Download for Firefox
                    </Subtitle1>
                    <Subtitle1>
                                    Night chat mobile
                    </Subtitle1>
                    <Subtitle1>
                                    Messaging
                    </Subtitle1>

                        </TextWrapper>
                        </Column2>
                        <Column3>
                        <TextWrapper>
                              <Heading1>
                                    Popular
                              </Heading1>
                              <Subtitle1>
                                    Night Chat room
                    </Subtitle1>
                    <Subtitle1>
                                    Notification
                    </Subtitle1>
                    <Subtitle1>
                                    Night Chat mobile
                    </Subtitle1>
                    <Subtitle1>
                                    .
                    </Subtitle1>
                    <Subtitle1>
                                  .
                    </Subtitle1>
                    <Heading1>
                                    Help
                              </Heading1>
                              <Subtitle1>
                                   Help Centre
                    </Subtitle1>
                    <Subtitle1>
                                   Video
                    </Subtitle1>
                    <Subtitle1>
                                    Voice Messaging App
                    </Subtitle1>
                    <Subtitle1>
                                    .
                    </Subtitle1>

                        </TextWrapper>
                        </Column3>


                        <Column4>
                        <TextWrapper>
                              <Heading1>
                                    Others
                              </Heading1>
                              <Subtitle1>
                                   Users
                    </Subtitle1>
                    <Subtitle1>
                                   Sales
                    </Subtitle1>
                    <Subtitle1>
                                    Technology
                    </Subtitle1>
                    <Subtitle1>
                                    Terms and Conditions
                    </Subtitle1>
                    <Subtitle1>
                                    .
                    </Subtitle1>
                    <Heading1>
                                    Developers
                              </Heading1>
                              <Subtitle1>
                                    Developer
                    </Subtitle1>
                    <Subtitle1>
                                    Tool
                    </Subtitle1>
                    <Subtitle1>
                                    .
                    </Subtitle1>
                    <Subtitle1>
                                    .
                    </Subtitle1>

                        </TextWrapper>
                        </Column4>

                  </InfoRow>
            </InfoWrapper>
      </InfoContainer>
    </>
  )
}



export default Footer