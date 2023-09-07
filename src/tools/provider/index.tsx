import { ConfigProvider } from "antd";
import type { FC } from "react";
import { AuthProvider } from "react-auth-kit";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import store from "../../redux";

interface ProviderProps {
  children: React.ReactNode;
}

const ProviderConfig: FC<ProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <AuthProvider
      authType="cookie"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https"}
    >
      <BrowserRouter>
        <ConfigProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Provider store={store}>{children}</Provider>
          </QueryClientProvider>
        </ConfigProvider>
      </BrowserRouter>
      ;
    </AuthProvider>
  );
};

export default ProviderConfig;
