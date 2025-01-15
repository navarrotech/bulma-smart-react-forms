/* Copyright © 2025 Navarrotech */
import { LightProps, ChildProps, LanguageKeyOrText, IconDefinition, AsSize } from '../types';
import { HelpProps } from './Help';
import { ReactNode } from 'react';
export type ControlProps = LightProps & ChildProps & AsSize & {
    label?: LanguageKeyOrText;
    help?: LanguageKeyOrText | LanguageKeyOrText[] | HelpProps | HelpProps[] | ReactNode;
    icon?: IconDefinition;
    iconRight?: IconDefinition;
    fullwidth?: boolean;
    loading?: boolean;
    expanded?: boolean;
    iconSize?: 'small' | 'medium' | 'large';
} & Record<string, unknown>;
export declare function Control({ children, ...props }: ControlProps): import("react/jsx-runtime").JSX.Element;