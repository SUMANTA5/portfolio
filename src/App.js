import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SocialLink from "./components/SocialLink";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer/>

      <SocialLink />
    </div>
  );
}

export default App;
