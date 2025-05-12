import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MinusCircle, PlusCircle, X } from "lucide-react";
import { InvokeLLM } from "@/integrations/Core";

export default function TextDepthControl({ text, selection, onClose, onUpdateText }) {
  const handleDepthChange = async (direction) => {
    const prompt = direction === 'increase' 
      ? `Take this text and expand it with more depth and technical detail, maintaining the same style but adding more expert-level information:\n\n${text}`
      : `Simplify and condense this text, making it more concise and easier to understand while maintaining the key points:\n\n${text}`;

    try {
      const result = await InvokeLLM({ prompt });
      onUpdateText(result, text);
    } catch (error) {
      console.error("Error updating text depth:", error);
    }
  };

  // Calculate position relative to the selection
  const style = {
    left: selection.rect.left + (selection.rect.width / 2),
    top: selection.rect.top + window.scrollY - 50 // Position above the text
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="fixed z-50 -translate-x-1/2 flex gap-2 p-2 rounded-lg shadow-lg bg-white border-2 border-slate-200"
      style={style}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleDepthChange('decrease')}
        className="flex items-center gap-1.5 bg-white hover:bg-red-50 text-red-600 border-red-200 hover:border-red-300"
      >
        <MinusCircle className="h-4 w-4" />
        Simplify
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleDepthChange('increase')}
        className="flex items-center gap-1.5 bg-white hover:bg-green-50 text-green-600 border-green-200 hover:border-green-300"
      >
        <PlusCircle className="h-4 w-4" />
        Expand
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 hover:bg-slate-100"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>
    </motion.div>
  );
}