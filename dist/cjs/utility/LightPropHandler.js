// Copyright © 2024 Navarrotech

"use strict";
// Copyright © 2024 Navarrotech
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightPropHandler = LightPropHandler;
// Core
const react_1 = require("react");
const hooks_1 = require("@/utility/hooks");
const filters_1 = require("./filters");
function LightPropHandler({ rootClassname, ...props }) {
    const { translate, } = (0, hooks_1.useTranslation)();
    return (0, react_1.createElement)(props.as || 'div', {
        ...(0, filters_1.omitProps)(props),
        title: translate(props.title),
        className: `${rootClassname} ${props.className}`,
    }, typeof props.children === 'string'
        ? translate(props.children)
        : props.children);
}
