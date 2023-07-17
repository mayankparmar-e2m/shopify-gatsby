import { gql } from "@apollo/client";

export const  CREATE_CUSTOMER_ACCESSTOKEN=gql`
mutation CustomerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        message
        field
        code
      }
    }
  }
`