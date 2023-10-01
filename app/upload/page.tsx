"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

// https://demo.cloudinary.com/uw/

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
        options={{
          sources: ["local", "unsplash"],
          maxFiles: 5,
          styles: {
            palette: {
              window: "#FFFFFF",
              windowBorder: "#90A0B3",
              tabIcon: "#0078FF",
              menuIcons: "#5A616A",
              textDark: "#000000",
              textLight: "#FFFFFF",
              link: "#0078FF",
              action: "#FF620C",
              inactiveTabIcon: "#0E2F5A",
              error: "#F44235",
              inProgress: "#0078FF",
              complete: "#20B832",
              sourceBg: "#E4EBF1",
            },
            fonts: {
              default: {
                active: true,
              },
            },
          },
        }}
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
