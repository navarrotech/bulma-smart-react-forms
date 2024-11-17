// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = Delete;
const jsx_runtime_1 = require("react/jsx-runtime");
function Delete(props) {
    const className = [
        'delete',
        props.className,
        props.fullwidth && 'is-fullwidth',
        props.disabled && 'is-disabled',
        props.small && 'is-small',
        props.medium && 'is-medium',
        props.large && 'is-large',
    ].filter(Boolean).join(' ');
    return (0, jsx_runtime_1.jsx)("button", { ...props, className: className, onClick: !props.disabled && props.onClick });
}
