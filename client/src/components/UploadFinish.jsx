import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

function UploadFinish() {
  return (
    <div>
      {" "}
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className=" text-center flex flex-col items-center gap-9 px-4 py-10">
          <figure className=" text-5xl text-green-500">
            <IoCheckmarkDoneCircleSharp></IoCheckmarkDoneCircleSharp>
          </figure>
          <h1 className=" font-bold">Uploaded Successfully!</h1>

          <div className="flex ">
            <input
              type="text"
              placeholder="You can't touch this"
              class="input input-bordered w-full max-w-xs"
              disabled
            />
            <button className="btn btn-primary">Copy Link</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadFinish;
