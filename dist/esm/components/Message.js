// Copyright © 2024 Navarrotech

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
import { useColorful } from '@/utility/color';
import { useSize, useTranslation } from '@/utility/hooks';
// UI
import { Delete } from '@/elements/Delete';
// Misc
import { Nothing } from '@/constants';
export function Message(props) {
    const { className, style, } = useColorful(props);
    const sizeClassName = useSize(props);
    const { translate, } = useTranslation();
    const classes = [
        className,
        sizeClassName,
        props.className || '',
    ].filter(Boolean).join(' ');
    return _jsxs(LightPropHandler, { ...props, rootClassname: 'message', className: classes, style: {
            ...style,
            ...(props.style || {}),
        }, as: 'article', children: [props.header || props.showDelete
                ? _jsxs("div", { className: 'message-header', children: [_jsx("p", { children: props.header
                                ? translate(props.header)
                                : '' }), props.showDelete
                            ? _jsx(Delete, { onClick: props.onDelete, className: sizeClassName })
                            : Nothing] })
                : Nothing, _jsx("div", { className: 'message-body', children: typeof props.children === 'string'
                    ? translate(props.children)
                    : props.children })] });
}
