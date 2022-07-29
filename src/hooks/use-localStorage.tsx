import { useState, useEffect } from "react";

type DestType = {
  id: string;
  name: string;
  imgUrl: string;
  address: string;
  population: number;
  nbrHotels: number;
  averageIncome: number;
  surface: number;
  isActive: boolean;
}

type InitialStateType = {
  dests: DestType[];
}

export const useLocalStorage = (key: string, defaultValue: InitialStateType) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : defaultValue
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  },[key, value])

  return { value, setValue };
};
