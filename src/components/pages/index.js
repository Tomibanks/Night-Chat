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

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
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
    </>
  )
}

export default Home