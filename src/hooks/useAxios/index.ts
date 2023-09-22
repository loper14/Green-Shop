import axios from "axios";

interface AxiosProps {
  url: string;
  method?: "POST" | "PUT" | "PATCH" | "DELETE";
  body?: object;
  headers?: object;
  params?: object;
}

export const useAxios = () => {
  const request = async (props: AxiosProps) => {
    const { url, method = "GET", body, headers } = props;
    return await axios({
      url: `${process.env.REACT_APP_MAIN_URL}${url}`,
      method,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        ...headers,
      },
      params: {
        access_token: "64f4b75bf8771ae62ff9821d",
      },
    });
  };
  return request;
};
