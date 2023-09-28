import { useQuery } from "react-query";
import { useAxios } from "../useAxios";

interface QueryHandlerProps {
  url: string;
  queryKey: string;
  params?: object;
}

const useQueryHandler = ({ queryKey, url, params }: QueryHandlerProps) => {
  const axios = useAxios();
  return useQuery(
    queryKey,
    () =>
      axios({
        url,
        params,
      }).then((res) => res.data.data),
    {
      refetchOnWindowFocus: false,
    },
  );
};

export default useQueryHandler;
