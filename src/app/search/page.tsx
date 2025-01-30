"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const value = searchParams.get("searchvalue");

  return <div>{value}</div>;
};

export default page;
