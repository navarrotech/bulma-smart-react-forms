// Copyright © 2024 Navarrotech

// Copyright © 2024 Navarrotech
// Core
import { useEffect, useState } from 'react';
import { BulmaFormSettings } from '../BulmaFormSettings';
function translate(keyOrText) {
    return BulmaFormSettings.translationFunction(keyOrText);
}
export function useTranslation() {
    const [language, setLanguage,] = useState(BulmaFormSettings.getCurrentLanguage());
    // When the language changes, triggers a re-render on the component
    useEffect(() => BulmaFormSettings.onLanguageChange(setLanguage), []);
    return {
        // The ref won't change with the fn proxy, so it's safe to use it in dependency arrays
        translate,
        language,
    };
}
export function useHotkey(key, callback, deps = [], disabled = false) {
    useEffect(() => {
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
export function useLeftCenteredRight(props) {
    const { left, right, centered, } = props;
    return [
        left && 'is-left',
        right && 'is-right',
        centered && 'is-centered',
    ].filter(Boolean).join(' ') || '';
}
export function useSize(props, prefix = 'is') {
    const { small, medium, large, } = props;
    return [
        small && `${prefix}-small`,
        medium && `${prefix}-medium`,
        large && `${prefix}-large`,
    ].filter(Boolean).join(' ') || '';
}
