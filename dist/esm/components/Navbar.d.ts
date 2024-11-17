// Copyright © 2024 Navarrotech

import type { ReactNode, ReactElement } from 'react';
import type { LightProps, ChildProps } from '@/types';
import type { NavbarItem } from './NavbarItem';
import type { NavbarDivider } from './NavbarDivider';
import type { NavbarDropdown } from './NavbarDropdown';
import type { ColorfulProps } from '@/utility/color';
type NavbarItemElement = ReactElement<typeof NavbarItem> | ReactElement<typeof NavbarDivider> | ReactElement<typeof NavbarDropdown> | ReactNode;
type Props = LightProps & ChildProps & ColorfulProps & {
    brand?: NavbarItemElement;
    startItems?: NavbarItemElement[];
    endItems?: NavbarItemElement[];
    transparent?: boolean;
    spaced?: boolean;
    hasShadow?: boolean;
    fixedTop?: boolean;
    fixedBottom?: boolean;
    fixedPaddingTarget?: 'body' | 'html';
} & Record<string, unknown>;
export declare function Navbar(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
