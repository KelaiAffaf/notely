import React from 'react'

const SelectField = ({options}) => {
  return (
    <select name="" id="">
        {options.map((option,index)=>{
            return <option value={option}>{option}</option>
        })}
    </select>
  )
}

export default SelectField