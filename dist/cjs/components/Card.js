// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = Card;
const react_1 = require("react");
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
const hooks_1 = require("@/utility/hooks");
// UI
const Image_1 = require("@/elements/Image");
// Misc
const constants_1 = require("@/constants");
function Card(props) {
    const { translate, } = (0, hooks_1.useTranslation)();
    return (0, jsx_runtime_1.jsxs)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: 'card', as: 'div', children: [props.header
                ? (0, jsx_runtime_1.jsxs)("header", { className: 'card-header', children: [(0, jsx_runtime_1.jsx)("p", { className: 'card-header-title', children: translate(props.header) }), !props.hideCollapse
                            ? (0, jsx_runtime_1.jsx)("button", { className: 'card-header-icon', "aria-label": 'more options', children: (0, jsx_runtime_1.jsx)("span", { className: 'icon', children: props.collapseIcon || DefaultDropdownIcon }) })
                            : constants_1.Nothing] })
                : constants_1.Nothing, props.image
                ? (0, jsx_runtime_1.jsx)("div", { className: 'card-image', children: (0, jsx_runtime_1.jsx)(Image_1.Image, { ...props.image }) })
                : constants_1.Nothing, props.children
                ? (0, jsx_runtime_1.jsx)("div", { className: 'card-content', children: typeof props.children === 'string'
                        ? translate(props.children)
                        : props.children })
                : constants_1.Nothing, props.buttons
                ? (0, jsx_runtime_1.jsx)("div", { className: 'card-footer', children: props.buttons.map((button, index) => ((0, react_1.createElement)("a", { ...button, key: button.id || ('card-button-' + index), className: `card-footer-item ${button.className || ''}`.trim(), onClick: button.onClick }, typeof button.text === 'string'
                        ? translate(button.text)
                        : button.text))) })
                : constants_1.Nothing] });
}
// Font Awesome Free 6.6.0 by @fontawesome
// - https://fontawesome.com License
// - https://fontawesome.com/license/free
// Copyright 2024 Fonticons, Inc.
const DefaultDropdownIcon = (0, jsx_runtime_1.jsx)("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512', children: (0, jsx_runtime_1.jsx)("path", { d: 'M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5\n    12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7\n    86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z' }) });
