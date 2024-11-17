// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Titles = Titles;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const react_1 = require("react");
const hooks_1 = require("@/utility/hooks");
// Misc
const constants_1 = require("@/constants");
const sizeToTagNameMap = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
    7: 'h6',
};
function Titles(props) {
    const { translate, } = (0, hooks_1.useTranslation)();
    const titleSize = props.titleSize || 3;
    const subtitleSize = props.subtitleSize || 5;
    const TitleTag = sizeToTagNameMap[titleSize];
    const SubtitleTag = sizeToTagNameMap[subtitleSize];
    const titleClass = `title is-${titleSize} ${props.titleProps?.className} ${props.spaced ? 'is-spaced' : ''}`.trim();
    const subtitleClass = `subtitle is-${subtitleSize} ${props.subtitleProps?.className}`.trim();
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [props.title
                ? (0, react_1.createElement)(TitleTag, {
                    ...props.titleProps,
                    className: titleClass,
                }, translate(props.title))
                : constants_1.Nothing, props.subtitle
                ? (0, react_1.createElement)(SubtitleTag, {
                    ...props.subtitleProps,
                    className: subtitleClass,
                }, translate(props.subtitle))
                : constants_1.Nothing] });
}
