// Copyright © 2024 Navarrotech

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = Dropdown;
const jsx_runtime_1 = require("react/jsx-runtime");
// Copyright © 2024 Navarrotech
// Core
const react_1 = require("react");
const hooks_1 = require("@/utility/hooks");
function Dropdown(props) {
    const { translate, } = (0, hooks_1.useTranslation)();
    // State
    const [isOpen, setIsOpen,] = (0, react_1.useState)(false);
    const dropdownRef = (0, react_1.useRef)(null);
    // Listen to clicks outside the dropdown
    (0, react_1.useEffect)(() => {
        if (!isOpen) {
            return () => { };
        }
        const handleClickOutside = (event) => {
            const dropdown = dropdownRef.current;
            if (!dropdown) {
                return;
            }
            const target = event.target;
            // If the click was outside of the dropdown, close it
            if (!dropdown.contains(target)) {
                setIsOpen(false);
            }
            // If the click was inside the dropdown, and the element was an anchor (<a>), close it
            else if (target.tagName === 'A') {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen,]);
    // Close when it becomes disabled
    (0, react_1.useEffect)(() => {
        if (props.disabled && isOpen) {
            setIsOpen(false);
        }
    }, [isOpen, props.disabled,]);
    // Listen to force events
    (0, react_1.useEffect)(() => {
        if (props.forceActive && !isOpen) {
            setIsOpen(true);
        }
        if (props.forceClosed && isOpen) {
            setIsOpen(false);
        }
    }, [isOpen, props.forceActive, props.forceClosed,]);
    // Custom events
    (0, react_1.useEffect)(() => {
        if (isOpen && props.onOpened) {
            props.onOpened();
        }
        if (!isOpen && props.onClosed) {
            props.onClosed();
        }
        // eslint-disable-next-line
    }, [isOpen,]);
    // Classnames
    const classes = [
        'dropdown',
        props.className,
        !props.forceClosed && (isOpen || props.forceActive) && 'is-active',
        props.fullwidth && 'is-fullwidth',
        props.up && 'is-up',
        props.right && 'is-right',
        props.hoverable && 'is-hoverable',
    ].filter(Boolean).join(' ');
    const triggerClassname = 'dropdown-trigger ' + (props.triggerClassname || '');
    const menuClassname = 'dropdown-menu ' + (props.menuClassname || '');
    const contentClassname = 'dropdown-content ' + (props.contentClassname || '');
    return ((0, jsx_runtime_1.jsxs)("div", { ...props, id: props.id, ref: dropdownRef, title: translate(props.title), className: classes, children: [(0, jsx_runtime_1.jsx)("div", { className: triggerClassname, onClick: () => {
                    if (props.disabled || props.forceActive || props.forceClosed) {
                        return;
                    }
                    setIsOpen(!isOpen);
                }, children: typeof props.trigger === 'function'
                    ? props.trigger({
                        isActive: isOpen,
                        translate,
                    })
                    : props.trigger }), (0, jsx_runtime_1.jsx)("div", { className: menuClassname, role: 'menu', children: (0, jsx_runtime_1.jsx)("div", { className: contentClassname, children: props.children }) })] }));
}
