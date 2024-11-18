/* Copyright © 2024 Navarrotech */
import { ReactNode, CSSProperties, MouseEventHandler, HTMLAttributes } from 'react';
import { AnyObjectSchema } from 'yup';
import { Yup } from './utility/validators';
export type BulmaColor = 'primary' | 'secondary' | 'link' | 'info' | 'success' | 'warning' | 'danger' | 'white' | 'black' | 'text' | 'ghost' | string;
export type BulmaTextSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type LanguageKeyOrText = string;
export type LanguageFunction = (keyOrText: LanguageKeyOrText) => string;
export type OptionalNever<T> = {
    [K in keyof T]?: T[K] | never;
};
export type ValidatorProp = ((yup: Yup) => AnyObjectSchema) | AnyObjectSchema | undefined;
export type IconDefinition = string | ReactNode;
export type ChildProps = {
    children: ReactNode;
};
export type LightProps<RootType = HTMLAttributes<HTMLElement>> = {
    id?: string;
    title?: LanguageKeyOrText;
    className?: string;
    style?: CSSProperties;
} & RootType;
export type StandardProps = LightProps & {
    onClick?: MouseEventHandler<HTMLElement>;
    fullwidth?: boolean;
    disabled?: boolean;
};
export type ColorfulType = {
    className: string;
    style: CSSProperties;
};
type AsSmall = {
    small?: true;
    medium?: never;
    large?: never;
};
type AsMedium = {
    small?: never;
    medium?: true;
    large?: never;
};
type AsLarge = {
    small?: never;
    medium?: never;
    large?: true;
};
export type AsSize = (AsSmall | AsMedium | AsLarge);
type AsLeft = {
    centered?: never;
    left?: true;
    right?: never;
};
type AsCentered = {
    centered: true;
    left?: never;
    right?: never;
};
type AsRight = {
    centered?: never;
    left?: never;
    right: true;
};
export type AsLeftCenteredRight = (AsLeft | AsCentered | AsRight);
export {};