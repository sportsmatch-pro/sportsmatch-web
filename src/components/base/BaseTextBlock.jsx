import React from "react";

const BaseTextBlock = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-8xl font-bold mb-4 mt-0">{title}</h2>
      <p className="text-2xl mt-0">
        <span className="font-bold">SPORTSMATCH</span> {subtitle}
      </p>
    </div>
  );
};

export default BaseTextBlock;
