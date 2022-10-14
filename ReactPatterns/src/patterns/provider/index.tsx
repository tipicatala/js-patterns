import * as React from "react";
import { useDataContext, DataContext, IListingsData } from "../hook/useDataContext";
import { useData} from "../hook/useData";

export default function DataProvider({ children }) {
  const [listingData, setListingData] = React.useState<IListingsData>({ listings: [] });
  const [data] = useData()

  React.useEffect(() => {
    setListingData(data);
  }), []

  return (
    <DataContext.Provider value={{ listingData, setListingData }}>
      {children}
    </DataContext.Provider>
  );
}
