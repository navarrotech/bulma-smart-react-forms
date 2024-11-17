// Copyright © 2024 Navarrotech

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { useState } from 'react';
import { LightPropHandler } from '@/utility/LightPropHandler';
import { useTranslation } from '@/utility/hooks';
export function NavbarDropdown(props) {
    const [isActive, setActive,] = useState(false);
    const { translate, } = useTranslation();
    const classes = [
        props.hoverable && 'is-hoverable',
        props.up && 'has-dropdown-up',
        isActive && 'is-active',
        props.className,
    ].filter(Boolean).join(' ');
    return _jsxs(LightPropHandler, { ...props, rootClassname: 'navbar-item has-dropdown', className: classes, onClick: (event) => {
            const newVal = !isActive;
            setActive(newVal);
            props.onClick?.(event);
            if (newVal) {
                props.onOpen?.();
            }
            else {
                props.onClose?.();
            }
        }, as: 'div', children: [_jsx("a", { className: `navbar-link ${props.arrowless ? 'is-arrowless' : ''}`, children: typeof props.text === 'string'
                    ? translate(props.text)
                    : props.text }), _jsx("div", { className: `navbar-dropdown ${props.right ? 'is-right' : ''}`, children: [
                    ...(props.items || []),
                    ...(props.children || []),
                ] })] });
}
