// Copyright © 2024 Navarrotech

import type { LightProps, ChildProps, AsSize } from '@/types';
import type { ColorfulProps } from '@/utility/color';
type WithDelete = {
    showDelete: true;
    onDelete: () => void;
};
type WithoutDelete = {
    showDelete?: never;
    onDelete?: never;
};
type Props = LightProps & ChildProps & (WithDelete | WithoutDelete) & AsSize & ColorfulProps & {
    header?: string;
} & Record<string, unknown>;
export declare function Message(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
