import { KeyboardEvent } from 'react'
import { pick } from 'shared/utils/pick'

interface ModifierState {
  altKey: boolean
  ctrlKey: boolean
  metaKey: boolean
  shiftKey: boolean
}

type KeyConfig<T> = {
  [k: string]: (modifiers: ModifierState, event: KeyboardEvent<T>) => void
}

export function useKeyboardEvent<T = Element>(keyConfig: KeyConfig<T>) {
  return function (event: KeyboardEvent<T>) {
    const { key } = event
    const callback = keyConfig[key]

    if (!callback) return

    callback(pick(event, ['altKey', 'ctrlKey', 'metaKey', 'shiftKey']), event)
  }
}
