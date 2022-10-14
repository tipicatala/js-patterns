import useSWR from "swr";

export const useData = () => {
  const { data } = useSWR('https://house-lydiahallie.vercel.app/api/listings', (link) => fetch(link).then((res) => res.json()));

  return [data]
}