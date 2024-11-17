// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownDivider = DropdownDivider;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
function DropdownDivider(props) {
    return (0, jsx_runtime_1.jsx)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: 'dropdown-divider', as: 'hr', children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) });
}
