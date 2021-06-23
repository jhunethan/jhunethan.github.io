import React from "react";
import "../css/Home.css";
import githubLogo from "../images/GitHub-Mark-Light-64px.png";
import background from "../images/flower.jpg";
import IndividualProject from "./Projects";

export default function Home() {
  return (
    <div>
      <img src={background} alt="background" class="background-image" />
      <div class="header">
        <ul class="header-nav">
          <li class="header-nav-link nav-home">Portfolio</li>
          <li class="header-nav-link nav-right">Projects</li>
          <li class="header-nav-link nav-right">About</li>
          <li class="header-nav-link nav-right">Contact</li>
        </ul>
      </div>
      <section class="top">
        <div class="top-section">
          <h1 class="top-fullname">Hi, my name is Ethan Lay</h1>
          <p>
            I'm a junior software developer,
            <br />
            specialising in UX rich performant websites and web applications
          </p>
        </div>
      </section>

      <section class="projects-section">
        <h1 class="section-title">Projects</h1>
        <div class="projects-container">
          <IndividualProject
            title={"Apollo client/ GraphQL Demo"}
            description={`A GraphQL web application that displays information from a public API`}
            skills={["React", "Apollo", "GraphQL", "JavaScript", "HTML", "CSS"]}
          />
          <IndividualProject
            title={"React Family Tree"}
            description={`A full stack web application, allowing users to collaboratively
            build a family tree`}
            skills={[
              "React",
              "MySQL",
              "JavaScript",
              "Node.js",
              "Express",
              "D3.js",
            ]}
          />
          <IndividualProject
            title={"NC Games API"}
            description={`As part of the Northcoders course, this API provides data through in a RESTful way.`}
            skills={["Node.js", "Express", "JavaScript", "PostgreSQL", "Jest"]}
          />
        </div>
      </section>
      <section class="about-section">
        <h1 class="section-title">About Me</h1>
        <p>
          I'm a full stack developer with a serious passion for fluid user
          experiences and building elegant yet powerful web applications.
        </p>

        <div class="top-section skills-section">
          <h2>Languages and Technologies</h2>
          <div class="skills-list">
            <div class="skills-list-child">HTML</div>
            <div class="skills-list-child">JavaScript</div>
            <div class="skills-list-child">CSS</div>
            <div class="skills-list-child">MySQL</div>
            <div class="skills-list-child">GIT</div>
          </div>
        </div>
        <a href="https://github.com/jhunethan">
          <img src={githubLogo} alt="github" />
        </a>
      </section>
      <section class="contact-section">
        <h1 class="section-title">Feel free to contact me through</h1>
        <p>Jhunethan23@gmail.com</p>
      </section>
    </div>
  );
}
