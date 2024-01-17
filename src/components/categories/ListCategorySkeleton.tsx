import React from "react";
import Skeleton from "react-loading-skeleton";

const ListCategorySkeleton = () => {
  return (
    <div className="py-5 w-full grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 gap-4">
      {Array.from({ length: 10 }, (_, index) => (
        <Skeleton key={index} height={150} />
      ))}
    </div>
  );
};

export default ListCategorySkeleton;
