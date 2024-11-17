// Copyright © 2024 Navarrotech

import type { ChildProps, LightProps } from '@/types';
type Props = LightProps & ChildProps & {
    href?: string;
    active?: boolean;
    text?: string;
    anchorProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
};
export declare function BreadcrumbItem(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
