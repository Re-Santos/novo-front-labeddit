import styled from "styled-components";
import Button from '@mui/material/Button';

export const LogoLogin = styled.img`
    height: 150px;
    width: 150px;
    @media (min-width: 720px) {
        height: 200px;
        width: 200px;
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    h1 {
        margin: 0;
        padding: 0;
        margin: 10px 0 0 0;
        color:#EDEDED;
        @media (min-width: 720px) {
        font-size: 40px;
        }
    }
    p {
        margin: 10px 0 0 0;
        margin-bottom:30px;
        padding: 0;
        color:#2c2c2c ;
        @media (min-width: 720px) {
        font-size: 20px;
        }
    }
`

export const LButton = styled.div`
    border-top: solid 1px #FE7E02;
    padding: 20px 10px 0px 10px;
    margin: 30px;
    width: 78%;
    bottom: 10;
    left: 0;
    @media (min-width: 720px) {
        margin: 15px auto;
        position: relative;
        }
`
export const GradientButton = styled(Button)`
  && {
    margin-top:60px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    color: white;
    height: 51px;
    border-radius: 27px;
  }
`;

export const ContaButton =styled(Button)`
&&{
    border-color:#FE7E02;
    color:#FE7E02;
    height: 51px;
    border-radius: 27px;
}

`;
export const FooterLineImageContainer = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterLineImage = styled.img`
  width: 134px;
  height: 5px;
  border-radius: 10px;
`;



