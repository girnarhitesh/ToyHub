import React from 'react'
import './Products.css'
import { Row, Col } from 'antd'

function Products() {

    const handleChange = (e) => {
        if (onSearch) {
            onSearch(e.target.value);
        }
    };

    const ProductsData = [
        {
            img: "public/img.png/2.jpg",
            title: "Our Products"
        },
        {
            img: "public/img.png/3.jpg",
            title: "Our Products"
        },
        {
            img: "https://images.unsplash.com/photo-1609395464110-7116592351c6?w=900&auto=format&fit=crop&q=60",
            title: "Our Products"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1684795780905-f8fa4b8875d4?w=900&auto=format&fit=crop&q=60",
            title: "Our Products"
        },
        {
            img: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=900&auto=format&fit=crop&q=60",
            title: "Our Products"
        },
        {
            img: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=900&auto=format&fit=crop&q=60",
            title: "Our Products"
        }
    ];

    return (
        <>
            <Row>
                <div className='Products-poster-section-contianer'>
                    <img src="/background/Products.jpg" alt="" />
                </div>
                <div className="sectionpadding">
                    <Col lg={12} sm={16} md={24}>

                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Search for products.."
                                onChange={handleChange}
                            />
                        </div>
                    </Col>


                    <Col lg={24} sm={24} md={24}>
                        <div className="product-grid">
                            {ProductsData.map((item, index) => (
                                <div className="product-card" key={index}>
                                    <div className="product-img">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    {/* <div className="product-content">
                                            <h3>{item.title}</h3>
                                        </div> */}
                                </div>
                            ))}
                        </div>
                    </Col>

                </div>
            </Row >



        </>
    )
}

export default Products