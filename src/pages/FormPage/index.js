import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import * as actions from '../../reducers/forum/actions';

const centerForm = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
}

const FormPage = (props) => {
  const { dispatch } = props;

  const getFormData = (data) => {
    dispatch(actions.postAdded(data));
  }

  return (
    <div style={centerForm}>
      <h1>TALK ABOUT IT??? WOOF</h1>
      <Form getFormData={getFormData} />
    </div>
  )
}

export default connect(state => state) (FormPage)