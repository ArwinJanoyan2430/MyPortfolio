import "../app/projects.css";
import Image from "next/image";
import logo from "../assets/AJLOGO.png";
import { useState } from 'react';
import filemanagement from "../assets/fileManagement.png";
import newProduct from "../assets/newProduct.png";
import meetLeo from "../assets/meetLeo.png";
import customers from"../assets/customers.png";


function Projects() {
  const [showCard, setShowCard] = useState(false);
  const [flipped, setFlipped] = useState(false); // <-- state for the flip card

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <section className="projects-section" id="projects">
      <h1 className="title-projects">PROJECTS</h1>

      <div className={`logo1-container ${showCard ? "card-open" : ""}`}>
        <p className="Logo-title">Virtual Assistant</p>
        <Image
          src={logo}
          alt="Click me"
          width={300}
          height={300}
          className="logo"
          onClick={toggleCard}
        />

        {showCard && (
          <div className="card-overlay">
            <div className="card-content">
              <button className="close-btn" onClick={toggleCard}>
                ×
              </button>

              <div className="scrollable-content">
                <Image
                  src={logo}
                  alt="display"
                  width={80}
                  height={80}
                  className="logodisplay"
                />
                <h2 className="centerthis1">Sample VA Projects</h2>
                <p className="centerthis2">
                  Virtual Assistant | Administrative & Social Media Support
                </p>
                <br />

                <p className="description1">
                  Created a structured virtual assistant support system including
                  calendar scheduling, task organization, <br />
                  and basic social media scheduling to support daily business
                  operations.
                </p>
                <br />

                <div className="side-by-side-container">
                  {/* Flip Card */}
                  <div
                    className={`img-card-filemanagement ${
                      flipped ? "is-flipped" : ""
                    }`}
                    onClick={toggleFlip}
                  >
                    <p className="filemanagement">1. File Management System</p>
                    <div className="face front">
                      <Image
                        src={filemanagement}
                        alt="filemanagement"
                        width={700}
                        height={100}
                        className="filemanagement"
                      />
                    </div>
                    <div className="face back">

                      <p>
                        Created a structured file management system using folders, naming conventions, 
                        and categorization to improve document accessibility and workflow efficiency.
                      </p>
                    </div>
                  </div>
                </div>

                <br />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
