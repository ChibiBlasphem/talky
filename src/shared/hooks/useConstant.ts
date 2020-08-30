import { useRef } from 'react'

export function useConstant<T>(generator: () => T) {
  const value = useRef<T>()

  if (!value.current) {
    value.current = generator()
  }

  return value.current
}
