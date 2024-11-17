// Copyright © 2024 Navarrotech

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { useColorful } from '@/utility/color';
import { LightPropHandler } from '@/utility/LightPropHandler';
import { useTranslation } from '@/utility/hooks';
// UI
import { Delete } from './Delete';
// Misc
import { Nothing } from '@/constants';
export function Tag(props) {
    const { className, style, } = useColorful(props);
    const { translate, } = useTranslation();
    const sizeClass = [
        props.small && 'is-small',
        props.medium && 'is-medium',
        props.large && 'is-large',
        props.normal && 'is-normal',
    ].filter(Boolean).join(' ');
    const classes = [
        className,
        sizeClass,
        props.hoverable && 'is-hoverable',
        props.rounded && 'is-rounded',
        props.isDelete && 'is-delete',
    ].filter(Boolean).join(' ');
    return _jsxs(LightPropHandler, { ...props, as: props.isDelete ? 'a' : 'span', onClick: !props.disabled && props.onDelete, rootClassname: 'tag', className: classes, style: style, children: [props.message
                ? translate(props.message)
                : typeof props.children === 'string'
                    ? translate(props.children)
                    : props.children, props.withDeleteButton
                ? _jsx(Delete, { onClick: !props.disabled && props.onDelete, className: sizeClass })
                : Nothing] });
}
