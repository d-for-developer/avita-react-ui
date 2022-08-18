import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import image1 from '../../../assets/product/UI/1.png';
import image2 from '../../../assets/product/UI/2.PNG';


function ProductFeature() {


    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());


    return (

        <ScrollContainer>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(50, 105), MoveOut(0, -200))}>
                    <img
                        className="d-block w-100 mt-4"
                        src={image1}
                        alt="First slide"
                    />
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                    <span style={{ fontSize: "40px" }}>Captivating multimedia experience </span>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={FadeUp}>
                    <img
                        className="d-block w-100 mt-4"
                        src={image2}
                        alt="First slide"
                    />
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                    <span style={{ fontSize: "40px" }}>
                        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
                        - I'm Dante Chun -
                        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                    </span>
                </div>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky())}>
                    <span style={{ fontSize: "40px" }}>Done</span>
                    <br />
                    <span style={{ fontSize: "30px" }}>
                        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
                    </span>
                </Animator>
            </ScrollPage>

        </ScrollContainer>
    )
}

export default ProductFeature