import React from 'react';

function SubmitButton({ text, disabled }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`bg-rdblue hover:bg-rdblueLight text-white font-bold py-2 px-4 rounded transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
