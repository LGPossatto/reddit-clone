import { Routes, Route } from "react-router-dom";

import "./app.scss";
import { Nav } from "./components/nav/Nav";
import { HomePage } from "./pages/home/HomePage";
import { PostPage } from "./pages/post-page/PostPage";

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/post/:pid" element={<PostPage></PostPage>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
