// Copyright © 2024 Navarrotech

import { Component } from 'react';
import type { ReactNode } from 'react';
type ErrorProps = {
    id: string;
    children: ReactNode;
};
type ErrorState = {
    tripped: boolean;
};
export declare class ErrorBoundary extends Component<ErrorProps, ErrorState> {
    constructor(props: ErrorProps);
    componentDidCatch(error: Error, errorInfo: any): boolean;
    render(): string | number | boolean | Iterable<ReactNode> | import("react/jsx-runtime").JSX.Element;
}
export {};
