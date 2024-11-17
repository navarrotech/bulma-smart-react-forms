// Copyright © 2024 Navarrotech

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { useCallback } from 'react';
// Utility
import { useColorful } from '@/utility/color';
import { useTranslation } from '@/utility/hooks';
// Misc
import { Nothing } from '@/constants';
export function Button(props) {
    const { translate, } = useTranslation();
    const { className, style, } = useColorful(props);
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
    const onClick = useCallback((event) => {
        if (!props.onClick || props.disabled || props.loading) {
            return;
        }
        props.onClick(event);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onClick, props.disabled, props.loading,]);
    const iconLeft = props.icon ? _jsx("span", { className: 'icon', children: props.icon }) : Nothing;
    const iconRight = props.iconRight ? _jsx("span", { className: 'icon', children: props.iconRight }) : Nothing;
    const Component = props.as || 'button';
    return (_jsx(Component, { ...props, id: props.id, 
        // @ts-ignore
        type: 'button', title: translate(props.title), disabled: props.disabled || props.loading, 
        // @ts-ignore
        onClick: onClick, className: classes, style: style, children: typeof props.children === 'string'
            ? _jsxs(_Fragment, { children: [iconLeft, _jsx("span", { children: translate(props.children) }), iconRight] })
            : props.children }));
}
