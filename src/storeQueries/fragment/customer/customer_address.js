import { gql } from "@apollo/client";

export const CUSTOMER_ADDRESS=gql`
fragment CustomerAddress on MailingAddress{
    address1
    address2
    city
    company
    country
    countryCodeV2
    firstName
    formatted
    formattedArea
    id
    lastName
    name
    phone
    province
    provinceCode
    zip
}
`