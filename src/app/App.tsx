import { RouterProvider } from "react-router";
import { ConfigProvider, App as AntApp } from "antd";
import { router } from "./routes";
import { saladTheme } from "./theme";

export default function App() {
  return (
    <ConfigProvider theme={saladTheme}>
      <AntApp>
        <RouterProvider router={router} />
      </AntApp>
    </ConfigProvider>
  );
}
