import React from 'react'
import Header from '../../layouts/Header'
import FooterTop from '../../layouts/FooterTop'
import Footer from '../../layouts/Footer'
import FooterMiddle from '../../layouts/FooterMiddle'
import Copyright from '../../layouts/Copyright'
import TopBar from '../../layouts/TopBar'
import ProductBanner from '../../banner/ProductBanner'


const Satus = () => {
  return (
    <div>    
        <TopBar/>
    <Header />
    <ProductBanner />
    <FooterTop />
      <FooterMiddle />
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default Satus