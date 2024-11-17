// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = Button;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const react_1 = require("react");
// Utility
const color_1 = require("@/utility/color");
const hooks_1 = require("@/utility/hooks");
// Misc
const constants_1 = require("@/constants");
function Button(props) {
    const { translate, } = (0, hooks_1.useTranslation)();
    const { className, style, } = (0, color_1.useColorful)(props);
    const classes = [
        'button',
        className,
        props.outlined && 'is-outlined',
        props.inverted && 'is-inverted',
        props.rounded && 'is-rounded',
        props.disabled && 'is-disabled',
        props.loading && 'is-loading',
        props.small && 'is-small',
        props.medium && 'is-medium',
        props.large && 'is-large',
        props.focused && 'is-focused',
        props.active && 'is-active',
        props.static && 'is-static',
        props.selected && 'is-selected',
        props.fullwidth && 'is-fullwidth',
    ].filter(Boolean).join(' ');
    // On click middleware to ensure the JS protections match the CSS protections
    const onClick = (0, react_1.useCallback)((event) => {
        if (!props.onClick || props.disabled || props.loading) {
            return;
        }
        props.onClick(event);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onClick, props.disabled, props.loading,]);
    const iconLeft = props.icon ? (0, jsx_runtime_1.jsx)("span", { className: 'icon', children: props.icon }) : constants_1.Nothing;
    const iconRight = props.iconRight ? (0, jsx_runtime_1.jsx)("span", { className: 'icon', children: props.iconRight }) : constants_1.Nothing;
    const Component = props.as || 'button';
    return ((0, jsx_runtime_1.jsx)(Component, { ...props, id: props.id, 
        // @ts-ignore
        type: 'button', title: translate(props.title), disabled: props.disabled || props.loading, 
        // @ts-ignore
        onClick: onClick, className: classes, style: style, children: typeof props.children === 'string'
            ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [iconLeft, (0, jsx_runtime_1.jsx)("span", { children: translate(props.children) }), iconRight] })
            : props.children }));
}
