"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import React from "react";
import { Avatar } from "./components/Avatar";

export const Navigation = () => {
  const { data, status } = useSession();

  return (
    <nav className="px-4 py-4 border-b flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>
          <Link href={"/"}>NEXTJS</Link>
        </li>
        <li>
          <Link href={"/users"}>User</Link>
        </li>
      </ul>
      <ul className="flex space-x-4">
        {status === "loading" && <div>loading....</div>}
        {status === "unauthenticated" ? (
          <li>
            <Link href={"/api/auth/signin"}>login</Link>
          </li>
        ) : (
          <li>
            <Link href={"/api/auth/signout"}>logout</Link>
          </li>
        )}
        {status === "authenticated" && (
          <div>
            <Avatar src={data.user?.image || ""} alt={data.user?.name || ""} />
          </div>
        )}
      </ul>
    </nav>
  );
};
