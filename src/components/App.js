import React from "react";
import Navbar from "./Navbar";
import Raghav from "./raghav";
import About from "./about";
import Education from "./education";
import Project from "./project";
import Contact from "./contact";
import Footer from "./footer";
import Fixedbutton from "./Fixedbutton"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Raghav />
      <About />
      <Education />
      <Project/>
      <Contact gmail="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=raghavghai170@gmail.com"
        github="https://github.com/Raghav1209"
        linkedin="https://www.linkedin.com/in/raghav-ghai-45996a1a0/"
        instagram="https://www.instagram.com/raghavvghai/"
        facebook="https://www.facebook.com/raghav.ghai.144/"
      />
      <Footer/>
      <Fixedbutton/>
    </div>
  );
}

export default App;
