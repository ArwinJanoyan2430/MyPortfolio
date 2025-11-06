'use client'
import About from "../components/About.jsx";
import Body from "../components/Body.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";


export default function Home() {
  return (
    <>
      <Navbar />
      <Body />
      <About />
      <Footer />
    </>
  );
}