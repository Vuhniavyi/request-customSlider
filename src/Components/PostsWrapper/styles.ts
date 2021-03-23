import styled from 'styled-components';

export const PostsContainer = styled.div`
  max-width: 700px;
  padding: 30px 0px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 540px) {
    justify-content: center;
  }
`;

export const ViewMoreText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 10px;
  color: #828282;
  cursor: pointer;
  width: 150px;
  margin: 20px auto;
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
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
`;
