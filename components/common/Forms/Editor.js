import { useEffect, useState } from "react";
import CKeditor from "./CKeditor.js";


export default function Editor({title, name, data = ""}) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [text, setText] = useState(data);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
    
  return (
    <div>
      <label htmlFor={name} className="block font-medium mb-1">
        {title}
      </label>
      <CKeditor
        name={name}
        onChange={(data) => {
          setText(data);
        }}
        editorLoaded={editorLoaded}
        value={text}
      />
      {/* {JSON.stringify(text)} */}
    </div>
  );
}