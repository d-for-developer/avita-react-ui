import React from 'react'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Slider from './slider/Slider'
import {SliderContent} from './slider/SliderContent'

function Home() {
  return (
    <>
      <Header />
      <Slider slides={SliderContent}/>
      <Footer />
    </>
  )
}
export default Home;