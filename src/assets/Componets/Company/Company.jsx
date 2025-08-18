import React from 'react';
import { Image, Row, Col } from 'antd';
import './Company.css'

function Company() {
    const images = [
        {
            src: "https://plus.unsplash.com/premium_photo-1661878168869-ffa66c993a7f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxtYW51ZmFjdHVyaW5nJTIwdG95cyUyMGNvbXBhbnklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
            caption: "Professional Spraying Equipment"
        },
        {
            src: "https://images.unsplash.com/photo-1724526788521-b1da0cfc1aea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1hbnVmYWN0dXJpbmclMjB0b3lzJTIwY29tcGFueSUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
            caption: "Quality Control Process"
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1682144941342-c220b2bc949e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG1hbnVmYWN0dXJpbmclMjB0b3lzJTIwY29tcGFueSUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
            caption: "Industrial Facility"
        },
    ];

    window.addEventListener("scroll", () => {
        document.querySelectorAll(".Car-realtive-contant-section").forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("show");
            }
        });
    });


    return (
        <>
            <div className="sectionpadding">

                <div className="company-container fade-in">
                    <div className="company-header">
                        <h1 className="company-title">In-House Spraying Solutions</h1>
                        <p className="company-subtitle">
                            Our in-house spraying facility offers comprehensive coating solutions
                            with precision and quality. We utilize cutting-edge technology and
                            skilled technicians to deliver exceptional finishes for various applications.
                        </p>
                    </div>

                    <div className="content-row">
                        <Row>
                            {/* <Col lg={12} md={24} sm={24}>
                                <div className="text-section slide-in-left">
                                    <h2 className="section-title">Professional Spraying Services</h2>
                                    <p className="section-description">
                                        Our in-house spraying facility offers comprehensive coating solutions
                                        with precision and quality. We utilize cutting-edge technology and
                                        skilled technicians to deliver exceptional finishes for various applications.
                                    </p>
                                </div>
                            </Col> */}

                            <Col lg={12} md={24} sm={24}>
                                <div className="image-gallery slide-in-right">
                                    <div className="gallery-grid">
                                        {images.map((image, index) => (
                                            <div key={index} className="image-container">
                                                <Image
                                                    src={image.src}
                                                    alt={image.caption}
                                                    className="gallery-img"
                                                    preview={{
                                                        mask: (
                                                            <div
                                                                style={{
                                                                    background: 'rgba(0,0,0,0.5)',
                                                                    color: 'white',
                                                                    padding: '8px',
                                                                    borderRadius: '4px',
                                                                }}
                                                            >
                                                                Preview
                                                            </div>
                                                        ),
                                                    }}
                                                />
                                                <div className="image-caption">
                                                    <p>{image.caption}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <section>
                <Row>
                    <Col>
                        <div className="sectionpadding">
                            <div class="Car-section-container">
                                <div class="Car-img-section">
                                    <img src="public/img.png/futuristic-sports-car.jpg" alt="Toy showcase" />
                                </div>

                                <div class="Car-realtive-contant-section">
                                    <h1>Mission</h1>
                                    <p>To design and deliver safe, innovative and engaging toys that spark curiosity, creativity and endless fun in every child’s life. We aim to make childhood more joyful while supporting learning through play.</p>

                                    <br /><br /><br />

                                    <h1>Vision</h1>
                                    <p>To design and deliver safe, innovative and engaging toys that spark curiosity, creativity and endless fun in every child’s life. We aim to make childhood more joyful while supporting learning through play</p>

                                    <br /><br /><br />

                                    <h1>Purpose</h1>
                                    <p>To be the most trusted global toy brand by 2030, bringing smiles to millions of children and parents, while promoting sustainability, quality, and innovation in every product we create.</p>
                                </div>

                                {/* <div class="moving-toy-car">
                                    <img src="public/img.png/download.png" alt="Toy Car" />
                                </div> */}
                            </div>
                        </div>
                    </Col>
                </Row>

            </section>
        </>
    );
}



export default Company;