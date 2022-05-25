import React from 'react';
import Sidebar from '../layouts/Sidebar';
import AboutImg from '../../img/aboutus-min.png';
import IntelImg from '../../img/intel_Titanium_partner.jpg';
import ReddotImg from '../../img/reddot_winner_2021.png';


export default function About() {
  return (
    <div className='row'>
    <div className='col-md-2'>
      <Sidebar />
    </div>
    <div className='card col-md-10 p-4'>
      <div className='row'>
        <div className='col-md-4 about'>
          <h1 className='text-center mb-5'>About AVITA</h1>
          <p>At AVITA we believe in the wonder and power of the individual. We make premium technology products that not only fit your lifestyle but are representations of you.</p>
          <p>The AVITA product series which ranges from PC, smart home and IoT devices has come to realization based on three core values: Liberty, Diversity and Individualism for an exceptional and highly personal experience to the new generation of tech users.</p>
          <p>Your ideas, passions, personal style and what makes you uniquely you inspires us. And we believe that your choice in technology shouldn't define you, it should reflect you.</p>
          <p>Our team is comprised of talented individuals who, before starting up AVITA, worked in product development for some big name tech companies. It was their collective enthusiasm for outstanding design and meaningful technology that brought them together to form AVITA. You can learn more about the company behind AVITA here.</p>
          <p>In 2021, we got the Intel Titanium Partner Award, the top tier of the Intel’s alliance membership, in recognition of our extraordinary growth in AVITA business in Asian regions. Same year, AVITA LIBER V, has been awarded a highly-coveted international design award – the distinctive “Red Dot Award: Product Design 2021” which stands for superior design quality.</p>
       
          <img src={IntelImg} alt="Intel" className="m-4" style={{width:120}}/>
          <img src={ReddotImg} alt="RedDot" className="m-4" style={{width:220}}/>
          <p>As a team we truly live by our ethos to ‘live it up’ - this is part of our company DNA and what makes our products like no other.</p>

          </div>

        <div className='col-md-7'>
          <img src={AboutImg} alt="About" className="m-2"/>
        </div>

      </div>


    </div>
  </div>
  
  )
}
