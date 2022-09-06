import React from 'react'
import ShopDetails from '../components/shopDetails'
import NavDetails from '../components/navDetails'
import FooterDetails from '../components/footerDetails'
import Pagination from '../components/Pagination'
const Shop = () => {
  return (
    <>
    <NavDetails/>
    <ShopDetails/>
    <FooterDetails/>
    <Pagination/>
    </>
  )
}

export default Shop