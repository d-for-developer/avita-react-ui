import React from 'react'
import HomeGrid from './grid/HomeGrid'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Subscribe from './newsletter/Subscribe'
import Slider from './slider/Slider'
import {SliderContent} from './slider/SliderContent'

function Home() {
  return (
    <>
      <Header />
      <Slider slides={SliderContent}/>
        <HomeGrid/>
        <Subscribe/>
      <Footer />
    </>
  )
}
export default Home;