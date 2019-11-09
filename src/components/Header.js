import React from "react";
import { validateHeaderLevel } from "../helpers/functions";

const Header = ({ ...props }) => {
    const { level } = props;
    const validatedLevel = validateHeaderLevel(level || 1);
    const headerTag = `h${validatedLevel}`;

    return React.createElement(headerTag, {}, props.text);
};
export default Header;
