// import HomePage from "../src/pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import RouterContent from "./components/Home/RouterContent";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RouterContent />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
