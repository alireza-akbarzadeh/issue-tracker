"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import OAuth from "./oAuth";
import { useSession } from "next-auth/react";

type FormValue = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const [formValue, setFormValue] = useState<FormValue>({
    email: "",
    password: "",
  });

  const { data: session, status } = useSession();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      email: formValue.email,
      password: formValue.password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen max-w-lg mx-auto">
        <div className="card card-bordered w-full">
          <div className="card-body">
            <div className="card-title">SignIn</div>
            <form onSubmit={handleSubmit}></form>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered w-full "
                placeholder="email"
                onChange={(event) =>
                  setFormValue((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
              />
            </div>
            <div className="form-control">
              <label htmlFor="Password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered w-full "
                type="password"
                id="Password"
                name="Password"
                placeholder="Password"
                onChange={(event) =>
                  setFormValue((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
              />
            </div>
            <div className="card-action mt-3">
              <button type="submit" className="btn btn-secondary w-full">
                Submit
              </button>
            </div>
            <OAuth />
          </div>
        </div>
      </div>
    </>
  );
}
