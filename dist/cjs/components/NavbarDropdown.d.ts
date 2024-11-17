// Copyright © 2024 Navarrotech

import type { ReactNode, ReactElement, MouseEventHandler } from 'react';
import type { LightProps, ChildProps, LanguageKeyOrText } from '@/types';
import type { NavbarItem } from './NavbarItem';
import type { NavbarDivider } from './NavbarDivider';
type NavbarItemElement = ReactElement<typeof NavbarItem> | ReactElement<typeof NavbarDivider> | ReactNode;
type Props = LightProps & ChildProps & {
    text: LanguageKeyOrText | ReactNode;
    items?: NavbarItemElement[];
    children?: NavbarItemElement[];
    hoverable?: boolean;
    right?: boolean;
    up?: boolean;
    arrowless?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onOpen?: () => void;
    onClose?: () => void;
} & Record<string, unknown>;
export declare function NavbarDropdown(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
