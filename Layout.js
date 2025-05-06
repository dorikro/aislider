import React from "react";
import { Github } from "lucide-react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {children}
      </div>
      
      <footer className="py-6 px-4 mt-12 text-center text-slate-500 text-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            AI Slider — Control the depth of AI-generated content
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-slate-700 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <span>©{new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}