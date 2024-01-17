"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { IoClose, IoMenu } from "react-icons/io5";
import Button from "./Button";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow">
      <div className="flex items-center font-medium justify-between w-full container py-3">
        <div className="z-50 md:w-auto w-full flex justify-between">
          <h1 className="text-primary text-2xl font-medium">MealApp</h1>
          <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoClose /> : <IoMenu />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button
            title="Get Started"
            className="btn-primary text-white font-bold"
          />
        </div>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-16 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
          <div className="py-5">
            <Button
              title="Get Started"
              className="btn-primary text-white font-bold"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
