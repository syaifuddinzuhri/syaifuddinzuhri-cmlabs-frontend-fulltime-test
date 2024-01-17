/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Blank = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/");
    }, []);
    return <p></p>;
};

export default Blank;