// Copyright © 2024 Navarrotech

// Copyright © 2024 Navarrotech
// Core
import { createElement } from 'react';
import { useTranslation } from '@/utility/hooks';
import { omitProps } from './filters';
export function LightPropHandler({ rootClassname, ...props }) {
    const { translate, } = useTranslation();
    return createElement(props.as || 'div', {
        ...omitProps(props),
        title: translate(props.title),
        className: `${rootClassname} ${props.className}`,
    }, typeof props.children === 'string'
        ? translate(props.children)
        : props.children);
}
