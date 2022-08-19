import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import image1 from '../../../assets/product/Wristo/UI/1.png';
import image2 from '../../../assets/product/Wristo/UI/2.png';
import image3 from '../../../assets/product/Wristo/UI/3.png';
import image4 from '../../../assets/product/Wristo/UI/4.png';
import image5 from '../../../assets/product/Wristo/UI/5.png';
import image6 from '../../../assets/product/Wristo/UI/6.png';


function ProductFeature() {


    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());


    return (

        <ScrollContainer>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(50, 130), MoveOut(0, -300))}>
                    <img
                        className="d-block w-100 mt-4 p-4"
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
                <Animator animation={batch(Fade(), Sticky(50, 130), MoveOut(0, -300))}>
                    <img
                        className="d-block w-100 mt-4 p-4"
                        src={image3}
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
                        src={image4}
                        alt="First slide"
                    />
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(50, 130), MoveOut(0, -300))}>
                    <img
                        className="d-block w-100 mt-4 p-4"
                        src={image5}
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
                        src={image6}
                        alt="First slide"
                    />
                </Animator>
            </ScrollPage>

        </ScrollContainer>
    )
}

export default ProductFeature