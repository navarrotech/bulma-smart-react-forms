/* Copyright © 2025 Navarrotech */
import { LightProps, ChildProps } from '../types';
export type FooterProps = LightProps & ChildProps & {
    as?: keyof JSX.IntrinsicElements;
} & Record<string, unknown>;
export declare function Footer(props: FooterProps): import("react/jsx-runtime").JSX.Element;