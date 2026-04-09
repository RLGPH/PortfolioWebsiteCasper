// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "src/layouts/MainLayout";
import GithubRepoList from "./pages/GithubRepoList";
import GithubCommitLog from "./pages/GithubCommitLog";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <BrowserRouter basename="/PortfolioWebsiteCasper/">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="github" element={<GithubRepoList />} />
          <Route path="github/:id" element={<GithubCommitLog />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;