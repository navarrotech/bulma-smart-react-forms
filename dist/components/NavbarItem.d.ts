/* Copyright © 2025 Navarrotech */
import { MouseEventHandler } from 'react';
import { LightProps, ChildProps } from '../types';
export type NavbarItemProps = LightProps & ChildProps & {
    as?: keyof JSX.IntrinsicElements;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    selected?: boolean;
    href?: string;
} & Record<string, unknown>;
export declare function NavbarItem(props: NavbarItemProps): import("react/jsx-runtime").JSX.Element;