import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";

const App = () => {
    return <Header level={1} text="Header" />;
};
render(<App />, document.getElementById("app"));
