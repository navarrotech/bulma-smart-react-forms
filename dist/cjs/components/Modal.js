// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = Modal;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const react_dom_1 = require("react-dom");
const BulmaFormSettings_1 = require("@/BulmaFormSettings");
// Components
const Button_1 = require("@/elements/Button");
const ErrorBoundary_1 = require("@/navarrotech/ErrorBoundary");
// Misc
const hooks_1 = require("@/utility/hooks");
const Delete_1 = require("@/elements/Delete");
function Modal(props) {
    const { translate, } = (0, hooks_1.useTranslation)();
    // Keyboard listener to close the modal on the 'escape' key
    (0, hooks_1.useHotkey)('escape', () => {
        if (props.show) {
            props.onClose();
        }
    }, null, !!props.disableEscapeKeyToClose);
    if (!props.show || props.disabled) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    let className = props.className || '';
    if (props.fullwidth) {
        className += ' is-fullwidth';
    }
    if (props.className) {
        className += ' ' + props.className;
    }
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [props.trigger, (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, { id: 'modal-' + props.id, children: (0, jsx_runtime_1.jsxs)("div", { id: props.id, className: `modal is-active ${className}`, style: props.style, onClick: props.onClick, children: [(0, jsx_runtime_1.jsx)("div", { className: 'modal-background', onClick: props.onClose }), (0, jsx_runtime_1.jsxs)("div", { className: 'modal-card', children: [(0, jsx_runtime_1.jsxs)("header", { className: 'modal-card-head', children: [(0, jsx_runtime_1.jsx)("p", { className: 'modal-card-title', children: translate(props.title) }), (0, jsx_runtime_1.jsx)(Delete_1.Delete, { onClick: props.onClose })] }), (0, jsx_runtime_1.jsx)("section", { className: 'modal-card-body', children: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, { id: `modal-${props.id}-content`, children: props.children }) }), (0, jsx_runtime_1.jsx)("footer", { className: 'modal-card-foot buttons is-right', children: props.actions?.map((action, index) => ((0, jsx_runtime_1.jsx)(Button_1.Button, { ...action }, index + '-' + action.id))) })] })] }) }), BulmaFormSettings_1.BulmaFormSettings.CustomModalParentElement, props.id)] });
}
