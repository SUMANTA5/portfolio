import "./App.css";
import NavBar from "./components/NavBar";
import SocialLink from "./components/SocialLink";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>

      <SocialLink/>
    </div>
  );
}

export default App;
