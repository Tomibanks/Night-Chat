import styled from "styled-components";

export const BoxContainer = styled.div`
background: white;
margin: 70px 0;
@media screen and (max-width: 968px) {
}
`;

export const BoxWrapper = styled.div`
max-width: 1080px;
margin: auto;
padding-left: 30px;
padding-right: 30px;
@media screen and (max-width: 968px) {   
}
`;

export const Heading = styled.h1`
text-align: center;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 20px;
text-align: center;
margin-bottom: 50px;
color: #006BFF;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media screen and (max-width: 968px) {  
}
`;

export const Tcontainer = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
@media screen and (max-width: 968px) {   
}
`;

export const Tmcontainer = styled.div`
flex-basis: 32%;
min-width: 25px;
padding: 35px 10px 35px 10px;
margin-bottom: 50px;
background: #FFFFFF;
box-shadow: 0px 4px 13px 4px rgba(116, 146, 255, 0.25);
border-radius: 16px;
@media screen and (max-width: 968px) {   
      flex-basis: 70%;
}

@media screen and (max-width: 468px) {   
      flex-basis: 90%;
}
`;

export const Title = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 20px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: #000000;
margin-left: 20px;
@media screen and (max-width: 968px) {   
}
`;

export const Paragraph = styled.p`
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 25px;
color: #959595;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
margin-left: 20px;
@media screen and (max-width: 968px) {   
}
`;

export const Heading2 = styled.h1`
text-align: center;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 20px;
text-align: center;
margin-top: 50px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media screen and (max-width: 968px) {  
}
`;