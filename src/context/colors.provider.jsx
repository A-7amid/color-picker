import React, { createContext, useContext, useMemo, useState } from "react";
import { dummyData } from "../../savedColors";
const ColorsContext = createContext();

const useColors = () => {
  const context = useContext(ColorsContext);
  if (!context) {
    throw new Error("useColors must be used within a ColorsProvider");
  }
  return context;
};

const ColorsProvider = ({ children }) => {
  const [savedColors, setSavedColors] = useState(
    localStorage.getItem("saved-colors")
      ? JSON.parse(localStorage.getItem("saved-colors"))
      : dummyData
  );
  const [color, setColor] = useState("#db0000");
  const [name, setName] = useState(null);

  const saveColor = (name, color) => {
    if (savedColors.length >= 20) return;
    setSavedColors((prev) => [
      ...prev,
      { id: savedColors.length + 1, name: name, color: color },
    ]);
    setName(null);
    localStorage.setItem("saved-colors", JSON.stringify(savedColors));
  };

  const deleteColor = (id) => {
    setSavedColors(savedColors.filter((_, i) => i !== id));
  };

  const values = useMemo(
    () => ({
      name,
      setName,
      saveColor,
      deleteColor,
      color,
      setColor,
      savedColors,
    }),
    [name, color, savedColors]
  );

  return (
    <ColorsContext.Provider value={values}>{children}</ColorsContext.Provider>
  );
};

export { ColorsProvider, useColors };
