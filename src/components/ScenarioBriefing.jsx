import { scenarios } from '../data/scenarios';

// TODO: These descriptions are placeholder editorial copy.
// You know the 287(g) program better than anyone — please revise the `description`
// and `divergesAt` strings for each scenario to reflect accurate, precise framing
// from your reporting. Keep each description to 1–2 sentences max.
const briefings = {
  none: {
    description:
      'In this county, Carlos moves through the standard criminal justice process. ' +
      'His immigration status is never queried — not during the stop, not at the jail.',
    divergesAt: null,
    icon: '✓',
  },
  jem: {
    description:
      'This county runs immigration screenings on everyone booked into the jail overnight. ' +
      'The traffic stop looks the same — the difference begins after Carlos is processed.',
    divergesAt: 'Scene 4 — The Booking',
    icon: '⚠',
  },
  tfm: {
    description:
      'Deputies here are cross-trained by ICE and authorized to query immigration databases ' +
      'during routine patrol stops — before any arrest is made.',
    divergesAt: 'Scene 1 — The Stop',
    icon: '⚑',
  },
};

export default function ScenarioBriefing({ scenario }) {
  const config   = scenarios[scenario];
  const briefing = briefings[scenario];

  return (
    <div
      className={`
        my-6 flex items-start gap-4 p-4 rounded-xl border-2
        ${config.borderColor} ${config.bgColor}
        transition-all duration-300
      `}
    >
      {/* Icon badge */}
      <div
        className={`
          w-9 h-9 rounded-full ${config.accentColor} text-white
          flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5
        `}
      >
        {briefing.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap mb-1">
          <span className={`font-bold text-sm ${config.textColor}`}>{config.label}</span>
          <span className="text-xs text-slate-500">{config.description}</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">{briefing.description}</p>
        {briefing.divergesAt && (
          <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-500">
            <span>Path diverges at:</span>
            <span className={`font-semibold ${config.textColor}`}>{briefing.divergesAt}</span>
          </div>
        )}
      </div>
    </div>
  );
}
