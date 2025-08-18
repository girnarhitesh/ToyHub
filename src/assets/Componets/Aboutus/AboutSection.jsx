import React from 'react'
import './AboutSection.css'
import { Row, Col } from 'antd'
import { FaBullseye, FaEye, FaPuzzlePiece, FaRobot, FaChild } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Company from '../Company/Company';

function AboutSection() {
    return (
        <>
            <section>
                <div>
                    <div className="About-background-imgcontainer">
                        <img src="https://www.seedotoys.com/Images/AboutusTopNewBanner.jpg" alt="" />
                    </div>
                </div>

                <Row>
                    <Col lg={12} sm={16} md={24}>
                        <div>
                            <div className='About-section-contant-container'>
                                <h1>About us</h1>
                                <p>
                                    From concept to completion, our dedicated team ensures every detail is handled with precision and care. We combine modern innovation with time-tested craftsmanship to deliver results that exceed expectations.
                                </p>
                            </div>
                            <div className="About-section-img" >
                                <img src="/img.png/img.png" alt="" />
                            </div>
                        </div>
                    </Col>

                    <Col lg={12} sm={16} md={24}>
                        <div className="about-container">
                            <p className="about-intro">
                                Welcome to <Link to="/"><span className="highlight">ToyWorld</span></Link> – where
                                <b> fun meets learning!</b> Since 2020, we bring joy with safe, creative
                                and imaginative toys loved by kids & trusted by parents.
                            </p>

                            <div className="mission-vision-section">

                                {/* Mission Card */}
                                <div className="card mission-card">
                                    <FaBullseye className="card-icon" />
                                    <h2>Our Mission</h2>
                                    <p>
                                        To design <b>safe, sustainable, and educational toys</b> 🎲🧸
                                        that inspire creativity, bring happiness, and make learning fun.
                                    </p>
                                </div>

                                {/* Vision Card */}
                                <div className="card vision-card">
                                    <FaEye className="card-icon" />
                                    <h2>Our Vision</h2>
                                    <p>
                                        To be a <b>global leader in playful innovation</b> 🚀🎨 –
                                        delivering toys that spark imagination while being
                                        <b> eco-friendly & affordable</b>.
                                    </p>
                                </div>

                                {/* Moving Car */}
                                {/* <div className="moving-car">
                                    <img src="public/img.png/download.png" alt="Toy Car" />
                                </div> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
            <Company/>


        </>
    )
}

export default AboutSection
