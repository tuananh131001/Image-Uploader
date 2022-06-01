import React from "react";

function UploadLoading() {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Uploading...</h2>
          <progress className="progress progress-primary w-56"></progress>
        </div>
      </div>
     
    </div>
  );
}

export default UploadLoading;
