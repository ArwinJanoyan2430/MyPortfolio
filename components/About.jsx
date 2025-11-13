import "../app/globals.css";
import React from "react";
import profile2 from "../assets/profile2.png"
import Image from "next/image";

function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>ABOUT ME</h2>
        <div className="about-content">
          <div className="left">
            <div className="card1">
              <p className="paragraph">
                <strong>Hi, I'm Arwin Janoyan</strong>, a BSIT student and full-stack developer who builds digital solutions that drive business results. 
                I combine cutting-edge technical skills with a practical understanding of what makes businesses successful online.
              </p>

              <p className="paragraph">
                I bring <strong>fresh perspectives</strong> and <strong>modern development skills</strong> to every project. 
                While building my professional experience, I offer dedicated attention and current 
                industry knowledge that can give your business a competitive advantage.
              </p> 
            </div>
            
            <div className="card2">
              <p className="offer"><strong>What I Offer:</strong></p>
              <div className="skills-grid">
                <div className="skill-category1">
                  <h4>Technical Expertise</h4>
                  <ul className="bullet">
                    <li><strong>• React & JavaScript</strong> – Interactive, modern web applications</li>
                    <li><strong>• Full-Stack Development</strong> – Complete end-to-end solutions</li>
                    <li><strong>• Responsive Design</strong> – Flawless experience on all devices</li>
                    <li><strong>• Modern Practices</strong> – Clean code and scalable architecture</li>
                  </ul>
                </div>
                <br/>
                <div className="skill-category2">
                  <h4>Professional Strengths</h4>
                  <ul className="bullet">
                    <li><strong>• Quick Adaptation</strong> – Rapidly learn and implement new requirements</li>
                    <li><strong>• Quality Focus</strong> – Thorough testing and attention to detail</li>
                    <li><strong>• Clear Communication</strong> – Regular updates in straightforward language</li>
                    <li><strong>• Reliable Execution</strong> – Committed to deadlines and deliverables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        
          <div className="right">
            <Image
              src={profile2}
              alt="Arwin Janoyan - Web Developer"
              width={390} 
              height={100} 
              className="about-img"
            />
            <div className="card3">
              <p className="paragraph">
                <strong>The advantage of working with emerging talent?</strong> You get 
                <strong> dedicated focus</strong> and <strong>innovative approaches</strong> without the senior-level price tag. 
                I'm motivated to prove myself by delivering exceptional value.
              </p>

              <p className="paragraph">
                I treat every project as an opportunity to build something meaningful. 
                You're not just getting a developer – you're getting a partner who's 
                committed to understanding your business and delivering solutions that matter.
              </p>

              <p className="paragraph">
                <strong>Here's how I ensure your success:</strong>
              </p>
              
              <ul className="paragraph">
                <li><strong>Deep Business Understanding</strong> – I learn your industry, goals, and challenges</li>
                <li><strong>Transparent process</strong> – You're involved and informed at every stage  </li>
                <li><strong>Adaptive approach</strong> – Tailored approaches for your specific needs</li>
                <li><strong>Results-driven mindset</strong> – Every feature serves a clear purpose</li>
              </ul>
              <p> </p>
              <p className="paragraph">
                Ready to work with a developer who'll give your project the attention it deserves? 
                 <a href="#contact" 
                onClick={(e) => {e.preventDefault(); alert("Contact section is coming soon!");}}
                ><strong className = "underline"> Let's create something amazing together!</strong></a></p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;