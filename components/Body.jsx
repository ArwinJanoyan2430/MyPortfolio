"use client";
import "../app/globals.css";
import Image from "next/image";
import profile from "../assets/profile.png";
import TiltedCard from '../src/TiltedCard.jsx';

function Body() {

  return (
    <main>
      <section className="Home">
        <div className="flex-container">
          <TiltedCard
          className="profile"
            imageSrc={profile.src}
            altText="Arwin Janoyan"
            captionText="Arwin Janoyan"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="410px"
            imageWidth="310px"
            rotateAmplitude={20}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
            <p style={{ 
              color: 'white', 
              fontSize: '1.25rem', 
              fontWeight: 'bold',
              textAlign: 'center',
              margin: 0
            }}>
              
              </p>
            }
          />
          <div className="text-container">
            <h1 className="typing-text">
              <span>I'm a <br></br>Web Developer.</span>
              <span>I'm a <br></br>Digital Organizer</span>
              <span>I'm a <br></br>BSIT Student.</span>
              <span>I'm a <br></br>Tech Enthusiast.</span>
            </h1>
            
              <p className="description" style={{ color: '#ffffff', textAlign: 'center' }}>
                Your friendly tech expert who speaks both 'code' and 'client' <br />
                turning complex problems into simple, working solutions.
              </p>
            
          </div>
        </div>
        <p className="viewWorks"><a href="#projects">VIEW MY WORKS</a></p>
      </section>
      
    </main>
  );
}

export default Body;
