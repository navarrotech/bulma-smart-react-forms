// Copyright © 2024 Navarrotech

import type { IconDefinition, LanguageKeyOrText, LightProps } from '@/types';
import type { ImageProps } from '@/elements/Image';
import type { ReactNode } from 'react';
type FooterButtonProps = LightProps & {
    text: LanguageKeyOrText | ReactNode;
    onClick: () => void;
} & Record<string, unknown>;
type Props = LightProps & {
    collapseIcon?: IconDefinition;
    hideCollapse?: boolean;
    header?: LanguageKeyOrText;
    image?: ImageProps;
    children?: ReactNode;
    buttons?: FooterButtonProps[];
};
export declare function Card(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
