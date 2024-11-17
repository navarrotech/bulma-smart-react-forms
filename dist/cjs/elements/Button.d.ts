// Copyright © 2024 Navarrotech

import type { ReactNode } from 'react';
import type { AsSize, IconDefinition, StandardProps } from '@/types';
import type { ColorfulProps } from '@/utility/color';
export type ButtonProps = AsSize & StandardProps & ColorfulProps & {
    id: string;
    children: ReactNode;
    icon?: IconDefinition;
    iconRight?: IconDefinition;
    as?: keyof JSX.IntrinsicElements;
    static?: boolean;
    focused?: boolean;
    active?: boolean;
    inverted?: boolean;
    rounded?: boolean;
    outlined?: boolean;
    loading?: boolean;
    selected?: boolean;
} & Record<string, unknown>;
export declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
