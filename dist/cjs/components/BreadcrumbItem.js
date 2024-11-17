// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbItem = BreadcrumbItem;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
function BreadcrumbItem(props) {
    return (0, jsx_runtime_1.jsx)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: props.active ? 'is-active' : '', as: 'li', children: (0, jsx_runtime_1.jsx)("a", { ...(props.anchorProps || {}), href: props.href, "aria-current": props.active ? 'page' : undefined, children: props.children }) });
}
