import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../scss/news.scss"
import { newsdt } from '../assests/data';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function News() {
    return (
        <>
            <section className="news" id='news'>
                <div className="roadmap-heading">

                    <div className="road-h">
                        <h2 className="heading"
                            data-aos="zoom-out"
                            data-aos-easing="ease-out">
                            Articles & News
                        </h2>
                    </div>

                </div>
                <div className="container">
                    <div className="grid">


                        <OwlCarousel className='owl-theme' loop dots={false} items={1} margin={10} autoplay={true} responsive={{
                            0: {
                                items: 1 // Display one item per slide for smaller screens
                            },
                            768: {
                                items: 3 // Display two items per slide for screens wider than 768px
                            }
                        }}>
                            {
                                newsdt.map((item, index) => {
                                    return (
                                        <a href={item.link} target='_blank'>
                                            <div className="item">
                                                <h3>{item.title}</h3>
                                                <p>{item.info}</p>
                                                <div className="img">
                                                    <img src={item.img} alt="" />
                                                </div>
                                            </div>
                                        </a>

                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </>
    );
}
