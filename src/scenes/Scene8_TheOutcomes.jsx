export default function Scene8_TheOutcomes({ scenario }) {
  const outcomes = {
    none: {
      title: 'No 287(g) Agreement',
      color: 'slate',
      timeline: [
        { icon: '✓', time: 'Wednesday, 7:15 AM', detail: 'Carlos released on bail', color: 'green' },
        { icon: '✓', time: 'Two months later', detail: 'Misdemeanor reduced to fine and community service. Both completed.', color: 'green' },
        { icon: '✓', time: 'Status', detail: 'Home with family. Still an LPR. Still working. Made his daughter\'s school play.', color: 'green' }
      ],
      impact: {
        custody: '8 hours in custody',
        cost: '$350 in fines and fees',
        other: []
      }
    },
    jem: {
      title: 'Jail Enforcement Model',
      color: 'amber',
      timeline: [
        { icon: '⚠', time: 'Wednesday, 7:15 AM', detail: 'Wife arrives with bail. Can\'t be released.', color: 'amber' },
        { icon: '⚠', time: 'Friday, 9:00 AM', detail: 'Transferred to ICE custody', color: 'amber' },
        { icon: '⚠', time: 'Three months later', detail: 'Released on bond. Allowed to fight immigration case from home.', color: 'amber' },
        { icon: '✓', time: '18 months later', detail: 'Immigration judge allows him to remain as LPR (family ties, clean record)', color: 'green' }
      ],
      impact: {
        custody: '94 days in custody',
        cost: '$28,000 in legal fees',
        other: ['Lost job due to absence', 'Family trauma']
      }
    },
    tfm: {
      title: 'Task Force Model',
      color: 'red',
      timeline: [
        { icon: '⚠', time: 'During the stop', detail: 'Immigration status queried at roadside', color: 'red' },
        { icon: '⚠', time: 'Before booking complete', detail: 'ICE automatically notified, detainer lodged', color: 'red' },
        { icon: '⚠', time: 'Wednesday, 7:15 AM', detail: 'Wife told about immigration hold immediately', color: 'red' },
        { icon: '⚠', time: 'Same outcome as JEM', detail: 'But family had less time to prepare. Enforcement started earlier in the process.', color: 'red' }
      ],
      impact: {
        custody: '94+ days in custody',
        cost: '$28,000+ in legal fees',
        other: ['Lost job, family separation', 'Community fear/mistrust']
      }
    }
  };

  const currentOutcome = outcomes[scenario];
  const colorClasses = {
    slate: { border: 'border-slate-300', bg: 'bg-slate-50', header: 'bg-slate-500', impactText: 'text-green-700' },
    amber: { border: 'border-amber-300', bg: 'bg-amber-50', header: 'bg-amber-500', impactText: 'text-amber-700' },
    red: { border: 'border-red-300', bg: 'bg-red-50', header: 'bg-red-500', impactText: 'text-red-700' }
  };
  const colors = colorClasses[currentOutcome.color];

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">The Outcome</h2>

      <div className="max-w-2xl mx-auto">
        <div className={`${colors.bg} border-2 ${colors.border} rounded-xl overflow-hidden`}>
          <div className={`${colors.header} text-white px-4 py-3`}>
            <div className="font-bold">{currentOutcome.title}</div>
            <div className="text-sm text-white/80">
              {scenario === 'none' ? 'Standard process' : scenario === 'jem' ? 'Screening at jail' : 'Enforcement on patrol'}
            </div>
          </div>
          <div className="p-6 space-y-4">
            {currentOutcome.timeline.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className={`
                  font-bold mt-1 text-lg
                  ${item.color === 'green' ? 'text-green-600' :
                    item.color === 'amber' ? 'text-amber-600' : 'text-red-600'}
                `}>
                  {item.icon}
                </span>
                <div className="text-sm flex-1">
                  <div className="font-medium text-slate-800">{item.time}:</div>
                  <div className="text-slate-600">{item.detail}</div>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500 uppercase tracking-wide mb-2">Total impact</div>
              <div className={`text-xl font-bold ${colors.impactText} mb-1`}>{currentOutcome.impact.custody}</div>
              <div className="text-sm text-slate-600">{currentOutcome.impact.cost}</div>
              {currentOutcome.impact.other.map((item, idx) => (
                <div key={idx} className="text-sm text-slate-600">{item}</div>
              ))}
            </div>
          </div>
        </div>

        {scenario !== 'none' && (
          <div className="mt-6 p-4 bg-slate-800 text-white rounded-lg">
            <p className="text-sm text-slate-200">
              Carlos was a <strong>lawful permanent resident</strong> with no criminal history.
              In a neighboring county without a 287(g) agreement, his brake light ticket would have ended
              with a fine and community service.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
