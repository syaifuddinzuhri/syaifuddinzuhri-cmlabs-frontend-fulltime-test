import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {/* <div className="container"> */}
      <Suspense fallback={<Loading />}>{children}</Suspense>
      {/* </div> */}
    </>
  );
};

export default RootLayout;
