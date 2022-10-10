import "./components/Navbar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { GetSection } from "./components/GetSection";
import { PostSection } from "./components/PostSection";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <GetSection />
            <PostSection />
        </div>
    );
}

export default App;
