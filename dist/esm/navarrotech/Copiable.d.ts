// Copyright © 2024 Navarrotech

import type { StandardProps, LanguageKeyOrText } from '@/types';
import type { ReactNode } from 'react';
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
