import { gql } from "@apollo/client";
import { CUSTOMER_ORDER } from "./customer_order";
import { CUSTOMER_ADDRESS } from "./customer_address";

export const CUSTOMER_DATA=gql`
${CUSTOMER_ORDER}
${CUSTOMER_ADDRESS}
fragment CustomerData on Customer{
    acceptsMarketing
    createdAt
    displayName
    email
    firstName
    id
    lastName
    phone
    tags
    updatedAt
    addresses(first: 15) {
        nodes {
       ...CustomerAddress
        }
    }
    defaultAddress {
        ...CustomerAddress  
    }
    orders(first: 100) {
        nodes {
            ...CustomerOrder
        }
    }
}
`