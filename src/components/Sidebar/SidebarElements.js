import styled from "styled-components";
import {FaTimes} from "react-icons/fa"
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 95%;
height: 100%;
background: white;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen })=> (isOpen ? '100%' : '0') };
top: ${({ isOpen })=> (isOpen ? '0' : '-100%') };
`

export const CloseIcon = styled(FaTimes)`
color: black;
margin-top: 45px;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 0.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 60px);
text-align: center;
margin-top: 100px;

@media screen and (max-width:480px) {
      /* grid-template-columns: repeat(6, 60px); */
}
`
export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.1rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: black;
cursor: pointer;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;

&:hover {
      color: #006BFF;
      transition: 0.2s ease-in-out;
}
`
export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`
export const SidebarRoute = styled(LinkR)`
border-radius: 35px;
background: #006BFF;
margin-left: 30px;
white-space: nowrap;
padding: 12px 64px;
font-size: 16px;
font-weight: bold;
outline: none;
border: none;
color: #fff;
cursor: pointer;
transition: 0.2s ease-in-out;
text-decoration: none;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

&:hover{
      transition: 0.2s ease-in-out;
      background: #fff;
      color: #006BFF;
}
`