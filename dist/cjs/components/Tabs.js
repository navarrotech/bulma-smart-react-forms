// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = Tabs;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// Copyright © 2024 Navarrotech
// Core
const react_2 = require("react");
const LightPropHandler_1 = require("@/utility/LightPropHandler");
const hooks_1 = require("@/utility/hooks");
// UI
const Tab_1 = require("./Tab");
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
function Tabs(props) {
    const [activeIndex, setActiveIndex,] = (0, react_2.useState)(findActiveIndex(props.items || [], props.defaultActive || 0));
    const sizeClass = (0, hooks_1.useSize)(props);
    const centeredProps = (0, hooks_1.useLeftCenteredRight)(props);
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
    return (0, jsx_runtime_1.jsx)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: 'tabs', className: classes, as: 'div', children: (0, jsx_runtime_1.jsx)("ul", { children: props.children
                || props.items
                    ?.map((item, index) => (0, react_1.createElement)(Tab_1.Tab, { ...item, key: item + '-' + index, active: activeIndex === index, onClick: (event) => {
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
