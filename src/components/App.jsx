import React from "react";
import Navbar from "./Navbar/Navbar";
import Groups from "./Groups/Groups";
import Friends from "./Friends/Friends";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Groups />
        <Friends />
      </div>
    </div>
  );
}

export default App;
