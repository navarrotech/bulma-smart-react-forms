/* Copyright © 2025 Navarrotech */
import { AsSize, LanguageKeyOrText, LightProps } from '../types';
import { ColorfulProps } from '../utility/color';
import { ChangeEvent, MouseEvent } from 'react';
export type Option = {
    id?: string;
    key?: string | number;
    value: string;
    text?: LanguageKeyOrText;
    optGroup?: string;
};
type AsValue = {
    value: string;
    defaultValue?: never;
};
type AsDefaultvalue = {
    value?: never;
    defaultValue: string;
};
export type SelectProps = LightProps & ColorfulProps & AsSize & (AsValue | AsDefaultvalue) & {
    id: string;
    options: Option[];
    label?: LanguageKeyOrText;
    icon?: string;
    iconRight?: string;
    size?: string | number;
    onClick?: MouseEvent<HTMLButtonElement>;
    onChange?: (value: Option, event: ChangeEvent<HTMLSelectElement>) => void;
    onOpen?: () => void;
    onClose?: () => void;
    multiple?: boolean;
    fullwidth?: boolean;
    disabled?: boolean;
    rounded?: boolean;
    active?: boolean;
    hovered?: boolean;
    focused?: boolean;
    loading?: boolean;
} & Record<string, unknown>;
export declare function Select(props: SelectProps): import("react/jsx-runtime").JSX.Element;
export {};