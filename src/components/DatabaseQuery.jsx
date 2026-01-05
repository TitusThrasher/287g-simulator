import { useState, useEffect } from 'react';

export default function DatabaseQuery({ scenario, stage }) {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 800);
    return () => clearInterval(timer);
  }, []);

  const queries = {
    none: [
      { db: 'State DMV', status: 'checked', result: 'Valid license' },
      { db: 'NCIC', status: 'checked', result: 'No warrants' }
    ],
    jem:
      stage === 'booking'
        ? [
            { db: 'State DMV', status: 'checked', result: 'Valid license' },
            { db: 'NCIC', status: 'checked', result: 'No warrants' },
            { db: 'FBI Fingerprint', status: 'checked', result: 'No criminal record' },
            { db: 'DHS IDENT', status: 'checking', result: 'LPR - Green Card' },
            { db: 'ICE Database', status: 'checking', result: 'Flagged for review' }
          ]
        : [
            { db: 'State DMV', status: 'checked', result: 'Valid license' },
            { db: 'NCIC', status: 'checked', result: 'No warrants' }
          ],
    tfm: [
      { db: 'State DMV', status: 'checked', result: 'Valid license' },
      { db: 'NCIC', status: 'checked', result: 'No warrants' },
      { db: 'DHS IDENT', status: 'checking', result: 'LPR - Green Card' },
      { db: 'ICE Database', status: 'checking', result: 'No prior encounters' }
    ]
  };

  const currentQueries = queries[scenario];

  return (
    <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm my-4">
      <div className="text-slate-400 mb-2">
        // Database queries {stage === 'booking' ? 'during booking' : 'in progress'}
      </div>
      {currentQueries.map((query, idx) => (
        <div key={idx} className="flex items-center gap-2 py-1">
          <span
            className={`w-2 h-2 rounded-full ${
              idx <= animationStep ? 'bg-green-400' : 'bg-slate-600'
            }`}
          ></span>
          <span className="text-slate-300">{query.db}:</span>
          <span
            className={`${idx <= animationStep ? 'text-green-400' : 'text-slate-500'}`}
          >
            {idx <= animationStep ? query.result : 'querying...'}
          </span>
        </div>
      ))}
      {(scenario === 'tfm' || (scenario === 'jem' && stage === 'booking')) && (
        <div className="mt-3 pt-3 border-t border-slate-700 text-amber-400">
          ⚠ Immigration databases accessed under 287(g){' '}
          {scenario === 'tfm' ? 'Task Force' : 'Jail Enforcement'} authority
        </div>
      )}
    </div>
  );
}
