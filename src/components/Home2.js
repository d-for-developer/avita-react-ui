import React from 'react'
import HomeGrid from './grid/HomeGrid'
import Footer from './layouts/Footer-old'
import Header from './layouts/Header-old'
import Subscribe from './newsletter/Subscribe'
import Slider from './banner/Slider'
import { DesktopBanner } from './slider/DesktopBanner'
import { MobileBanner } from './slider/Mobile.Banner'
import { useTheme, useMediaQuery } from '@mui/material';



function Home() {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <>
      <Header />
      <Slider slides={isMatch?MobileBanner:DesktopBanner}/>
      <HomeGrid />
      <Subscribe />

      <Footer />

    </>
  )
}
export default Home;