import React from 'react'
import HomeBanner from './banner/HomeBanner'
import TopBar from './layouts/TopBar'
import Header from './layouts/Header'
import FeatureGrid from './grid/FeatureGrid'
import ProductGrid from './grid/ProductGrid'
import BlogGrid from './grid/BlogGrid'
import BannerImg from './grid/BannerImg'
import Footer from './layouts/Footer'
import BadgeHome from './grid/BadgeHome'




export default function Home() {

  return (
    <>
    <TopBar/>
    <Header/>
    <HomeBanner/>
    <FeatureGrid/>
    <ProductGrid/>
    <BadgeHome/>
    <BannerImg/>
    <BlogGrid/>
    <Footer/>
    </>
  )
}
