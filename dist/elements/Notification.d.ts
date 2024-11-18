/* Copyright © 2024 Navarrotech */
import { ReactNode } from 'react';
import { LightProps, IconDefinition, LanguageKeyOrText } from '../types';
import { ColorfulProps } from '../utility/color';
type RequiredAsString = {
    message: LanguageKeyOrText;
    children?: never;
};
type RequiredAsChildren = {
    message?: never;
    children: ReactNode;
};
type WithDelete = {
    showDelete: true;
    onDelete: () => void;
};
type WithoutDelete = {
    showDelete?: never;
    onDelete?: never;
};
type Props = LightProps & (RequiredAsString | RequiredAsChildren) & (WithDelete | WithoutDelete) & ColorfulProps & {
    id: string;
    icon?: IconDefinition;
} & Record<string, unknown>;
export declare function Notification(props: Props): import("react/jsx-runtime").JSX.Element;
export {};