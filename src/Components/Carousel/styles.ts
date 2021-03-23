import styled, { css } from 'styled-components';

export const CarouselWrapper = styled.div`
  height: 200px;
  width: 300px;
  border: 2px solid black;
  overflow: hidden;
  margin: auto;
`;
export const ImgBlockWrapper = styled.div`
  width: 300px;
  display: inline-block;
`;
type LinkType = {
  link?: string;
};
export const ImgBlock = styled.div<LinkType>`
  max-width: 100%;
  height: 170px;
  background-size: cover;
  background-position: center;
  ${(props) =>
    css`
      background-image: url(${props.link});
    `};
`;
export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
export const Text = styled.p``;

export const ButtonsWrapper = styled.div``;
export const Tools = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
