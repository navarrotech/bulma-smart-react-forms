/* Copyright © 2025 Navarrotech */
import { Component } from 'react';
import { LanguageFunction, LanguageKeyOrText } from '../types';
type UseTranslationReturn = {
    translate: LanguageFunction;
    language: string;
};
export declare function useTranslation(): UseTranslationReturn;
export declare class TranslationComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {
    private translationSubscription;
    constructor(props: P);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onLanguageChange;
    translate(keyOrText: LanguageKeyOrText): string;
}
export {};