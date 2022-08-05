import React from 'react'
import {
  BoxContainer,
  BoxWrapper,
  Heading,
  Tcontainer,
  Tmcontainer,
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
                      <Title>
                      Create your own cycle
                      </Title>
                        <Paragraph>
                        With Night chat, you decide
who you want to have access to you.
                        </Paragraph>
                      </Tmcontainer>

                      <Tmcontainer>
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
                      <Title>
                      Save/Record 
                      </Title>
                      
                        <Paragraph>
                        With Night chat, you do not have
to worry about jotting meeting briefs.
                        </Paragraph>
                      </Tmcontainer>

                      <Tmcontainer>
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
