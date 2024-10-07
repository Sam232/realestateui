import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <Container styles="p-5">
      <span className="text-2xl">Investa</span>
      <nav>
        <ul className="flex items-center justify-center gap-12">
          <li>Home</li>
          <li>About</li>
          <li>Properties</li>
          <li>Contact</li>
        </ul>
      </nav>
      <button className="bg-red-600 text-white px-8 py-3">Sign Up</button>
    </Container>
  );
}

export default Navbar;
