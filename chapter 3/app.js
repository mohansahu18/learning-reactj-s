import React from "react";
import ReactDOM from "react-dom/client";

// without using jsx
/*
const heading = React.createElement("h1", { id: "title1", key: "h1" }, "heading 1 from parcel")
const heading2 = React.createElement("h2", { id: "title2", key: "h2" }, "heading 2 from parcel")
const container = React.createElement("div", { id: "container" }, [heading, heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)
console.log("hey react");
*/


// react element
const headingJSX = (
    <h1 id="title 1" key="h1 tag">
        react element
    </h1>
)
/*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingJSX)
*/

// REACT COMPONENT

const Title = () => {
    return <h1> title</h1>
}

// functional component
// name of functiuonal component start with capital letter
const HeaderComponent = () => {
    return (
        <div>{console.log("99")}
            <Title />
            {Title()}
            <h1 id="">
                functional component
            </h1>
            {headingJSX}
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />)
