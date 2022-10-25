import React from 'react';
import styles from './styles.scss'

const FormInput = ({
  //meta: { error },
  input: {OnChange, value },
  data,
  valueField,
  textField,
  placeholder,
  title,
  type,
  maxlong,
}) => {
  return (
  <div className={styles.aling}>
    <label className={styles.label}>
      {title}
      {/*error  && <span className={styles.required}> ({error})</span>*/}
    </label>
    <input
      //className="form-control"
      placeholder={placeholder}
      maxLength={maxlong}
      type={type}
      //onChange={(e) => onChange(e)}
      value={value}
      data={data}
      valueField={valueField}
      textField={textField}
    />
  </div>
)}

export default FormInput;

