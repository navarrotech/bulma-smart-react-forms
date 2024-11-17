// Copyright © 2024 Navarrotech

import { jsx as _jsx } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
export function NavbarItem(props) {
    const classes = [
        props.selected && 'is-selected',
        props.className,
    ].filter(Boolean).join(' ');
    return _jsx(LightPropHandler, { ...props, rootClassname: 'navbar-item', className: classes, as: props.as || 'a', children: props.children });
}
