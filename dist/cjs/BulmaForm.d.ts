// Copyright © 2024 Navarrotech

import { Component } from 'react';
import type { ValidatorProp } from './types';
type DEFAULT_SCHEMA = Record<string, any>;
export type BulmaFormProps<Schema = DEFAULT_SCHEMA> = {
    defaultValue: Schema;
    validator?: ValidatorProp;
    onChange?: (schema: Schema) => void;
};
export type BulmaFormState<Schema = DEFAULT_SCHEMA> = {
    value: Schema;
};
export declare class BulmaForm<Schema> extends Component<BulmaFormProps<Schema>, BulmaFormState<Schema>> {
    constructor(props: BulmaFormProps<Schema>);
    componentDidMount(): void;
}
export {};
