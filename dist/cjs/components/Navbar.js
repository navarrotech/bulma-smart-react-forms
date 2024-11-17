// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = Navbar;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const react_1 = require("react");
const LightPropHandler_1 = require("@/utility/LightPropHandler");
const color_1 = require("@/utility/color");
// Misc
const constants_1 = require("@/constants");
function Navbar(props) {
    const { className: colorfulClassname, style, } = (0, color_1.useColorful)(props);
    const [isActive, setActive,] = (0, react_1.useState)(false);
    const { fixedTop, fixedBottom, fixedPaddingTarget, } = props;
    const classes = [
        props.transparent && 'is-transparent',
        fixedTop && 'is-fixed-top',
        fixedBottom && 'is-fixed-bottom',
        props.spaced && 'is-spaced',
        props.hasShadow && 'has-shadow',
        colorfulClassname,
        props.className,
    ].filter(Boolean).join(' ');
    (0, react_1.useEffect)(() => {
        const target = fixedPaddingTarget || 'body';
        if (fixedTop) {
            document.querySelector(target)?.classList.add('has-navbar-fixed-top');
            return () => {
                document.querySelector(target)?.classList.remove('has-navbar-fixed-top');
            };
        }
        if (fixedBottom) {
            document.querySelector(target)?.classList.add('has-navbar-fixed-bottom');
            return () => {
                document.querySelector(target)?.classList.remove('has-navbar-fixed-bottom');
            };
        }
        return () => { };
    }, [fixedTop, fixedBottom, fixedPaddingTarget,]);
    return (0, jsx_runtime_1.jsxs)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: 'navbar', className: classes, as: 'div', role: 'navigation', "aria-label": 'main navigation', style: {
            ...style,
            ...(props.style || {}),
        }, children: [(0, jsx_runtime_1.jsxs)("div", { className: 'navbar-brand', children: [props.brand
                        ? props.brand
                        : constants_1.Nothing, (0, jsx_runtime_1.jsxs)("a", { role: 'button', className: 'navbar-burger' + (isActive ? ' is-active' : ''), "aria-label": 'menu', "aria-expanded": String(!!isActive), onClick: () => setActive(!isActive), children: [(0, jsx_runtime_1.jsx)("span", { "aria-hidden": 'true' }), (0, jsx_runtime_1.jsx)("span", { "aria-hidden": 'true' }), (0, jsx_runtime_1.jsx)("span", { "aria-hidden": 'true' }), (0, jsx_runtime_1.jsx)("span", { "aria-hidden": 'true' })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'navbar-menu' + (isActive ? ' is-active' : ''), children: [(0, jsx_runtime_1.jsx)("div", { className: 'navbar-start', children: props.startItems || constants_1.Nothing }), (0, jsx_runtime_1.jsx)("div", { className: 'navbar-end', children: props.endItems || constants_1.Nothing })] })] });
}
