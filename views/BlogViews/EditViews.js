import React, { useState } from "react";
import cx from "classnames";
import { useRouter } from "next/router";
import Editor from "components/common/Forms/Editor";
import TextInput from "components/common/Forms/TextInput";
import Dropdown from "components/common/MyDropdown/Dropdown";
import ImageUploader from "components/common/Forms/ImageUpload";
import ImagePreview from "components/common/Forms/ImagePreview";
import TagInput from "components/common/Forms/TagInput";
import { BLOG_TBODY_MOCK } from "utils/mock-data";

const MOCK_DATA_OPTIONS = [
  { id: 1, label: "Publikasikan", value: "1" },
  { id: 2, label: "Simpan Sebagai Draft", value: "2" },
];

export default function EditViews({
  isOpen,
  onClose,
  id,
  handleChange = () => {},
}) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({ ...MOCK_DATA_OPTIONS });
  const [selectedOption, setSelectedOption] = useState("");
  const data = BLOG_TBODY_MOCK.find((blog) => blog.id === Number(id));

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleUpload = () => {
    console.log(selectedFile);
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleDropdown = (e) => {
    const { name, value, label } = e.target;
    console.log("here", { name, label, value });
    setSelectedOption("changed");
  };

  return (
    <>
      <div className={cx("bg-white rounded shadow-lg relative  p-4")}>
        <div className="flex items-center justify-start p-4 border-b">
          <button onClick={handleGoBack}>
            <i className={"fas fa-chevron-left mr-2 text-sm "}></i>{" "}
          </button>
          <h2 className="ml-2 text-xl font-medium">Edit</h2>
        </div>
        <div className="p-4">
          <form onSubmit={() => {}} className="space-y-4">
            <input type="hidden" value={data.id} />
            <TextInput
              handleChange={handleChange}
              name="title-indonesia"
              title="Judul Berita (Bahasa Indonesia)"
              data={data.judul}
            />
            <TextInput
              handleChange={handleChange}
              name="title-english"
              title="Judul Berita (English)"
              data={data.judul}
            />
            <div>
              <TagInput name="kategori" title="Kategori" defaultTags={data.kategori} />
            </div>
            <Editor
              title="Isi Berita (Bahasa Indonesia)"
              name="body-indonesia"
              data={data.isi}
            />
            <Editor
              title="Isi Berita (English)"
              name="body-english"
              data={data.isi}
            />

            <div>
              <label htmlFor="status" className="block font-medium">
                Status Publikasi
              </label>
              <Dropdown
                name="status"
                options={MOCK_DATA_OPTIONS}
                selectDefault={data.statusPublikasi}
              />
            </div>
            <ImageUploader
              title="Upload Gambar"
              name="image"
              onFileChange={handleFileChange}
            />
            <ImagePreview
              title="Tampilan Gambar"
              name="preview-image"
              imageUrl={
                selectedFile
                  ? selectedFile && URL.createObjectURL(selectedFile)
                  : data.gambar
              }
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