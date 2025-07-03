// import HomePage from "../src/pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./pages/Products";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <HomePage /> */}
      <Products />
    </QueryClientProvider>
  );
}

export default App;
