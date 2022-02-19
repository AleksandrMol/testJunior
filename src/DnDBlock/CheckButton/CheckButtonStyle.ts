import styled from 'styled-components';
import { RobotoFont } from '../../GlobalStyles';

export const CheckButtonStyle = styled.button`
    width: 470px;
    height: 68px;

    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000;

    border-radius: 88px;
    background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
    box-shadow: -2px -4px 8px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);
    
    &:disabled{
        color: #7a7a7a;
        cursor: default;
    }
    &:active{
        box-shadow: inset -2px -4px 12px #FFFFFF, inset 2px 4px 8px rgba(0, 0, 0, 0.2);
    }
`;
export const TextWrong = styled.div`
    margin-bottom: 30px;

    font-size: 24px;
    line-height: 28px;
    color: #FF0000;
    text-align: center;

    text-shadow: -1px -2px 2px #FFFFFF, 1px 2px 2px rgba(91, 13, 13, 0.5);
`;
export const TextButtonContainer = styled.div`
    margin-top: 80px;
`;