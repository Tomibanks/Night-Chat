import styled from "styled-components";

export const GeneralDiv = styled.div`
background: #04234F;
${'' /* height: 790px; */}
display: flex;
align-items: center;
justify-content: space-around;
@media screen and (max-width: 968px) {
}
`
export const MainDiv = styled.div`
max-width: 1350px;
display: flex;
align-items: center;
justify-content: space-between;
@media screen and (max-width: 968px) {

}
`

export const ImageDiv = styled.div`
margin-bottom: 410px;
margin-right: 200px;
@media screen and (max-width: 968px) {
     display: none;
}
`

export const BoxContain = styled.div`
margin: 0;
background: #04234F;
max-width: 500px;
@media screen and (max-width: 968px) {
}
`

export const BoxWrap = styled.div`
${'' /* display: grid; */}
margin: auto;
max-width: 500px;
height: 600px;
padding-left: 105px;
padding-right: 105px;
text-align: center;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media screen and (max-width: 468px) {
      height: 550px;
}
`
export const NavBtn = styled.nav`
${'' /* margin-top: 500px; */}
@media screen and (max-width: 960px) {
}
`
export const NavBtnLink2 = styled.button`
margin-top: 70px;
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
      font-size: 17px;
}`

export const MiniWrap2 = styled.nav`
margin-top: 0px;
font-size: 28px;
color: #ffff;
@media screen and (max-width: 960px) {
      font-size: 17px;
}`

export const MiniWrap3 = styled.nav`
margin-top: 140px;
font-size: 25px;
color: #ffff;
@media screen and (max-width: 960px) {
      font-size: 17px;
}`

export const MiniWrap4 = styled.nav`
font-size: 25px;
color: #ffff;
@media screen and (max-width: 960px) {
      font-size: 17px;
}`

export const ImageDiv2 = styled.div`
margin-bottom: 180px;
margin-left: 200px;
@media screen and (max-width: 968px) {
      display: none;
}
`