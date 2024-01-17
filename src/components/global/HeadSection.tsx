import React from "react";
type HeadSectionProps = {
  title: string;
};
const HeadSection = ({ title }: HeadSectionProps) => {
  return (
    <div>
      <div className="border-l-4 border-l-primary px-3 mb-5">
        <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default HeadSection;
