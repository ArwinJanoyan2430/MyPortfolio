import "../app/projects.css";
import Image from "next/image";
import logo from "../assets/PourDecisionsLogo.png";
import { useState } from 'react';

function Projects(){
    const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

 return(
    <section className = "projects-section" id = "projects">
        <h1 className = "title-projects">PROJECTS</h1>
        <div className={`logo1-container ${showCard ? 'card-open' : ''}`}>
            
            <Image src={logo} alt="Click me" width={300} height={300} className="logo" onClick={toggleCard} />
            {showCard && (
                <div className="card-overlay">
                    <div className="card-content">
                        <button className="close-btn" onClick={toggleCard}>×</button>
                        <div className="scrollable-content">
                        <h3 className = "centerthis1">Pour Decisions Coffee</h3>
                        <p className = "centerthis2">Social Media Brand Strategy  </p>
                        </div>
                        <div className= "works">
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    </section>
 );
}

export default Projects;
