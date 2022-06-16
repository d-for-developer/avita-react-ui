import React, { useState } from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { DesktopBanner } from './DesktopBanner';
import { MobileBanner } from './Mobile.Banner';
import { useTheme, useMediaQuery } from '@mui/material';


const Slider = ({slides}) => {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const [current, setCurrent] = useState(0)
  const length = slides.length

    
  const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
 
  }


  if(!Array.isArray(slides) || slides.length <=0 ){
        return null;
    }

   
  return (
    <section className='slider'>
        <ArrowCircleLeftOutlinedIcon className='left-arrow' onClick={prevSlide}/>
        <ArrowCircleRightOutlinedIcon className='right-arrow' onClick={nextSlide} />

        {(isMatch?MobileBanner:DesktopBanner).map((slide, index)=>{
            return(
                <div className={ index === current ? 'slide active' : 'slide' } key = {index}>
                {index === current && (<img src={`${slide.image}?w=1920&fit=crop&auto=format&dpr=1`} alt='Home Slider' className='sliderImg'/>)}
                </div>
            )
        })}
    </section>
  )
}

export default Slider