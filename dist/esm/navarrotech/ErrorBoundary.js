// Copyright © 2024 Navarrotech

// Copyright © 2024 Navarrotech
// Core
import { Component } from 'react';
// Misc
import { Nothing } from '@/constants';
const DEFAULT_ERROR_STATE = {
    tripped: false,
};
export class ErrorBoundary extends Component {
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
        return Nothing;
    }
}
