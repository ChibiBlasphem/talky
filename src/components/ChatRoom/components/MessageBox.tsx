import React, { useState, ChangeEvent } from 'react'
import { useKeyboardEvent } from 'shared/hooks/useKeyboardEvent'
import { MessageBoxElement, TextBox } from './MessageBox.styles'

interface ChatBoxProps {
  onValid: (content: string) => void
}

export const MessageBox = ({ onValid }: ChatBoxProps) => {
  const [message, setMessage] = useState<string>('')
  const handleValidation = useKeyboardEvent({
    Enter: ({ shiftKey }, event) => {
      if (shiftKey) return

      event.preventDefault()
      if (message.length > 0) {
        onValid(message)
        setMessage('')
      }
    },
  })
  const onChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(target.value)
  }

  return (
    <MessageBoxElement>
      <TextBox
        value={message}
        onChange={onChange}
        onKeyPress={handleValidation}
      ></TextBox>
    </MessageBoxElement>
  )
}
