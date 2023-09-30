import React from "react";

interface Props {
  params: { userId: string; photoId: string };
}

const PhotoDetails = ({ params: { userId, photoId } }: Props) => {
  return (
    <div>
      <p>user: {userId}</p>
      <p>photo: {photoId}</p>
    </div>
  );
};

export default PhotoDetails;
