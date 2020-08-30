import styled from 'styled-components'

export const MessageItem = styled.li`
  padding: 8px;
  min-height: 40px;
`

export const MessagesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const MessagesContainer = styled.div`
  grid-area: messages-list;
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`

export const ChatRoomElement = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas:
    'messages-list'
    'message-box';
`
