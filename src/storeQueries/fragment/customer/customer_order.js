import { gql } from "@apollo/client";
import { CUSTOMER_ADDRESS } from "./customer_address";

export const CUSTOMER_ORDER=gql`
${CUSTOMER_ADDRESS}
fragment CustomerOrder on Order{
        billingAddress {
          ...CustomerAddress
        }
        canceledAt
        currencyCode
        currentSubtotalPrice {
          amount
          currencyCode
        }
        currentTotalPrice {
          amount
          currencyCode
        }
        currentTotalTax {
          amount
          currencyCode
        }
        customAttributes {
          key
          value
        }
        customerUrl
        email
        financialStatus
        fulfillmentStatus
        id
        name
        orderNumber
        originalTotalPrice {
          amount
          currencyCode
        }
        phone
        processedAt
        shippingAddress {
            ...CustomerAddress
        }
        statusUrl
        subtotalPrice {
          amount
          currencyCode
        }
        totalPrice {
          amount
          currencyCode
        }
}
`