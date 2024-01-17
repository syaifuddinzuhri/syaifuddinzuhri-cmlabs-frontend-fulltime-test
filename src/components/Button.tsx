import React from "react";

type ButtonProps = {
    className: string;
    title: string;
    icon?: any;
    onClick?: () => void;
}

const Button = ({className, title, onClick, icon}: ButtonProps) => {
  return (
    <button className={`flex items-center gap-2 ${className}`} onClick={onClick}>
      {icon}
      {title}
    </button>
  );
};

export default Button;
