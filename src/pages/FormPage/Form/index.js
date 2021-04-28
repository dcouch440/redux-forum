import React, { useState } from 'react';
import { Form as BSForm, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { v4 } from 'uuid';

const Form = ({ getFormData }) => {
  const [post, setPost] = useState({title: '', body: '', id: v4()});
  const history = useHistory();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setPost(prev => ({ ...prev, ...{[name]: value } }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    getFormData(post)
    history.push('/');
  }

  return (
    <BSForm onSubmit={handleSubmit}>
      <BSForm.Control onChange={handleChange} name='title' type='text' placeholder='Post Title' />
      <BSForm.Control onChange={handleChange} name='body' as='textarea' placeholder='Post Body' style={{height: '250px'}}/>
      <Button variant='outline-dark' type='submit' style={{marginTop: '10px'}}>Post!</Button>
    </BSForm>
  )
}

export default Form;