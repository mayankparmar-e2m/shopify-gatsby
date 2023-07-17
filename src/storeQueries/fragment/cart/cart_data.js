import { gql } from "@apollo/client";

export const  CART_DATA=gql`
   fragment CartData on Cart{
    attributes {
        key
        value
      }
      buyerIdentity {
        email
        phone
      }
      checkoutUrl
      cost {
        checkoutChargeAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        subtotalAmountEstimated
        totalAmount {
          amount
          currencyCode
        }
        totalAmountEstimated
        totalDutyAmountEstimated
        totalTaxAmountEstimated
      }
      createdAt
      discountCodes {
        applicable
        code
      }
      id
      note
      totalQuantity
      updatedAt
  
   }
`