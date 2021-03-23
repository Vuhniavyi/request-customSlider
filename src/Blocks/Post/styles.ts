import styled, { css } from 'styled-components';

export const PostWrapper = styled.div`
  position: relative;
  width: 200px;
  min-height: 200px;
  background: #ffffff;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 30px;
`;

export const Delete = styled.button`
  background: red;
  width: 40%;
  height: 30px;
  cursor: pointer;
  margin: 5px auto;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 900;
  &:focus {
    outline: none;
  }
`;

export const Create = styled.button`
  background: green;
  width: 40%;
  height: 30px;
  cursor: pointer;
  margin: 5px auto;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 900;
  &:focus {
    outline: none;
  }
`;

type LinkType = {
  link?: string;
};

export const PostTop = styled.div<LinkType>`
  height: 100px;
  width: 100%;
  background-size: cover;
  background-position: center;

  ${(props) =>
    css`
      background-image: url(${props.link});
    `};
`;
export const PostBottom = styled.div`
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h3`
  font-size: 12px;
  margin: 10px 0px;
  color: green;
`;
export const Text = styled.p`
  font-size: 14px;
  color: black;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 300px;
  justify-content: space-between;
  padding: 20px;
`;
