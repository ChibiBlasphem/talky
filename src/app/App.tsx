import React from 'react'
import { ChatRoom } from 'components/ChatRoom'
import { AppGlobalStyles } from './App.styles'

export const App = () => {
  return (
    <>
      <AppGlobalStyles />
      <div>
        <ChatRoom />
      </div>
    </>
  )
}
