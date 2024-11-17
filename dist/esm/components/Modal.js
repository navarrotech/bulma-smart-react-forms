// Copyright © 2024 Navarrotech

import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright © 2024 Navarrotech
// Core
import { createPortal } from 'react-dom';
import { BulmaFormSettings } from '@/BulmaFormSettings';
// Components
import { Button } from '@/elements/Button';
import { ErrorBoundary } from '@/navarrotech/ErrorBoundary';
// Misc
import { useHotkey, useTranslation } from '@/utility/hooks';
import { Delete } from '@/elements/Delete';
export function Modal(props) {
    const { translate, } = useTranslation();
    // Keyboard listener to close the modal on the 'escape' key
    useHotkey('escape', () => {
        if (props.show) {
            props.onClose();
        }
    }, null, !!props.disableEscapeKeyToClose);
    if (!props.show || props.disabled) {
        return _jsx(_Fragment, {});
    }
    let className = props.className || '';
    if (props.fullwidth) {
        className += ' is-fullwidth';
    }
    if (props.className) {
        className += ' ' + props.className;
    }
    return _jsxs(_Fragment, { children: [props.trigger, createPortal(_jsx(ErrorBoundary, { id: 'modal-' + props.id, children: _jsxs("div", { id: props.id, className: `modal is-active ${className}`, style: props.style, onClick: props.onClick, children: [_jsx("div", { className: 'modal-background', onClick: props.onClose }), _jsxs("div", { className: 'modal-card', children: [_jsxs("header", { className: 'modal-card-head', children: [_jsx("p", { className: 'modal-card-title', children: translate(props.title) }), _jsx(Delete, { onClick: props.onClose })] }), _jsx("section", { className: 'modal-card-body', children: _jsx(ErrorBoundary, { id: `modal-${props.id}-content`, children: props.children }) }), _jsx("footer", { className: 'modal-card-foot buttons is-right', children: props.actions?.map((action, index) => (_jsx(Button, { ...action }, index + '-' + action.id))) })] })] }) }), BulmaFormSettings.CustomModalParentElement, props.id)] });
}
