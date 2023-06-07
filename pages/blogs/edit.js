import React from "react";

import Admin from "layouts/Admin.js";
import EditViews from "views/BlogViews/EditViews";
import { useRouter } from "next/router";

export default function EditBlog() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <EditViews id={id} />
    </>
  );
}

EditBlog.layout = Admin;
