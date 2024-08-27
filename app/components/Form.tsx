'use client'

import React, { createContext, useContext, useState } from 'react';

// Form Context
const FormContext = createContext<{
  values: Record<string, any>;
  errors: Record<string, string>;
  handleChange: (name: string, value: any) => void;
  setFieldError: (name: string, error: string) => void;
}>({
  values: {},
  errors: {},
  handleChange: () => {},
  setFieldError: () => {},
});

// Form Component
interface FormProps {
  onSubmit: (values: Record<string, any>) => void;
  children: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  const [values, setValues] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const setFieldError = (name: string, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <FormContext.Provider value={{ values, errors, handleChange, setFieldError }}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

// Input Component
interface InputProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({ name, label, type = 'text', required = false }) => {
  const { values, errors, handleChange } = useContext(FormContext);

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 font-bold">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={values[name] || ''}
        onChange={(e) => handleChange(name, e.target.value)}
        required={required}
        className="w-full px-3 py-2 border rounded-md"
      />
      {errors[name] && <p className="mt-1 text-red-500">{errors[name]}</p>}
    </div>
  );
};

// Select Component
interface SelectProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

export const Select: React.FC<SelectProps> = ({ name, label, options, required = false }) => {
  const { values, errors, handleChange } = useContext(FormContext);

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 font-bold">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={values[name] || ''}
        onChange={(e) => handleChange(name, e.target.value)}
        required={required}
        className="w-full px-3 py-2 border rounded-md"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && <p className="mt-1 text-red-500">{errors[name]}</p>}
    </div>
  );
};

// Checkbox Component
interface CheckboxProps {
  name: string;
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ name, label }) => {
  const { values, handleChange } = useContext(FormContext);

  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          name={name}
          checked={values[name] || false}
          onChange={(e) => handleChange(name, e.target.checked)}
          className="mr-2"
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

// Radio Component
interface RadioProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export const Radio: React.FC<RadioProps> = ({ name, label, options }) => {
  const { values, handleChange } = useContext(FormContext);

  return (
    <div className="mb-4">
      <p className="mb-2 font-bold">{label}</p>
      {options.map((option) => (
        <label key={option.value} className="flex items-center mb-2">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={values[name] === option.value}
            onChange={(e) => handleChange(name, e.target.value)}
            className="mr-2"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

// Submit Button Component
interface SubmitButtonProps {
  children: React.ReactNode;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => {
  return (
    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      {children}
    </button>
  );
};
