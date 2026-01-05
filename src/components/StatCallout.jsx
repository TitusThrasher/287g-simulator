export default function StatCallout({ number, label, color = 'slate', size = 'md' }) {
  const colorClasses = {
    slate: 'bg-slate-100 border-slate-300 text-slate-700',
    amber: 'bg-amber-100 border-amber-300 text-amber-700',
    red: 'bg-red-100 border-red-300 text-red-700',
    green: 'bg-green-100 border-green-300 text-green-700'
  };

  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`inline-flex flex-col items-center p-3 rounded-lg border-2 ${colorClasses[color]}`}>
      <div className={`font-bold ${sizeClasses[size]} leading-none mb-1`}>
        {number}
      </div>
      <div className="text-xs uppercase tracking-wide text-center">
        {label}
      </div>
    </div>
  );
}
