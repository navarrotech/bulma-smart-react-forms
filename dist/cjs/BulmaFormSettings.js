// Copyright © 2024 Navarrotech

"use strict";
// Copyright © 2024 Navarrotech
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulmaFormSettings = void 0;
// Core
const events_1 = __importDefault(require("events"));
const DEFAULT_TRANSLATION_FUNCTION = (keyOrText) => keyOrText;
class BulmaFormSettings {
    // //////////////////////////// //
    //    Translation & Language    //
    // //////////////////////////// //
    static translationFunction = DEFAULT_TRANSLATION_FUNCTION;
    static language = 'en';
    static events = new events_1.default();
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
exports.BulmaFormSettings = BulmaFormSettings;
