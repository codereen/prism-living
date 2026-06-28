import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

function Button({ children, className = "" }: ButtonProps) {
  return (
    <button
      className={`rounded-full bg-white px-8 py-3 font-medium text-black transition duration-300 hover:scale-105 hover:shadow-xl active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;