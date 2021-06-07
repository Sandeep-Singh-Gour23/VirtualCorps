import React, {useState} from 'react';
import FormSubmit from './FormSubmit';
import FormSuccess from './FormSuccess';
import "../../../Styles/form.css";
import image from  '../../../images/Information flow_Outline.svg';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={image} alt="fill-form" />
        </div>
        {!isSubmitted ? (
          <FormSubmit submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;