import React, { useState } from "react";
import { SECTIONS } from "../../directory.data";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

function Directory() {
  const [sections, setSection] = useState(SECTIONS);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}

export default Directory;
