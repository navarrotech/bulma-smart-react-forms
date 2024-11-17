// Copyright © 2024 Navarrotech

import type { BulmaTextSizes, LanguageKeyOrText } from '@/types';
import type { HTMLAttributes } from 'react';
export type TitlesProps = {
    title: LanguageKeyOrText;
    titleSize?: BulmaTextSizes;
    titleProps?: HTMLAttributes<HTMLElement>;
    subtitle?: LanguageKeyOrText;
    subtitleSize?: BulmaTextSizes;
    subtitleProps?: HTMLAttributes<HTMLElement>;
    spaced?: boolean;
};
export declare function Titles(props: TitlesProps): import("react/jsx-runtime").JSX.Element;
