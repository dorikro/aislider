import React from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";

export default function ResponseDisplay({ response, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-full" />
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

  if (!response) {
    return null;
  }

  // Format the response with proper whitespace preservation and formatting
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

    // Convert newlines to <br> tags
    return textWithFormattedInlineCode.replace(/\n/g, '<br>');
  };

  return (
    <div 
      className="prose max-w-none text-slate-700"
      dangerouslySetInnerHTML={{ __html: formatResponse(response) }}
    />
  );
}