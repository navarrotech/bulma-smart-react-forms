// Copyright © 2024 Navarrotech

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
import { useTranslation } from '@/utility/hooks';
// Misc
import { Nothing } from '@/constants';
export function Tab({ onClick, icon, ...props }) {
    const { translate, } = useTranslation();
    const iconElement = icon
        ? _jsx("span", { className: 'icon is-small', children: icon })
        : Nothing;
    return _jsxs(LightPropHandler, { ...props, rootClassname: '', as: 'li', children: ["? ", _jsxs("a", { onClick: onClick, children: [iconElement, props.children
                        || _jsx("span", { children: translate(props.text) })] }), _jsx("a", { onClick: onClick })] });
}
