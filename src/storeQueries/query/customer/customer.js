import { gql } from "@apollo/client";
import { CUSTOMER_DATA } from '../../fragment/customer/customer'
export const SET_CUSTOMER_DATA=gql`
${CUSTOMER_DATA}
query Customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ...CustomerData
    }
  }

`