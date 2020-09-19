import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1> To-do App</h1>
    </header>
  );
}

const headerStyle = {
  background: "teal",
  color: "#fff",
  textAlign: "center",
  padding: "12px",
};

export default Header;
