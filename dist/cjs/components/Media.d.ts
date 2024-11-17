// Copyright © 2024 Navarrotech

import type { ReactNode } from 'react';
import type { LightProps } from '@/types';
import type { ImageProps } from '@/elements/Image';
import type { TitlesProps } from '@/elements/Titles';
type Props = LightProps & {
    image?: ImageProps;
    titles?: TitlesProps;
    as?: keyof JSX.IntrinsicElements;
    children?: ReactNode;
} & Record<string, unknown>;
export declare function Media(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
