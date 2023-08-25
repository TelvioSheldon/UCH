import styled from 'styled-components';
import { BUTTON_MODES } from './button-constants';
import { ButtonStyleProps } from './button-types';


const ButtonComponent = styled.button<ButtonStyleProps>`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: -webkit-fill-available;
        border-radius: 6px;
        padding: 12px 16px;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        outline: none;
        border: transparent;
        color: ${({ mode, theme }) => theme.palette[BUTTON_MODES[mode].color]};
        background-color: ${({ mode, theme }) => theme.palette[BUTTON_MODES[mode].backgroundColor]};
        cursor: pointer;
`;


export default ButtonComponent;