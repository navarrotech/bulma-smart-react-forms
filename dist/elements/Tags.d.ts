/* Copyright © 2025 Navarrotech */
import { LightProps, ChildProps, AsSize, OptionalNever } from '../types';
type Props = (({
    singleLine?: false;
} & AsSize) | ({
    singleLine: true;
} & OptionalNever<AsSize>)) & LightProps & ChildProps & {
    disabled?: boolean;
    fullwidth?: boolean;
    hasAddons?: boolean;
} & Record<string, unknown>;
export declare function Tags(props: Props): import("react/jsx-runtime").JSX.Element;
export {};