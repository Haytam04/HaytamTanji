import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";




export default function page() {
  return (
    <div className="min-h-screen bg-black dark:bg-black dark:bg-dot-white/[0.16] bg-dot-black/[0.2] overflow-hidden ">
      
        <div className="max-w-7xl mx-auto sm:p-5" >
            <Navbar />
            <Hero/>
        </div>

        <div className="max-w-7xl mx-auto sm:p-5 mt-20 p-5">
          <Skills/>
          <Projects/>
          <Footer/>
        </div>
        
      
    </div>
  );
}
