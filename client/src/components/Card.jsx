import React, { useState, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";
import UploadLoading from "./UploadLoading";
import UploadFinish from "./UploadFinish";
import ImageUpload from "./ImageUpload";
import axios from "axios";
const HOST = import.meta.env.VITE_URL;
function Card() {
  const [loading, setLoading] = useState(false);
  const [success, setSucess] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // Custom function to handle file upload for both drag and button oploads
  const handleImageUpload = (file) => {
    setLoading(true);
    const data = new FormData();
    data.append("image", file[0]);
    axios
      .post(HOST + "/upload/", data)
      .then((res) => {
        setSucess(true);
        setLoading(false);
        setImageUrl(res.data.image_link);
      })
      .catch((err) => {
        setLoading(false);
        setSucess(false);
        toast.error("Could not upload image");
      });
  };
  const onDrop = useCallback((acceptedFiles) => {
    let file = acceptedFiles[0];
    console.log(file);
    handleImageUpload(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
    onDrop,
  });
  return (
    <>
      {loading ? (
        <UploadLoading />
      ) : success ? (
        <UploadFinish image_link={imageUrl} />
      ) : (
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className=" text-center flex flex-col items-center gap-9 px-4 py-10">
            <h1 className=" text-xl font-bold">Upload your image</h1>
            <h2>File should be Jpeg,Png...</h2>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <figure className=" hover:border-blue-500 hover:cursor-pointer border-dashed border-slate-400 border-4 py-20 px-20 bg-slate-200 rounded-md flex flex-col justify-center gap-6">
                <ImageUpload />
                <h2 className=" text-slate-400">Drag & Drop your image here</h2>
              </figure>
            </div>
            <h3>Or</h3>
            <input
              type="file"
              name="image-file"
              className=" bg-red-500 translate-y-16 w-24 opacity-0 hover:cursor-pointer"
              onChange={onDrop}
            />
            <label htmlFor="image-file" className="btn btn-sm">
              Choose a file
            </label>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Card;
