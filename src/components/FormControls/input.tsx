import React, { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  placeholder: string|any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
}

export default function Input({ label, placeholder, onChange, value, type }: InputProps) {
  return (
    <div className="relative">
      <p className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
        {label}
      </p>
      <input
        placeholder={placeholder}
        type={type || 'text'}
        value={value}
        onChange={onChange}
        className="border placeholder-gray-400 focus:outline-none w-full p-4 m-0 text-base block bg-white rounded-md"
      />
    </div>
  );
}
