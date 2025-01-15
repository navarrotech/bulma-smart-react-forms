/* Copyright © 2025 Navarrotech */
import { LightProps } from '../types';
import { ReactNode } from 'react';
type LevelProps = LightProps & {
    mobile?: boolean;
    left?: boolean | ReactNode;
    right?: boolean | ReactNode;
    as?: keyof JSX.IntrinsicElements;
    children?: ReactNode;
    items?: ReactNode[];
} & Record<string, unknown>;
export declare function Level(props: LevelProps): import("react/jsx-runtime").JSX.Element;
export {};