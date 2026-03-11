import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Comment/A-Home/Home.jsx";
import A_Home from "./Comment/A-Home/Home.jsx";
import B_About from "./Comment/B-About/About.jsx";
import C_Services from "./Comment/C-Services/Services.jsx";
import D_Process from "./Comment/D-Process/process.jsx";
import E_Work from "./Comment/E-Work/Work.jsx";
import F_Blogs from "./Comment/F-Blogs/Blogs.jsx";
import G_Contact from "./Comment/G-Contact/Contact.jsx";
import H_Testimonials from "./Comment/H-Testimonials/Testimonials.jsx";
import I_FAQS from "./Comment/I-FAQS/FAQS.jsx";
import J_footer from "./Comment/J_footer/footer.jsx";


/* ================= HOME PAGE LAYOUT ================= */

function HomePage() {
  return (
    <>
      
    
      <B_About />
      <C_Services />
      <D_Process />
      <E_Work />
      <H_Testimonials />
      <I_FAQS />
      <F_Blogs />
      <G_Contact />
      
    </>
  );
}


/* ================= ROUTING ================= */

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<HomePage />} />

        {/* OTHER PAGES */}
        <Route path="/about" element={<B_About />} />
        <Route path="/services" element={<C_Services />} />
        <Route path="/process" element={<D_Process />} />
        <Route path="/work" element={<E_Work />} />
        <Route path="/Blogs" element={<F_Blogs />} />
        <Route path="/contact" element={<G_Contact />} />
        <Route path="/testimonials" element={<H_Testimonials />} />
        <Route path="/faqs" element={<I_FAQS />} />

      </Routes>
<J_footer />
    </BrowserRouter>
  );
}

export default App;