import React, { createContext, useContext, useEffect, useState } from "react";
import { mockCurrencies } from "../mock";
import { Currency } from "../types";

interface AppData {
  currencies: Currency[];
  setCurrencies: (data: Currency[]) => void;
}

const AppContext = createContext({} as AppData);

export const useApp = () => {
  const ctx = useContext(AppContext);

  return ctx;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  function fetchCurrencies() {
    // TODO
    const data = mockCurrencies;
    setCurrencies(data);
  }

  return (
    <AppContext.Provider value={{ currencies, setCurrencies }}>
      {children}
    </AppContext.Provider>
  );
};
