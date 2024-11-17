// Copyright © 2024 Navarrotech

// Copyright © 2024 Navarrotech
// Core
import { Component } from 'react';
export class BulmaForm extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.setState({
            value: this.props.defaultValue,
        });
    }
}
