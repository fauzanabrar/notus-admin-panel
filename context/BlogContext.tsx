import React, { createContext, useState, useEffect, ReactNode } from "react";

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

interface BlogProviderProps {
  children: ReactNode;
}

const BlogContext = createContext<BlogContextProps>({ data: [], updateData: () => {} });

export default BlogContext;

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [data, setData] = useState<BlogData[]>([]);

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("blogData") || "[]");

    if (!(storedData && storedData.length > 0)) {
      const newData: BlogData[] = [
        {
          id: 1,
          gambar: "http://picsum.photos/200/300",
          judul:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt eros sed pretium. Duis nec commodo orci, vel eleifend",
          isi: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec justo euismod, rhoncus risus ut, bibendum erat. Donec a lorem vehicula, feugiat nulla in, vestibulum odio. Donec lacinia, lorem eu ultricies maximus, nisi leo pharetra tellus, a sollicitudin metus lectus ac dui. Donec non pulvinar turpis, vitae consequat ipsum. Sed egestas ex ligula, at cursus nisl porta vitae. Phasellus vitae nisi non mi venenatis placerat. Nulla a eros molestie tellus eleifend fringilla vel ac ipsum.
            
            Quisque enim augue, faucibus id est id, mollis feugiat elit. Morbi malesuada cursus ex, a fermentum quam tristique non. Sed justo purus, eleifend non rutrum non, egestas vulputate diam. Curabitur sit amet ante nibh. Phasellus aliquet lobortis nisi eget varius. Donec vitae mi velit. Etiam facilisis dolor ac molestie dignissim. Nulla dignissim, eros id sagittis viverra, arcu sapien cursus nunc, ut pulvinar lectus arcu eu erat. Vivamus sit amet lorem magna.
            
            Maecenas quis ultrices sapien. Phasellus rhoncus in turpis id maximus. Vivamus sed sagittis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Mauris hendrerit aliquet bibendum. Nullam imperdiet massa et dui iaculis molestie. Donec accumsan rutrum leo ac scelerisque. In imperdiet leo leo, a tristique dui tempus in. Aenean venenatis turpis at vehicula faucibus. Duis feugiat ipsum sit amet tortor vulputate, a rutrum metus congue. Nullam id dictum nunc.`,
          penulis: "John Doe",
          publishDate: "2021-01-01",
          statusPublikasi: "Published",
        },
        {
          id: 2,
          gambar: "http://picsum.photos/200/300",
          judul: "Sample Blog Post 2",
          isi: "This is the second blog post",
          penulis: "Jane Smith",
          publishDate: "2021-01-02",
          statusPublikasi: "Published",
        },
      ];

      setData(newData);
      localStorage.setItem("blogData", JSON.stringify(newData));
    } else {
      setData(storedData);
    }
  }, []);

  const updateData = (newData: BlogData[]) => {
    setData(newData);
    localStorage.setItem("blogData", JSON.stringify(newData));
  };

  return (
    <BlogContext.Provider value={{ data, updateData }}>{children}</BlogContext.Provider>
  );
};
