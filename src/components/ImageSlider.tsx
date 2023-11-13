import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled, { css } from 'styled-components';

const media = {
    mobile: (strings: TemplateStringsArray, ...args: any[]) => css`
      @media (max-width: 1300px) {
        ${css(strings, ...args)}
      }
    ` 
};

const StyledSlider = styled(Slider)`
    max-height: 500px; 
    width: 500px;
    
    ${media.mobile`
        max-height: 300px;
        width: 200px;
    `}
`;


const Img = styled.div`
    display: flex;
    justify-content: center;
    height: 300px; 

    img {
        height: auto;
        max-height: 100%;
        overflow: hidden;

    }
`;


const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
    const settings = {
        dots: true,

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,      
        autoplaySpeed: 3000,  
        arrows: false,

    };

    return (
        <StyledSlider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <Img><img src={image} alt={`slide-${index}`}/></Img>
                </div>
            ))}
        </StyledSlider>
    );
    
};

export default ImageSlider;



