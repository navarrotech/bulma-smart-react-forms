/* Copyright © 2025 Navarrotech */
import { Component, ReactNode } from 'react';
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