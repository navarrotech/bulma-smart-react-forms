// Copyright © 2024 Navarrotech

// Copyright © 2024 Navarrotech
// Core
import EventEmitter from 'events';
const DEFAULT_TRANSLATION_FUNCTION = (keyOrText) => keyOrText;
export class BulmaFormSettings {
    // //////////////////////////// //
    //    Translation & Language    //
    // //////////////////////////// //
    static translationFunction = DEFAULT_TRANSLATION_FUNCTION;
    static language = '';
    static events = new EventEmitter();
    static changeLanguage(newLanguage) {
        this.language = newLanguage;
        this.events.emit('language', newLanguage);
    }
    static onLanguageChange(callback) {
        const listener = (newLang) => callback(newLang);
        this.events.on('language', listener);
        return () => this.events.removeListener('language', listener);
    }
    static getCurrentLanguage() {
        return this.language;
    }
    // ////////////////////////// //
    //    Targets and defaults    //
    // ////////////////////////// //
    static CustomErrorBoundary = null;
    static CustomModalParentElement = document.getElementById('body');
}
