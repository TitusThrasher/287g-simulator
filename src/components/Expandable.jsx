import { useState } from 'react';

export default function Expandable({ question, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-3 border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-slate-50 hover:bg-slate-100 text-left flex items-center justify-between transition-colors"
      >
        <span className="font-medium text-slate-700">{question}</span>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isExpanded && (
        <div className="px-4 py-3 bg-white text-slate-600 text-sm border-t border-slate-200">
          {children}
        </div>
      )}
    </div>
  );
}
