import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/PortfolioWebsiteCasper/">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="github" element={<GithubRepoList />} />
          <Route path="github/:id" element={<GithubCommitLog />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;