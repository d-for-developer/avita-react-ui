import React from 'react'
import Header from '../../layouts/Header'
import FooterTop from '../../layouts/FooterTop'
import Footer from '../../layouts/Footer'
import FooterMiddle from '../../layouts/FooterMiddle'
import Copyright from '../../layouts/Copyright'
import TopBar from '../../layouts/TopBar'
import ProductBanner from './Section/ProductBanner'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SideDrawer from '../../layouts/SideDrawer'
import ProductFeature from './Section/ProductFeature'



const Domus = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <div>
      {matches ? <></> : <TopBar />}
      {matches ? <SideDrawer /> : <Header />}
      <ProductBanner />
      <ProductFeature />
      <FooterTop />
      <FooterMiddle />
      {matches ? <></> : <Footer />}
      <Copyright />
    </div>
  )
}

export default Domus