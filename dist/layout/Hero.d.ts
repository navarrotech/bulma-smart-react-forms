/* Copyright © 2025 Navarrotech */
import { LightProps, ChildProps } from '../types';
import { ColorfulProps } from '../utility/color';
import { ReactNode } from 'react';
type AsSmall = {
    small?: true;
    medium?: never;
    large?: never;
    halfHeight?: never;
    fullHeight?: never;
    fullHeightWithNavbar?: never;
};
type AsMedium = {
    small?: never;
    medium?: true;
    large?: never;
    halfHeight?: never;
    fullHeight?: never;
    fullHeightWithNavbar?: never;
};
type AsLarge = {
    small?: never;
    medium?: never;
    large?: true;
    halfHeight?: never;
    fullHeight?: never;
    fullHeightWithNavbar?: never;
};
type AsHalfHeight = {
    small?: never;
    medium?: never;
    large?: never;
    halfHeight?: true;
    fullHeight?: never;
    fullHeightWithNavbar?: never;
};
type AsFullHeight = {
    small?: never;
    medium?: never;
    large?: never;
    halfHeight?: never;
    fullHeight?: true;
    fullHeightWithNavbar?: never;
};
type AsFullHeightWithNavbar = {
    small?: never;
    medium?: never;
    large?: never;
    halfHeight?: never;
    fullHeight?: never;
    fullHeightWithNavbar?: true;
};
type AsSize = (AsSmall | AsMedium | AsLarge | AsHalfHeight | AsFullHeight | AsFullHeightWithNavbar);
export type HeroProps = LightProps & ChildProps & ColorfulProps & AsSize & {
    as?: keyof JSX.IntrinsicElements;
    header?: ReactNode;
    footer?: ReactNode;
} & Record<string, unknown>;
export declare function Hero(props: HeroProps): import("react/jsx-runtime").JSX.Element;
export {};