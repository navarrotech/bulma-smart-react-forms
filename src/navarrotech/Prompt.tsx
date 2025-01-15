// Copyright © 2024 Navarrotech

// Core

// Typescript
import type { ChildProps } from '@/types'

export type PromptRootProps =
  & ChildProps
  & {

  }

export type PromptSettings = {
  title?: LanguageKeyOrText
  description?: LanguageKeyOrText
  onCancelled?: () => void
}

export function PromptRoot(props: PromptRootProps) {
  return <>{
    props.children
  }</>
}


// // Typescript
// import type { ActionButton } from '@/types'

// // Redux
// import { dispatch, useSelector } from '@/store'

// // Elements
// import { Modal } from '@/elements/Modal'
// import { DynamicForms } from '@/elements/DynamicForms'
// import { promptDialog } from '@/modules/core/reducer'

// // Misc
// import { useTranslation } from 'react-i18next'

// // This is always rendered at the root of the application
// // So whatever it returns is always rendered and it's always mounted
// export function PromptWrapper() {
//   const { t, } = useTranslation()

//   const prompt = useSelector((state) => state.core.prompt)

//   function close() {
//     dispatch(
//       promptDialog(null),
//     )
//   }

//   // If the prompt obj doesn't exist, return nothing
//   if (!prompt) {
//     return null
//   }

//   const actions: ActionButton[] = [
//     {
//       text: t('actions.cancel'),
//       closeAfterOnClick: true,
//     },
//     {
//       text: t('actions.'),
//       closeAfterOnClick: false,
//       onClick: () => {

//       },
//     },
//   ]

//   // TODO: Build this out!

//   return <Modal
//     id='prompt-modal'
//     show={true}
//     title={prompt.title || 'prompt.default-title'}
//     actions={actions}
//     onClose={close}
//   >
//     <DynamicForms
//       use={prompt.form}
//     />
//   </Modal>
// }
