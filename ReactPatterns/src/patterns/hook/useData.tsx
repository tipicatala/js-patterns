import useSWR from "swr";

export const useData = (url) => {
  const { data } = useSWR(url, (link) => fetch(link).then((res) => res.json()));

  return [data]
}