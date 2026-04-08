import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/Mainlayout";
import GithubRepoList from "./pages/GithubRepoList";
import GithubCommitLog from "./pages/GithubCommitLog";
import ContactMe from "./pages/ContactMe";

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
      {/* COMMIT LOG LAYOUT */}
      <Routes>
        <Route path="/github/:id" element={<MainLayout />}>
          <Route index element={<GithubCommitLog />} />  
        </Route>
      </Routes>
      {/* CONTACT LAYOUT */}
      <Routes>
        <Route path="/contact" element={<MainLayout />}>
          <Route index element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;