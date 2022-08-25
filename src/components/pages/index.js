import React, {useState} from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import InfoSection from '../InfoSection'
import { homeObjOne } from '../InfoSection/Data'
import LogoSection from '../LogoSection'
import BoxSection from '../BoxSection'
import BoxSection2 from '../BoxSection2'
import BoxSection3 from '../BoxSection3'
import BoxSection4 from '../BoxSection4'
import BoxSection5 from '../BoxSection5'
import BoxSection6 from '../BoxSection6'
import BoxSection7 from '../BoxSection7'
import BoxSection8 from '../BoxSection8'
import BoxSection9 from '../BoxSection9'
import Footer from '../Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  const Foot = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggling = () => setIsOpen(!isOpen);
  }
  return (
    <>
       <Sidebar isOpen={isOpen} toggle={toggle} />
       <Navbar toggle={toggle} />
       <InfoSection {...homeObjOne}/>
       <LogoSection />
       <BoxSection />
       <BoxSection2 />
       <BoxSection3 />
       <BoxSection4 />
       <BoxSection5 />
       <BoxSection6 />
       <BoxSection7 />
       <BoxSection8 />
       <BoxSection9 />
       <Footer />
    </>
  )
}

export default Home