import "../app/globals.css";
import React from "react";
import profile2 from "../assets/profile2.png"
import Image from "next/image";

function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className = "about-content">
          <div className = "left">
            <div className="card">

              {/* Intro */}
              <p className = "paragraph">
                Hi! I'm <strong>Arwin Janoyan</strong>, a BSIT student, aspiring web
                developer, and growing Virtual Assistant dedicated to helping clients
                stay organized and productive. I enjoy solving problems and creating
                smooth, user-focused digital experiences.
              </p>

              {/* What I Do */}
              <p className = "paragraph">
                As a Virtual Assistant, I support clients with administrative tasks,
                email and calendar management, online research, data entry, and simple
                content creation. On the technical side, I work with{" "}
                <strong>React</strong>, <strong>JavaScript</strong>, and modern tools
                to build clean and responsive web pages. 
              </p> 
              <ul className = "paragraph">
                My skill set includes:
                <li>• Google Workspace</li>
                <li>• Google Sheets</li>
                <li>• social media planning</li>
                <li>• basic website editing</li>
                <li>• Microsoft Office</li>
                <li>• Canva</li>
                <li>• strong communication</li>
                <li>• organization</li>
                <li>• attention to detail</li>
                <li className = "space">-</li>
              </ul>
              

              {/* Why Clients Choose Me */}
              <p className = "paragraph">
                Clients appreciate my reliability, fast learning, and commitment to
                delivering organized, efficient, and high-quality results. I focus on
                making tasks easier and ensuring smooth workflows.
              </p>

              {/* Background */}
              <p className = "paragraph">
                Coming from an IT background, I enjoy combining tech skills with
                administrative work-giving clients both creative and structured
                solutions.
              </p>

              {/* CTA */}
              <p className = "paragraph">
                I'm excited to work with individuals and businesses who need a
                dependable VA or web support partner. Feel free to reach out, I’d be
                happy to help.
              </p>

          </div>
        </div>
            {/* RIGHT SIDE – IMAGE */}

              <div className="right">
                <Image
                  src={profile2}
                  alt="profile2"
                  width={600} height={600}
                  className="about-img"
                />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
