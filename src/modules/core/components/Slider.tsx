import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Slide = styled.div<{ bg: string }>`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease-in-out;
`;

const SliderWrapper = styled.div<{ slideIndex: number }>`
  display: flex;
  width: 100%;
  transform: translateX(${props => -props.slideIndex * 100}%);
`;

const Arrow = styled.div<{ direction: 'left' | 'right' }>`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  transform: translateY(-50%);
  cursor: pointer;
`;

const Slider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    'https://via.placeholder.com/1200x300?text=Slide+1',
    'https://via.placeholder.com/1200x300?text=Slide+2',
    'https://via.placeholder.com/1200x300?text=Slide+3'
  ];

  const handleClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slides.length - 1);
    } else {
      setSlideIndex(slideIndex < slides.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <SliderContainer>
      <Arrow direction="left" onClick={() => handleClick('left')}>❮</Arrow>
      <SliderWrapper slideIndex={slideIndex}>
        {slides.map((bg, index) => (
          <Slide key={index} bg={bg}></Slide>
        ))}
      </SliderWrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>❯</Arrow>
    </SliderContainer>
  );
};

export default Slider;
