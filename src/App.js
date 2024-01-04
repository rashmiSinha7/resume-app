import Header from "./compoments/Header";
import Profile from "./compoments/Profile/Profile";
import Projects from "./compoments/Project/Projects";
import Skills from "./compoments/Skill/Skills";
import Education from "./compoments/Education/Education";
import "./App.css";
import Contact from "./compoments/Contact/Contact";
import Footer from "./compoments/Footer/Footer";
import NavFloater from "./compoments/Nav/NavFloater";

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      
      <Header />
      <div>
      <NavFloater/>
      <Profile />
      <Skills />
      <Projects />
      {/* <Education /> */}
      <Contact />
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
