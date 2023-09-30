import Link from "next/link";
import React from "react";

export const Navigation = () => {
  return (
    <nav className="px-4 py-4 border-b">
      <ul className="flex space-x-4">
        <li>
          <Link href={"/"}>NEXTJS</Link>
        </li>
        <li>
          <Link href={"/users"}>User</Link>
        </li>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/admin"}>admin</Link>
        </li>
      </ul>
    </nav>
  );
};
