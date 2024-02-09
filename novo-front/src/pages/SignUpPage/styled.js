import styled from "styled-components";
import Button from '@mui/material/Button';

export const Title = styled.h1`
    color: #2c2c2c;
    font-size: 33px;
    text-align: center;
    margin: 30px 10px 10px 10px;
  
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    p {
        margin: 10px 0 0 0;
        padding: 0;
        color: #2c2c2c;
        font-size: 14px;
    }
`
export const GradientButton = styled(Button)`
  && {
    /* width:250px; */
    margin-top:60px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    color: white;
    height: 51px;
    border-radius: 27px;
  }
`;
export const SButton = styled.div`
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

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
 
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