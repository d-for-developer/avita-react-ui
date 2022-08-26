import React from 'react'
import Header from '../../layouts/Header'
// import FooterTop from '../../layouts/FooterTop'
// import Footer from '../../layouts/Footer'
import FooterMiddle from '../../layouts/FooterMiddle'
import Copyright from '../../layouts/Copyright'
// import TopBar from '../../layouts/TopBar'
import ProductBanner from './Section/ProductBanner'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SideDrawer from '../../layouts/SideDrawer'
import ProductFeatureDark from './Section/ProductFeatureDark'
import ProductFeatureLight from './Section/ProductFeatureLight'
import ProductSpecCard from './Section/ProductSpecCard'


function Wristio2() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      {/* {matches ? <></> : <TopBar />} */}
      {matches ? <SideDrawer /> : <Header />}
      <ProductBanner />
      <ProductFeatureDark />
      <ProductSpecCard/>
      <ProductFeatureLight/>
      {/* <FooterTop /> */}
      <FooterMiddle />
      {/* {matches ? <></> : <Footer />} */}
      <Copyright />
    </div>
  )
}

export default Wristio2