import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles/base.scss";
import "./App.css";

import { Backboard } from "./components/Backboard";
import { FeedList } from "./modules/FeedList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Backboard>
          <FeedList />
        </Backboard>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
