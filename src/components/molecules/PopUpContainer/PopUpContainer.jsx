import React from 'react'
import SelectField from '../../atoms/SelectField/SelectField.jsx'
const PopUpContainer = () => {
const options=['Personal','Home','Business']
console.log(options);
  return (
    <SelectField options={options}/>
  )
}

export default PopUpContainer