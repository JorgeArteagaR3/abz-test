import "./components/Navbar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { GetSection } from "./components/GetSection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <GetSection />
    </div>
  );
}

export default App;
