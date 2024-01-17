/* eslint-disable @next/next/no-img-element */
"use client";

import HeroSection from "@/components/HeroSection";
import ListCategory from "@/components/categories/ListCategory";
import ReviewCardList from "@/components/review/ReviewCardList";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <div className="container">
        <ListCategory />
        <ReviewCardList />
      </div>
    </>
  );
};

export default page;
