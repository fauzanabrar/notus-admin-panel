import React, { useContext, useEffect, useState } from "react";
import Admin from "layouts/Admin.js";
import { MyTable } from "components/common/MyTable";
import { useRouter } from "next/router";
import BlogContext from "context/BlogContext";

const BlogViews = () => {
  const router = useRouter();

  const context = useContext(BlogContext);
  const [tableData, setTableData] = useState(context.data);
  
  useEffect(() => {
    const newData = context.data;
    setTableData(newData);
    console.log(context.data, 'context blogviews');
    console.log(tableData, 'tableData blogviews');
  }, [context, tableData]);


  const handleDelete = (id) => {
    const newData = context.data.filter((item) => item.id !== id);
    context.updateData(newData);
    setTableData(context.data);
  };
  

  return (
    <>
      <MyTable
        titleTable="Blogs Table"
        tbody={tableData}
        handleDetails={(data) => router.push(`blogs/detail?id=${data}`)}
        handleEdit={(data) => router.push(`blogs/edit?id=${data}`)}
        handleAdd={() => router.push(`blogs/add`)}
        handleDelete={handleDelete}
      />
    </>
  );
};

BlogViews.layout = Admin;

export default BlogViews;

