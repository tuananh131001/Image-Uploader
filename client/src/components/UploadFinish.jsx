import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
const HOST = import.meta.env.VITE_URL;

function UploadFinish({ image_link }) {
  const img_link = HOST + "/Images/" + image_link;
  return (
    <div>
      {" "}
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className=" text-center flex flex-col items-center gap-9 px-4 py-10">
          <figure className=" text-5xl text-green-500">
            <IoCheckmarkDoneCircleSharp></IoCheckmarkDoneCircleSharp>
          </figure>
          <h1 className=" font-bold">Uploaded Successfully!</h1>
          <img src={img_link} alt="image" />
          <div className="flex ">
            <input
              type="text"
              placeholder="You can't touch this"
              className="input input-bordered w-full max-w-xs"
              value={img_link}
            />
            <button
              className="btn btn-primary "
              onClick={() => {
                navigator.clipboard.writeText(img_link);
              }}
            >
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadFinish;
