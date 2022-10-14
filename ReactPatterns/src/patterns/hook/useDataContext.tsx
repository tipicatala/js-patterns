import * as React from "react";
import { useContext, createContext } from "react";

export type IListingsData  = { listings: any[] }

const setListingData: React.Dispatch<React.SetStateAction<IListingsData>> = () => {}
const listingData: IListingsData = { listings: []}

export const DataContext = createContext({ listingData, setListingData });

export function useDataContext() {
  const { listingData, setListingData } = useContext(DataContext);

  return { listingData, setListingData };
}