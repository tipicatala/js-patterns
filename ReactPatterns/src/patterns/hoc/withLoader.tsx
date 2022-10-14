import React from "react";
import { useDataContext } from '../hook/useDataContext';

import { LoadingSpinner } from "../../components/LoadingSpinner";

export default function withLoader(Element) {
  return (props) => {
    const listingData = useDataContext();

    return listingData ? <Element {...props} data={listingData.listings} /> : <LoadingSpinner />;
  };
}
