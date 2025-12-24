"use client";

import { useEffect, useState } from "react";
import { Linkedin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-90"
      }`}
    >
      <div className="flex flex-col gap-3">
        <a 
          href="https://www.linkedin.com/in/sabrina-barros/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            className="rounded-full h-14 w-14 shadow-2xl bg-[#0077b5] hover:bg-[#006092] p-0 flex items-center justify-center border-2 border-white"
            title="Conectar no LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-white" />
          </Button>
        </a>
        <a href="/contact">
          <Button 
            className="rounded-full h-14 px-6 shadow-2xl bg-primary hover:bg-primary/90 text-white border-2 border-white gap-2 font-bold"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="hidden md:inline">Falar com Sabrina</span>
          </Button>
        </a>
      </div>
    </div>
  );
}
