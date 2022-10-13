import React from "react";
import { useData } from '../hook/useData';

import { LoadingSpinner } from "../../components/LoadingSpinner";

export default function withLoader(Element, url) {
  return (props) => {
    const [data] = useData(url);

    return data ? <Element {...props} data={data.listings} /> : <LoadingSpinner />;
  };
}
