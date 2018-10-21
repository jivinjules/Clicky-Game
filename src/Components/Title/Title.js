import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">  < img id="title-image" src="../../images/curious-george-logo.png" alt="curious-george" /> {"  "}{props.children}</h1>;

export default Title;