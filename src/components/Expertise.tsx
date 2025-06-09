import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faDocker, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "ASP.NET Core",
    "Entity Framework Core",
    "DevExpress",
    ".NET",
    "xUnit",
    "NUnit",
    "OAuth2",
    "Hangfire",
    "Rabbit",
    "Swagger",
    "Postman"
];

const labelsSecond = [
    "MySQL",
    "T-SQL",
    "EF Core",
    "ADO.NET",
    "SSMS",
    "Profiler"
];

const labelsThird = [
    "Azure",
    "App Service",
    "Functions",
    "API Management",
    "Azure SQL Database",
    "DevOps Pipelines",
    "Docker"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faWindows} size="3x"/>
                    <h3>Backend .Net Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as ASP.NET Core and C#. I have strong proficiency in backend development and a solid understanding of the software development lifecycle.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>MySQL Database Development</h3>
                    <p>I have designed and optimized complex relational databases and integrated them seamlessly with web and desktop applications. I have strong proficiency in SQL development, including writing stored procedures, views, and functions, as well as ensuring performance and data integrity across the system. I am experienced with technologies such as Microsoft SQL Server, T-SQL, Entity Framework, ADO.NET, and database-first or code-first approaches in .NET environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrosoft} size="3x"/>
                    <h3>Azure Deploying</h3>
                    <p>I have experience building web applications using ASP.NET Core and C#. I specialize in backend development, including API design, database integration, and application logic. I'm also familiar with the software development lifecycle and modern development practices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;