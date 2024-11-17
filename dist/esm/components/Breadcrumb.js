// Copyright © 2024 Navarrotech

import { jsx as _jsx } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
import { useLeftCenteredRight, useSize } from '@/utility/hooks';
export function Breadcrumb(props) {
    const positionedClassName = useLeftCenteredRight(props);
    const sizeClassName = useSize(props);
    const classes = [
        'breadcrumb',
        positionedClassName,
        sizeClassName,
        props.hasArrowSeparator && 'has-arrow-separator',
        props.hasBulletSeparator && 'has-bullet-separator',
        props.hasDotSeparator && 'has-dot-separator',
        props.hasSucceedsSeparator && 'has-succeeds-separator',
    ].filter(Boolean).join(' ').trim();
    return _jsx(LightPropHandler, { ...props, rootClassname: classes, "aria-label": 'breadcrumbs', as: 'nav', children: props.children });
}
