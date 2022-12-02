import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";


export default function Main() {
    return (
        <div className="Main">
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    )
    function About() {
        return (
            <div>
                <main>
                    <h2>Who are we?</h2>
                    <p>
                        React Router is a lightweight, fully-featured routing library for the React JavaScript library
                    </p>
                </main>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
            </div>
        );
    }
    function Home() {
        return (
          <div>
            <main>
              <h2>Welcome to the homepage!</h2>
            </main>
            <nav>
              <Link to="/about">About</Link>
            </nav>
          </div>
        );
      }
}

