// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Copiable = Copiable;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Utility
const hooks_1 = require("@/utility/hooks");
const COPY_STYLE = { cursor: 'copy', };
function Copiable(props) {
    const { translate, } = (0, hooks_1.useTranslation)();
    const { id, text, disabled, onCopied, style, noCursor, className, fullwidth, title, useDoubleClick, useRightClick, children, onClick, ...customProps } = props;
    const copyText = translate(text);
    function copyFunction() {
        if (disabled) {
            return;
        }
        navigator.clipboard.writeText(copyText);
        onCopied?.();
    }
    const proxyStyle = {
        ...style || {},
        ...(noCursor ? {} : COPY_STYLE),
    };
    return (0, jsx_runtime_1.jsx)("div", { ...customProps, id: id, style: proxyStyle, className: className + (fullwidth ? ' is-fullwidth' : ''), 
        // Title prop is optional, but we show the copiable text regardless
        title: title
            ? translate(title)
            : copyText, 
        // Copy on right click, double click, or single click
        // It can only be one of, not multiple
        onContextMenu: useRightClick
            ? copyFunction
            : undefined, onDoubleClick: useDoubleClick
            ? copyFunction
            : undefined, onClick: (!useDoubleClick && !useRightClick)
            ? (event) => {
                copyFunction();
                // @ts-ignore - TODO: Fix this typescript ts-ignore?
                onClick?.(event);
            }
            : onClick, children: children });
}
