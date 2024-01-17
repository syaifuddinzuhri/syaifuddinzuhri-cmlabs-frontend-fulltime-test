import React from "react";

type ButtonProps = {
    className: string;
    title: string;
}

const Button = ({className, title}: ButtonProps) => {
  return (
    <button className={className}>
      {title}
    </button>
  );
};

export default Button;
