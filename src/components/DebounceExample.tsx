import { useState, ChangeEvent } from "react";
import useDebounce from "../hooks/useDebounce";

const DebounceExample = () => {
  const [text, setText] = useState("");

  const handleChangeText = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, 2000);
  return (
    <div>
      <div>Text (2 second): {text}</div>
      <input type="text" onChange={handleChangeText} />
    </div>
  );
};

export default DebounceExample;
