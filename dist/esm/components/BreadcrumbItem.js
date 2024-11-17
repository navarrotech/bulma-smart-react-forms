// Copyright © 2024 Navarrotech

import { jsx as _jsx } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
export function BreadcrumbItem(props) {
    return _jsx(LightPropHandler, { ...props, rootClassname: props.active ? 'is-active' : '', as: 'li', children: _jsx("a", { ...(props.anchorProps || {}), href: props.href, "aria-current": props.active ? 'page' : undefined, children: props.children }) });
}
