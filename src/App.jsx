import Info from "./components/Info.jsx"
import About from "./components/About.jsx"
import Interests from "./components/Interests.jsx"
import Footer from "./components/Footer.jsx"

// Root component rendering the profile, about, interests, and footer sections
function App() {
    return (
        <div className="card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}

export default App;