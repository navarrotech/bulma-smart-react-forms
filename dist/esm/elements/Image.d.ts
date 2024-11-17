// Copyright © 2024 Navarrotech

import type { LightProps, AsLeftCenteredRight } from '@/types';
import { ImgHTMLAttributes } from 'react';
type AsPresetSize = {
    size: 16 | 24 | 32 | 48 | 64 | 96 | 128 | 256 | 512;
    width?: never;
    height?: never;
    ratio?: never;
};
type AsCustomSize = {
    width: number | string;
    height: number | string;
    size?: never;
    ratio?: never;
};
type AsRatio = {
    ratio: 'square' | '1by1' | '5by4' | '4by3' | '3by2' | '5by3' | '16by9' | '2by1' | '3by1' | '4by5' | '3by4' | '2by3' | '3by5' | '9by16' | '1by2' | '1by3';
    width?: never;
    height?: never;
    size?: never;
};
export type ImageProps = LightProps & AsLeftCenteredRight & (AsPresetSize | AsCustomSize | AsRatio) & {
    rounded?: boolean;
    src: string;
    alt: string;
    imgProps?: ImgHTMLAttributes<HTMLImageElement>;
} & Record<string, unknown>;
export declare function Image(props: ImageProps): import("react/jsx-runtime").JSX.Element;
export {};
