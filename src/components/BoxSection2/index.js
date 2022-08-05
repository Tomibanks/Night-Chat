import React from 'react'
import Image from '../images/eyes.png'
import {
  BoxContainer,
  BoxWrapper,
  Heading,
  Tcontainer,
  Tmcontainer,
  Title,
  Paragraph,
  ImgItem
} from './BoxElements2'

const BoxSection2 = () => {
  return (
    <>
      <BoxContainer>
            <BoxWrapper>
                  <Heading>
                  ..noone’s watching, just the night owl.
                  </Heading>

                  <ImgItem>
            <img src={Image} alt='Logo' style={{width:'250px'}} />
            </ImgItem>
                  
                  <Tcontainer>
                      <Tmcontainer>
                      <Title>
                      We know you love the
quiteness of the night, we do too!
                      </Title>
                        <Paragraph>
                        While your at it night crawler,
Night chat keeps watch over unwanted
and unpermitted access to you.
                        </Paragraph>
                      </Tmcontainer>

                      <Tmcontainer>
                      <Title>
                      Chat for longer 
                      </Title>

                        <Paragraph>
                        Enjoy long conversations with your
folks on our unlimited plan and smooth connection.
                        </Paragraph>
                      </Tmcontainer>

                      <Tmcontainer>
                      <Title>
                      Make up for the day
                      </Title>
                      
                        <Paragraph>
                        The day can be busy ,
with everyone chasing dreams.
Now you could come home and relax
to some hot tea and juicy chat line, Enjoy!
                        </Paragraph>
                      </Tmcontainer>

                      <Tmcontainer>
                      <Title>
                      Do it your way

                      </Title>
                      
                        <Paragraph>
                        At your time, pace and pleasure.
No need worries about missed
meeting or calls we have it all
saved just for you.
                        </Paragraph>
                      </Tmcontainer>
                      
                  </Tcontainer>
            </BoxWrapper>
      </BoxContainer>
    </>
  )
}

export default BoxSection2
