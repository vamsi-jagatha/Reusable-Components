import React from "react";
import Button from "../Buttons/Button-2";

const Header = () => {
  return (
    <header className="w-full max-w-7xl mx-auto p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 ">
      <img src="/svgs/logo.svg" alt="Logo" className="h-10 w-10" />

      <nav>
        <ul className="flex items-center gap-x-6">
          <li>
            <a href="#home">
              <Button
                label="Home"
                hoverLabel="Home"
                variant="transparent"
                hoverTextColor="text-blue-600"
              />
            </a>
          </li>

          <li>
            <a href="#docs">
              <Button
                label="Docs"
                hoverLabel="Docs"
                variant="transparent"
                hoverTextColor="text-blue-600"
              />
            </a>
          </li>

          <li>
            <a href="#components">
              <Button
                label="Components"
                hoverLabel="Components"
                variant="transparent"
                hoverTextColor="text-blue-600"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
