import { scenarios } from '../data/scenarios';

const ScenarioIcon = ({ type, isActive }) => {
  const iconClass = `w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`;

  if (type === 'none') {
    return (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  }

  if (type === 'jem') {
    return (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    );
  }

  if (type === 'tfm') {
    return (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }

  if (type === 'citizen') {
    // ID card — citizenship documentation
    return (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    );
  }
};

// Primary three scenarios — citizen unlocks separately via progressive disclosure
const primaryIds = ['none', 'jem', 'tfm'];

export default function ScenarioSelector({ scenario, setScenario, hasSeenEnd }) {
  return (
    <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-3xl mx-auto px-4 py-3">
        <div className="text-sm text-slate-500 mb-2">
          Select a scenario to see how the same encounter differs:
        </div>

        <div className="flex gap-2">
          {primaryIds.map((id) => {
            const s = scenarios[id];
            return (
              <button
                key={s.id}
                onClick={() => setScenario(s.id)}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  scenario === s.id
                    ? `${s.accentColor} text-white shadow-md`
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <ScenarioIcon type={s.id} isActive={scenario === s.id} />
                  <span>{s.label}</span>
                </div>
                <div className={`text-xs hidden sm:block ${scenario === s.id ? 'text-white/80' : 'text-slate-400'}`}>
                  {s.description}
                </div>
              </button>
            );
          })}
        </div>

        {/* Citizen variant — appears after user scrolls through a complete scenario */}
        {hasSeenEnd && (
          <div className="mt-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => setScenario('citizen')}
              className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                scenario === 'citizen'
                  ? 'bg-indigo-500 text-white shadow-md'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200'
              }`}
            >
              <ScenarioIcon type="citizen" isActive={scenario === 'citizen'} />
              <span>What if Carlos was a U.S. citizen?</span>
              <span className={`text-xs hidden sm:inline ${scenario === 'citizen' ? 'text-white/70' : 'text-indigo-400'}`}>
                — Same county. Same deputy. Different database result.
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
