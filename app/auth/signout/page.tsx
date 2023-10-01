"use client";

import React from "react";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <div className=" flex justify-center h-screen items-center max-w-lg mx-auto">
      <div className="card card-bordered w-full">
        <div className="card-body">
          <div className="card-title ">
            <p className="text-center">Are You Sure You Want To Sign Out</p>
          </div>
          <div className="flex items-center w-full space-x-3 mt-5">
            <div className="w-full">
              <button
                onClick={() =>
                  signOut({ redirect: true, callbackUrl: "/auth/signin" })
                }
                className="btn btn-warning w-full"
              >
                YES
              </button>
            </div>
            <div className="w-full">
              <button className="btn btn-outline  w-full">NO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
