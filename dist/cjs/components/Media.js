// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = Media;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
// UI
const Image_1 = require("@/elements/Image");
const Titles_1 = require("@/elements/Titles");
function Media(props) {
    return (0, jsx_runtime_1.jsxs)(LightPropHandler_1.LightPropHandler, { ...props, rootClassname: 'media', as: props.as || 'article', children: [props.image
                ? (0, jsx_runtime_1.jsx)("figure", { className: 'media-left', children: (0, jsx_runtime_1.jsx)(Image_1.Image, { ...props.image }) })
                : null, props.title
                ? (0, jsx_runtime_1.jsx)("div", { className: 'media-content', children: (0, jsx_runtime_1.jsx)(Titles_1.Titles, { ...props.titles }) })
                : null, props.children] });
}
