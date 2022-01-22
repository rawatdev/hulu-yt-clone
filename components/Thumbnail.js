import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={result.image.medium}
        width={1920}
        height={1080}
        alt={result.name}
      />

      <div className="p-2">
        <p className="truncate max-w-md">{removeTags(result.summary)}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.name}
        </h2>
        <p className="flex item-center opacity-0 group-hover:opacity-100">
          {result.premiered} ⚫
          <ThumbUpIcon className="h-5 mx-2" /> {result.rating.average}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
