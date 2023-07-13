import { gql } from "@apollo/client";

export const CART_DATA_FETCH_WITH_ID=gql`query Cart($cartId: ID!) {
  cart(id: $cartId) {
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
    lines(first: 100) {
      nodes {
        ... on CartLine {
          quantity
          id
          attributes {
            key
            value
          }
          merchandise {
            ... on ProductVariant {
              availableForSale
              barcode
              compareAtPrice {
                amount
                currencyCode
              }
              id
              image {
                altText
                id
                url
                width
              }
              price {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }
              sku
              title
              unitPrice {
                amount
                currencyCode
              }
              quantityAvailable
              product {
                isGiftCard
                id
                handle
                onlineStoreUrl
                productType
                tags
                title
                vendor
              }
            }
          }
        }
      }
    }
  }

}`