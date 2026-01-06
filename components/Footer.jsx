import "../app/globals.css";
import Image from "next/image";
import button from "../assets/up-arrow.png";

export default function Footer() {
  return (
    <footer className="footer">
        
      <p>
        &copy; 2025 Arwin Janoyan.{" "}
      </p>
      <a href="#top" className="back-to-top-link">
          <Image src={button} alt="back-to-top"  width = {30} height = {30}/>
        </a>
      
    </footer>
  );
}
