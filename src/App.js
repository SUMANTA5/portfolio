import "./App.css";
import NavBar from "./components/NavBar";
import SocialLink from "./components/SocialLink";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>

      <SocialLink/>
    </div>
  );
}

export default App;
