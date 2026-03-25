import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/Mainlayout";
import GithubRepoList from "./pages/GithubRepoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN LAYOUT */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      {/* GitHub LAYOUT */}
      <Routes>
        <Route path="/github" element={<MainLayout />}>
          <Route index element={<GithubRepoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;