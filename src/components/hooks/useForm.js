import { useState, useCallback } from 'react';

//хук управления формой
function useForm (defaultva){
  const [isValue, setIsValue] = useState(defaultva ||{});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setIsValue({
      ...isValue,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: e.target.validationMessage,
    });
    //setIsFormValid(e.target.validity.valid);
    setIsFormValid(e.target.closest('#form').checkValidity());
  };

  const resetForm = useCallback(
    (newIsValue = {}, newErrors = {}, newIsFormValid = false) => {
      setIsValue(newIsValue);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setIsValue, setErrors, setIsFormValid],
  );

  return {
    errors,
    isValue,
    resetForm,
    handleChange,
    isFormValid,
    };
};
export default useForm;
