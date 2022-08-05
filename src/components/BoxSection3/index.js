import React from 'react'
import { 
  BoxContain, 
  BoxWrap,
  NavBtn,
  NavBtnLink2,
  MiniWrap,
  MiniWrap2,
  MiniWrap3,
  MiniWrap4
} from '../BoxSection3/BoxElements3'

const BoxElements3 = () => {
  return (
    <>
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
    </>
  )
}

export default BoxElements3