import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
background: white;
height: 140px;
margin-top: -220px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
      height: 150px;
      margin-top: -325px;
      transition: 0.8 all ease;
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 90px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
color: black;
justify-self: start;
cursor: pointer;
display: flex;
align-items: center;
font-weight: bold;
text-decoration: none;

@media screen and (max-width: 960px) {
      margin-left: -24px;
}
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
      display: block;
      position: absolute;
      top: 30px;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: black;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 960px) {
     display: none;
}
`

export const NavItem = styled.li`
height: 90px;
`
export const NavLink = styled(LinkS)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 50px;
cursor: pointer;
font-weight: bolder;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

&:active {
      border-bottom: 3px solid #fff;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 960px) {
display: none;
}
`

export const NavBtnLink = styled(LinkS)`
border-radius: 35px;
background: none;
white-space: nowrap;
padding: 10px 22px;
margin-bottom: 40px;
color: #006BFF;
font-weight: bolder;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
      transition: all 0.2s ease-in-out;
      background: #006BFF;
      color: white;
}
`

export const NavBtnTwo = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 960px) {
display: none;
}
`

export const NavBtnLinkTwo = styled(LinkS)`
border-radius: 35px;
background: #006BFF;
white-space: nowrap;
padding: 10px 22px;
margin-bottom: 40px;
margin-right: 40px;
color: white;
font-weight: bolder;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
      transition: all 0.2s ease-in-out;
      background: none;
      color: #006BFF;
}
`