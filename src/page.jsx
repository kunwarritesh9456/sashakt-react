import React from 'react'
import A_Home from "./Comment/A-Home/Home.jsx";
import B_About from "./Comment/B-About/About.jsx";
import C_Services from "./Comment/C-Services/Services.jsx";
import D_Process from "./Comment/D-Process/process.jsx";
import E_Work from "./Comment/E-Work/Work.jsx";
import F_Blogs from "./Comment/F-Blogs/Blogs.jsx";
import G_Contact from "./Comment/G-Contact/Contact.jsx";
import H_Testimonials from "./Comment/H-Testimonials/Testimonials.jsx";
import I_FAQS from "./Comment/I-FAQS/FAQS.jsx";

function Page() {
  return (
    <div>
        <A_Home />
        <B_About />
        <C_Services />
        <D_Process />
        <E_Work />
        <F_Blogs />
        <G_Contact />
        <H_Testimonials />
        <I_FAQS />

    </div>
  )
}

export default Page
