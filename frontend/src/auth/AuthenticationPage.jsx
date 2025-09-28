import React from "react";
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";

function AuthenticationPage({ type }) { // type: 'sign-in' or 'sign-up'
  return (
    <div className="auth-container">
      <SignedIn>
        <p>You are already signed in.</p>
      </SignedIn>

      <SignedOut>
        {type === "sign-in" && <SignIn routing="path" path="/sign-in" />}
        {type === "sign-up" && <SignUp routing="path" path="/sign-up" />}
      </SignedOut>
    </div>
  );
}

export default AuthenticationPage;
