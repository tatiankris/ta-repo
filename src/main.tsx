import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
		<App />
);

// console.log("APP Prototype", App.prototype)
//
// Promise.resolve().then(() => {
// 	console.log("APP Prototype", App.prototype)
// 	// console.log("APP caller", App.caller)
//
// })
