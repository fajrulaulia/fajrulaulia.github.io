import React from 'react';

interface FATextFieldProps {
  label: string;
  placeholder: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'text' | 'password';
  onChange?: (value: string) => void;
  width?: string;
  value?: string; // Add the value prop
}

const FATextField: React.FC<FATextFieldProps> = ({ label, placeholder, size = 'medium', type = 'text', onChange, width, value }) => {
  let inputSize = '';

  switch (size) {
    case 'small':
      inputSize = 'px-3 py-2 text-sm';
      break;
    case 'large':
      inputSize = 'px-7 py-4 text-lg';
      break;
    default:
      inputSize = 'px-5 py-3 text-base';
      break;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onChange) {
      onChange(value);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: width || '100%', // Set the width using inline styles (default to 100%)
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`rounded-md border border-gray-400 ${inputSize} focus:outline-none focus:border-indigo-600`}
        onChange={handleInputChange}
        style={inputStyle} // Apply the inline style here
        value={value} // Set the input value using the value prop
      />
    </div>
  );
};

export default FATextField;
