import React from 'react'
import Image from '../images/rd2.png'
import { 
  BoxContain, 
  BoxWrap,
  MiniWrp,
  MiniWrp2,
  MiniWrap4,
  MiniWrap5,
  MiniWrap3,
  ImgWrap,
  Img
} from '../BoxSection4/BoxElements4'

const BoxElements4 = () => {
  return (
    <>
     <BoxContain>
      <BoxWrap>
      <MiniWrp>
      Connection hassles and interruptions gone!
      </MiniWrp>
      <MiniWrp2>
      Your day is cleared for more accomplishment.
      </MiniWrp2>

      <MiniWrap3>
      {/* <img src={Image} alt='Logo' style={{width:'600px'}} /> */}
      <ImgWrap>
      <Img src={Image} />
      </ImgWrap>
      </MiniWrap3>

      <MiniWrap4>
      Chat and talk all night long without any hitches
      </MiniWrap4>
      <MiniWrap5>
      or network hindrances.
      </MiniWrap5>

      </BoxWrap>
     </BoxContain>
    </>
  )
}

export default BoxElements4