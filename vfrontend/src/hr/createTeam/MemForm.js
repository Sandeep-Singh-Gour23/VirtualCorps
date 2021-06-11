import React, {useState} from 'react';
import FormSignUp2 from './cpFormSubmit';
import FormSuccess from '../createMember/FormSuccess';
import { Link } from 'react-router-dom'
import "../../styles/form.css";
import DashboardIcon from '@material-ui/icons/Dashboard';
import SelectingTeam from "../../Image/undraw_Selecting_team_re_ndkb.svg";
import createTeam from '../../Image/undraw_Connecting_Teams_8ntu.svg'

const MemForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm2() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="mem-nav">
       <h2 className="create-team"><img src ={createTeam} alt="logo" className="team-img" />Create Team</h2>
       <Link to="/hr"><button type="button" class="btn d-icon "><DashboardIcon/> Dashboard </button></Link>
       </div>
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