// Copyright © 2024 Navarrotech

import { jsx as _jsx } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
export function Icon(props) {
    const classes = [
        'icon',
        props.color && `has-text-${props.color}`,
        props.small && 'is-small',
        props.medium && 'is-medium',
        props.large && 'is-large',
    ].filter(Boolean).join(' ');
    return _jsx(LightPropHandler, { ...props, as: 'span', rootClassname: classes });
}
