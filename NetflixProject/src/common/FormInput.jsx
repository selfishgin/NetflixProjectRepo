import React from 'react'

const FormInput = ({label, name, type, value, placeholder, handleInputChange, inputStyle = "border p-2"}) => {
  return (
    <div className='flex flex-col'>
        {label && <label htmlFor={name}>{label}</label>}
        <input {...(value ? {defaultValue: value} : {})} onChange={(e) => {
            handleInputChange(e.target.name, e.target.value)
        }} placeholder={placeholder}
        className={inputStyle}
        name={name} type={type}/>
    </div>
  )
}

export default FormInput