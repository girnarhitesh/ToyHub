// ClientSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import './ClientSlider.css';

function ClientSlider() {
    const clients = [
        "https://www.seedotoys.com/Images/ProductClientLogos/WembleyNew.png",
        "https://www.seedotoys.com/Images/ProductClientLogos/24Seven.png",
        "https://www.seedotoys.com/Images/ProductClientLogos/Amazon.png",
        "https://www.seedotoys.com/Images/ProductClientLogos/SmartSuperstore.png",
        "https://www.seedotoys.com/Images/ProductClientLogos/Snooplay.png",
        "https://www.seedotoys.com/Images/ProductClientLogos/ToysRusNew.png",
        "https://www.seedotoys.com/Images/ProductClientLogos/Dmart.png",
        "https://www.seedotoys.com/Images/ProductClientLogos/MuMuso.png",
        " https://www.seedotoys.com/Images/ProductClientLogos/Hamleys.png",
    ];

    return (
        <>
            <div className="client-slider">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    speed={3000} // smooth continuous motion
                    autoplay={{
                        delay: 0, // no pause between slides
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 20 },
                        640: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 5, spaceBetween: 30 }
                    }}
                    modules={[Autoplay]}
                >
                    {clients.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <img src={logo} alt={`Client ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <section>
                <div className='Client-relative-contant-section'>
                    <img src="public/img.png/boy.png" alt="" />
                    <div className='Client-relative-contant'>
                        <h1>Why Choose Us ?</h1>
                        <p>
                            We are committed to excellence and safety in everything we do. Every product is meticulously tested through stringent quality checks to ensure it meets the highest safety standards, offering 100% safety for children and flawless craftsmanship. Our goal? To become India’s leading brand, setting new benchmarks for quality and creativity.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ClientSlider;



