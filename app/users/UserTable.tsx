import React from "react";

import { sort } from "fast-sort";
import { Button } from "../components/Button";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}
const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();
  const sortedUser = sort(users).desc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <button>
                <Link href="/users?sortOrder=names">Name</Link>
              </button>
            </th>
            <th>
              <Link href="/users?sortOrder=email">email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUser.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
