import React from 'react'

const FormRow = ({ name, value, type, handleChange, labelText }) => {
  return (
    <div>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        className='form-input'
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default FormRow
