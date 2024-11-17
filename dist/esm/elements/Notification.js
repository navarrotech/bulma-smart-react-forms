// Copyright © 2024 Navarrotech

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// UI
import { Delete } from './Delete';
// Misc
import { useColorful } from '@/utility/color';
import { useTranslation } from '@/utility/hooks';
export function Notification(props) {
    const { className, style, } = useColorful(props);
    const { translate, } = useTranslation();
    return _jsxs("div", { ...props, title: translate(props.title), className: className, style: style, children: [props.showDelete
                ? _jsx(Delete, { onClick: props.onDelete })
                : _jsx(_Fragment, {}), !props.icon
                ? _jsx("span", { className: 'icon mr-1', children: props.icon })
                : _jsx(_Fragment, {}), props.message
                ? _jsx("span", { children: translate(props.message) })
                : typeof props.children === 'string'
                    ? _jsx("span", { children: translate(props.children) })
                    : props.children] });
}
