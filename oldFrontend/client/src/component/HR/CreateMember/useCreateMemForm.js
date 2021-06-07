import { useState, useEffect } from 'react';

const useCreateMemForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    address: '',
    number: '',
    password:'',
    roleValue:'',
    techValue:''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const [roleValue, setRoleValue] = useState('')
  const [techValue, setTechValue] = useState('')

  const handleClick = (field, value) => {
    switch (field) {
      case 'roles':
        setRoleValue(values)
        console.log(roleValue)
        break;
      case 'tech':
        setTechValue(value)
        console.log(techValue)
        break;

      default:
        break
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
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
    [errors, callback, isSubmitting]
  );

  return { handleChange, handleSubmit, values, errors, handleClick};
};

export default useCreateMemForm;