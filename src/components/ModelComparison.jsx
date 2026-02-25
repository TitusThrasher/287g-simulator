// Visual comparison table showing how JEM, TFM, and no-agreement counties differ
// Designed to sit inside the dark program context section in App.jsx

const rows = [
  {
    attribute: 'When is immigration status checked?',
    none: { text: 'Never', status: 'safe' },
    jem:  { text: 'At the jail — overnight screening after arrest', status: 'caution' },
    tfm:  { text: 'At the traffic stop — before arrest', status: 'danger' },
  },
  {
    attribute: 'Who performs the immigration check?',
    none: { text: 'Nobody', status: 'safe' },
    jem:  { text: 'A 287(g)-trained jail officer', status: 'caution' },
    tfm:  { text: 'The arresting deputy — cross-trained by ICE', status: 'danger' },
  },
  {
    attribute: 'When is ICE notified?',
    none: { text: 'Never', status: 'safe' },
    jem:  { text: 'After overnight booking review, if flagged', status: 'caution' },
    tfm:  { text: 'During or before booking — sometimes automatically', status: 'danger' },
  },
  {
    attribute: 'First moment Carlos faces immigration risk',
    none: { text: 'No immigration risk', status: 'safe' },
    jem:  { text: 'When fingerprints are screened at the jail', status: 'caution' },
    tfm:  { text: 'When he hands over his license', status: 'danger' },
  },
];

const statusClasses = {
  safe:    'text-slate-300 bg-slate-800',
  caution: 'text-amber-200 bg-amber-900/40',
  danger:  'text-red-200  bg-red-900/40',
};

const headers = [
  { label: 'No 287(g)',        sub: 'Standard process',     col: 'none', color: 'text-slate-300  border-slate-500' },
  { label: 'Jail Enforcement', sub: 'Screening at jail',    col: 'jem',  color: 'text-amber-300 border-amber-600' },
  { label: 'Task Force',       sub: 'Enforcement on patrol',col: 'tfm',  color: 'text-red-300   border-red-600'   },
];

export default function ModelComparison() {
  return (
    <div className="mt-5 pt-5 border-t border-slate-700">
      <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
        How the agreement type changes everything
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {headers.map((h) => (
          <div key={h.col} className={`text-center pb-2 border-b-2 ${h.color}`}>
            <div className={`text-xs font-bold ${h.color.split(' ')[0]}`}>{h.label}</div>
            <div className="text-xs text-slate-500 mt-0.5">{h.sub}</div>
          </div>
        ))}
      </div>

      {/* Rows */}
      <div className="space-y-2">
        {rows.map((row) => (
          <div key={row.attribute}>
            <div className="text-xs text-slate-400 mb-1 font-medium">{row.attribute}</div>
            <div className="grid grid-cols-3 gap-2">
              {headers.map((h) => {
                const cell = row[h.col];
                return (
                  <div
                    key={h.col}
                    className={`text-xs rounded px-2.5 py-2 leading-snug ${statusClasses[cell.status]}`}
                  >
                    {cell.text}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
