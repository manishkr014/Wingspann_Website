import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import TechnologyPage from "./pages/Technology";
import Solutions from "./pages/Solutions";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Publications from "./pages/Publications";
import Apps from "./pages/Apps";
import ContactPage from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" onComplete={() => setLoading(false)} />
      ) : (
        <BrowserRouter>
          {/* Page fade-in synced with shutter reveal */}
          <motion.div
            key="main-app"
            className="min-h-screen bg-black overflow-x-hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          >
            <Navigation />
            <main className="pt-20 flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/mission" element={<About />} />
                <Route path="/about/vision" element={<About />} />
                <Route path="/technology" element={<TechnologyPage />} />
                <Route path="/solutions/industry" element={<Solutions />} />
                <Route path="/solutions/government" element={<Solutions />} />
                <Route path="/solutions/research" element={<Solutions />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/press" element={<Press />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </motion.div>
        </BrowserRouter>
      )}
    </AnimatePresence>
  );
}

export default App;
