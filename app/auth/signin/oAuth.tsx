import React from "react";
import { signIn, getProviders } from "next-auth/react";

const OAuth = async () => {
  const providers = await getProviders();

  return (
    <div>
      {Object.values(providers || {}).map((provider) => (
        <div key={provider.name} className="mb-3">
          <button
            className="btn btn-outline w-full"
            onClick={() =>
              signIn(provider.id, { redirect: true, callbackUrl: "/" })
            }
          >
            {provider?.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default OAuth;
