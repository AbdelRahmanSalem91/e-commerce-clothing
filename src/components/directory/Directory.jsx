import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/MenuItem";
import DIRECTORY_DATA from "./directoryData";

export class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: DIRECTORY_DATA,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
