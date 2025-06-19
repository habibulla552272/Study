import React from 'react'
import Navebar from '../commponent/Navebar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
   <>
   <Navebar />
   <Outlet />
   
   </>
  )
}

export default RootLayout
