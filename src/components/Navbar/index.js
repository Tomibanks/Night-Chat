import React from 'react'
import {FaBars} from 'react-icons/fa'
import Image from '../images/logo.png'
import { 
      Nav, 
      NavbarContainer, 
      NavLogo, 
      MobileIcon, 
      NavMenu, 
      NavItem, 
      NavLink,
      NavBtn,
      NavBtnLink,
      NavBtnTwo,
      NavBtnLinkTwo
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
            <NavbarContainer>
                  <NavLogo to='/'>
                  <img src={Image} alt='Logo' style={{width:'110px'}} />
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                        <FaBars />
                  </MobileIcon>
                  <NavMenu>
                        <NavItem>
                              <NavLink to='individuals'>
                                   Individuals
                              </NavLink>
                        </NavItem>

                        <NavItem>
                              <NavLink to='team'>
                                   Team
                              </NavLink>
                        </NavItem>

                        <NavItem>
                              <NavLink to='enterprise'>
                                   Enterprise
                              </NavLink>
                        </NavItem>

                        <NavItem>
                              <NavLink to='products'>
                                   Products
                              </NavLink>
                        </NavItem>

                        <NavItem>
                              <NavLink to='pricing'>
                                   Pricing
                              </NavLink>
                        </NavItem>

                        <NavItem>
                              <NavLink to='resources'>
                                   Resources
                              </NavLink>
                        </NavItem>
                  </NavMenu>

                  <NavBtn>
                        <NavBtnLink to="/login">
                                    Log In
                        </NavBtnLink>
                  </NavBtn>

                  <NavBtnTwo>
                        <NavBtnLinkTwo to="/login">
                                    Get Started
                        </NavBtnLinkTwo>
                  </NavBtnTwo>
            </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar