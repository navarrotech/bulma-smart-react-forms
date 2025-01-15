/* Copyright © 2025 Navarrotech */
import { ReactNode } from 'react';
import { StandardProps } from '../types';
import { ButtonProps } from '../elements/Button';
type AsTrigger = {
    trigger: ReactNode;
    onOpen: () => void;
};
type AsShow = {
    trigger?: never;
    onOpen?: never;
};
type ModalProps = (AsTrigger | AsShow) & StandardProps & {
    id: string;
    onClose: () => void;
    children: ReactNode;
    actions?: ButtonProps[];
    show: boolean;
    disableEscapeKeyToClose?: boolean;
};
export declare function Modal(props: ModalProps): import("react/jsx-runtime").JSX.Element;
export {};