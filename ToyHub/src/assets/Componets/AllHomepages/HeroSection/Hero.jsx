import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import './Hero.css'
import { Row, Col } from 'antd';

function Hero() {
    return (
        <>

            <div className="hero-container">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,

                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    speed={800}
                    effect="slide"
                >
                    <SwiperSlide>
                        <div className="slide-overlay"></div>
                        <img
                            src="public/img.png/race-car.jpg "
                            alt="Toy Cars Collection"
                        />
                        <div className="hero-content">
                            <h1 className="hero-title">Amazing Toy Cars</h1>
                            <p className="hero-subtitle">Discover our premium collection of toy vehicles</p>
                            {/* <button className="hero-button pulse-animation">Shop Now</button> */}
                        </div>
                        {/* <div className="slide-counter">1 / 5</div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide-overlay"></div>
                        <img
                            src="https://www.seedotoys.com/Images/HomePageCarousalImages/Carousal2.png"
                            alt="Educational Toys"
                        />
                        <div className="hero-content">
                            <h1 className="hero-title">Educational Toys</h1>
                            <p className="hero-subtitle">Learning made fun with our interactive toys</p>
                            {/* <button className="hero-button">Explore</button> */}
                        </div>
                        {/* <div className="slide-counter">2 / 5</div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide-overlay"></div>
                        <img
                            src="https://www.seedotoys.com/Images/HomePageCarousalImages/Carousal5.jpeg"
                            alt="Board Games"
                        />
                        <div className="hero-content">
                            <h1 className="hero-title">Board Games</h1>
                            <p className="hero-subtitle">Family fun time with classic and modern games</p>
                            {/* <button className="hero-button">Play Now</button> */}
                        </div>
                        {/* <div className="slide-counter">3 / 5</div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide-overlay"></div>
                        <img
                            src="https://www.seedotoys.com/Images/HomePageCarousalImages/Carousal1.jpeg"
                            alt="Action Figures"
                        />
                        <div className="hero-content">
                            <h1 className="hero-title">Action Figures</h1>
                            <p className="hero-subtitle">Heroes and adventures await in our collection</p>
                            {/* <button className="hero-button">Discover</button> */}
                        </div>
                        {/* <div className="slide-counter">4 / 5</div> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide-overlay"></div>
                        <img
                            src="https://www.seedotoys.com/Images/HomePageCarousalImages/Carousal3.jpeg"
                            alt="Creative Toys"
                        />
                        <div className="hero-content">
                            <h1 className="hero-title">Creative Toys</h1>
                            <p className="hero-subtitle">Unleash imagination with arts and crafts</p>
                            {/* <button className="hero-button">Create</button> */}
                        </div>
                        {/* <div className="slide-counter">5 / 5</div> */}
                    </SwiperSlide>
                </Swiper>
            </div>

            <div>
                <div className='Background-img'>
                    <img src="public/background/background.png" alt="" />
                </div>
            </div>


            <section>
                <Row>
                    <Col>
                        <div className='sectionpadding'>
                            <div className='Hero-section-contant-section'>
                                <div className='Hero-peregraph-section'>
                                    <p>
                                        Collectible toys hold sentimental value and can become cherished keepsakes over time. In today’s market, toy designs balance fun with safety, ensuring they are made from<b style={{ fontWeight: "500" }}> non-toxic</b> materials and meet strict quality standards. With evolving technology, modern toys integrate lights, sounds, and even AI to create immersive play experiences. Yet, <b style={{ fontWeight: 500 }}>traditional</b> classics like dolls, cars, and board games remain timeless favorites. Ultimately, toys are more than playthings—they are tools that shape a child’s growth, learning, and happiness.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

        </>
    );
}

export default Hero;