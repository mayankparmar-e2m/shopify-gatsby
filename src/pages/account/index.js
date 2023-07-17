import React from 'react'
import Layout from '../../components/global/Layout'
import { AccountProvider } from '../../context/accountContext/account-context'
import AccountDetail from '../../components/account/AccountDetail'

export default function AccountPage() {
  return (    <Layout>
      <AccountProvider>
      <div><AccountDetail/></div>
      </AccountProvider>
   
    </Layout>
 
  )
}
