// Copyright © 2024 Navarrotech

import type { LanguageFunction, AsLeftCenteredRight, AsSize } from '../types';
type UseTranslationReturn = {
    translate: LanguageFunction;
    language: string;
};
export declare function useTranslation(): UseTranslationReturn;
export declare function useHotkey(key: string, callback: () => void, deps?: any[], disabled?: boolean): void;
export declare function useLeftCenteredRight(props: AsLeftCenteredRight): string;
export declare function useSize(props: AsSize, prefix?: string): string;
export {};
