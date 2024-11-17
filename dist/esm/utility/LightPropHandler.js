// Copyright © 2024 Navarrotech

// Copyright © 2024 Navarrotech
// Core
import { createElement } from 'react';
import { useTranslation } from '@/utility/hooks';
export function LightPropHandler(props) {
    const { translate, } = useTranslation();
    return createElement(props.as || 'div', {
        ...props,
        title: translate(props.title),
        className: `${props.rootClassname} ${props.className}`,
    }, typeof props.children === 'string'
        ? translate(props.children)
        : props.children);
}
