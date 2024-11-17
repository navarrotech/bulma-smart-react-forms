// Copyright © 2024 Navarrotech

import { jsx as _jsx } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { Children, isValidElement } from 'react';
import { LightPropHandler } from '@/utility/LightPropHandler';
export function Buttons(props) {
    if (props.singleLine) {
        const className = [
            'is-grouped',
            props.className,
            props.disabled && 'are-disabled',
            props.fullwidth && 'is-fullwidth',
            props.hasAddons && 'has-addons',
        ].filter(Boolean).join(' ');
        return _jsx(LightPropHandler, { ...props, rootClassname: 'field', className: className, children: Children.map(props.children, (child) => {
                if (isValidElement(child)) {
                    return _jsx("div", { className: 'control', children: child });
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
    return _jsx(LightPropHandler, { ...props, rootClassname: 'buttons', className: className, children: props.children });
}
