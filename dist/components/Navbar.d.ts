/* Copyright © 2024 Navarrotech */
import { ReactNode, ReactElement } from 'react';
import { LightProps, ChildProps } from '../types';
import { NavbarItem } from './NavbarItem';
import { NavbarDivider } from './NavbarDivider';
import { NavbarDropdown } from './NavbarDropdown';
import { ColorfulProps } from '../utility/color';
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