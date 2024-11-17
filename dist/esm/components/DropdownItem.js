// Copyright © 2024 Navarrotech

import { jsx as _jsx } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
export function DropdownItem(props) {
    return _jsx(LightPropHandler, { ...props, rootClassname: 'dropdown-item', as: 'div', children: props.children });
}
