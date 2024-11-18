/* Copyright © 2024 Navarrotech */
import { MouseEventHandler, ReactNode } from 'react';
import { LightProps, ChildProps, IconDefinition, LanguageKeyOrText } from '../types';
type AsChildren = {
    text?: never;
    children: ReactNode;
};
type AsText = {
    text: LanguageKeyOrText;
    children?: never;
};
export type TabProps = LightProps & ChildProps & (AsChildren | AsText) & {
    active?: boolean;
    icon?: IconDefinition;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
} & Record<string, unknown>;
export declare function Tab({ onClick, icon, ...props }: TabProps): import("react/jsx-runtime").JSX.Element;
export {};