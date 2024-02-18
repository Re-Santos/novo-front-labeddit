import styled from "styled-components";
import Button from '@mui/material/Button';

export const PostField = styled.div`
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    border-bottom: solid 1px #887ED8;
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