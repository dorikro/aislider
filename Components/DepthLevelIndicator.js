import React from "react";

export default function DepthLevelIndicator({ level }) {
  let color, label;
  
  switch (level) {
    case 100:
      color = "bg-green-500";
      label = "Beginner";
      break;
    case 200:
      color = "bg-blue-500";
      label = "Intermediate";
      break;
    case 300:
      color = "bg-orange-500";
      label = "Advanced";
      break;
    case 400:
      color = "bg-purple-600";
      label = "Expert";
      break;
    case 500:
      color = "bg-red-600";
      label = "Extreme";
      break;
    default:
      color = "bg-gray-500";
      label = "Custom";
  }
  
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`}></div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}