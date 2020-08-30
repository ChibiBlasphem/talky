import { useQuery, gql, QueryHookOptions } from '@apollo/client'
import { MessagesQuery } from './__generated__/MessagesQuery'

const MESSAGES_QUERY = gql`
  query MessagesQuery {
    messages {
      id
      content
    }
  }
`

export const useMessagesQuery = (options?: QueryHookOptions<MessagesQuery>) =>
  useQuery<MessagesQuery>(MESSAGES_QUERY, options)
