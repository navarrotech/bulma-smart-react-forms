// Copyright © 2024 Navarrotech

import type { LightProps, ChildProps, AsSize, AsLeftCenteredRight, OptionalNever } from '@/types';
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
