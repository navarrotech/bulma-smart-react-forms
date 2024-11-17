// Copyright © 2024 Navarrotech

"use strict";
// Copyright © 2024 Navarrotech
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
// Core
const react_1 = require("react");
// Misc
const constants_1 = require("@/constants");
const DEFAULT_ERROR_STATE = {
    tripped: false,
};
class ErrorBoundary extends react_1.Component {
    constructor(props) {
        // Parent construct
        super(props);
        // Initialize state
        this.state = { ...DEFAULT_ERROR_STATE, };
    }
    componentDidCatch(error, errorInfo) {
        const { id, } = this.props;
        // eslint-disable-next-line no-console
        console.error(`ErrorBoundary [${id}] caught an error:`, error, errorInfo);
        this.setState({
            tripped: true,
        });
        return true;
    }
    render() {
        if (!this.state.tripped) {
            return this.props.children;
        }
        return constants_1.Nothing;
    }
}
exports.ErrorBoundary = ErrorBoundary;
