/* Copyright © 2024 Navarrotech */
import { ChildProps, LightProps } from '../types';
type Props = LightProps & ChildProps & Record<string, unknown>;
export declare function Box(props: Props): import("react/jsx-runtime").JSX.Element;
export {};