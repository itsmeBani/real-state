import './App.css'

import Navbar from "@/components/Navbar.tsx";
import Hero from "@/components/Hero.tsx";
import Services from "@/components/Services.tsx";
import MarqueeGallery from "@/components/Marquee.tsx";
import Gallery from "@/components/Gallery.tsx";
import Contact from "@/components/Contact.tsx";
import Footer from "@/components/footer.tsx";



function App() {



    return (
        <section className="w-full  overflow-hidden ">

            <Navbar />
            <Hero/>
            <Services/>
            <Gallery/>
            <MarqueeGallery/>
            <Contact/>
            <Footer/>
        </section>
    )
}

export default App
