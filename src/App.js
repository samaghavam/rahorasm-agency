import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { ToastContainer } from "react-bootstrap";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()


function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools/>
        <ToastContainer />
        {useRoutes(routes)}
      </QueryClientProvider>
    </div>
  );
}

export default App;
