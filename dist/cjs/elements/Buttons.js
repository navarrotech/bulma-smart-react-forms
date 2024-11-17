// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buttons = Buttons;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const react_1 = require("react");
const LightPropHandler_1 = require("@/utility/LightPropHandler");
function Buttons(props) {
    if (props.singleLine) {
        const className = [
            'is-grouped',
            props.className,
            props.disabled && 'are-disabled',
            props.fullwidth && 'is-fullwidth',
            props.hasAddons && 'has-addons',
        ].filter(Boolean).join(' ');
        return (0, jsx_runtime_1.jsx)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: 'field', className: className, children: react_1.Children.map(props.children, (child) => {
                if ((0, react_1.isValidElement)(child)) {
                    return (0, jsx_runtime_1.jsx)("div", { className: 'control', children: child });
                }
                return child;
            }) });
    }
    const className = [
        props.className,
        props.disabled && 'are-disabled',
        props.small && 'are-small',
        props.medium && 'are-medium',
        props.large && 'are-large',
        props.left && 'is-left',
        props.centered && 'is-centered',
        props.right && 'is-right',
        props.fullwidth && 'is-fullwidth',
        props.hasAddons && 'has-addons',
    ].filter(Boolean).join(' ') || '';
    return (0, jsx_runtime_1.jsx)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: 'buttons', className: className, children: props.children });
}
