import React from "react";
import "./styles/HeroSection.css";
import CharacterModel from "./Character";
// Import your 3D character component here. Placeholder below:
// import Character3D from "./Character/Scene";

const HeroSection: React.FC = () => (
  <section className="hero-section">
    <div className="hero-col hero-left">
      <h1>Hello, I am<br/>AARYAN KUMAR JAISWAL</h1>
    </div>
    <div className="hero-col hero-center">
      <div className="character-wrapper">
        <CharacterModel />
      </div>
    </div>
    <div className="hero-col hero-right">
      <h2>A CREATIVE DESIGNER<br/>AND DEVELOPER</h2>
    </div>
  </section>
);

export default HeroSection; 