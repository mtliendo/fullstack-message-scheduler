/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $condition: ModelMessageConditionInput
  $input: CreateMessageInput!
) {
  createMessage(condition: $condition, input: $input) {
    createdAt
    deliveryDate
    email
    id
    message
    owner
    timezone
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const createMessageSchedule = /* GraphQL */ `mutation CreateMessageSchedule(
  $deliveryDate: String!
  $email: AWSEmail!
  $message: String!
  $timezone: String!
) {
  createMessageSchedule(
    deliveryDate: $deliveryDate
    email: $email
    message: $message
    timezone: $timezone
  ) {
    message
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageScheduleMutationVariables,
  APITypes.CreateMessageScheduleMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $condition: ModelMessageConditionInput
  $input: DeleteMessageInput!
) {
  deleteMessage(condition: $condition, input: $input) {
    createdAt
    deliveryDate
    email
    id
    message
    owner
    timezone
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $condition: ModelMessageConditionInput
  $input: UpdateMessageInput!
) {
  updateMessage(condition: $condition, input: $input) {
    createdAt
    deliveryDate
    email
    id
    message
    owner
    timezone
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
