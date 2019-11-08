import React from "react";
import ReactDOM from "react-dom";

const App = ({ ...props }) => {
    return React.createElement("h1", {}, props.headerText);
};
ReactDOM.render(
    React.createElement(App, { headerText: "HEADER" }),
    document.getElementById("app")
);
