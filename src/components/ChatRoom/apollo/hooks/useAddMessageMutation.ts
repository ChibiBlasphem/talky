import { useMutation, gql, MutationHookOptions } from '@apollo/client'
import {
  AddMessageMutation,
  AddMessageMutationVariables,
} from './__generated__/AddMessageMutation'

const ADD_MESSAGE_MUTATION = gql`
  mutation AddMessageMutation($input: AddMessageInput!) {
    addMessage(input: $input) {
      id
      content
    }
  }
`

export const useAddMessageMutation = (
  options?: MutationHookOptions<AddMessageMutation, AddMessageMutationVariables>
) =>
  useMutation<AddMessageMutation, AddMessageMutationVariables>(
    ADD_MESSAGE_MUTATION,
    options
  )
