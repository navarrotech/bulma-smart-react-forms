// Copyright © 2024 Navarrotech

import { Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { createElement } from 'react';
import { useTranslation } from '@/utility/hooks';
// Misc
import { Nothing } from '@/constants';
const sizeToTagNameMap = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
    7: 'h6',
};
export function Titles(props) {
    const { translate, } = useTranslation();
    const titleSize = props.titleSize || 3;
    const subtitleSize = props.subtitleSize || 5;
    const TitleTag = sizeToTagNameMap[titleSize];
    const SubtitleTag = sizeToTagNameMap[subtitleSize];
    const titleClass = `title is-${titleSize} ${props.titleProps?.className} ${props.spaced ? 'is-spaced' : ''}`.trim();
    const subtitleClass = `subtitle is-${subtitleSize} ${props.subtitleProps?.className}`.trim();
    return _jsxs(_Fragment, { children: [props.title
                ? createElement(TitleTag, {
                    ...props.titleProps,
                    className: titleClass,
                }, translate(props.title))
                : Nothing, props.subtitle
                ? createElement(SubtitleTag, {
                    ...props.subtitleProps,
                    className: subtitleClass,
                }, translate(props.subtitle))
                : Nothing] });
}
