/* Copyright © 2025 Navarrotech */
import { Component, ReactNode } from 'react';
import { default as EventEmitter } from 'events';
import { LanguageKeyOrText, BulmaColor, SetTimeout } from '../types';
export type ToastsRootProps = {
    children?: ReactNode;
} & Record<string, unknown>;
export type ToastMessage = {
    id?: string | number;
    color?: BulmaColor;
    title?: LanguageKeyOrText;
    message: LanguageKeyOrText;
    buttons?: ReactNode[];
    hideProgressBar?: boolean;
    hideCloseButton?: boolean;
    durationMs?: number;
};
type ToastRootState = {
    toasts: Toast[];
};
export declare class ToastsRoot extends Component<ToastsRootProps, ToastRootState> {
    static readonly ToastEvents: EventEmitter<{
        'new': [Toast];
        'expiring': [Toast];
        'expired': [Toast];
    }>;
    constructor(props: ToastsRootProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onNewToast;
    private onExpiredToast;
    render(): import("react/jsx-runtime").JSX.Element;
}
export declare class Toast {
    readonly id: string;
    readonly startTime: number;
    readonly expiringTimeout: SetTimeout;
    readonly expireTimeout: SetTimeout;
    readonly options: ToastMessage;
    private callbacks;
    constructor(toast: LanguageKeyOrText | ToastMessage);
    onMounted(callback: () => void): () => void;
    _emitMounted(): void;
    onExpiring(): void;
    onExpired(): void;
    remove(): void;
}
export declare function newToast(message: LanguageKeyOrText | ToastMessage): Toast;
export {};