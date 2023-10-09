import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium uppercase tracking-wide"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
