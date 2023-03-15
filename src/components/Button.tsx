import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export function Button({ name, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-button py-4 px-8 font-semibold text-white text-base rounded-md hover:opacity-80"
      {...rest}
    >
      {name}
    </button>
  );
}
