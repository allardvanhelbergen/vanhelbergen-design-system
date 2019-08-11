import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Introduction",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    path: "/colours",
    title: "Colours",
    content: pageLoader(() => import("./Colours.js"))
  },
  {
    path: "/typography",
    title: "Typography",
    content: pageLoader(() => import("./Typography.js"))
  },
];

ReactDOM.render(
  <Catalog title="Allard's Design System" pages={pages} />,
  document.getElementById("catalog")
);
