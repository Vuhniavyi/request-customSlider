import React, { useState } from 'react';
import {
  CarouselWrapper,
  ImgBlockWrapper,
  ImgBlock,
  Button,
  ButtonsWrapper,
  Text,
  Tools,
} from './styles';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

export type CarouselProps = {
  images: any;
};

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((pr) => pr + 1);
  };
  const handlePrev = () => {
    setIndex((pr) => pr - 1);
  };
  return (
    <>
      <CarouselWrapper>
        <div
          style={{
            width: '1200px',
            transform: `translate(${-index * 300}px)`,
          }}
          className="animation"
        >
          {images?.map((item: { image: string; id: number }) => (
            <ImgBlockWrapper key={item.id} className="slide">
              <ImgBlock link={item.image} />
            </ImgBlockWrapper>
          ))}
        </div>
        <Tools>
          <Text>
            {index + 1}/{images.length}
          </Text>
          <ButtonsWrapper>
            <Button disabled={index - 1 < 0} onClick={handlePrev}>
              <FaArrowLeft />
            </Button>
            <Button disabled={images.length - 1 === index} onClick={handleNext}>
              <FaArrowRight />
            </Button>
          </ButtonsWrapper>
        </Tools>
      </CarouselWrapper>
    </>
  );
};
