import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Blogs from "./pages/Blogs"
import ContactMe from "./pages/ContactMe"
import Portfolio from "./pages/Portfolio"
import Services from "./pages/Services"
import Navbar from "./components/Header"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact-me" element={<ContactMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App