import React, { useState } from 'react';
import {
  PostWrapper,
  PostTop,
  PostBottom,
  Title,
  Text,
  Delete,
  ButtonsWrapper,
} from './styles';
import { useMutation } from 'react-query';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export type PostProps = {
  image?: string;
  title: string;
  text: string;
  keyId: number;
  onDeletePost: any;
};

export const Post = ({
  title,
  image,
  text,
  keyId,
  onDeletePost,
}: PostProps) => {
  const [hover, setHover] = useState(false);

  const mutationDelete = useMutation(() =>
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${keyId}`),
  );

  const submitDelete = () => {
    confirmAlert({
      title: 'Confirm to submit',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            mutationDelete.mutate();
            onDeletePost(keyId);
          },
        },
        {
          label: 'No',
          onClick: () => console.log('close'),
        },
      ],
    });
  };

  return (
    <PostWrapper
      key={keyId}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <PostTop link={image} />
      <PostBottom>
        <Title>{title}</Title>
        <Text>{text}</Text>
        {hover && (
          <ButtonsWrapper>
            <Delete onClick={submitDelete}>Delete</Delete>
          </ButtonsWrapper>
        )}
      </PostBottom>
    </PostWrapper>
  );
};
