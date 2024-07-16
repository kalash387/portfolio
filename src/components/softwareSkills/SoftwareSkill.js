import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";
import TypeScriptIcon from "../../assets/icons/typescript.svg";
import AzureIcon from "../../assets/icons/azure.svg";
import CIcon from "../../assets/icons/c.svg";
import CPPIcon from "../../assets/icons/c++.svg";
import CSharpIcon from "../../assets/icons/c-sharp.svg";
import JavaIcon from "../../assets/icons/java.svg";
import DotNetIcon from "../../assets/icons/dotnet.svg";
import ExpressJsIcon from "../../assets/icons/expressjs.svg";
import KubernetesIcon from "../../assets/icons/kubernetes.svg";
import SqlServerIcon from "../../assets/icons/microsoft-sql-server.svg";
import MongoDbIcon from "../../assets/icons/mongodb.svg";
import MySqlIcon from "../../assets/icons/mysql.svg";
import PostmanIcon from "../../assets/icons/postman.svg";
import SpringBootIcon from "../../assets/icons/spring-boot.svg";
import SwaggerIcon from "../../assets/icons/swagger.svg";
import WpfIcon from "../../assets/icons/wpf.svg";
import AngularIcon from "../../assets/icons/angular.svg";
import DerbyIcon from "../../assets/icons/derby.svg";


// Map custom icons
const iconMapping = {
  "./assets/icons/typescript.svg": TypeScriptIcon,
  "./assets/icons/angular.svg": AngularIcon,
  "./assets/icons/azure.svg": AzureIcon,
  "./assets/icons/c.svg": CIcon,
  "./assets/icons/c++.svg": CPPIcon,
  "./assets/icons/c-sharp.svg": CSharpIcon,
  "./assets/icons/java.svg": JavaIcon,
  "./assets/icons/dotnet.svg": DotNetIcon,
  "./assets/icons/expressjs.svg": ExpressJsIcon,
  "./assets/icons/kubernetes.svg": KubernetesIcon,
  "./assets/icons/microsoft-sql-server.svg": SqlServerIcon,
  "./assets/icons/mongodb.svg": MongoDbIcon,
  "./assets/icons/mysql.svg": MySqlIcon,
  "./assets/icons/derby.svg": DerbyIcon,
  "./assets/icons/postman.svg": PostmanIcon,
  "./assets/icons/spring-boot.svg": SpringBootIcon,
  "./assets/icons/swagger.svg": SwaggerIcon,
  "./assets/icons/wpf.svg": WpfIcon,
};

export default function SoftwareSkill() {

  // Function to get the appropriate icon based on skill type
  const getCustomIcon = (skill) => {
    if (skill.custom && iconMapping[skill.iconPath]) {
      return (
        <img 
          src={iconMapping[skill.iconPath]}
          alt={skill.skillName} 
          style={{ width: "48px", height: "48px", fill: skill.color }}
        />
      );
    } else {
      return <i style={{ color: skill.color }} className={skill.fontAwesomeClassname}></i>;
    }
  };

  return ( 
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => (
            <li key={i} className="software-skill-inline" name={skill.skillName}>
              {getCustomIcon(skill)}
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
