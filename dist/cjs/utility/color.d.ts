// Copyright © 2024 Navarrotech

import { type CSSProperties } from 'react';
import type { BulmaColor, ColorfulType } from '@/types';
type AsExact = {
    color?: never;
    primary?: boolean;
    secondary?: boolean;
    warning?: boolean;
    danger?: boolean;
    success?: boolean;
    info?: boolean;
    link?: boolean;
    white?: boolean;
    black?: boolean;
    light?: boolean;
    dark?: boolean;
};
type asColor = {
    color: BulmaColor | string;
    primary?: never;
    secondary?: never;
    warning?: never;
    danger?: never;
    success?: never;
    info?: never;
    link?: never;
    white?: never;
    black?: never;
    light?: never;
    dark?: never;
};
export type ColorfulProps = (asColor | AsExact) & {
    className?: string;
    style?: CSSProperties;
};
export declare function useColorful(props: ColorfulProps): ColorfulType;
export {};
