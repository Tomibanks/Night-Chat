import React from 'react'
import Image from '../images/fairy.png'
import Image2 from '../images/fairy2.png'

import { 
  GeneralDiv,
  MainDiv,
  ImageDiv,
  BoxContain, 
  BoxWrap,
  NavBtn,
  NavBtnLink2,
  MiniWrap,
  MiniWrap2,
  MiniWrap3,
  MiniWrap4,
  ImageDiv2
} from '../BoxSection3/BoxElements3'

const BoxElements3 = () => {
  return (
    <>
    <GeneralDiv>
    <MainDiv>
    <ImageDiv>
    <img src={Image} alt='Logo' style={{width:'100px'}} />
    </ImageDiv>
     <BoxContain>
      <BoxWrap>
      <NavBtn>
        <NavBtnLink2>
           See how it works
        </NavBtnLink2>
      </NavBtn>

      <MiniWrap>
        Do more of
      </MiniWrap>
      <MiniWrap2>
        what you do best
      </MiniWrap2>

      <MiniWrap3>
        We can't wait for
      </MiniWrap3>
      <MiniWrap4>
        you to come on board
      </MiniWrap4>
      </BoxWrap>
     </BoxContain>
     <ImageDiv2>
     <img src={Image2} alt='Logo' style={{width:'100px'}} />
    </ImageDiv2>
    </MainDiv>
     </GeneralDiv>
    </>
  )
}

export default BoxElements3