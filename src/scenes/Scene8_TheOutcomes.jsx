export default function Scene8_TheOutcomes({ scenario }) {
  const outcomes = {
    none: {
      title: 'No 287(g) Agreement',
      color: 'slate',
      subtitle: 'Standard process',
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
      subtitle: 'Screening at jail',
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
      subtitle: 'Enforcement on patrol',
      timeline: [
        { icon: '⚠', time: 'Tuesday, 9:47 PM', detail: 'Immigration queried at roadside during traffic stop', color: 'red' },
        { icon: '⚠', time: 'Tuesday, ~11:00 PM', detail: 'ICE notified before booking complete; detainer lodged overnight', color: 'red' },
        { icon: '⚠', time: 'Wednesday, 7:15 AM', detail: 'Elena arrives with bail. Told Carlos can\'t be released.', color: 'red' },
        { icon: '⚠', time: 'Friday, 9:00 AM', detail: 'Transferred 200 miles to immigration detention facility', color: 'red' },
        { icon: '⚠', time: 'Three months later', detail: 'Released on immigration bond after prolonged detention', color: 'amber' },
        { icon: '✓', time: '18 months later', detail: 'Immigration judge allows him to remain; long-term LPR status preserved', color: 'green' }
      ],
      impact: {
        custody: '94+ days in custody',
        cost: '$28,000+ in legal fees and lost income',
        other: ['Lost HVAC client base', 'Family separation during proceedings', 'Children\'s school and routine disrupted', 'Community fear among immigrant neighbors']
      }
    },
    citizen: {
      title: 'Task Force County — U.S. Citizen',
      color: 'indigo',
      subtitle: 'Same county, same deputy, different database result',
      timeline: [
        { icon: '◉', time: 'Tuesday, 9:47 PM', detail: 'IDENT query run at roadside. Returns: U.S. Citizen (Naturalized 2018).', color: 'indigo' },
        { icon: '◉', time: 'Tuesday, 9:50 PM', detail: '"You were born in Mexico?" Deputy verifies citizenship the database already confirmed.', color: 'indigo' },
        { icon: '✓', time: 'Wednesday, 7:15 AM', detail: 'Released on bail. No immigration hold. No ICE contact.', color: 'green' },
        { icon: '✓', time: 'Two months later', detail: 'Misdemeanor reduced to fine and community service. Both completed.', color: 'green' },
        { icon: '✓', time: 'Status', detail: 'Home with family. Made Sofia\'s school play.', color: 'green' }
      ],
      impact: {
        custody: '8 hours in custody',
        cost: '$350 in fines and fees',
        other: []
      }
    }
  };

  const currentOutcome = outcomes[scenario];
  const colorClasses = {
    slate:  { border: 'border-slate-300', bg: 'bg-slate-50',  header: 'bg-slate-500',  impactText: 'text-green-700'  },
    amber:  { border: 'border-amber-300', bg: 'bg-amber-50',  header: 'bg-amber-500',  impactText: 'text-amber-700'  },
    red:    { border: 'border-red-300',   bg: 'bg-red-50',    header: 'bg-red-500',    impactText: 'text-red-700'    },
    indigo: { border: 'border-indigo-300',bg: 'bg-indigo-50', header: 'bg-indigo-500', impactText: 'text-indigo-700' }
  };
  const iconColor = {
    green:  'text-green-600',
    amber:  'text-amber-600',
    red:    'text-red-600',
    indigo: 'text-indigo-500'
  };
  const colors = colorClasses[currentOutcome.color];

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">The Outcome</h2>

      <div className="max-w-2xl mx-auto">
        <div className={`${colors.bg} border-2 ${colors.border} rounded-xl overflow-hidden`}>
          <div className={`${colors.header} text-white px-4 py-3`}>
            <div className="font-bold">{currentOutcome.title}</div>
            <div className="text-sm text-white/80">{currentOutcome.subtitle}</div>
          </div>
          <div className="p-6 space-y-4">
            {currentOutcome.timeline.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className={`font-bold mt-1 text-lg ${iconColor[item.color] ?? 'text-slate-600'}`}>
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

        {(scenario === 'jem' || scenario === 'tfm') && (
          <div className="mt-6 p-4 bg-slate-800 text-white rounded-lg space-y-2">
            <p className="text-sm text-slate-200">
              Carlos was a <strong>lawful permanent resident</strong> with no prior criminal record
              and no immigration violations. The only reason he entered the immigration enforcement
              system was that he was arrested in a county that participates in 287(g).
            </p>
            <p className="text-sm text-slate-400">
              In a neighboring county without an agreement, his brake light stop would have ended
              with a warning. The marijuana would have meant a fine and community service. He would
              have made his daughter's school play.
            </p>
          </div>
        )}

        {scenario === 'citizen' && (
          <div className="mt-6 p-4 bg-slate-800 text-white rounded-lg space-y-2">
            <p className="text-sm text-slate-200">
              Carlos is a <strong>U.S. citizen</strong>. The database confirmed it in three
              minutes. He went home the next morning, paid a fine, and made Sofia's play.
            </p>
            <p className="text-sm text-slate-400">
              But in a county with a Task Force agreement, "going home" required his citizenship to be verified
              at a traffic stop — his birthplace confirmed and ID run through multiple databases by a deputy at 10 PM on a dark side road.
              The program ran as designed: his citizenship protected from detention, but Carlos still felt the weight of this invasive program and its impact on local policing.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
