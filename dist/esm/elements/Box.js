// Copyright © 2024 Navarrotech

import { jsx as _jsx } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { LightPropHandler } from '@/utility/LightPropHandler';
// Documentation:
// https://bulma.io/documentation/elements/box/
export function Box(props) {
    return _jsx(LightPropHandler, { rootClassname: 'block box', ...props });
}
