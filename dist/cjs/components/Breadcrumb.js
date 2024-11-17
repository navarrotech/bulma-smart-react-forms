// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = Breadcrumb;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
const hooks_1 = require("@/utility/hooks");
function Breadcrumb(props) {
    const positionedClassName = (0, hooks_1.useLeftCenteredRight)(props);
    const sizeClassName = (0, hooks_1.useSize)(props);
    const classes = [
        'breadcrumb',
        positionedClassName,
        sizeClassName,
        props.hasArrowSeparator && 'has-arrow-separator',
        props.hasBulletSeparator && 'has-bullet-separator',
        props.hasDotSeparator && 'has-dot-separator',
        props.hasSucceedsSeparator && 'has-succeeds-separator',
    ].filter(Boolean).join(' ').trim();
    return (0, jsx_runtime_1.jsx)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: classes, "aria-label": 'breadcrumbs', as: 'nav', children: props.children });
}
