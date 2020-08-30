/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnMessageAdded
// ====================================================

export interface OnMessageAdded_messageAdded {
  __typename: "Message";
  id: string;
  content: string;
}

export interface OnMessageAdded {
  messageAdded: OnMessageAdded_messageAdded | null;
}
