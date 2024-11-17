// Copyright © 2024 Navarrotech

import type { ComponentType } from 'react';
import type { LanguageFunction } from './types';
export declare class BulmaFormSettings {
    static translationFunction: LanguageFunction;
    private static language;
    private static events;
    static changeLanguage(newLanguage: string): void;
    static onLanguageChange(callback: (newLang: string) => void): () => void;
    static getCurrentLanguage(): string;
    static CustomErrorBoundary: ComponentType;
    static CustomModalParentElement: HTMLElement;
}
