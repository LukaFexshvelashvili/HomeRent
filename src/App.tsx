import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="content_container">
        <Home />
      </div>
    </>
  );
}

export default App;
