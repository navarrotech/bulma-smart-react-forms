// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarDivider = NavbarDivider;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
function NavbarDivider(props) {
    return (0, jsx_runtime_1.jsx)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: 'navbar-divider', as: 'hr', children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) });
}
