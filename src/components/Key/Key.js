import { useContext } from "react";
import KeysContexts from "../../contexts/KeysContexts";

const Key = () => {
  const { keysButton } = useContext(KeysContexts);
  return keysButton.map((keyy) => {
    return (
      <>
        <li key={keyy}>
          <button className="key big">
            delete
            {keyy}
          </button>
        </li>
      </>
    );
  });
};
export default Key;
