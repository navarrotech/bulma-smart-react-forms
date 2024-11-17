// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = Content;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const LightPropHandler_1 = require("@/utility/LightPropHandler");
// Documentation:
// https://bulma.io/documentation/elements/content/
function Content(props) {
    return (0, jsx_runtime_1.jsx)(LightPropHandler_1.LightPropHandler, { rootClassname: 'content', ...props });
}
