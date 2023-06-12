import React, { useContext, useEffect, useState } from "react";
import { useRouter, NextRouter } from "next/router";
import Admin from "layouts/Admin.js";

import BlogContext from "context/BlogContext";
import ToasterContext from "context/ToasterContext";

import Toaster from "components/common/Blogs/Toaster/Toaster";
import { MyTable } from "components/common/Blogs/MyTable";


interface BlogData {
  id: number;
  gambar: string;
  judul: string;
  isi: string;
  penulis: string;
  publishDate: string;
  statusPublikasi: string;
}

interface BlogContextProps {
  data: BlogData[];
  updateData: (newData: BlogData[]) => void;
}

interface ToasterData {
  showToaster: boolean;
  toasterMessage: string;
}

interface ToasterContextData {
  data: {
    toaster: ToasterData;
  };
  updateData: (data: any) => void;
}

const BlogViews: React.FC = () => {
  const router: NextRouter = useRouter();

  const context = useContext<BlogContextProps>(BlogContext);
  const [tableData, setTableData] = useState<BlogData[]>(context.data);
  const toasterContext = useContext<ToasterContextData>(ToasterContext);
  const [showToaster, setShowToaster] = useState<boolean>(
    toasterContext.data.toaster.showToaster
  );
  const [toasterMessage, setToasterMessage] = useState<string>(
    toasterContext.data.toaster.toasterMessage
  );

  useEffect(() => {
    const newData = context.data;
    setTableData(newData);
  }, [context, tableData]);

  useEffect(() => {
    if (showToaster) {
      const timeout = setTimeout(() => {
        setShowToaster(false);
        setToasterMessage("");
        toasterContext.updateData({
          toaster: {},
        });
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showToaster, toasterContext]);

  const handleDelete = (id: number) => {
    const newData = context.data.filter((item) => item.id !== id);
    context.updateData(newData);
    setTableData(newData);

    const successToaster = {
      showToaster: true,
      toasterMessage: "Success menghapus data!",
    };

    toasterContext.updateData({
      toaster: successToaster,
      ...toasterContext,
    });

    setShowToaster(successToaster.showToaster);
    setToasterMessage(successToaster.toasterMessage);
  };

  return (
    <>
      {showToaster && <Toaster message={toasterMessage} status={"success"} />}
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
