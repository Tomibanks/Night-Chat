import styled from "styled-components";

export const BoxContain = styled.div`
background: white;

@media screen and (max-width: 968px) {
}
`

export const BoxWrap = styled.div`
${'' /* display: grid; */}
height: 630px;
padding-left: 25px;
padding-right: 25px;
text-align: center;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media screen and (max-width: 968px) {
      height: 680px; 
}

@media screen and (max-width: 468px) {
      height: 520px; 
}
`

export const MiniWrp = styled.nav`
margin-top: 100px;
font-size: 20px;
color: #6C86A9;
font-weight: bold;
@media screen and (max-width: 560px) {
      font-size: 18px;
}`

export const MiniWrp2 = styled.nav`
font-size: 20px;
color: #6C86A9;
font-weight: bold;
@media screen and (max-width: 560px) {
      font-size: 18px;
}`

export const MiniWrap = styled.nav`
margin-top: 50px;
font-size: 18px;
font-weight: bold;
line-height: 18.9px;
color: black;
@media screen and (max-width: 960px) {
}`

export const MiniWrap2 = styled.nav`
margin-top: 0px;
font-size: 18px;
font-weight: bold;
line-height: 18.9px;
color: black;
@media screen and (max-width: 960px) {
}`

export const MiniWrap3 = styled.nav`
margin-top: 20px;
font-size: 25px;
color: #ffff;
@media screen and (max-width: 960px) {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
}`

export const MiniWrap4 = styled.nav`
margin-top: 0px;
font-size: 20px;
color: #6C86A9;
font-weight: bold;
@media screen and (max-width: 560px) {
      font-size: 17px;
}`

export const MiniWrap5 = styled.nav`
margin-top: 0px;
font-size: 20px;
color: #6C86A9;
font-weight: bold;
@media screen and (max-width: 560px) {
      font-size: 18px;
}`

export const ImgWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const Img = styled.img`
display: flex;
justify-content: flex-start;
width: 650px;

@media screen and (max-width: 768px) {
justify-content: flex-start;
width: 350px;
}
`;