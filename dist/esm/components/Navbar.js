// Copyright © 2024 Navarrotech

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { useEffect, useState } from 'react';
import { LightPropHandler } from '@/utility/LightPropHandler';
import { useColorful } from '@/utility/color';
// Misc
import { Nothing } from '@/constants';
export function Navbar(props) {
    const { className: colorfulClassname, style, } = useColorful(props);
    const [isActive, setActive,] = useState(false);
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
    useEffect(() => {
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
    return _jsxs(LightPropHandler, { ...props, rootClassname: 'navbar', className: classes, as: 'div', role: 'navigation', "aria-label": 'main navigation', style: {
            ...style,
            ...(props.style || {}),
        }, children: [_jsxs("div", { className: 'navbar-brand', children: [props.brand
                        ? props.brand
                        : Nothing, _jsxs("a", { role: 'button', className: 'navbar-burger' + (isActive ? ' is-active' : ''), "aria-label": 'menu', "aria-expanded": String(!!isActive), onClick: () => setActive(!isActive), children: [_jsx("span", { "aria-hidden": 'true' }), _jsx("span", { "aria-hidden": 'true' }), _jsx("span", { "aria-hidden": 'true' }), _jsx("span", { "aria-hidden": 'true' })] })] }), _jsxs("div", { className: 'navbar-menu' + (isActive ? ' is-active' : ''), children: [_jsx("div", { className: 'navbar-start', children: props.startItems || Nothing }), _jsx("div", { className: 'navbar-end', children: props.endItems || Nothing })] })] });
}
