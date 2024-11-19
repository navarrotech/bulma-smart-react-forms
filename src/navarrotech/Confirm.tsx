// Copyright © 2024 Navarrotech

// Core
import { Component } from 'react'
import EventEmitter from 'events'

// Typescript
import type { ReactNode } from 'react'
import type { IconDefinition, LanguageKeyOrText } from '@/types'
import type { ButtonProps } from '@/elements/Button'

// UI
import { Modal } from '@/components/Modal'
import { Nothing } from '@/constants'

export type ConfirmRootProps =
  & {
    id?: string
    defaultTitle?: LanguageKeyOrText
    cancelButtonId?: string
    defaultCancelButtonText?: LanguageKeyOrText
    cancelButtonIcon?: IconDefinition
    confirmButtonId?: string
    defaultConfirmButtonText?: LanguageKeyOrText
    confirmButtonIcon?: IconDefinition
    deleteButtonId?: string
    defaultDeleteButtonText?: LanguageKeyOrText
    deleteButtonIcon?: IconDefinition
    alwaysHideCancelButton?: boolean
    children?: ReactNode
  }

export type ConfirmOptions =
  & {
    isDelete?: boolean
    title?: LanguageKeyOrText
    confirmText?: LanguageKeyOrText
    text: LanguageKeyOrText | ReactNode
    hideCancelButton?: boolean
    successCallback?: () => Promise<void>
    cancelCallback?: () => Promise<void>
    customButtons?: ButtonProps[]
  }
  & Record<string, unknown>

type ConfirmRootState = {
  confirm: ConfirmOptions | null
}

export class ConfirmRoot extends Component<ConfirmRootProps, ConfirmRootState> {
  private static ConfirmEvents = new EventEmitter<{
    'new': [ ConfirmOptions ]
    'cancel': []
  }>()

  public static cancelAll() {
    ConfirmRoot.ConfirmEvents.emit('cancel')
  }

  public static confirm(options: ConfirmOptions) {
    ConfirmRoot.ConfirmEvents.emit('new', options)
  }

  constructor(props: ConfirmRootProps) {
    super(props)
    this.state = {
      confirm: null,
    }

    this.handleNewConfirmEvent = this.handleNewConfirmEvent.bind(this)
    this.handleCancelEvent = this.handleCancelEvent.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  componentDidMount() {
    ConfirmRoot.ConfirmEvents.on('new', this.handleNewConfirmEvent)
    ConfirmRoot.ConfirmEvents.on('cancel', this.handleCancelEvent)
  }

  componentWillUnmount() {
    ConfirmRoot.ConfirmEvents.off('new', this.handleNewConfirmEvent)
    ConfirmRoot.ConfirmEvents.off('cancel', this.handleCancelEvent)
  }

  private handleNewConfirmEvent(confirm: ConfirmOptions) {
    this.setState({ confirm, })
  }

  private handleCancelEvent() {
    this.setState({ confirm: null, })
  }

  private getButtons(): ButtonProps[] {
    const { confirm, } = this.state

    if (!confirm) {
      return []
    }

    const actions: ButtonProps[] = confirm.customButtons || []
    if (!this.props.alwaysHideCancelButton && !confirm.hideCancelButton) {
      actions.push({
        light: true,
        id: this.props.cancelButtonId || 'confirm-cancel-button',
        text: this.props.defaultCancelButtonText || 'Cancel',
        icon: this.props.cancelButtonIcon,
        onClick: this.onClose,
      })
    }

    if (confirm.isDelete) {
      actions.push({
        color: 'danger',
        id: this.props.deleteButtonId || 'confirm-delete-button',
        text: confirm.confirmText || this.props.defaultDeleteButtonText || 'Delete',
        icon: this.props.deleteButtonIcon,
        onClick: this.onConfirm,
      })
    }
    else {
      actions.push({
        color: confirm.isDelete
          ? 'danger'
          : 'primary',
        id: this.props.confirmButtonId || 'confirm-confirm-button',
        text: confirm.confirmText || this.props.defaultConfirmButtonText || 'Confirm',
        icon: this.props.confirmButtonIcon,
        onClick: this.onConfirm,
      })
    }

    return actions
  }

  private onClose() {
    this.setState({ confirm: null, })
  }

  private onConfirm() {
    this.setState({ confirm: null, })
    this.state.confirm?.successCallback()
  }

  render() {
    return <>
      { this.props.children || Nothing }
      <Modal
        id={this.props.id || 'confirm-modal'}
        show={!!this.state.confirm}
        title={this.state.confirm?.title || this.props.defaultTitle}
        onClose={this.onClose}
        actions={this.getButtons()}
      >{
          this.state.confirm?.text
        }</Modal>
    </>
  }
}

export async function confirm(
  message: LanguageKeyOrText | ConfirmOptions,
  successCallback?: () => Promise<void>,
  cancelCallback?: () => Promise<void>,
) {
  return new Promise((accept, reject) => {
    if (typeof message === 'string') {
      ConfirmRoot.confirm({
        text: message,
        successCallback: async function confirmPromiseHandler() {
          await successCallback?.()
          accept(null)
        },
        cancelCallback: async function cancelPromiseHandler() {
          await cancelCallback?.()
          reject(
            new Error('CANCELLED'),
          )
        },
      })
      return
    }

    ConfirmRoot.confirm({
      ...message,
      successCallback: async function confirmPromiseHandler() {
        await message.successCallback?.()
        await successCallback?.()
        accept(null)
      },
      cancelCallback: async function cancelPromiseHandler() {
        await message.cancelCallback?.()
        await cancelCallback?.()
        reject(
          new Error('CANCELLED'),
        )
      },
    })
  })
}
