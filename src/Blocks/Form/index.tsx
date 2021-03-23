import React from 'react';
import { Form } from './styles';
import { useForm } from 'react-hook-form';

export const FormComponent = ({ onSubmit, onClose }: any) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="title"
        defaultValue="Default Title"
        ref={register({ required: true, minLength: 1, maxLength: 100 })}
      />
      {errors?.title && <span>Title is required/1-100 characters</span>}
      <input
        name="body"
        defaultValue="Default Body"
        ref={register({ required: true, minLength: 1, maxLength: 1000 })}
      />
      {errors?.body && <span>Body is required/1-1000 characters</span>}
      <input type="submit" />
      <button onClick={onClose}>Cancel</button>
    </Form>
  );
};
