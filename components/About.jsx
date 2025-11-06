import "../app/globals.css";
import React from "react";

function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="card">
          <p>
            Hi! I'm <strong>Arwin Janoyan</strong>, a passionate BSIT student and aspiring web developer.
          </p>
          <p>
            I enjoy creating interactive and user-friendly web experiences using{" "}
            <strong>React</strong> and <strong>JavaScript</strong>.
          </p>
          <p>
            Alongside my studies, I’m also pursuing a career as a{" "}
            <strong>Virtual Assistant</strong> and <strong>Freelancer</strong>, where I aim to
            I assist clients with administrative tasks, email and calendar management, data entry, online research, and creative solutions to streamline their workflow.
          </p>
          <p>
            My ultimate goal is to become a <strong>full-stack developer</strong> and a trusted{" "}
            <strong>remote professional</strong> who delivers quality and efficiency in every project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
