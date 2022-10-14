import { useContext, createContext } from "react";

export type IListingsData  = { listings: any[] }
const listingData: IListingsData = { listings: []}

export const DataContext = createContext(listingData);

export function useDataContext() {
  return useContext(DataContext);
}