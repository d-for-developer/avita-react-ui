import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
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
            <Animator animation={ZoomInScrollOut}>
                    <span style={{ fontSize: "40px" }}>Captivating multimedia experience </span>
                </Animator>
            </ScrollPage>
            

        </ScrollContainer>
    )
}

export default ProductFeature