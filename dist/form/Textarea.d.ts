/* Copyright © 2025 Navarrotech */
import { InputProps } from './Input';
export type TextareaProps = Exclude<InputProps, 'textarea'> & {
    rows: string | number;
    cols: string | number;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
};
export declare function Textarea(props: TextareaProps): import("react/jsx-runtime").JSX.Element;