// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = Tag;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const color_1 = require("@/utility/color");
const LightPropHandler_1 = require("@/utility/LightPropHandler");
const hooks_1 = require("@/utility/hooks");
// UI
const Delete_1 = require("./Delete");
// Misc
const constants_1 = require("@/constants");
function Tag(props) {
    const { className, style, } = (0, color_1.useColorful)(props);
    const { translate, } = (0, hooks_1.useTranslation)();
    const sizeClass = [
        props.small && 'is-small',
        props.medium && 'is-medium',
        props.large && 'is-large',
        props.normal && 'is-normal',
    ].filter(Boolean).join(' ');
    const classes = [
        className,
        sizeClass,
        props.hoverable && 'is-hoverable',
        props.rounded && 'is-rounded',
        props.isDelete && 'is-delete',
    ].filter(Boolean).join(' ');
    return (0, jsx_runtime_1.jsxs)(LightPropHandler_1.LightPropHandler, { ...props, as: props.isDelete ? 'a' : 'span', onClick: !props.disabled && props.onDelete, rootClassname: 'tag', className: classes, style: style, children: [props.message
                ? translate(props.message)
                : typeof props.children === 'string'
                    ? translate(props.children)
                    : props.children, props.withDeleteButton
                ? (0, jsx_runtime_1.jsx)(Delete_1.Delete, { onClick: !props.disabled && props.onDelete, className: sizeClass })
                : constants_1.Nothing] });
}
