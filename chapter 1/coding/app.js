// creating structure like this using react
// <div id="container">
//    <h1 id="title1">heading</h1>
//    <h2 id="title2">headinh2</h2>
// </div>

const haeding = React.createElement(
    "h1",
    {
        id: "titile",
        className: "njnhg",
    },
    "heading 1"
);
const haeding2 = React.createElement(
    "h2",
    {
        id: "titile1",
        className: "njnhg",
    },
    "heading 2"
);
// const haeding2 = React.createElement(
const container = React.createElement("div", { id: "container" }, [
    haeding,
    haeding2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//  passing a react element in the root
console.log(haeding);
console.log(root);
root.render(container);
