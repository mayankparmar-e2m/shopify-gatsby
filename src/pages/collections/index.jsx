import { graphql } from 'gatsby'
import React from 'react'

export default function index({data}) {
  return (
    <div>index</div>
  )
}
export const query = graphql`
	{
		allShopifyProduct {
			nodes {
				title
				handle
				variants {
        	    shopifyId
               	}
				priceRangeV2 {
					maxVariantPrice {
						amount
					}
				}
				description
				featuredImage {
				   src
                   gatsbyImageData
				}
			}
		}
	}
`