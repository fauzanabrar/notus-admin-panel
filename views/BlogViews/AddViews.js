import React, { useContext, useEffect, useState } from "react";
import cx from "classnames";
import { useRouter } from "next/router";
import Editor from "components/common/Forms/Editor";
import TextInput from "components/common/Forms/TextInput";
import Dropdown from "components/common/MyDropdown/Dropdown";
import ImageUploader from "components/common/Forms/ImageUpload";
import ImagePreview from "components/common/Forms/ImagePreview";
import TagInput from "components/common/Forms/TagInput";
import BlogContext from "context/BlogContext";

const MOCK_DATA_OPTIONS = [
  { id: 1, label: "Publikasikan", value: "1" },
  { id: 2, label: "Simpan Sebagai Draft", value: "2" },
];

export default function AddViews({ data= {}}) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const context = useContext(BlogContext);
  console.log(context.data, 'addViews');


  const [formData, setFormData] = useState({});


  useEffect(() => {
    if (!formData.id) {
      setFormData({ ...formData, id: context.data.length + 1 })
    }
    if (!formData.statusPublikasi) {
      setFormData({ ...formData, statusPublikasi: "Publikasikan" })
    }
  }, []);

  const handleFileChange = (file, name) => {
    setSelectedFile(file);
    setFormData((prev) => ({ ...prev, [name]: URL.createObjectURL(file) }));
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    context.updateData([...context.data, formData]);
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className={cx("bg-white rounded shadow-lg relative  p-4")}>
        <div className="flex items-center justify-start p-4 border-b">
          <button onClick={handleGoBack}>
            <i className={"fas fa-chevron-left mr-2 text-sm "}></i>{" "}
          </button>
          <h2 className="ml-2 text-xl font-medium">Add</h2>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextInput
              handleChange={handleChange}
              name="judul"
              title="Judul Berita (Bahasa Indonesia)"
            />
            <TextInput
              handleChange={handleChange}
              name="title-english"
              title="Judul Berita (English)"
            />
            <div>
              <TagInput name="kategori" title="Kategori" handleChange={handleChange} />
            </div>
            <Editor
              title="Isi Berita (Bahasa Indonesia)"
              name="isi"
              handleChange={handleChange}
            />
            <Editor
              title="Isi Berita (English)"
              name="body-english"
              handleChange={handleChange}
            />

            <div>
              <label htmlFor="statusPublikasi" className="block font-medium">
                Status Publikasi
              </label>
              <Dropdown name="statusPublikasi" options={MOCK_DATA_OPTIONS} handleChange={handleChange} />
            </div>
            <ImageUploader
              title="Upload Gambar"
              name="gambar"
              onFileChange={handleFileChange}
            />
            <ImagePreview
              title="Tampilan Gambar"
              name="preview-image"
              imageUrl={selectedFile && URL.createObjectURL(selectedFile)}
              imagePlaceholder={"/img/img-placeholder.png"}
            />

            <div className="flex justify-end space-x-4 pt-2">
              <button
                type="button"
                onClick={handleGoBack}
                className="px-4 py-2 text-white bg-red-500 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-emerald-500 rounded-md"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
