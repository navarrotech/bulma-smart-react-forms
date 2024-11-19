// Copyright © 2024 Navarrotech

// Core
import { Component } from 'react'
import EventEmitter from 'events'

// Typescript
import type { ReactNode } from 'react'
import type { LanguageKeyOrText, BulmaColor, SetTimeout } from '@/types'

// UI
import { Message } from '@/components/Message'
import { Notification } from '@/elements/Notification'
import { TranslationComponent } from '@/utility/translation'

// Misc
import { Nothing } from '@/constants'
import { getColorful } from '@/utility/color'

export type ToastsRootProps =
  & {
    children?: ReactNode
  }
  & Record<string, unknown>

export type ToastMessage = {
  id?: string | number
  color?: BulmaColor
  title?: LanguageKeyOrText
  message: LanguageKeyOrText
  buttons?: ReactNode[]
  hideProgressBar?: boolean
  hideCloseButton?: boolean
  durationMs?: number
}

type ToastRootState = {
  toasts: Toast[]
}

const defaultColor: BulmaColor = 'primary' as const
const defaultToastTimeMs: number = 10_000 as const
const toastAnimationOutTimeMs: number = 500 as const

export class ToastsRoot extends Component<ToastsRootProps, ToastRootState> {
  static readonly ToastEvents: EventEmitter<{
    'new': [ Toast ]
    'expiring': [ Toast ]
    'expired': [ Toast ]
  }> = new EventEmitter()

  constructor(props: ToastsRootProps) {
    super(props)

    this.state = {
      toasts: [],
    }

    this.onNewToast = this.onNewToast.bind(this)
    this.onExpiredToast = this.onExpiredToast.bind(this)
  }

  componentDidMount(): void {
    ToastsRoot.ToastEvents.on('new', this.onNewToast)
    ToastsRoot.ToastEvents.on('expired', this.onExpiredToast)
  }

  componentWillUnmount(): void {
    ToastsRoot.ToastEvents.off('new', this.onNewToast)
    ToastsRoot.ToastEvents.off('expired', this.onExpiredToast)
  }

  private onNewToast(toast: Toast) {
    this.setState({
      toasts: [
        ...this.state.toasts,
        toast,
      ],
    })
  }

  private onExpiredToast(toast: Toast) {
    this.setState({
      toasts: this.state.toasts.filter((t) => t !== toast),
    })
  }

  render() {
    return <>
      <div className='toasts'>{
        this.state.toasts.map((toast) => <ToastElement key={toast.id} toast={toast} />)
      }</div>
      { this.props.children || Nothing }
    </>
  }
}

type ToastElementProps = {
  toast: Toast
}

type ToastElementState = {
  animating: boolean
  expiring: boolean
}

class ToastElement extends TranslationComponent<ToastElementProps, ToastElementState> {
  constructor(props: ToastElementProps) {
    super(props)

    this.state = {
      animating: false,
      expiring: false,
    }

    this.onExpiring = this.onExpiring.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()

    ToastsRoot.ToastEvents.on('expiring', this.onExpiring)
    this.props.toast._emitMounted()

    window.requestAnimationFrame(() => {
      this.setState({ animating: true, })
    })
  }

  componentWillUnmount() {
    super.componentWillUnmount()
    ToastsRoot.ToastEvents.off('expiring', this.onExpiring)
  }

  private onExpiring(toast: Toast) {
    if (toast === this.props.toast) {
      this.setState({ expiring: true, })
    }
  }

  private getProgressbar() {
    const { toast, } = this.props
    const { animating, } = this.state

    if (!toast?.options) {
      return Nothing
    }

    const {
      durationMs = defaultToastTimeMs,
      color = defaultColor,
      hideProgressBar = false,
    } = toast.options

    if (hideProgressBar || durationMs <= 0) {
      return Nothing
    }

    // TODO: Upgrade to <Progressbar /> component once made
    return <div
      key='toast-progressbar'
      className='multi-progress is-small'
    >
      <div
        className={`progress-item is-${color}`}
        style={{
          transition: `width ${durationMs + 500}ms linear`,
          width: animating ? '0%' : '100%',
        }}
      />
    </div>
  }

  private getButtons(): ReactNode[] {
    return this.props.toast?.options?.buttons
  }

  render() {
    const { toast, } = this.props
    const { expiring, } = this.state

    if (!toast?.options) {
      return Nothing
    }

    const {
      title,
      message,
      color = defaultColor,
      hideCloseButton,
    } = toast.options

    const { className: colorClassname, style, } = getColorful({ color, })

    const classes: string = [
      'toast',
      colorClassname,
      expiring && 'is-expiring',
    ].filter(Boolean).join(' ')

    if (title) {
      return <Message
        id={toast.id}
        key={toast.id}
        color={color}
        className={classes}
        header={title}
        showDelete={!hideCloseButton}
        onDelete={() => toast.remove()}
        style={style}
      >
        <p>{
          this.translate(message)
        }</p>
        { this.getProgressbar() }
        { this.getButtons() }
      </Message>
    }

    return <Notification
      id={toast.id}
      key={toast.id}
      color={color}
      className={classes}
      showDelete={!hideCloseButton}
      onDelete={() => toast.remove()}
      style={style}
    >
      <p>{
        this.translate(message)
      }</p>
      { this.getProgressbar() }
      { this.getButtons() }
    </Notification>
  }
}

export class Toast {
  public readonly id: string
  public readonly startTime: number
  public readonly expiringTimeout: SetTimeout
  public readonly expireTimeout: SetTimeout
  public readonly options: ToastMessage
  private callbacks: (() => void)[] = []

  constructor(toast: LanguageKeyOrText | ToastMessage) {
    this.startTime = Date.now()

    if (typeof toast === 'string') {
      this.id = String(Date.now())
      this.options = {
        id: this.id,
        message: toast,
        color: defaultColor,
        durationMs: defaultToastTimeMs,
      }
    }
    else {
      this.id = String(toast.id) || String(Date.now())
      this.options = {
        color: defaultColor,
        durationMs: defaultToastTimeMs,
        ...toast,
        id: this.id,
      }
    }

    if (this.options.durationMs > 0) {
      this.expiringTimeout = setTimeout(() => {
        this.onExpiring()
      }, this.options.durationMs - toastAnimationOutTimeMs)

      this.expireTimeout = setTimeout(() => {
        this.onExpired()
      }, this.options.durationMs)
    }

    ToastsRoot.ToastEvents.emit('new', this)
  }

  // Abstract method:
  public onMounted(callback: () => void) {
    this.callbacks.push(callback)
    return () => {
      this.callbacks = this.callbacks.filter((cb) => cb !== callback)
    }
  }

  public _emitMounted() {
    this.callbacks.forEach((cb) => cb())
    this.callbacks = []
  }

  public onExpiring() {
    ToastsRoot.ToastEvents.emit('expiring', this)
  }

  public onExpired() {
    ToastsRoot.ToastEvents.emit('expired', this)
  }

  public remove() {
    clearTimeout(this.expiringTimeout)
    clearTimeout(this.expireTimeout)
    this.onExpired()
  }
}

export function newToast(message: LanguageKeyOrText | ToastMessage) {
  return new Toast(message)
}
