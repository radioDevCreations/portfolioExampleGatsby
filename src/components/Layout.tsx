import React, { FC, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "normalize.css";
import "../assets/css/main.css";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log('toggle sidebar');
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

