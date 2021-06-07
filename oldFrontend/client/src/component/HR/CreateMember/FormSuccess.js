import React from 'react';
import "../../../Styles/form.css"
import success from "../../../images/img-4.svg"

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={success} alt='success' />
    </div>
  );
};

export default FormSuccess;