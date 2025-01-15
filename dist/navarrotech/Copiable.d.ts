/* Copyright © 2025 Navarrotech */
import { StandardProps, LanguageKeyOrText } from '../types';
import { ReactNode } from 'react';
type asRightClick = {
    useRightClick: boolean;
    useDoubleClick?: never;
};
type asDoubleClick = {
    useDoubleClick: boolean;
    useRightClick?: never;
};
type Props = (asRightClick | asDoubleClick) & StandardProps & {
    text: LanguageKeyOrText;
    onCopied?: () => void;
    children: ReactNode;
    noCursor?: boolean;
} & Record<string, unknown>;
export declare function Copiable(props: Props): import("react/jsx-runtime").JSX.Element;
export {};