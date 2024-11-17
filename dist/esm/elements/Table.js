// Copyright © 2024 Navarrotech

import { jsx as _jsx } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
export function Table(props) {
    const classes = [
        'table',
        props.striped ? 'is-striped' : '',
        props.narrow ? 'is-narrow' : '',
        props.bordered ? 'is-bordered' : '',
        props.hoverable ? 'is-hoverable' : '',
        props.fullwidth ? 'is-fullwidth' : '',
    ].filter(Boolean).join(' ');
    const element = _jsx(LightPropHandler, { ...props, rootClassname: classes, as: 'table' });
    if (props.scrollable) {
        return _jsx("div", { className: 'table-container', children: element });
    }
    return element;
}
