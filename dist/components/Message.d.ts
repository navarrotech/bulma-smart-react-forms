/* Copyright © 2025 Navarrotech */
import { LightProps, ChildProps, AsSize } from '../types';
import { ColorfulProps } from '../utility/color';
type WithDelete = {
    showDelete: boolean;
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