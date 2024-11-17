// Copyright © 2024 Navarrotech

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
// UI
import { Image } from '@/elements/Image';
import { Titles } from '@/elements/Titles';
export function Media(props) {
    return _jsxs(LightPropHandler, { ...props, rootClassname: 'media', as: props.as || 'article', children: [props.image
                ? _jsx("figure", { className: 'media-left', children: _jsx(Image, { ...props.image }) })
                : null, props.title
                ? _jsx("div", { className: 'media-content', children: _jsx(Titles, { ...props.titles }) })
                : null, props.children] });
}
