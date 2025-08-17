import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import './Card.css';

function Card() {
    const slides = [
        { img: "https://images.unsplash.com/photo-1741389544696-0750a7ac6bbb?w=900", title: "Soft Teddy Bear" },
        { img: "https://images.unsplash.com/photo-1640715787186-d456de067b22?w=900", title: "Wooden Blocks" },
        { img: "https://images.unsplash.com/photo-1741004419857-08294ba99e4a?w=900", title: "Toy Train" },
        { img: "https://plus.unsplash.com/premium_photo-1661430916195-f8bfa159d705?w=900", title: "Mini Car" },
        { img: "https://images.unsplash.com/photo-1605685326210-802356b550ef?w=900", title: "Building Kit" },
        { img: "https://images.unsplash.com/photo-1728676873935-18cfc492f917?w=900", title: "Puzzle Game" },
        { img: "https://images.unsplash.com/photo-1739503557104-93cb12ec3999?w=900", title: "Action Figure" }
    ];

    return (
        <>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true} // Infinite loop
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper-Card"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.img} alt={slide.title} />
                            <div className="slide-overlay-Card"></div>
                            <div className="slide-title-Card">{slide.title}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='Backgeround-section-container'>
                <div className='Background-img-2'>
                    <img src="https://www.seedotoys.com/Images/ZoomCardsImages/SansonImage.png" alt="" />
                </div>
                <div className='background-contant-section'>
                    <p>
                        Our shelves are always stocked with the latest trends as well as timeless classics. Parents love our carefully selected range, and kids can’t resist the joy our toys bring. With friendly service and a warm atmosphere, we aim to make every visit special. Whether you shop in-store or online, we promise quick delivery and a smile with every order. Step into ToyWorld today — where playtime never ends!
                    </p>
                </div>
            </div>
        </>
    );
}

export default Card;