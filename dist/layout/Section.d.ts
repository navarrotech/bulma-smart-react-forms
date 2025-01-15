/* Copyright © 2025 Navarrotech */
import { LightProps, ChildProps, AsSize } from '../types';
export type SectionProps = LightProps & ChildProps & AsSize & {
    as?: keyof JSX.IntrinsicElements;
} & Record<string, unknown>;
export declare function Section(props: SectionProps): import("react/jsx-runtime").JSX.Element;