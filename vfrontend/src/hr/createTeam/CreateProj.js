import { useState, useEffect } from 'react';

const CreateProj = (callback, validate) => {
  const [values, setValues] = useState({
    teamName: '',
    projectValue:'',
    managerValue:'',
    leaderValue:'',
    memberValue:''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [projectValue, setProjectValue] = useState('');
  const [managerValue, setManagerValue] = useState('');
  const [leaderValue, setLeaderValue] = useState('');
  const [memberValue, setMemberValue] = useState('')

  

  const handleClick = (field, value) => {
    switch (field) {
      case 'tType':
        setProjectValue(value)
        console.log(projectValue)
        break;
      case 'projectM':
        setManagerValue(value)
        console.log(managerValue)
        break;
      case 'teamL':
          setLeaderValue(value)
          console.log(leaderValue)
          break;
      case 'teamM':
            setMemberValue(value)
            console.log(memberValue)
            break;

      default:
        break
    }
    console.log("handle click call");
  }


  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit2 = e => {
    console.log("Handle Submit2 called");
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit2, values, errors, handleClick };
};

export default CreateProj;