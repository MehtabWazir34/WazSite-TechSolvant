import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Us from "./pages/Us";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";
import RequestForm from "./pages/RequestForm";
import Reviews from "./components/Reviews";
import ChangeMode from "./components/ChangeMode";


// import Hero from "./components/Hero";

function App() {
  return (
    <HashRouter>

      <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-[#0d1117] dark:text-[#E6edf3] transition-colors duration-300">
        <Header />
 
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/us" element={<Us />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/request" element={<RequestForm />} />
          </Routes>
          <ChangeMode/>
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
