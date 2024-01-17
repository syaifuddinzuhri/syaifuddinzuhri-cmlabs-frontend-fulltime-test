/* eslint-disable @next/next/no-img-element */
import React from "react";

const NotFoundData = () => {
  return (
    <div className="py-5 w-full flex justify-center items-center flex-col">
      <div className="text-center w-[200px]">
        <img
          alt=""
          src="/images/nodata.png"
          className="object-cover w-full h-full"
        />
      </div>
      <p>No matching data found.</p>
    </div>
  );
};

export default NotFoundData;
