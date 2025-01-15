/* Copyright © 2025 Navarrotech */
import { LightProps, ChildProps } from '../types';
type Props = LightProps & ChildProps & {
    scrollable?: boolean;
    striped?: boolean;
    narrow?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
    fullwidth?: boolean;
} & Record<string, unknown>;
export declare function Table(props: Props): import("react/jsx-runtime").JSX.Element;
export {};