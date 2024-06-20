import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="flex-center w-full h-screen">
      <Image src="/icons/loading.svg" width={50} height={50} alt="loading" />
    </div>
  );
};

export default Loader;
