import React, { useState, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";
import UploadLoading from "./UploadLoading";
import UploadFinish from "./UploadFinish";
import ImageUpload from "./ImageUpload";

function Card() {
  const [loading, setLoading] = useState(false);
  const [success, setSucess] = useState(false);

  // Custom function to handle file upload for both drag and button oploads
  const handleImageUpload = () => {
    setLoading(true);
    setSucess(false);
  };
  const onDrop = useCallback((acceptedFiles) => {
    handleImageUpload();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <>
      {loading ? (
        <UploadLoading />
      ) : success ? (
        <UploadFinish />
      ) : (
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className=" text-center flex flex-col items-center gap-9 px-4 py-10">
            <h1>Upload your image</h1>
            <h2>File should be Jpeg,Png...</h2>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <figure className="border-dashed border-slate-400 border-4 p-20 bg-slate-200 rounded-md flex flex-col justify-center gap-6">
                <ImageUpload />
                <h2 className=" text-slate-400">Drag & Drop your image here</h2>
              </figure>
            </div>
            <h3>Or</h3>
            <button className="btn btn-primary btn-sm text-xs">
              Choose a file
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Card;
