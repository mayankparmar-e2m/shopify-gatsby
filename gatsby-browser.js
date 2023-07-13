import { StoreProvider } from './src/context/storeContext/store-context'
import React from 'react'
import './src/styles/global.css'
export const wrapRootElement = ({ element }) => (
    <StoreProvider>{element}</StoreProvider>
  )
  