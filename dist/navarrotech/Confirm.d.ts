/* Copyright © 2025 Navarrotech */
import { Component, ReactNode } from 'react';
import { IconDefinition, LanguageKeyOrText } from '../types';
import { ButtonProps } from '../elements/Button';
export type ConfirmRootProps = {
    id?: string;
    defaultTitle?: LanguageKeyOrText;
    cancelButtonId?: string;
    defaultCancelButtonText?: LanguageKeyOrText;
    cancelButtonIcon?: IconDefinition;
    confirmButtonId?: string;
    defaultConfirmButtonText?: LanguageKeyOrText;
    confirmButtonIcon?: IconDefinition;
    deleteButtonId?: string;
    defaultDeleteButtonText?: LanguageKeyOrText;
    deleteButtonIcon?: IconDefinition;
    alwaysHideCancelButton?: boolean;
    children?: ReactNode;
};
export type ConfirmOptions = {
    isDelete?: boolean;
    title?: LanguageKeyOrText;
    confirmText?: LanguageKeyOrText;
    text: LanguageKeyOrText | ReactNode;
    hideCancelButton?: boolean;
    successCallback?: () => Promise<void>;
    cancelCallback?: () => Promise<void>;
    customButtons?: ButtonProps[];
} & Record<string, unknown>;
type ConfirmRootState = {
    confirm: ConfirmOptions | null;
};
export declare class ConfirmRoot extends Component<ConfirmRootProps, ConfirmRootState> {
    private static ConfirmEvents;
    static cancelAll(): void;
    static confirm(options: ConfirmOptions): void;
    constructor(props: ConfirmRootProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleNewConfirmEvent;
    private handleCancelEvent;
    private getButtons;
    private onClose;
    private onConfirm;
    render(): import("react/jsx-runtime").JSX.Element;
}
export declare function confirm(message: LanguageKeyOrText | ConfirmOptions, successCallback?: () => Promise<void>, cancelCallback?: () => Promise<void>): Promise<unknown>;
export {};