/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import React from "react";

type CategoryCardProps = {
  item: ICategory;
}

const CategoryCard = ({ item }: CategoryCardProps) => {
  const router = useRouter();
  return (
    <div
      className="rounded-xl border border-gray-200 relative overflow-hidden cursor-pointer"
      onClick={() => router.push(`/ingredient/1`)}
    >
      <div className="w-full md:h-[140px] xl:h-[150px] lg:h-[120px] h-[120px] overflow-hidden">
        <img
          alt=""
          src="/images/food.png"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-70 flex items-center justify-center">
        <p className="text-white text-center font-medium text-2xl">{item.strIngredient}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
