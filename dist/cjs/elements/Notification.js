// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = Notification;
const jsx_runtime_1 = require("react/jsx-runtime");
// UI
const Delete_1 = require("./Delete");
// Misc
const color_1 = require("@/utility/color");
const hooks_1 = require("@/utility/hooks");
function Notification(props) {
    const { className, style, } = (0, color_1.useColorful)(props);
    const { translate, } = (0, hooks_1.useTranslation)();
    return (0, jsx_runtime_1.jsxs)("div", { ...props, title: translate(props.title), className: className, style: style, children: [props.showDelete
                ? (0, jsx_runtime_1.jsx)(Delete_1.Delete, { onClick: props.onDelete })
                : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}), !props.icon
                ? (0, jsx_runtime_1.jsx)("span", { className: 'icon mr-1', children: props.icon })
                : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}), props.message
                ? (0, jsx_runtime_1.jsx)("span", { children: translate(props.message) })
                : typeof props.children === 'string'
                    ? (0, jsx_runtime_1.jsx)("span", { children: translate(props.children) })
                    : props.children] });
}
