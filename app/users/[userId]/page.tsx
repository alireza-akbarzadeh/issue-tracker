import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { userId: string };
}

const UserDetailPage = ({ params: { userId } }: Props) => {
  if (Number(userId) > 10) notFound();
  return <div>user {userId}</div>;
};

export default UserDetailPage;
