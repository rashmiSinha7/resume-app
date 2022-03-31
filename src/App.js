import Header from "./compoments/Header";
import Profile from "./compoments/Profile/Profile";
import Projects from "./compoments/Project/Projects";
import Skills from "./compoments/Skill/Skills";
import Education from "./compoments/Education/Education";
import "./App.css";
import Contact from "./compoments/Contact/Contact";
import Footer from "./compoments/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
