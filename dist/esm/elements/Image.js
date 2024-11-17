// Copyright © 2024 Navarrotech

import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from '@/utility/hooks';
export function Image(props) {
    const { translate, } = useTranslation();
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
    return _jsx("figure", { ...props, title: translate(props.title), className: className, children: _jsx("img", { width: props.width, height: props.height, ...(props.imgProps || {}), src: props.src, alt: props.alt }) });
}
