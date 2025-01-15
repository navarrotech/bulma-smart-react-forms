/* Copyright © 2025 Navarrotech */
import { LightProps, ChildProps } from '../types';
export type LevelItemProps = LightProps & ChildProps & {
    centered?: boolean;
} & Record<string, unknown>;
export declare function LevelItem(props: LevelItemProps): import("react/jsx-runtime").JSX.Element;