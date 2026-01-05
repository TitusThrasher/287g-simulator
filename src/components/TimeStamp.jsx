export default function TimeStamp({ time, elapsed }) {
  return (
    <div className="flex items-center gap-3 text-slate-500 mb-4">
      <div className="flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="font-medium">{time}</span>
      </div>
      {elapsed && (
        <span className="text-sm">({elapsed})</span>
      )}
    </div>
  );
}
