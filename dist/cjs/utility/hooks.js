// Copyright © 2024 Navarrotech

"use strict";
// Copyright © 2024 Navarrotech
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslation = useTranslation;
exports.useHotkey = useHotkey;
exports.useLeftCenteredRight = useLeftCenteredRight;
exports.useSize = useSize;
// Core
const react_1 = require("react");
const BulmaFormSettings_1 = require("../BulmaFormSettings");
function translate(keyOrText) {
    return BulmaFormSettings_1.BulmaFormSettings.translationFunction(keyOrText);
}
function useTranslation() {
    const [language, setLanguage,] = (0, react_1.useState)(BulmaFormSettings_1.BulmaFormSettings.getCurrentLanguage());
    // When the language changes, triggers a re-render on the component
    (0, react_1.useEffect)(() => BulmaFormSettings_1.BulmaFormSettings.onLanguageChange(setLanguage), []);
    return {
        // The ref won't change with the fn proxy, so it's safe to use it in dependency arrays
        translate,
        language,
    };
}
function useHotkey(key, callback, deps = [], disabled = false) {
    (0, react_1.useEffect)(() => {
        if (disabled) {
            return () => { };
        }
        const handler = (event) => {
            event.preventDefault?.();
            event.stopPropagation?.();
            event.stopImmediatePropagation?.();
            if (event.key !== key) {
                return;
            }
            callback();
        };
        window.addEventListener('keydown', handler);
        return () => {
            window.removeEventListener('keydown', handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key, callback, disabled, ...deps,]);
}
function useLeftCenteredRight(props) {
    const { left, right, centered, } = props;
    return [
        left && 'is-left',
        right && 'is-right',
        centered && 'is-centered',
    ].filter(Boolean).join(' ') || '';
}
function useSize(props, prefix = 'is') {
    const { small, medium, large, } = props;
    return [
        small && `${prefix}-small`,
        medium && `${prefix}-medium`,
        large && `${prefix}-large`,
    ].filter(Boolean).join(' ') || '';
}
