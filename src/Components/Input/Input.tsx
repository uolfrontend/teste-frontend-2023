import React, { ChangeEvent, useState } from 'react';

import { InputProps } from './types';

const Input = ({ name, label, placeholder, ...props }: InputProps) => {
  const [value, setValue] = useState('');

  return (
    <div className='input-block'>
      <input
        name={name}
        value={value}
        placeholder={placeholder ?? label}
        className={`input ${value.length ? 'hasValue' : ''}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        {...props}
      />
      {label ? <label htmlFor={name}>{label}</label> : undefined}
    </div>
  );
};

export default Input;
