/* Copyright © 2024 Navarrotech */
import { ReactNode } from 'react';
import { LightProps } from '../types';
import { ImageProps } from '../elements/Image';
import { TitlesProps } from '../elements/Titles';
type Props = LightProps & {
    image?: ImageProps;
    titles?: TitlesProps;
    as?: keyof JSX.IntrinsicElements;
    children?: ReactNode;
} & Record<string, unknown>;
export declare function Media(props: Props): import("react/jsx-runtime").JSX.Element;
export {};