import React, {useState} from 'react';
import FormSubmit from './FormSubmit';
import FormSuccess from './FormSuccess';
import { Link } from 'react-router-dom'
import '../../styles/form.css';
import image from  '../../Image/Information flow_Outline.svg';
import team from '../../Image/undraw_Team_page_re_cffb.svg';
import DashboardIcon from '@material-ui/icons/Dashboard';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <div className="mem-nav">
       <h2 className="create-team"><img src ={team} alt="logo" className="team-img" />Create Member</h2>
      <Link to="/hr"><button type="button" class="btn d-icon "><DashboardIcon/> Dashboard </button></Link>
       </div>
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