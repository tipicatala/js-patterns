import React from "react";
import useSWR from "swr";

import { LoadingSpinner } from "../../components/LoadingSpinner";

export default function withLoader(Element, url) {
  return (props) => {
    const { data } = useSWR(url, (link) => fetch(link).then((res) => res.json()));
    return data ? <Element {...props} data={data.listings} /> : <LoadingSpinner />;
  };
}
