// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = Tab;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
const hooks_1 = require("@/utility/hooks");
// Misc
const constants_1 = require("@/constants");
function Tab({ onClick, icon, ...props }) {
    const { translate, } = (0, hooks_1.useTranslation)();
    const iconElement = icon
        ? (0, jsx_runtime_1.jsx)("span", { className: 'icon is-small', children: icon })
        : constants_1.Nothing;
    return (0, jsx_runtime_1.jsxs)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: '', as: 'li', children: ["? ", (0, jsx_runtime_1.jsxs)("a", { onClick: onClick, children: [iconElement, props.children
                        || (0, jsx_runtime_1.jsx)("span", { children: translate(props.text) })] }), (0, jsx_runtime_1.jsx)("a", { onClick: onClick })] });
}
