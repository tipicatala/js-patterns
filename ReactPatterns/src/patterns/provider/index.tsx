import * as React from "react";
import { DataContext } from "../hook/useDataContext";
import { useData} from "../hook/useData";

export default function DataProvider({ children }) {
  const [data] = useData()

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}
