import Image from "next/image";
import React from "react";

function MediumCard({ img, title }: { img: any; title: any }) {
  return (
    <div
      className="cursor-pointer hover:scale-105
    transform transition duration-300"
    >
      <div className="relative h-80 w-80 ">
        <Image src={img} alt="Medium Card image" fill />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
