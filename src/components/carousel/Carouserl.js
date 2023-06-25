import React, {useState} from 'react';
import { CarouselData } from './CarouselData';
import rightArrow from '../../images/rightArrow.png';
import leftArrow from '../../images/leftArrow.png';

const Carousel = () => {
    const [currImg, setCurrImg] = useState(0);
    const length = CarouselData.length;

    const nextSlide = () => {
        setCurrImg(currImg === length - 1 ? 0 : currImg + 1)
    }

    const prevSlide = () => {
        setCurrImg(currImg == 0 ? length - 1 : currImg - 1);
    }

    return (
        <div className="carousel">
            <div className="container">
                <div className="carousel-window">     
                    <div className="carousel-items">
                        <div className="carousel-left" onClick={prevSlide}><img src={leftArrow} className='carousel__arrow'></img></div>
                        <div className="carousel-center"><p className='carousel-center__category'>РЕЦЕПТ</p><h1>{CarouselData[currImg].description}</h1></div>
                        <div className="carousel-right" onClick={nextSlide}><img src={rightArrow} className='carousel__arrow'></img></div>
                        <div className='carousel-wrapperBackground'>
                        {CarouselData.map((slide, index) => {
                            return (
                                <div className={index === currImg ? "carousel-items__item" : "carousel-items__item"} key={index}>
                                    {index === currImg && (<a href="#!" key={index}><img src={slide.image} alt="Картинка" className="carousel-items__item" draggable="false"/></a>)} 
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;