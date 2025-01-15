/* Copyright © 2025 Navarrotech */
import { ComponentType } from 'react';
import { LanguageFunction } from './types';
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