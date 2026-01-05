import { useState } from 'react';

export default function Tooltip({ term, children }) {
  const [show, setShow] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        className="underline decoration-dotted decoration-slate-400 cursor-help text-slate-900 font-medium"
        onClick={() => setShow(!show)}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {term}
      </button>
      {show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-800 text-white text-sm rounded-lg shadow-lg z-50">
          {children}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800"></span>
        </span>
      )}
    </span>
  );
}
