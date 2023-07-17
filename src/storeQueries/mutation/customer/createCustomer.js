import { gql } from "@apollo/client";
import { CUSTOMER_DATA } from "../../fragment/customer/customer";

export const CUSTOMER_CREATE=gql`
${CUSTOMER_DATA}
mutation CustomerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        ...CustomerData
      }
    }
  }
`