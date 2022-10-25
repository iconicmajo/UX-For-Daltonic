import React from 'react';


const FormInput = ({
  meta: { error },
  input: { onChange, value },
  data,
  valueField,
  textField,
  placeholder,
  title,
  type,
  maxlong,
}) => {
  return (
  <div>
    <label>
      {title}
      {error  && <span className="required"> ({error})</span>}
    </label>
    <input
      className="form-control"
      placeholder={placeholder}
      maxLength={maxlong}
      type={type}
      onChange={(e) => onChange(e)}
      value={value}
      data={data}
      valueField={valueField}
      textField={textField}
    />
  </div>
)}

export default FormInput;


