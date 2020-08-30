import React, { useEffect } from 'react'
import {
  ChatRoomElement,
  MessagesContainer,
  MessagesList,
  MessageItem,
} from './styles'
import { MessageBox } from './components/MessageBox'
import { useMessagesQuery } from './apollo/hooks/useMessagesQuery'
import { MESSAGE_ADDED_SUBSCRIPTION } from './apollo/documents/messageAdded'
import { useAddMessageMutation } from './apollo/hooks/useAddMessageMutation'
import { OnMessageAdded } from './apollo/documents/__generated__/OnMessageAdded'

export const ChatRoom = () => {
  const { data, loading, subscribeToMore } = useMessagesQuery()
  const [addMessage] = useAddMessageMutation()

  /* Subscribing to message add */
  useEffect(() => {
    subscribeToMore<OnMessageAdded>({
      document: MESSAGE_ADDED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData) return prev
        const message = subscriptionData.data.messageAdded
        return {
          messages: [...prev.messages, message],
        }
      },
    })
  }, [])

  const sendMessage = (content: string) => {
    addMessage({
      variables: {
        input: { content },
      },
    })
  }

  if (loading || !data) {
    return <div>Loading</div>
  }

  const { messages } = data

  return (
    <ChatRoomElement>
      <MessagesContainer>
        <MessagesList>
          {messages.map((message: any) => (
            <MessageItem key={message.id}>{message.content}</MessageItem>
          ))}
        </MessagesList>
      </MessagesContainer>
      <MessageBox onValid={sendMessage} />
    </ChatRoomElement>
  )
}
