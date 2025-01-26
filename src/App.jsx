import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

// Section 22: React Router With Data Loading (v6.4+) [281-292]
// --------------------------------------------------

// 1/4. Set up project
// 💡279. Introduction to Part 4
// 💡281. Section Overview
// 💡282. Setting Up a New Project: "Fast React Pizza Co."
// 💡283. Application Planning
// 💡284. Setting Up a Professional File Structure

// 2/4. Set up React Router
// 💡285. A New Way Of Implementing Routes
// 💡286. Building the App Layout

// 3/4. Fetch data + error handling
// 💡287. Fetching Data With React Router "Loaders": Pizza Menu
// 💡288. Displaying a Loading Indicator
// 💡289. Handling Errors With Error Elements
// 💡290. Fetching Orders

// 4/4. Write data + error handling
// 💡291. Writing Data With React Router "Actions"
// 💡292. Error Handling in Form Actions

// --------------------------------------------------
// --------------------------------------------------

// Section 23: [Optional] Tailwind CSS Crash Course: Styling the App
// --------------------------------------------------
// 💡293. Section Overview
// 💡294. What is Tailwind CSS?
// 💡295. Setting Up Tailwind CSS
// 💡296. Working With Color
// 💡297. Styling Text
// 💡298. The Box Model: Spacing, Borders, and Display
// 💡299. Responsive Design
// 💡300. Using Flexbox
// 💡301. Using CSS Grid
// 💡302. Styling Buttons: Element States and Transitions
// 💡303. Styling Form Elements

// 💡304. Reusing Styles With @apply
// 💡305. Reusing Styles With React Components
// 💡306. Absolute Positioning, z-index, and More
// 💡307. Configuring Tailwind: Custom Font Family
