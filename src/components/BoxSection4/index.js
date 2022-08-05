import React from 'react'
import Image from '../images/rd.png'
import { 
  BoxContain, 
  BoxWrap,
  MiniWrp,
  MiniWrp2,
  MiniWrap,
  MiniWrap2,
  MiniWrap3
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
      <img src={Image} alt='Logo' style={{width:'280px'}} />
      </MiniWrap3>

      <MiniWrap>
      Chat and talk all night long without any hitches
      </MiniWrap>
      <MiniWrap2>
      or network hindrances.
      </MiniWrap2>

      </BoxWrap>
     </BoxContain>
    </>
  )
}

export default BoxElements4