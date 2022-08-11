import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Welcome from "./Components/Welcome";

function App() {
  // let string = "the cat runs fast";
  // let stringSplit = string.split(" ");
  // console.log(stringSplit);

  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <Skills />
      <Projects />
      <About />
    </div>
  );
}

export default App;
