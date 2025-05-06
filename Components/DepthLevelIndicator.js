import React from "react";

export default function DepthLevelIndicator({ level }) {
  let color, label;
  
  if (level <= 100) {
    color = "bg-green-500";
    label = "Beginner";
  } else if (level <= 200) {
    color = "bg-emerald-500";
    label = "Basic";
  } else if (level <= 300) {
    color = "bg-blue-500";
    label = "Intermediate";
  } else if (level <= 400) {
    color = "bg-purple-500";
    label = "Advanced";
  } else {
    color = "bg-violet-600";
    label = "Expert";
  }
  
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`}></div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}