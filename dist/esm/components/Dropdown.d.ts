// Copyright © 2024 Navarrotech

import type { ReactNode } from 'react';
import type { LanguageFunction, StandardProps } from '@/types';
export type DropdownTriggerProps = {
    translate: LanguageFunction;
    isActive: boolean;
};
type Props = StandardProps & {
    trigger: ReactNode | ((props: DropdownTriggerProps) => ReactNode);
    children: ReactNode;
    forceActive?: boolean;
    forceClosed?: boolean;
    onOpened?: () => void;
    onClosed?: () => void;
    hoverable?: boolean;
    right?: boolean;
    up?: boolean;
    triggerClassname?: string;
    menuClassname?: string;
    contentClassname?: string;
} & Record<string, unknown>;
export declare function Dropdown(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
