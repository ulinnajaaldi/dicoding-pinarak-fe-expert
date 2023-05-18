import "regenerator-runtime"; /* for async await transpile */
import "../styles/index.scss";
import "../styles/responsive.scss";

import main from "./view/main";
import "./components/item-list";

document.addEventListener("DOMContentLoaded", main);
