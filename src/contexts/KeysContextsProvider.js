import KeysContexts from "./KeysContexts";

const KeysContextsProvider = ({ childrem }) => {
  const KeysButton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "delete"];

  return (
    <KeysContexts.Provider
      value={{
        KeysButton,
      }}
    >
      {childrem}
    </KeysContexts.Provider>
  );
};

export default KeysContextsProvider;
