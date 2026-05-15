import React from 'react';
import { useTranslation } from 'react-i18next';
import './FormField.css';

const FormField = ({ label, type = 'text', name, value, onChange, onBlur, placeholder, required = false, isTouched, errorText }) => {
  const { t } = useTranslation();
  const isInvalid = required && isTouched && !value;
  const inputId = `input-${name}`;

  return (
    <div className="form-field">
      <label htmlFor={inputId} className="form-field-label">
        {label}
        {required && <span className="form-field-required">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          className={`form-field-input form-field-textarea ${isInvalid ? 'invalid' : ''}`}
          rows="4"
        ></textarea>
      ) : (
        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          className={`form-field-input ${isInvalid ? 'invalid' : ''}`}
        />
      )}
      {isInvalid && <p className="form-field-error">{errorText || t('formField.required', { field: label })}</p>}
    </div>
  );
};

export default FormField;
