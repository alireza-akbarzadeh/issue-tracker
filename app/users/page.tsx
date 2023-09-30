import Link from "next/link";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const Users = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="px-4">
      <h1>users</h1>
      <Link href="/users/new" className="btn">
        Users
      </Link>
      <UserTable sortOrder={sortOrder} />
      <button className="btn btn-primary">Add To Card</button>
    </div>
  );
};

export default Users;
