// Copyright © 2024 Navarrotech

import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
import { useTranslation } from '@/utility/hooks';
// UI
import { Image } from '@/elements/Image';
// Misc
import { Nothing } from '@/constants';
export function Card(props) {
    const { translate, } = useTranslation();
    return _jsxs(LightPropHandler, { ...props, rootClassname: 'card', as: 'div', children: [props.header
                ? _jsxs("header", { className: 'card-header', children: [_jsx("p", { className: 'card-header-title', children: translate(props.header) }), !props.hideCollapse
                            ? _jsx("button", { className: 'card-header-icon', "aria-label": 'more options', children: _jsx("span", { className: 'icon', children: props.collapseIcon || DefaultDropdownIcon }) })
                            : Nothing] })
                : Nothing, props.image
                ? _jsx("div", { className: 'card-image', children: _jsx(Image, { ...props.image }) })
                : Nothing, props.children
                ? _jsx("div", { className: 'card-content', children: typeof props.children === 'string'
                        ? translate(props.children)
                        : props.children })
                : Nothing, props.buttons
                ? _jsx("div", { className: 'card-footer', children: props.buttons.map((button, index) => (_createElement("a", { ...button, key: button.id || ('card-button-' + index), className: `card-footer-item ${button.className || ''}`.trim(), onClick: button.onClick }, typeof button.text === 'string'
                        ? translate(button.text)
                        : button.text))) })
                : Nothing] });
}
// Font Awesome Free 6.6.0 by @fontawesome
// - https://fontawesome.com License
// - https://fontawesome.com/license/free
// Copyright 2024 Fonticons, Inc.
const DefaultDropdownIcon = _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 448 512', children: _jsx("path", { d: 'M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5\n    12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7\n    86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z' }) });
