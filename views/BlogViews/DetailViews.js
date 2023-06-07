import React, { useState } from "react";
import cx from "classnames";
import { useRouter } from "next/router";
import { BLOG_TBODY_MOCK } from "utils/mock-data";

export default function DetailViews({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const data = BLOG_TBODY_MOCK.find((item) => item.id === Number(id));

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <div className={cx("bg-white rounded shadow-lg relative  p-4")}>
        <div className="flex items-center justify-start p-4 border-b">
          <button onClick={handleGoBack}>
            <i className={"fas fa-chevron-left mr-2 text-sm "}></i>{" "}
          </button>
          <h2 className="ml-2 text-xl font-medium">Detail</h2>
        </div>
        <div className="p-4">
          <h1 className="font-bold text-2xl inline leading-snug">
            {data.judul} 
          </h1>
          {data.statusPublikasi === "Published" ? (
            <span className="bg-green-500 font-medium text-white rounded-md px-3 py-1 text-lg mx-2 tracking-wider">{data.statusPublikasi}</span>
          ): (
            <span className="bg-blue-500 font-medium text-white rounded-md px-3 py-1 text-lg mx-2 tracking-wider ">{"Draft"}</span>
          )}
          <p className="text-gray-400 my-2 ">
            Author {data.penulis} published at {data.publishDate}
          </p>
          {data.gambar ? (
            <img src={data.gambar} alt={data.judul} className="mx-auto my-6 border border-gray-300" />
          ) : (
            <img
              src="/img/image-error.png"
              alt="error"
              className="mx-auto my-6 border border-gray-300"
            />
          )}
          <div className="">
            {data.isi.split("\n").map((value) => {
              return <p className="my-3">{value}</p>;
            })}
          </div>
          {console.log(data.isi)}
        </div>
      </div>
    </>
  );
}