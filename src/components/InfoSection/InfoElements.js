import styled from "styled-components";

export const InfoContainer = styled.div`
background: white;

@media screen and (max-width: 968px) {
      padding: 100px 0;
}
`;

export const InfoWrapper = styled.div`
z-index: 1;
height: 490px;
width: 100%;
max-width: 1040px;
margin-right: auto;
margin-left: auto;
margin-top: 200px;
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
flex-basis: 50%;
min-width: 300px;

@media screen and (max-width: 968px) {
flex-basis: 40%;
min-width: 50px;
}

@media screen and (max-width: 568px) {
flex-basis: 90%;
min-width: 50px;
}
`;

export const Column2 = styled.div`
flex-basis: 50%;
min-width: 300px;
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`;

export const TopLine = styled.p`
margin-bottom: -30px;
font-size: 48px;
max-width: 305px;
line-height: 1.1;
font-weight: bold;
color: #006BFF;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 568px) {
font-size: 42px;
}
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
max-width: 305px;
line-height: 1.1;
font-weight: bold;
color: black;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 568px) {
font-size: 32px;
}
`;

export const Subtitle = styled.p`
max-width: 400px;
color: #1B4F60;
margin-bottom: 10px;
font-size: 18px;
line-height: 24px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-end;
`;
export const ImgWrap = styled.div`
max-width: 605px;
height: 100%;
margin-left: 100px;
`;
export const Img = styled.img`
display: flex;
justify-content: flex-end;
width: 100%;

@media screen and (max-width: 768px) {
width: 100%;
}
`;

export const BtnText = styled.p`
max-width: 400px;
color: #959595;
margin-bottom: 10px;
font-size: 18px;
line-height: 24px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Signin = styled.p`
max-width: 400px;
color: #006BFF;
cursor: pointer;
margin-top: 1px;
font-size: 18px;
font-weight: bolder;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;