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
max-width: 1040px;
margin-right: auto;
margin-left: auto;
margin-top: 40px;

@media screen and (max-width: 968px) {
      margin-top: 0px;
      height: 500px;
}

@media screen and (max-width: 468px) {
      margin-top: 0px;
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
flex-basis: 50%;
min-width: 300px;

@media screen and (max-width: 968px) {
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
padding-bottom: 20px;
`;

export const TopLine = styled.p`
margin-bottom: -20px;
font-size: 20px;
max-width: 305px;
line-height: 1.1;
font-weight: 400;
color: #8D8D8D;
font-weight: bolder;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 468px) {
font-size: 15px;
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

@media screen and (max-width: 968px) {
font-size: 32px;
}
`;

export const Subtitle = styled.p`
max-width: 400px;
font-weight: 400;
color: #8D8D8D;
font-weight: bolder;
margin-bottom: 10px;
font-size: 18px;
line-height: 24px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 468px) {
font-size: 15px;
}
`;

export const ImgWrap = styled.div`
${'' /* max-width: 605px;
height: 100%;
margin-left: 100px; */}
`;
export const Img = styled.img`
display: flex;
justify-content: flex-start;
margin-left: 0px;
width: 500px;

@media screen and (max-width: 968px) {
justify-content: flex-start;
margin-left: 0px;
width: 300px;

@media screen and (max-width: 768px) {
justify-content: flex-start;
width: 250px;
}

}
`;

