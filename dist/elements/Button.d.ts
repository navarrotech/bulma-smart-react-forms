/* Copyright © 2025 Navarrotech */
import { ReactNode } from 'react';
import { AsSize, IconDefinition, LanguageKeyOrText, StandardProps } from '../types';
import { ColorfulProps } from '../utility/color';
type AsText = {
    text: LanguageKeyOrText;
    children?: never;
};
type AsChildren = {
    text?: never;
    children: ReactNode;
};
export type ButtonProps = AsSize & StandardProps & ColorfulProps & (AsText | AsChildren) & {
    id: string;
    icon?: IconDefinition;
    iconRight?: IconDefinition;
    as?: keyof JSX.IntrinsicElements;
    static?: boolean;
    focused?: boolean;
    active?: boolean;
    inverted?: boolean;
    rounded?: boolean;
    outlined?: boolean;
    loading?: boolean;
    selected?: boolean;
} & Record<string, unknown>;
export declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};