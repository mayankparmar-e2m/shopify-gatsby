import { gql } from "@apollo/client";

export const CUSTOMER_RECOVER=gql`
mutation CustomerRecover($email: String!) {
  customerRecover(email: $email) {
    customerUserErrors {
      code
      field
      message
    }
  }
}
`