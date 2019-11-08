import React from "react";
import { render } from "react-dom";

const App = ({ ...props }) => {
    return <h1>{props.headerText}</h1>;
};
render(<App headerText="Header from props" />, document.getElementById("app"));
