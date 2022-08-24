import React from 'react'
import HomeBanner from './banner/HomeBanner'
// import FeatureGrid from './grid/FeatureGrid'
// import ProductGrid from './grid/ProductGrid'
// import BlogGrid from './grid/BlogGrid'
// import BannerImg from './grid/BannerImg'
// import BadgeHome from './grid/BadgeHome'
// import FooterTop from './layouts/FooterTop'
// import Footer from './layouts/Footer'
import FooterMiddle from './layouts/FooterMiddle'
import Copyright from './layouts/Copyright'
// import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SideDrawer from './layouts/SideDrawer';
// import VideoSection from './grid/VideoSection';
import CountDownTimer from './layouts/CountDownTimer'


export default function Home() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));


  return (
     <>
      {/* { matches?<></>:<TopBar/> }  */}
      {matches?<SideDrawer/>:<Header/> } 
      <HomeBanner />
      <CountDownTimer/>
      {/* <BadgeHome /> */}
      {/* <ProductGrid /> */}
      {/* <VideoSection/> */}
      {/* <FeatureGrid /> */}
      {/* <BannerImg /> */}
      {/* <BlogGrid /> */}
      {/* <FooterTop /> */}
      <FooterMiddle />
      {/* {matches?<></>:<Footer/>}  */}
      <Copyright/>
    </>
  )
}