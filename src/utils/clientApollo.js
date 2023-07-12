const  { ApolloClient, InMemoryCache, createHttpLink }= require( '@apollo/client');
const  { setContext } =require( "@apollo/client/link/context");
const httpLink = createHttpLink({ uri: "https://e2m-testing-store.myshopify.com/api/2023-04/graphql.json" })
const middlewareLink = setContext(() => ({
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.GATSBY_STOREFRONT_ACCESS_TOKEN
  }
}))
 const clientApollo = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
})
module.exports = clientApollo