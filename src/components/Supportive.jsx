import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

import { SupportiveData } from "./SupportiveData";

function Suppportive() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section>
            <div className="content">

                <h1 className="heading">Supportive Care</h1>

                <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>

                    {
                        SupportiveData.map(item => {
                            return (
                                <Carousel.Item key={item.id}>
                                    <img className="carousel-img" src={item.img} class="d-block w-100" alt="..." />
                                    <Carousel.Caption>
                                        <div className="d-block w-100 carousel-bg">
                                            <h1>{item.title}</h1>
                                            <p>{item.description}</p>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            );
                        })
                    }


                </Carousel>
            </div>
        </section>
    );
}

export default Suppportive;