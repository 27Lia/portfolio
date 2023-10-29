import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
    max-height: 500px; 
`;


const Img = styled.div`
    display: flex;
    justify-content: center;
    height: 500px; 
    overflow: hidden;

    img {
        
        height: auto;
        max-height: 100%;
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