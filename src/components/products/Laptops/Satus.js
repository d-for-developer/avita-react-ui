import React from 'react'
import HomeBanner from '../../banner/HomeBanner'
import Header from '../../layouts/Header'
import FooterTop from '../../layouts/FooterTop'
import Footer from '../../layouts/Footer'
import FooterMiddle from '../../layouts/FooterMiddle'
import Copyright from '../../layouts/Copyright'
import TopBar from '../../layouts/TopBar'


const Satus = () => {
  return (
    <div>    
        <TopBar/>
    <Header />
    <HomeBanner />
    <FooterTop />
      <FooterMiddle />
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default Satus