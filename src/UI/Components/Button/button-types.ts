import { ReactNode } from 'react';
import { ColorFromTheme } from '../../../shared/shared-types';

export interface ButtonProps {
    mode?: ButtonModesKeys;
    actionFn: () => void;
    children: ReactNode;
    id?: string; //* For future QA usage
}

export interface ButtonStyleProps {
    mode: ButtonModesKeys;
}

export type ButtonModesKeys = 'NORMAL' | 'CANCEL'

export type ButtonModesType = { color: ColorFromTheme, backgroundColor: ColorFromTheme };

export type ButtonModesMappedType<Key extends keyof any, ValueType> = {
    [K in Key]: ValueType;
};
