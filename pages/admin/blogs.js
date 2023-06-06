import React from 'react'
import Admin from "layouts/Admin.js";
import { MyTable } from 'components/common/MyTable';
import { AccountFormModal } from 'components/common/AccountFormModal';

const TBODY_MOCK = [
  {
    gambar: "http://picsum.photos/200/300",
    judul: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
    penulis: "John Doe",
    publishDate: "2021-01-01",
    statusPublikasi: "Published",
  },
  {
    gambar: "",
    judul: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
    penulis: "John Doe",
    publishDate: "2021-01-01",
    statusPublikasi: "Published",
  },
  {
    gambar: "",
    judul: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
    penulis: "John Doe",
    publishDate: "2021-01-01",
    statusPublikasi: "Published",
  },
  {
    gambar: "",
    judul: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
    penulis: "John Doe",
    publishDate: "2021-01-01",
    statusPublikasi: "Published",
  },
  {
    gambar: "",
    judul: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
    penulis: "John Doe",
    publishDate: "2021-01-01",
    statusPublikasi: "Published",
  },
  {
    gambar: "",
    judul: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
    penulis: "John Doe",
    publishDate: "2021-01-01",
    statusPublikasi: "Published",
  },
]

const Blogs = () => {

  return (
    <>  
    <MyTable
      titleTable="Blogs Table"
      tbody={TBODY_MOCK}
    />
    </>
  )
}

Blogs.layout = Admin;

export default Blogs;