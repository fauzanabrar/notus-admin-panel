import React from "react";

import Auth from "layouts/Auth.js";
import { LoginViews } from "views/LoginViews";

export default function Login() {
  return (
    <>
      <LoginViews />
    </>
  );
}

Login.layout = Auth;
