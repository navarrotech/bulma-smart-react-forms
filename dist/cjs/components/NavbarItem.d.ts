// Copyright © 2024 Navarrotech

import type { MouseEventHandler } from 'react';
import type { LightProps, ChildProps } from '@/types';
export type NavbarItemProps = LightProps & ChildProps & {
    as?: keyof JSX.IntrinsicElements;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    selected?: boolean;
    href?: string;
} & Record<string, unknown>;
export declare function NavbarItem(props: NavbarItemProps): import("react/jsx-runtime").JSX.Element;
