/* Copyright © 2025 Navarrotech */
import { LanguageKeyOrText } from '../types';
import { ColorfulProps } from '../utility/color';
export type HelpProps = {
    text: LanguageKeyOrText;
    title?: LanguageKeyOrText;
    className?: string;
    centered?: boolean;
    right?: boolean;
} & ColorfulProps;
export declare function Help(props: HelpProps): import("react/jsx-runtime").JSX.Element;