import styled from "styled-components";

export const InfoContainer = styled.div`
background: white;

@media screen and (max-width: 968px) {
      padding: 0px 0;
}
`;

export const InfoWrapper = styled.div`
z-index: 1;
height: 550px;
width: 100%;
max-width: 1140px;
margin-right: auto;
margin-left: auto;
margin-top: 70px;

@media screen and (max-width: 968px) {
      margin-top: 0px;
      height: 500px;
}
`;

export const InfoRow = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;

@media screen and (max-width: 968px) {
      
}
`;
export const Column1 = styled.div`
flex-basis: 25%;
min-width: 30px;
margin-left: 1px;

@media screen and (max-width: 568px) {
flex-basis: 90%;
min-width: 0px;
}
`;

export const Column2 = styled.div`
flex-basis: 15%;
min-width: 0px;

@media screen and (max-width: 468px) {
      display: none;
flex-basis: 30%;
min-width: 0px;
}
`;

export const Column3 = styled.div`
flex-basis: 15%;
min-width: 0px;

@media screen and (max-width: 468px) {
      display: none;
flex-basis: 30%;
min-width: 0px;
}
`;

export const Column4 = styled.div`
flex-basis: 15%;
min-width: 0px;

@media screen and (max-width: 468px) {
      display: none;
flex-basis: 30%;
min-width: 0px;
}
`;


export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 20px;
`;

export const TopLine = styled.p`
margin-top: -20px;
margin-bottom: -0px;
font-size: 19px;
max-width: 305px;
line-height: 1.1;
font-weight: 400;
color: #959595;
font-weight: bolder;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 968px) {
font-size: 15px;
}
`;

export const Heading = styled.h1`
font-size: 35px;
max-width: 305px;
font-weight: bold;
color: black;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 968px) {
font-size: 32px;
margin: 0;
}
`;

export const Heading1 = styled.h1`

max-width: 400px;
margin-top: 0px;
font-weight: bold;
color: #006BFF;
font-size: 20px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 968px) {
font-size: 20px;
}
`;

export const Heading11 = styled.h1`

max-width: 400px;
margin-top: 0px;
font-weight: bold;
color: #006BFF;
font-size: 20px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 968px) {
font-size: 20px;
}
`;

export const Subtitle11 = styled.p`
margin-top: 27px;
font-size: 15px;
max-width: 305px;
color: black;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media screen and (max-width: 968px) {
font-size: 15px;
}
`;

export const Heading111 = styled.h1`

max-width: 400px;
margin-top: 0px;
font-weight: bold;
color: #006BFF;
font-size: 20px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 968px) {
font-size: 20px;
}
`;

export const Subtitle111 = styled.p`
margin-top: 27px;
font-size: 15px;
max-width: 305px;
color: black;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media screen and (max-width: 968px) {
font-size: 15px;
}
`;

export const Subtitle = styled.p`
max-width: 400px;
margin-top: 0px;
font-weight: bold;
color: #006BFF;
font-size: 35px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 968px) {
font-size: 32px;
}
`;

export const Subtitle1 = styled.p`
margin-top: 10px;
font-size: 15px;
max-width: 305px;
color: black;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media screen and (max-width: 968px) {
font-size: 15px;
}
`;

export const Main = styled("div")` 
font-family: sans-serif; 
${'' /* background: #f0f0f0;  */}
margin-top: 40px;
`;

export const DropDownContainer = styled("div")` 
width: 10.5em; 
`;

export const DropDownHeader = styled("div")` margin-bottom: 0.8em; 
padding: 0.4em 2em 0.4em 1em; 
${'' /* border: 1px solid; */}
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); font-weight: 500; 
font-size: 1.3rem; 
color: #3faffa; 
background: #ffffff;

@media screen and (max-width: 968px) {
font-size: 15px;
}
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")` 
padding: 0; 
margin: 0; 
padding-left: 1em; 
background: #ffffff; 
border: 2px solid #e5e5e5; 
box-sizing: border-box; 
color: #3faffa; 
font-size: 1.3rem; 
font-weight: 500; &:first-child { padding-top: 0.8em; }
`;

export const ListItem = styled("li")` 
list-style: none; 
margin-bottom: 0.8em;`;

export const ImgWrap = styled.div`

`;
export const Img = styled.img`
display: flex;
justify-content: flex-start;
margin-right: 0px;
width: 200px;

@media screen and (max-width: 768px) {
justify-content: flex-start;
width: 180px;
}

`;

export const ImgWrap2 = styled.div`
`;
export const Img2 = styled.img`
display: flex;
justify-content: flex-start;
margin-left: 0px;
width: 200px;


@media screen and (max-width: 768px) {
justify-content: flex-start;
width: 150px;
}

`;

export const AboutText = styled.h1`
font-size: 40px;
max-width: 305px;
font-weight: bold;
color: black;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 968px) {
font-size: 32px;
}
`;

export const PopularText = styled.h1`
font-size: 40px;
max-width: 305px;
font-weight: bold;
color: black;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 968px) {
font-size: 32px;
}
`;

export const Othertext = styled.h1`
font-size: 40px;
max-width: 305px;
font-weight: bold;
color: black;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 968px) {
font-size: 32px;
}
`;