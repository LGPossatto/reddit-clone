import "./app.scss";
import { Nav } from "./components/nav/Nav";
import { HomePage } from "./pages/home/HomePage";

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <div className="container">
        <HomePage></HomePage>
      </div>
    </div>
  );
}

export default App;
