// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarDropdown = NavbarDropdown;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const react_1 = require("react");
const LightPropHandler_1 = require("@/utility/LightPropHandler");
const hooks_1 = require("@/utility/hooks");
function NavbarDropdown(props) {
    const [isActive, setActive,] = (0, react_1.useState)(false);
    const { translate, } = (0, hooks_1.useTranslation)();
    const classes = [
        props.hoverable && 'is-hoverable',
        props.up && 'has-dropdown-up',
        isActive && 'is-active',
        props.className,
    ].filter(Boolean).join(' ');
    return (0, jsx_runtime_1.jsxs)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: 'navbar-item has-dropdown', className: classes, onClick: (event) => {
            const newVal = !isActive;
            setActive(newVal);
            props.onClick?.(event);
            if (newVal) {
                props.onOpen?.();
            }
            else {
                props.onClose?.();
            }
        }, as: 'div', children: [(0, jsx_runtime_1.jsx)("a", { className: `navbar-link ${props.arrowless ? 'is-arrowless' : ''}`, children: typeof props.text === 'string'
                    ? translate(props.text)
                    : props.text }), (0, jsx_runtime_1.jsx)("div", { className: `navbar-dropdown ${props.right ? 'is-right' : ''}`, children: [
                    ...(props.items || []),
                    ...(props.children || []),
                ] })] });
}
