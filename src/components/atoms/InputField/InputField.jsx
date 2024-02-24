import React from 'react';
import searchIcon from '../../../assets/searchIcon.svg';
import {colors} from '../../../globalStyle/variabls.js'; 

const InputField = ({ inputType, name, placeholder, icon, inputValue, onChangeHandler ,style}) => {
  const inputStyle = {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    backgroundColor: '#f2f2f2',
    fontSize: '16px',
    backgroundImage: icon ? `url(${searchIcon})` : 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px center',
    paddingLeft: icon ? '40px' : '12px', 
    boxSizing: 'border-box', 
    '&:active': {
        border: `1px solid ${colors.blue400}`,
      },
  };

  const handleChange = (e) => {
    onChangeHandler(e.target.value);
  };

  return (
    <input
      name={name}
      style={{...inputStyle,...style}}
      type={inputType}
      placeholder={placeholder}
      onChange={handleChange}
      value={inputValue}
    />
  );
};

export default InputField;
