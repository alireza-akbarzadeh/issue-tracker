"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const Upload = () => {
  const [public_id, setPublicID] = useState<string>();
  return (
    <>
      {public_id && (
        <CldImage
          src={public_id}
          width={270}
          height={180}
          alt="A coffey Image"
        />
      )}
      <CldUploadWidget
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicID(info.public_id);
        }}
        uploadPreset="alkkjbaq"
      >
        {({ open }) => {
          function handleOnClick(e: any) {
            e.preventDefault();
            open?.();
          }
          return (
            <button className="btn btn-primary" onClick={handleOnClick}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default Upload;
