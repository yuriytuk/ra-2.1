import React from "react";
import "../App.css";
const ProjectList = ({ projectItem }) => {
  return (
    <div className="containerCards">
      {projectItem.map(({ img, category, id }) => (<img key={id} src={img} alt={category} />))}
    </div>
  );
};

export default ProjectList;