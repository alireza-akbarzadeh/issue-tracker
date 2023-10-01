import React from "react";

type AvatarProps = {
  src: string;
  alt: string;
};

export const Avatar = ({ src, alt, ...rest }: AvatarProps) => {
  return (
    <div className="avatar" {...rest}>
      <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={src} className="w-full h-full object-contain" alt={alt} />
      </div>
    </div>
  );
};
