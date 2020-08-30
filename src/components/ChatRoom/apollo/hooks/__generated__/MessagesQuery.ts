/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MessagesQuery
// ====================================================

export interface MessagesQuery_messages {
  __typename: "Message";
  id: string;
  content: string;
}

export interface MessagesQuery {
  messages: (MessagesQuery_messages | null)[];
}
