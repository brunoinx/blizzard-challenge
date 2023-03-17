import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  icon?: string;
}

export function Button({ name, icon: Icon, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-button py-4 px-8 flex justify-center font-semibold text-white text-base rounded-md hover:opacity-80"
      {...rest}
    >
      <img src={Icon} className="mr-2" />
      {name}
    </button>
  );
}
