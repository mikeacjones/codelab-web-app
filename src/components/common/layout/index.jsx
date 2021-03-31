import React from 'react'
import { Global } from './styles'

export const Layout = ({ children }) => (
  <>
    <Global />
    {children}
  </>
)