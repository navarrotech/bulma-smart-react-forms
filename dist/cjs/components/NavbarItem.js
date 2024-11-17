// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarItem = NavbarItem;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
function NavbarItem(props) {
    const classes = [
        props.selected && 'is-selected',
        props.className,
    ].filter(Boolean).join(' ');
    return (0, jsx_runtime_1.jsx)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: 'navbar-item', className: classes, as: props.as || 'a', children: props.children });
}
