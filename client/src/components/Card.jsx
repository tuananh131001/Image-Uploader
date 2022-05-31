import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MyDropzone from './MyDropzone'
function Card() {
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className=" text-center flex flex-col items-center gap-9 px-4 py-10">
          <h1>Upload your image</h1>
          <h2>File should be Jpeg,Png...</h2>
          <MyDropzone></MyDropzone>
          <h3>Or</h3>
          <button className="btn btn-primary btn-sm text-xs">Choose a file</button>
        </div>
      </div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </>
  );
}

export default Card;
