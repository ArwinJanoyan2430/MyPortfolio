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
              <span>I'm a Web Developer.</span>
              <span>I'm a Programmer.</span>
              <span>I'm a BSIT Student.</span>
              <span>I'm a Tech Enthusiast.</span>
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Body;
