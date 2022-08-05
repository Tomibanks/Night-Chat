import styled from "styled-components";
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const BoxContain = styled.div`
${'' /* margin: 0; */}
background: #04234F;

@media screen and (max-width: 968px) {
}
`

export const BoxWrap = styled.div`
margin: auto;
height: 650px;
padding-left: 25px;
padding-right: 25px;
text-align: center;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media screen and (max-width: 968px) {
      
}
`
export const NavBtn = styled.nav`
${'' /* margin-top: 500px; */}
@media screen and (max-width: 960px) {
}
`
export const NavBtnLink2 = styled.button`
margin-top: 90px;
border-radius: 35px;
background: none;
white-space: nowrap;
padding: 10px 22px;
color: white;
font-weight: bolder;
font-size: 16px;
outline: none;
border: 1px solid white;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
      transition: all 0.9s ease-in-out;
      background: #006BFF;
      color: white;
}
@media screen and (max-width: 960px) {
}`

export const MiniWrap = styled.nav`
margin-top: 140px;
font-size: 28px;
color: #ffff;
@media screen and (max-width: 960px) {
}`

export const MiniWrap2 = styled.nav`
margin-top: 0px;
font-size: 28px;
color: #ffff;
@media screen and (max-width: 960px) {
}`

export const MiniWrap3 = styled.nav`
margin-top: 140px;
font-size: 25px;
color: #ffff;
@media screen and (max-width: 960px) {
}`

export const MiniWrap4 = styled.nav`
font-size: 25px;
color: #ffff;
@media screen and (max-width: 960px) {
}`