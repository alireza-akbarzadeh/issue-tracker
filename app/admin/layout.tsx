import React, { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex h-screen">
      <aside className="bg-slate-200 p-5 mr-5">sindebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
