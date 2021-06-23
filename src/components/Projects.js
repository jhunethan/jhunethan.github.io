import React from "react";
import "../css/Projects.css";

export default function IndividualProject(props) {
  return (
    <div class="projects-container-child">
      <h3>{props.title}</h3>
      <p class="projects-description">{props.description}</p>
      <div class="projects-image-placeholder"></div>
      <div class="projects-individual-skills">
        {props.skills.map((skill) => {
          return <div class="skills-list-child">{skill}</div>;
        })}
      </div>
    </div>
  );
}
