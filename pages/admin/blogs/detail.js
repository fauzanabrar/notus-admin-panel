import React  from "react";

import Admin from "layouts/Admin.js";
import DetailViews from "views/BlogViews/DetailViews";
import { useRouter } from "next/router";

export default function DetailBlog() {
  const router = useRouter();
  const { id } = router.query;
  
  return (
    <>
      <DetailViews id={id} />
    </>
  );
}

DetailBlog.layout = Admin;
