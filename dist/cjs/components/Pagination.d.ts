// Copyright © 2024 Navarrotech

import type { LightProps, AsSize, AsLeftCenteredRight, LanguageKeyOrText } from '@/types';
type TranslationCallbackWithPage = (page: number) => string;
type PageInformation = {
    current: number | string;
    total: number | string;
};
type CountInformation = {
    skip: number | string;
    total: number | string;
    countPerPage: number | string;
};
type AsPageInformation = {
    page: PageInformation;
    count?: never;
    onPageChange: (newPage: number) => void;
};
type AsCountInformation = {
    page?: never;
    count: CountInformation;
    onPageChange: (newSkip: number) => void;
};
type Props = LightProps & AsSize & AsLeftCenteredRight & (AsPageInformation | AsCountInformation) & {
    id: string;
    rounded?: boolean;
    hideEllipsis?: boolean;
    hideFirstLast?: boolean;
    hidePrevNext?: boolean;
    showEvenIfOnlyOnePage?: boolean;
    disabled?: boolean;
    nextText?: LanguageKeyOrText | TranslationCallbackWithPage;
    prevText?: LanguageKeyOrText | TranslationCallbackWithPage;
    nextTitle?: LanguageKeyOrText | TranslationCallbackWithPage;
    prevTitle?: LanguageKeyOrText | TranslationCallbackWithPage;
    currentPageTitle?: LanguageKeyOrText | TranslationCallbackWithPage;
    firstPageTitle?: LanguageKeyOrText | TranslationCallbackWithPage;
    lastPageTitle?: LanguageKeyOrText | TranslationCallbackWithPage;
} & Record<string, unknown>;
export declare function Pagination(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
