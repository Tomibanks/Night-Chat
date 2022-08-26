import styled from "styled-components";

export const InfoContainer = styled.div`
background: white;

@media screen and (max-width: 968px) {
      padding: 0px 0;
}
`;

export const InfoWrapper = styled.div`
z-index: 1;
height: 750px;
width: 100%;
max-width: 1040px;
margin-right: auto;
margin-left: auto;
margin-top: 40px;

@media screen and (max-width: 968px) {
      margin-top: 0px;
}

@media screen and (max-width: 468px) {
      height: 700px;
      margin-top: -70px;
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

@media screen and (max-width: 968px) {

}
`;

export const TopBoy = styled.p`
margin-bottom: 0px;
font-size: 20px;
max-width: 305px;
line-height: 1.1;
font-weight: 700;
color: #575757;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 468px) {
font-size: 25px;
}
`;

export const TopLine = styled.p`
margin-bottom: -20px;
font-size: 20px;
max-width: 305px;
line-height: 1.1;
font-weight: 700;
color: #8D8D8D;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 468px) {
font-size: 14px;
}
`;

export const Heading = styled.h1`
margin-bottom: 54px;
margin-top: 54px;
font-size: 26px;
max-width: 305px;
line-height: 1.1;
font-weight: 700;
color: #013071;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 468px) {
font-size: 20px;
margin-bottom: 10px;
}
`;

export const Subtitle = styled.p`
max-width: 400px;
font-weight: 700;
color: black;
margin-bottom: 10px;
font-size: 18px;
line-height: 24px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 468px) {
      margin-bottom: 10px;
}
`;

export const Subtitle2 = styled.p`
max-width: 400px;
font-weight: bold;
color: #8D8D8D;
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
width: 450px;

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

