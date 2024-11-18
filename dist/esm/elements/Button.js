// Copyright © 2024 Navarrotech

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
// Utility
import { useCallback } from 'react';
import { useColorful } from '@/utility/color';
import { useSize, useTranslation } from '@/utility/hooks';
// Misc
import { Nothing } from '@/constants';
export function Button(props) {
    const { translate, } = useTranslation();
    const { className, style, } = useColorful(props);
    const sizeClass = useSize(props);
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
    const onClick = useCallback((event) => {
        if (!props.onClick || props.disabled || props.loading) {
            return;
        }
        props.onClick(event);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onClick, props.disabled, props.loading,]);
    const iconLeft = props.icon ? _jsx("span", { className: 'icon', children: props.icon }) : Nothing;
    const iconRight = props.iconRight ? _jsx("span", { className: 'icon', children: props.iconRight }) : Nothing;
    const as = props.as || 'button';
    return _jsxs(LightPropHandler, { ...props, as: as, type: as === 'button'
            ? 'button'
            : undefined, rootClassname: 'button', disabled: props.disabled || props.loading, onClick: onClick, className: classes, style: style, children: [iconLeft, typeof props.children === 'string' || props.text
                ? _jsx(_Fragment, { children: _jsx("span", { children: translate(props.text || props.children) }) })
                : props.children, iconRight] });
}
