import React from "react";
import mock01 from '../assets/images/mock01.png';
import pr1 from '../assets/images/projekt1.png';
import pr2 from '../assets/images/projekt2.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/JacekwPL/Snake-game-in-arduino" target="_blank" rel="noreferrer"><img src={pr1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/JacekwPL/Snake-game-in-arduino" target="_blank" rel="noreferrer"><h2>Snake Game on Arduino</h2></a>
                <p>Snake Game is a C++ based game where the snake uses the A* algorithm to intelligently find the shortest path to the next reward, combining classic gameplay with modern pathfinding</p>
            </div>
            <div className="project">
                <a href="https://github.com/poprostupiotrus/ProjektIO" target="_blank" rel="noreferrer"><img src={pr2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/poprostupiotrus/ProjektIO" target="_blank" rel="noreferrer"><h2>Inwestuj roztropnie</h2></a>
                <p>Inwestuj Roztropnie is an AI-powered app using PAP Biznes data to predict stock value changes of top Polish companies by analyzing trends and current economic events.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;