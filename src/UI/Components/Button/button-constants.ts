import { ButtonModesMappedType, ButtonModesKeys, ButtonModesType } from './button-types';

export const BUTTON_MODES: ButtonModesMappedType<ButtonModesKeys, ButtonModesType> = {
    NORMAL: { color: 'backgroundColor', backgroundColor: 'primaryColor' },
    CANCEL: { color: 'backgroundColor', backgroundColor: 'darkGrey' }
};