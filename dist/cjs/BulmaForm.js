// Copyright © 2024 Navarrotech

"use strict";
// Copyright © 2024 Navarrotech
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulmaForm = void 0;
// Core
const react_1 = require("react");
class BulmaForm extends react_1.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.setState({
            value: this.props.defaultValue,
        });
    }
}
exports.BulmaForm = BulmaForm;
