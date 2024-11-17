// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = Message;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
const color_1 = require("@/utility/color");
const hooks_1 = require("@/utility/hooks");
// UI
const Delete_1 = require("@/elements/Delete");
// Misc
const constants_1 = require("@/constants");
function Message(props) {
    const { className, style, } = (0, color_1.useColorful)(props);
    const sizeClassName = (0, hooks_1.useSize)(props);
    const { translate, } = (0, hooks_1.useTranslation)();
    const classes = [
        className,
        sizeClassName,
        props.className || '',
    ].filter(Boolean).join(' ');
    return (0, jsx_runtime_1.jsxs)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: 'message', className: classes, style: {
            ...style,
            ...(props.style || {}),
        }, as: 'article', children: [props.header || props.showDelete
                ? (0, jsx_runtime_1.jsxs)("div", { className: 'message-header', children: [(0, jsx_runtime_1.jsx)("p", { children: props.header
                                ? translate(props.header)
                                : '' }), props.showDelete
                            ? (0, jsx_runtime_1.jsx)(Delete_1.Delete, { onClick: props.onDelete, className: sizeClassName })
                            : constants_1.Nothing] })
                : constants_1.Nothing, (0, jsx_runtime_1.jsx)("div", { className: 'message-body', children: typeof props.children === 'string'
                    ? translate(props.children)
                    : props.children })] });
}
