/* Copyright © 2025 Navarrotech */
import { LightProps, ChildProps, AsSize, AsLeftCenteredRight, OptionalNever } from '../types';
type Props = (({
    singleLine?: false;
} & AsLeftCenteredRight & AsSize) | ({
    singleLine: true;
} & OptionalNever<AsLeftCenteredRight> & OptionalNever<AsSize>)) & LightProps & ChildProps & {
    disabled?: boolean;
    fullwidth?: boolean;
    hasAddons?: boolean;
} & Record<string, unknown>;
export declare function Buttons(props: Props): import("react/jsx-runtime").JSX.Element;
export {};