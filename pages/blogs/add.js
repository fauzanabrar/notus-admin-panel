import React from "react";

import Admin from "layouts/Admin.js";
import AddViews from "views/BlogViews/AddViews";

export default function AddBlog() {
  return (
    <>
      <AddViews />
    </>
  );
}

AddBlog.layout = Admin;
