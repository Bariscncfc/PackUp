import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PackupList from "./components/PackupList";

function App() {
  return (
    <div>
      <Header />
      <div className="packup-app">
        <PackupList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
