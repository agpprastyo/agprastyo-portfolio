// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line
import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {

} from 'swiper';
import {Navigation} from "swiper/modules";

// install Swiper modules
SwiperCore.use([Navigation]);




const Projects = () => {

    return (
        <div className="glass rounded-3xl  lg:w-3/4 lg:mx-auto w-auto mx-4">

        <div className="">
            <div className="py-12 lg:px-4 sm:mx-2 mx-4 flex lg:flex-row flex-col items-center  justify-between  ">
                <div className="   flex flex-col justify-start items-start ">
                    <h1 className="text-white text-xl md:text-2xl xl:text-4xl font-semibold leading-6 xl:leading-10">A platform
                        built with you in <span className="text-blue-700">mind</span>.</h1>
                    <p className="mt-4 text-base leading-normal text-white">It is a long established fact that a
                        reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <button
                        className="w-full md:w-auto text-center mt-6 bg-blue-700 hover:-translate-y-1 ease-in-out transition duration-300 rounded">
                        <p className="text-base py-4 px-6 font-medium leading-none text-white">Find your industry</p>
                    </button>
                </div>
                <div className="mainDiv  ">
                    <div className="h-5 mt-6 mb-4 md:mt-0 lg:mb-0 flex justify-end items-end space-x-6 ">
                        <button aria-label="back" className=" swiper-button-prev">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
                                    viewBox="0 0 24 24" stroke="#ffff">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M15.25 18.75L8.75 12l6.5-6.75"/>
                            </svg>

                        </button>
                        <button aria-label="next" className=" swiper-button-next h-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
                                    viewBox="0 0 24 24" stroke="#ffff">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M8.75 5.25L15.25 12 8.75 18.75"/>
                            </svg>
                        </button>
                    </div>
                    <Swiper
                        slidesPerView={'auto'} slidesPerGroupSkip={3} grabCursor={true} loopFillGroupWithBlank={true}
                        loop={true}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}

                        breakpoints={{
                            // when window width is >= 320px
                            "320": {
                                slidesPerView: "auto",
                                spaceBetween: 24,
                            },
                            // when window width is >= 480px
                            "480": {
                                slidesPerView: "auto",
                                spaceBetween: 24,
                            },
                            // when window width is >= 640px
                            "640": {
                                slidesPerView: "auto",
                                spaceBetween: 24,
                            },
                            "1024": {
                                slidesPerView: "auto",
                                spaceBetween: 32,
                            },
                            "1336": {
                                slidesPerView: 3,
                                spaceBetween: 32
                            }
                        }}
                        className="swiper mySwiper ">
                        <SwiperSlide className="bg-white/[0.2] swiper-slide shadow-sm mb-10 mt-5  rounded-xl  ">
                            <div className="flex flex-col  space-y-4">
                                <div
                                    className="rounded-t-xl  group cursor-pointer relative flex justify-center items-center">
                                    <img className="rounded-t-xl  "
                                         src="https://fakeimg.pl/600x400"
                                         alt="man"/>
                                </div>
                                <div
                                    className="px-4 py-6 rounded-b-xl w-full flex justify-between  flex-col items-start ">
                                    <p className="text-sm leading-none text-gray-600"> to be modify </p>
                                    <p className="mt-3 text-base font-semibold leading-none text-gray-800"> to be modify</p>
                                    <button
                                        className="mt-6 hover:-translate-y-1 transition duration-500 ease-in-out flex justify-start items-center space-x-3">
                                        <p className="text-sm leading-none text-blue-700"> to be modify</p>
                                        <div className="w-4 ">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/content_9_svg-2.svg"
                                                 alt="arrow"/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

            <style>
                {`
.mainDiv {
position: relative;
width: 100%
}

.swiper-button-next::after,
.swiper-button-prev::after {
    content: "";
}

.swiper-wrapper{
    display: flex;
    align-items: center;
} 

.swiper-button-next,
.swiper-button-prev {
    position: relative;
    height: 24px;
    width: 24px;
}

.swiper {
  
    height: 100%;
}
.swiper-slide:nth-child(n) {
width: 70%;
}

.swiper-slide:nth-child(2n) {
width: 70%;
}

@media (min-width: 768px) { 

.swiper-slide:nth-child(n) {
width: 35%;
}

.swiper-slide:nth-child(2n) {
width: 35%;
}
}
@media (min-width: 1024px) { 
.mainDiv {
position: relative;
height: 100%;

width: 90%
} 

.swiper-button-next,
.swiper-button-prev {
    position: relative;
    height: 32px;
    width: 32px;
}
.swiper-slide:nth-child(n) {
width: 40%;
}

.swiper-slide:nth-child(2n) {
width: 40%;
}
.swiper-slide:nth-child(3n) {
width: 40%;
}
}

@media (min-width: 1536px) { 
.mainDiv {
position: relative;
height: 100%;

width: 70%
} 

.swiper-button-next,
.swiper-button-prev {
    height: 40px;
    width: 40px;
}

.swiper-slide:nth-child(n) {
width: 30%;
}

.swiper-slide:nth-child(2n) {
width: 30%;
}
.swiper-slide:nth-child(3n) {
width: 30%;
}
.swiper-slide:nth-child(4n) {
width: 30%;
}
}   

.swiper-slide {
    
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-slide img {
   
    width: 660px;
    object-fit: cover;
}


`}

            </style>
        </div>
        </div>


    )
}


export default Projects;