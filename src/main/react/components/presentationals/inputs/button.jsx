import React from 'react';

export default function Button({handleClick, className, buttonText, disabled}) {
  return <button
    className={className}
    onClick={handleClick}
    disabled={disabled}
  >
    {buttonText}
  </button>;
}