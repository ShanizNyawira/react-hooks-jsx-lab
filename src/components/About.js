import React from "react";
import { image } from "../data/data.js";
import { city} from "../data/data.js";
function About() {
  return <div id="about">
    <h2 >About Me</h2>
    <p>I am a Web Developer from {city}</p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
