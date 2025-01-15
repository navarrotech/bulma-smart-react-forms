/* Copyright © 2025 Navarrotech */
import { LightProps, ChildProps } from '../types';
type AsFluid = {
    fluid: true;
    widescreen?: never;
    maxWidescreen?: never;
    fullhd?: never;
    desktop?: never;
    tablet?: never;
};
type AsWidescreen = {
    fluid?: never;
    widescreen: true;
    maxWidescreen?: never;
    fullhd?: never;
    desktop?: never;
    tablet?: never;
};
type AsMaxWidescreen = {
    fluid?: never;
    widescreen?: never;
    maxWidescreen: true;
    fullhd?: never;
    desktop?: never;
    tablet?: never;
};
type AsFullHD = {
    fluid?: never;
    widescreen?: never;
    maxWidescreen?: never;
    fullhd: true;
    desktop?: never;
    tablet?: never;
};
type AsDesktop = {
    fluid?: never;
    widescreen?: never;
    maxWidescreen?: never;
    fullhd?: never;
    desktop: true;
    tablet?: never;
};
type AsTablet = {
    fluid?: never;
    widescreen?: never;
    maxWidescreen?: never;
    fullhd?: never;
    desktop?: never;
    tablet: true;
};
type AsASize = AsFluid | AsWidescreen | AsMaxWidescreen | AsFullHD | AsDesktop | AsTablet;
export type ContainerProps = LightProps & ChildProps & AsASize & {} & Record<string, unknown>;
export declare function Container(props: ContainerProps): import("react/jsx-runtime").JSX.Element;
export {};