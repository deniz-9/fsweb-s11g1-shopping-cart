import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const storedData = localStorage.getItem(key);
  const initialData = storedData ? JSON.parse(storedData) : initialValue;

  const [data, setData] = useState(initialData);

  const setStoredData = (value) => {
    setData(value);

    localStorage.setItem(key, JSON.stringify(value));
  };

  return [data, setStoredData];
};
