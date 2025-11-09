"use client";
import "../app/globals.css";

import Image from "next/image";
import profile from "../assets/profile.png";

function Body() {

  return (
    <main>
      <section className="Home">
        <div className="flex-container">
          <Image src={profile} alt="Profile Picture" width={310} height={410} className="profile" />
          <div className="text-container">
            <h1 className="typing-text">
              <span>I'm a <br></br>Web Developer.</span>
              <span>I'm a <br></br>Digital Organizer</span>
              <span>I'm a <br></br>BSIT Student.</span>
              <span>I'm a <br></br>Tech Enthusiast.</span>
            </h1>
            
              <p className="description" style={{ color: '#ffffff', textAlign: 'center' }}>
                Your friendly tech expert who speaks both 'code' and 'client' -<br />
                turning complex problems into simple, working solutions.
              </p>
            
          </div>
        </div>
      </section>
    </main>
  );
}

export default Body;
