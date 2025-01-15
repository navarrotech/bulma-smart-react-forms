/* Copyright © 2025 Navarrotech */
import { MouseEvent, ReactNode } from 'react';
import { LightProps, AsLeftCenteredRight, AsSize } from '../types';
import { TabProps } from './Tab';
type Item = TabProps & {
    value?: string;
};
type TabChangeEvent = {
    index: number;
    value: string;
    item: Item;
    event: MouseEvent<HTMLAnchorElement>;
};
type AsItems = {
    items?: Item[];
    onTabChange?: (event: TabChangeEvent) => void;
    defaultActive?: number | string;
    children?: never;
};
type AsChildren = {
    items?: never;
    onTabChange?: never;
    defaultActive?: never;
    children: ReactNode;
};
type Props = LightProps & AsLeftCenteredRight & AsSize & (AsItems | AsChildren) & {
    boxed?: boolean;
    toggle?: boolean;
    rounded?: boolean;
    fullwidth?: boolean;
} & Record<string, unknown>;
export declare function Tabs(props: Props): import("react/jsx-runtime").JSX.Element;
export {};