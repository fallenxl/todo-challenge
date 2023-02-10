import { useState } from "react";

export function useContent() {
  const [content, setContent] = useState("");
 

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleContentClear = () => {
    setContent("");
  }
  return {
   content,
   handleContentChange,
    handleContentClear
  };
}
