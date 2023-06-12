import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface CKEditorProps {
  onChange: (data: string) => void;
  name: string;
  editorLoaded: boolean;
  value: string;
}

const CKEditorComponent: React.FC<CKEditorProps> = ({
  onChange,
  name,
  editorLoaded,
  value,
}) => {
  const editorRef = useRef<any>();
  const { CKEditor: CKEditorType } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
    };
  }, []);

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          onReady={(editor: any) => {
            editor.editing.view.change((writer: any) => {
              writer.setStyle(
                "height",
                "300px",
                editor.editing.view.document.getRoot()
              );
            });
          }}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
};

export default CKEditorComponent;
