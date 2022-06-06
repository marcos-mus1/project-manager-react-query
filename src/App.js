import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import NewProject from "./pages/NewProject";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Routes>
          <Route path="/">
            <Route index element={<Projects />} />
            <Route path="new" element={<NewProject />} />
            <Route path=":id" element={<SingleProject />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
