/* Copyright © 2025 Navarrotech */
import { HTMLInputAutoCompleteAttribute, KeyboardEvent, MouseEvent } from 'react';
import { IconDefinition, InputTypeAttribute, LanguageKeyOrText, StandardProps, AsSize } from '../types';
import { ColorfulProps } from '../utility/color';
type OnChangeValue<T = string> = {
    value: T;
};
export type OnChangeAsString = {
    type?: Exclude<InputTypeAttribute, 'number'> | never;
    value?: string;
    onChange?: (value: OnChangeValue, event: MouseEvent<HTMLInputElement>) => void;
};
export type OnChangeAsNumber = {
    type?: 'number';
    value?: number;
    onChange?: (value: OnChangeValue<number>, event: MouseEvent<HTMLInputElement>) => void;
};
export type InputProps = Omit<StandardProps, 'onChange'> & ColorfulProps & AsSize & (OnChangeAsString | OnChangeAsNumber) & {
    id: string;
    textarea?: boolean;
    disabled?: boolean;
    active?: boolean;
    hovered?: boolean;
    focused?: boolean;
    loading?: boolean;
    readonly?: boolean;
    static?: boolean;
    name?: LanguageKeyOrText;
    placeholder?: LanguageKeyOrText;
    icon?: IconDefinition;
    iconRight?: IconDefinition;
    label?: LanguageKeyOrText;
    help?: LanguageKeyOrText;
    onEnter?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onEscape?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
    autoFocus?: boolean;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    fullwidth?: boolean;
    className?: string;
} & Record<string, unknown>;
export declare function Input(props: InputProps): import("react/jsx-runtime").JSX.Element;
export {};