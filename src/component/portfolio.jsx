import React, { Component } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import listCard from "./listCard.json";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "All",
      // добавляем id в массив.
      projectList: listCard.map((item, index) => ({
        ...item,
        id: index + 1
      }))
    };
  }

  // функция для обновления состояния selected при смене фильтра.
  handleSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  render() {
    const { selected, projectList } = this.state;
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    
    const projectsToRender = selected === "All"
      ? projectList
      : projectList.filter(({ category }) => category === selected);

    return (
      <div className="container">
        <Toolbar
          selected={selected}
          filters={filters}
          handleSelectFilter={this.handleSelectFilter}
        />
        <div></div>
        <ProjectList projectItem={projectsToRender} />
      </div>
    );
  }
}

export default Portfolio;