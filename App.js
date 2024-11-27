// const parent = React.createElement("div", {id: "parent"}, "")
// const child = React.createElement("div", {id: "child"}, "")
// const heading2 = React.createElement("h1", { id: "heading2" }, "Hello Nested elements in React !");

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I a'm h1 tag"), React.createElement("h4", {}, "I a'm h4 tag")]
  )
);

console.log(parent)

// const heading = React.createElement("h1", { id: "heading" }, "Hello React !");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

root.render(parent)
