/* Copyright © 2025 Navarrotech */
import { ChildProps } from '../types';
export type PromptRootProps = ChildProps & {};
export type PromptSettings = {
    title?: LanguageKeyOrText;
    description?: LanguageKeyOrText;
    onCancelled?: () => void;
};
export declare function PromptRoot(props: PromptRootProps): import("react/jsx-runtime").JSX.Element;