import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20000,
    },
  },
});

root.render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
);
