import React from 'react';
import { PostsWrapper } from 'Components/PostsWrapper/index';
import { Carousel } from 'Components/Carousel/index';
import { imagesMock } from 'Constants/index';

export const Home = () => {
  return (
    <>
      <PostsWrapper />
      <Carousel images={imagesMock} />
    </>
  );
};
