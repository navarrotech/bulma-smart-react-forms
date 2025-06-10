/* Copyright © 2025 Navarrotech */
import { default as EventEmitter } from 'events';
import { ComponentType } from 'react';
import { LanguageFunction } from './types';
type EventMap = {
    'language': [string];
};
export declare class BulmaFormSettings {
    static translationFunction: LanguageFunction;
    private static language;
    static events: EventEmitter<EventMap>;
    static changeLanguage(newLanguage: string): void;
    static onLanguageChange(callback: (newLang: string) => void): () => void;
    static getCurrentLanguage(): string;
    static CustomErrorBoundary: ComponentType;
    static CustomModalParentElement: HTMLElement;
}
export {};