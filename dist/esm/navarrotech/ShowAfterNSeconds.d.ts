// Copyright © 2024 Navarrotech

import type { ReactNode } from 'react';
type Props = {
    children: ReactNode;
    time?: number;
};
export declare function ShowAfterNSeconds({ children, time, }: Props): string | number | boolean | Iterable<ReactNode> | import("react/jsx-runtime").JSX.Element;
export {};
