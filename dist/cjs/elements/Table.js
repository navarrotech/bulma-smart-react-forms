// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = Table;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
function Table(props) {
    const classes = [
        'table',
        props.striped ? 'is-striped' : '',
        props.narrow ? 'is-narrow' : '',
        props.bordered ? 'is-bordered' : '',
        props.hoverable ? 'is-hoverable' : '',
        props.fullwidth ? 'is-fullwidth' : '',
    ].filter(Boolean).join(' ');
    const element = (0, jsx_runtime_1.jsx)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: classes, as: 'table' });
    if (props.scrollable) {
        return (0, jsx_runtime_1.jsx)("div", { className: 'table-container', children: element });
    }
    return element;
}
