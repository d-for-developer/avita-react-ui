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
import { FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";


function ProductFeature() {


    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
<div className='p-3 mb-2 bg-dark text-white'>
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -400))}>
          <span style={{ fontSize: "3em", color: "white" }}>
            {`var Hey, There! 🖐️ `}
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
            {`I'm Ayush Aryal 😀 ;`}
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
            {`=> a web developer ⛅️`}
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "3.5em", color: "#ffff99" }}>Skills ?</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={FadeIn}>
          <span style={{ fontSize: "2em", color: "white" }}>
            Node Js <FaNodeJs />
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#db4dff" }}>Express</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={6}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#db4dff" }}>API</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={7}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#db4dff" }}>
            Microservices
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={8}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -10))}>
          <span style={{ fontSize: "1.5em", color: "#db4dff" }}>npm</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={9}>
        <Animator
          animation={batch(Fade(), Sticky(), MoveOut(0, -10))}
        ></Animator>
      </ScrollPage>
      <ScrollPage page={10}>
        <Animator animation={FadeIn}>
          <span style={{ fontSize: "2em", color: "white" }}>
            Reactjs <FaReact />
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={11}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#61DBFB" }}>
            HTML + CSS
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={12}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#61DBFB" }}>hooks</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={13}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#61DBFB" }}>jsx</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={14}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#61DBFB" }}>js + ES6</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={15}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#61DBFB" }}>Redux</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={16}>
        <Animator
          animation={batch(Fade(), Sticky(), MoveOut(0, -10))}
        ></Animator>
      </ScrollPage>
      <ScrollPage page={17}>
        <Animator animation={FadeIn}>
          <span style={{ fontSize: "2em", color: "white" }}>
            MongoDB <DiMongodb />
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={18}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
          <span style={{ fontSize: "1.5em", color: "#00ff00" }}>Queries</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={19}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -10))}>
          <span style={{ fontSize: "1.5em", color: "#00ff00" }}>
            Aggregation and Pipelines
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={20}>
        <Animator
          animation={batch(Fade(), Sticky(), MoveOut(0, -10))}
        ></Animator>
      </ScrollPage>
      <ScrollPage page={21}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "1em", color: "white" }}>known as</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={22}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "2em", color: "white" }}>MERN Stack</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={23}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "2em", color: "white" }}>
            Lookout for a ...
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={24}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "5em", color: "white" }}>Job</span>
        </Animator>
      </ScrollPage>
     
    </ScrollContainer>
    </div>
    )
}

export default ProductFeature