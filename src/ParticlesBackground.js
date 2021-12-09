import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particle-config";
import "./ParticlesBackground.css"

export default function ParticlesBackground() {
    return(
        
       
            <Particles params={particlesConfig}></Particles>
    )
}