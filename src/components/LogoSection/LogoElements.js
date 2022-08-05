import styled from "styled-components";

export const LogoContainer = styled.div`
background: #F6F6F6;
width: 100%;
height: 50vh;
display: grid;
place-items: center;
margin-top: 30px;

@media screen and (max-width: 968px) {
      height: 130vh;
      margin-top: 130px;
}
`;

export const LogoWrapper = styled.div`
width: 100%;
margin-top: 50px;
height: auto;
text-align: center;
@media screen and (max-width: 968px) {
     
}
`;

export const Heading = styled.div`
font-size: 30px;
color: black;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bold;

@media screen and (max-width: 968px) {
     
}
`;

export const ImageContainer = styled.div`
padding: 0;
margin: 0;

@media screen and (max-width: 968px) {
     
}
`;

export const ImageItem = styled.div`
list-style: none;
display: inline-block;
width: 150px;
height: 100px;

@media screen and (max-width: 968px) {
     display: block;
     text-align: center;
}
`;