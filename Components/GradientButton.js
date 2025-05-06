import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function GradientButton({ 
  children, 
  onClick, 
  disabled = false, 
  isLoading = false,
  icon = null
}) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 
        hover:from-indigo-500 hover:to-purple-500
        text-white font-medium px-6 py-2 rounded-md
        transition-all duration-300 hover:shadow-lg
        disabled:opacity-70 disabled:cursor-not-allowed
        w-full md:w-auto
      `}
    >
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin mr-2" />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </Button>
  );
}