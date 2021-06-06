import React, {useState} from 'react';
import FormSignUp2 from './cpFormSubmit';
import FormSuccess from '../CreateMember/FormSuccess';
import "../../../Styles/form.css";
import SelectingTeam from "../../../images/undraw_Selecting_team_re_ndkb.svg";

const MemForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm2() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img'  style = {{width:'80%'}} src={SelectingTeam} alt="fill-form" />
        </div>
        {!isSubmitted ? (
          <FormSignUp2 submitForm2={submitForm2} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default MemForm;