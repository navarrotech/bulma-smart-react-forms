// Copyright © 2024 Navarrotech

import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
// Copyright © 2024 Navarrotech
// Core
import { useState } from 'react';
import { LightPropHandler } from '@/utility/LightPropHandler';
import { useLeftCenteredRight, useSize } from '@/utility/hooks';
// UI
import { Tab } from './Tab';
function findActiveIndex(items, defaultActive) {
    if (defaultActive === null || defaultActive === undefined) {
        return null;
    }
    if (typeof defaultActive === 'number') {
        return defaultActive;
    }
    const idx = items.findIndex((item) => item.value === defaultActive);
    if (idx !== -1) {
        return idx;
    }
    return items.findIndex((item) => item.text === defaultActive) || 0;
}
export function Tabs(props) {
    const [activeIndex, setActiveIndex,] = useState(findActiveIndex(props.items || [], props.defaultActive || 0));
    const sizeClass = useSize(props);
    const centeredProps = useLeftCenteredRight(props);
    const classes = [
        centeredProps,
        sizeClass,
        props.boxed && 'is-boxed',
        props.toggle && 'is-toggle',
        !props.toggle && props.rounded && 'is-rounded',
        props.toggle && props.rounded && 'is-toggle-rounded',
        props.fullwidth && 'is-fullwidth',
        props.className,
    ].filter(Boolean).join(' ');
    return _jsx(LightPropHandler, { ...props, rootClassname: 'tabs', className: classes, as: 'div', children: _jsx("ul", { children: props.children
                || props.items
                    ?.map((item, index) => _createElement(Tab, { ...item, key: item + '-' + index, active: activeIndex === index, onClick: (event) => {
                        item?.onClick?.(event);
                        setActiveIndex(index);
                        props.onTabChange?.({
                            index,
                            value: item.value,
                            item,
                            event,
                        });
                    } })) }) });
}
