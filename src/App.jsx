import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/Mainlayout";
import GithubRepoList from "./pages/GithubRepoList";
import GithubCommitLog from "./pages/GithubCommitLog";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    // Set basename to your GitHub repo name
    <BrowserRouter basename="/portfoliowebsitecasper/">
      <Routes>
        {/* MAIN LAYOUT */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* GitHub LAYOUT */}
        <Route path="/github" element={<MainLayout />}>
          <Route index element={<GithubRepoList />} />
        </Route>

        {/* COMMIT LOG LAYOUT */}
        <Route path="/github/:id" element={<MainLayout />}>
          <Route index element={<GithubCommitLog />} />  
        </Route>

        {/* CONTACT LAYOUT */}
        <Route path="/contact" element={<MainLayout />}>
          <Route index element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;