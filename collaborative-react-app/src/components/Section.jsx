
import { React, useState } from "react";
import LinkGitHubComp from "./LinkGitHub";

const SectionComp = (props) => {

const { name, description, githubLink } = props;

const [ showGitHubLink, setShowGitHubLink ] = useState(githubLink !== '');
debugger;

   return (
      <>
         <section>
            <h1>{name}</h1>
            <p>{description} 

            {showGitHubLink && (
                     <LinkGitHubComp githubLink={githubLink} /> 
                  )} 
            </p>
          </section>
      </>
    );
  }
  
  export default SectionComp;


