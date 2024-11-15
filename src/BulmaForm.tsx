// Copyright © 2024 Navarrotech

// Core
import { Component } from 'react'
// import { get, set } from 'lodash-es'

// Typescript
import type { ValidatorProp } from './types'

type DEFAULT_SCHEMA = Record<string, any>

export type BulmaFormProps<Schema = DEFAULT_SCHEMA> = {
  defaultValue: Schema
  validator?: ValidatorProp
  onChange?: (schema: Schema) => void
}

export type BulmaFormState<Schema = DEFAULT_SCHEMA> = {
  value: Schema
}

export class BulmaForm<Schema> extends Component<BulmaFormProps<Schema>, BulmaFormState<Schema>> {
  constructor(props: BulmaFormProps<Schema>) {
    super(props)
  }

  componentDidMount() {
    this.setState({
      value: this.props.defaultValue,
    })
  }
}
