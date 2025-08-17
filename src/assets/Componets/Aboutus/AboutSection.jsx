import React from 'react'
import './AboutSection.css'
import { Row, Col } from 'antd'

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
                        </div>
                    </Col>
                </Row>
            </section>

        </>
    )
}

export default AboutSection
