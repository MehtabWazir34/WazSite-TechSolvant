import React from "react";
import { HashRouter, Router, Routes } from "react-router-dom";
function Footer() {
  return (
    <footer className="px-6 py-4 text-center 
                       bg-gray-100 text-gray-900 
                       dark:bg-gray-900 dark:text-gray-200 
                       transition-colors duration-300">
      <div className="flex justify-center gap-6 mb-4">
        <a href="/">Home</a>
        <a href="/us">Us</a>
        <a href="/services">Services</a>
        <a href="/team">Our Team</a>
        <a href="/request">Request</a>
      </div>
      <p className="text-sm"> WazSite-TechSolvant &copy; {new Date().getFullYear()} All rights reserved.</p>
      
    </footer>
  );
}
export default Footer;
