import React, { useRef } from 'react';
import '../../styles/Works.css';
import { PROJECT_WORKS } from '../../utils/data';
import WorksCard from './WorksCard';
import Slider from 'react-slick';

const Works = () => {

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section id='works' className='works-container'>
            <h5>Project Works</h5>

            <div className='works-content'>
                <div className='arrow-right' onClick={slideRight}>
                    <span className="material-symbols-outlined">chevron_right</span>
                </div>

                <div className='arrow-left' onClick={slideLeft}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {PROJECT_WORKS.map((item) => (
                        <WorksCard 
                            key={item.title} 
                            details={item} 
                            iconUrl={item.image}
                        />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Works;
