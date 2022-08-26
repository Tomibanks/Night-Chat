import React from 'react'
import {
  BoxContainer,
  BoxWrapper,
  Heading,
  Tcontainer,
  Tmcontainer,
  Number1,
  Title,
  Paragraph,
  Heading2
} from './BoxElements'

const BoxSection = () => {
  return (
    <>
      <BoxContainer>
            <BoxWrapper>
                  <Heading>
                  ..a web of ease.
                  </Heading>

                  <Tcontainer>
                      <Tmcontainer>
                      <Number1>
                         1
                      </Number1>
                      <Title>
                      Create your own cycle
                      </Title>
                        <Paragraph>
                        With Night chat, you decide
who you want to have access to you.
                        </Paragraph>
                      </Tmcontainer>

                      <Tmcontainer>
                      <Number1>
                         2
                      </Number1>
                      <Title>
                      Hide/share your profile
                      </Title>

                        <Paragraph>
                        Turn off or on your profile or
better still choose those who get
to view your profile.
                        </Paragraph>
                      </Tmcontainer>

                      <Tmcontainer>
                      <Number1>
                         3
                      </Number1>
                      <Title>
                      Save/Record 
                      </Title>
                      
                        <Paragraph>
                        With Night chat, you do not have
to worry about jotting meeting briefs.
                        </Paragraph>
                      </Tmcontainer>

                      <Tmcontainer>
                      <Number1>
                         4
                      </Number1>
                      <Title>
                      Chat with friends & family

                      </Title>
                      
                        <Paragraph>
                        Night chat, allows you unend free
time with family and friends.
                        </Paragraph>
                      </Tmcontainer>
                      <Heading2>
                      Chat and talk all night long without any hitches
                  </Heading2>
                  </Tcontainer>
            </BoxWrapper>
      </BoxContainer>
    </>
  )
}

export default BoxSection
