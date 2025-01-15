/* Copyright © 2025 Navarrotech */
import { ChildProps, LightProps } from '../types';
import { HTMLAttributes } from 'react';
type Props = LightProps & ChildProps & Record<string, unknown> & HTMLAttributes<HTMLDivElement>;
export declare function Block(props: Props): import("react/jsx-runtime").JSX.Element;
export {};