 
import React from "react";

const LinkGitHubComp = (props) => 
{
    const { githubLink } = props;

    return (
    <>
      <a href={githubLink}>Aquí</a> puedes ver mi perfil de GitHub.
    </>  
    )
}

export default LinkGitHubComp;