import React, { useState, useCallback, useRef } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import TextDepthControl from "./TextDepthControl";

export default function ResponseDisplay({ response, isLoading, error, onUpdateResponse }) {
  const [selectedText, setSelectedText] = useState("");
  const [selection, setSelection] = useState(null);
  const contentRef = useRef(null);

  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection();
    const text = selection.toString().trim();

    if (text) {
      const range = selection.getRangeAt(0);
      setSelectedText(text);
      setSelection({
        range,
        rect: range.getBoundingClientRect()
      });
    } else {
      setSelectedText("");
      setSelection(null);
    }
  }, []);

  const handleUpdateText = async (newText, originalText) => {
    // Create a simple visual indication of the changes
    const markedText = `<span class="bg-green-100 text-green-900">${newText}</span>`;
    
    onUpdateResponse(prev => {
      return prev.replace(originalText, markedText);
    });

    setSelectedText("");
    setSelection(null);
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-2/3" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!response) return null;

  const formatResponse = (text) => {
    // Replace code blocks with styled blocks
    const codeBlockRegex = /```([\s\S]*?)```/g;
    const textWithFormattedCode = text.replace(codeBlockRegex, (match, code) => {
      return `<pre class="bg-slate-100 p-4 rounded-md overflow-x-auto text-sm my-4">${code}</pre>`;
    });

    // Handle inline code
    const inlineCodeRegex = /`([^`]+)`/g;
    const textWithFormattedInlineCode = textWithFormattedCode.replace(
      inlineCodeRegex,
      '<code class="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>'
    );

    return textWithFormattedInlineCode.replace(/\n/g, '<br>');
  };

  return (
    <div className="relative">
      <div 
        ref={contentRef}
        className="prose max-w-none text-slate-700"
        onMouseUp={handleTextSelection}
        dangerouslySetInnerHTML={{ __html: formatResponse(response) }}
      />
      
      {selectedText && selection && (
        <TextDepthControl
          text={selectedText}
          selection={selection}
          onClose={() => {
            setSelectedText("");
            setSelection(null);
          }}
          onUpdateText={handleUpdateText}
        />
      )}
    </div>
  );
}