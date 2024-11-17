// Copyright © 2024 Navarrotech

import { jsx as _jsx } from "react/jsx-runtime";
export function Delete(props) {
    const className = [
        'delete',
        props.className,
        props.fullwidth && 'is-fullwidth',
        props.disabled && 'is-disabled',
        props.small && 'is-small',
        props.medium && 'is-medium',
        props.large && 'is-large',
    ].filter(Boolean).join(' ');
    return _jsx("button", { ...props, className: className, onClick: !props.disabled && props.onClick });
}
