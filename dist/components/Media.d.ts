/* Copyright © 2025 Navarrotech */
import { ChildProps, LightProps } from '../types';
import { ImageProps } from '../elements/Image';
import { TitlesProps } from '../elements/Titles';
type Props = LightProps & ChildProps & {
    image?: ImageProps;
    titles?: TitlesProps;
    as?: keyof JSX.IntrinsicElements;
} & Record<string, unknown>;
export declare function Media(props: Props): import("react/jsx-runtime").JSX.Element;
export {};