import { menus } from "@/constants/menus";
import Link from "next/link";
import React, { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  return (
    <>
      {menus.map((link: any, i: number) => (
        <div key={i}>
          <div className="px-3 text-left md:cursor-pointer group">
            <p className="py-4 flex justify-between items-center md:pr-0 pr-5 group">
              <Link href={link.link} className="hover:text-primary capitalize">
                {link.name}
              </Link>

              {/* onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    } */}
              {/* {link.submenu && (
                <>
                  <span className="md:hidden inline">
                    {heading === link.name ? (
                      <IoChevronUpSharp />
                    ) : (
                      <IoChevronDownSharp />
                    )}
                  </span>
                  <span className="md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <IoChevronDownSharp />
                  </span>
                </>
              )} */}
            </p>
            {/* {link.submenu && (
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                <div className="rounded border border-gray-300 py-3 px-5 mt-3">
                  {link.sublinks.map((mysublinks: any, id: number) => (
                    <li className="text-sm text-gray-600 py-3" key={id}>
                      <Link
                        href={mysublinks.link}
                        className="hover:text-primary"
                      >
                        {mysublinks.name}
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            )} */}
          </div>

          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {link.submenu &&
              link.sublinks.map((slinks: any, i: number) => (
                <div key={i}>
                  <p className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5">
                    <Link
                      href={slinks.link}
                      className="hover:text-primary capitalize"
                    >
                      {slinks.name}
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
