// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = Button;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
// Utility
const react_1 = require("react");
const color_1 = require("@/utility/color");
const hooks_1 = require("@/utility/hooks");
// Misc
const constants_1 = require("@/constants");
function Button(props) {
    const { translate, } = (0, hooks_1.useTranslation)();
    const { className, style, } = (0, color_1.useColorful)(props);
    const sizeClass = (0, hooks_1.useSize)(props);
    const classes = [
        className,
        sizeClass,
        props.outlined && 'is-outlined',
        props.inverted && 'is-inverted',
        props.rounded && 'is-rounded',
        props.disabled && 'is-disabled',
        props.loading && 'is-loading',
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
    const as = props.as || 'button';
    return (0, jsx_runtime_1.jsxs)(LightPropHandler_1.LightPropHandler, { ...props, as: as, type: as === 'button'
            ? 'button'
            : undefined, rootClassname: 'button', disabled: props.disabled || props.loading, onClick: onClick, className: classes, style: style, children: [iconLeft, typeof props.children === 'string' || props.text
                ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("span", { children: translate(props.text || props.children) }) })
                : props.children, iconRight] });
}
