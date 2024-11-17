// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = Icon;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
function Icon(props) {
    const classes = [
        'icon',
        props.color && `has-text-${props.color}`,
        props.small && 'is-small',
        props.medium && 'is-medium',
        props.large && 'is-large',
    ].filter(Boolean).join(' ');
    return (0, jsx_runtime_1.jsx)(LightPropHandler_1.LightPropHandler, { ...props, as: 'span', rootClassname: classes });
}
