import React from "react";
import NavBar from "../components/NavBar";
import UseScrollTop from "../lib/hooks/UseScrollTop";
const MainLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <NavBar />
      <UseScrollTop />
      <div className="pages">{children}</div>
    </>
  );
};

export default MainLayout;
