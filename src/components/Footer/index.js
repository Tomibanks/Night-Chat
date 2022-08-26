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
      Heading11,
      Heading111,
      Subtitle,
      Subtitle1,
      Subtitle11,
      Subtitle111,
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
                              <Heading11>
                                    Popular
                              </Heading11>
                              <Subtitle11>
                                    Night Chat room
                    </Subtitle11>
                    <Subtitle11>
                                    Notification
                    </Subtitle11>
                    <Subtitle11>
                                    Night Chat mobile
                    </Subtitle11>
                    <Subtitle11>
                                    
                    </Subtitle11>
                    <Subtitle11>
                                  
                    </Subtitle11>
                    <Heading11>
                                    Help
                              </Heading11>
                              <Subtitle11>
                                   Help Centre
                    </Subtitle11>
                    <Subtitle11>
                                   Video
                    </Subtitle11>
                    <Subtitle11>
                                    Voice Messaging App
                    </Subtitle11>
                    <Subtitle11>
                                    
                    </Subtitle11>

                        </TextWrapper>
                        </Column3>


                        <Column4>
                        <TextWrapper>
                              <Heading111>
                                    Others
                              </Heading111>
                              <Subtitle111>
                                   Users
                    </Subtitle111>
                    <Subtitle111>
                                   Sales
                    </Subtitle111>
                    <Subtitle111>
                                    Technology
                    </Subtitle111>
                    <Subtitle111>
                                    Terms and Conditions
                    </Subtitle111>
                    <Subtitle111>
                                    
                    </Subtitle111>
                    <Heading111>
                                    Developers
                              </Heading111>
                              <Subtitle111>
                                    Developer
                    </Subtitle111>
                    <Subtitle111>
                                    Tool
                    </Subtitle111>
                    <Subtitle111>
                                    
                    </Subtitle111>
                    <Subtitle111>
                                    
                    </Subtitle111>

                        </TextWrapper>
                        </Column4>

                  </InfoRow>
            </InfoWrapper>
      </InfoContainer>
    </>
  )
}



export default Footer