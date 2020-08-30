/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddMessageInput } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddMessageMutation
// ====================================================

export interface AddMessageMutation_addMessage {
  __typename: "Message";
  id: string;
  content: string;
}

export interface AddMessageMutation {
  addMessage: AddMessageMutation_addMessage;
}

export interface AddMessageMutationVariables {
  input: AddMessageInput;
}
