// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = Image;
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("@/utility/hooks");
function Image(props) {
    const { translate, } = (0, hooks_1.useTranslation)();
    const className = [
        'image',
        props.className,
        props.rounded && 'is-rounded',
        props.left && 'mr-auto',
        props.centered && 'mx-auto',
        props.right && 'ml-auto',
        props.ratio && `is-${props.ratio}`,
        props.size && `is-${props.size}x${props.size}`,
    ].filter(Boolean).join(' ');
    return (0, jsx_runtime_1.jsx)("figure", { ...props, title: translate(props.title), className: className, children: (0, jsx_runtime_1.jsx)("img", { width: props.width, height: props.height, ...(props.imgProps || {}), src: props.src, alt: props.alt }) });
}
