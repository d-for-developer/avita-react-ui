import React from 'react'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn
} from "react-scroll-motion";
import image11 from '../../../assets/product/Wristo/UI/11.png'
import image12 from '../../../assets/product/Wristo/UI/12.png'
import image13 from '../../../assets/product/Wristo/UI/13.png'
import image14 from '../../../assets/product/Wristo/UI/14.png'
import image15 from '../../../assets/product/Wristo/UI/15.png'
import image16 from '../../../assets/product/Wristo/UI/16.png'
import image17 from '../../../assets/product/Wristo/UI/17.png'
import image18 from '../../../assets/product/Wristo/UI/18.png'
import image19 from '../../../assets/product/Wristo/UI/19.png'
import image20 from '../../../assets/product/Wristo/UI/20.png'




function ProductFeature() {


    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
<div className='p-3 mb-2 bg-dark text-white'>
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(50, 90), MoveOut(0, -300))}>
          <span style={{ fontSize: "3em", color: "white" }}>
            {`NOVITA Present`}
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <span
            style={{
              fontSize: "2em",
              color: "white"
            }}
          >
            {`WRISTO SMART WATCH SERIES`}
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <span
            style={{
              fontSize: "3em",
              color: "white",
              textShadow: "2px 2px #33ff33"
            }}
          >
            {`Unbeatable Performance`}
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "3.5em", color: "#ffff99" }}>Stays On for You</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
      <Animator animation={FadeUp}>
          <img
        className="d-block w-100"
        src={image11}
        alt="1.9” Edge-to-Edge" />

        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#db4dff" }}>1.9” Edge-to-Edge </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={6}>
        <Animator animation={FadeIn}>
          <img
        className="d-block w-100"
        src={image12}
        alt="UHD TrueHue™ display" />

        </Animator>
      </ScrollPage>
      <ScrollPage page={7}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#db4dff" }}>UHD TrueHue™ display</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={8}>
        <Animator animation={FadeIn}>
          <img
        className="d-block w-100"
        src={image13}
        alt="Always-On Enabled" />

        </Animator>
      </ScrollPage>
      <ScrollPage page={9}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#db4dff" }}>
          Always-On Enabled
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={10}>
        <Animator animation={FadeIn}>
          <img
        className="d-block w-100"
        src={image14}
        alt="Wireless Charging with SnapCharge™" />

        </Animator>
      </ScrollPage>
      <ScrollPage page={11}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -10))}>
          <span style={{ fontSize: "1.5em", color: "#db4dff" }}>Wireless Charging with SnapCharge™</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={12}>
        <Animator
          animation={batch(Fade(), Sticky(), MoveOut(0, -10))}
        ></Animator>
      </ScrollPage>
  
      <ScrollPage page={13}>
        <Animator animation={FadeIn}>
          <img
        className="d-block w-100"
        src={image15}
        alt="Bluetooth voice calling" />

        </Animator>
      </ScrollPage>
      <ScrollPage page={14}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#61DBFB" }}>
          Bluetooth voice calling
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={15}>
        <Animator animation={FadeIn}>
          <img
        className="d-block w-100"
        src={image16}
        alt="AI-powered health tracking" />

        </Animator>
      </ScrollPage>
      <ScrollPage page={16}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#61DBFB" }}>AI-powered health tracking</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={17}>
        <Animator animation={FadeIn}>
          <img
        className="d-block w-100"
        src={image17}
        alt="Voice Assistants" />

        </Animator>
      </ScrollPage>
      <ScrollPage page={18}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#61DBFB" }}>Voice Assistants</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={19}>
        <Animator animation={FadeIn}>
          <img
        className="d-block w-100"
        src={image18}
        alt="500+ watch faces" />

        </Animator>
      </ScrollPage>
      <ScrollPage page={20}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#61DBFB" }}>500+ watch faces</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={21}>
        <Animator animation={FadeIn}>
          <img
        className="d-block w-100"
        src={image19}
        alt="Up to 15 Days Battery" />

        </Animator>
      </ScrollPage>
      <ScrollPage page={22}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#61DBFB" }}>Up to 15 Days Battery</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={23}>
        <Animator
          animation={batch(Fade(), Sticky(), MoveOut(0, -10))}
        ></Animator>
      </ScrollPage>
   
   
      <ScrollPage page={24}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#00ff00" }}>Segment’s Largest</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={25}>
        <Animator animation={FadeIn}>
          <img
        className="d-block w-100"
        src={image20}
        alt="No-Bezel Display" />

        </Animator>
      </ScrollPage>
      <ScrollPage page={26}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -10))}>
          <span style={{ fontSize: "1.5em", color: "#00ff00" }}>
          No-Bezel Display
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={27}>
        <Animator
          animation={batch(Fade(), Sticky(), MoveOut(0, -10))}
        ></Animator>
      </ScrollPage>
      <ScrollPage page={28}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "1em", color: "white" }}>We are at your Command!</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={29}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "2em", color: "white" }}>NOVITA WRISTO</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={30}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "2em", color: "white" }}>
            SMART WATCH SERIES
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={31}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "5em", color: "white" }}>WRISTO</span>
        </Animator>
      </ScrollPage>
     
    </ScrollContainer>
    </div>
    )
}

export default ProductFeature