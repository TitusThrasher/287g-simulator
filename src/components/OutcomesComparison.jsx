import { useState } from 'react';

export default function OutcomesComparison() {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isExpanded) {
    return (
      <div className="my-12 p-6 bg-gradient-to-r from-slate-100 to-slate-50 border-2 border-slate-300 rounded-xl">
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Compare All Three Scenarios
          </h3>
          <p className="text-slate-600 mb-4">
            See how the same traffic stop leads to three completely different outcomes
          </p>
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View Side-by-Side Comparison
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">All Three Scenarios Compared</h2>
        <button
          onClick={() => setIsExpanded(false)}
          className="text-sm text-slate-600 hover:text-slate-800"
        >
          Collapse ×
        </button>
      </div>
      <p className="text-slate-600 mb-8">
        The same person. The same traffic stop. The same broken brake light. The same misdemeanor.
        Three completely different outcomes.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* No 287(g) Outcome */}
        <div className="bg-slate-50 border-2 border-slate-300 rounded-xl overflow-hidden">
          <div className="bg-slate-500 text-white px-4 py-3">
            <div className="font-bold">No 287(g)</div>
            <div className="text-sm text-slate-200">Standard process</div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <div className="text-sm">
                <div className="font-medium text-slate-800">Wed, 7:15 AM:</div>
                <div className="text-slate-600">Released on bail</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <div className="text-sm">
                <div className="font-medium text-slate-800">Two months later:</div>
                <div className="text-slate-600">
                  Misdemeanor reduced to fine and community service
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <div className="text-sm">
                <div className="font-medium text-slate-800">Status:</div>
                <div className="text-slate-600">
                  Home with family. Still an LPR. Still working.
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-200">
              <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Total impact</div>
              <div className="text-lg font-bold text-green-700">8 hours in custody</div>
              <div className="text-sm text-slate-600">$350 in fines</div>
            </div>
          </div>
        </div>

        {/* Jail Enforcement Model Outcome */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl overflow-hidden">
          <div className="bg-amber-500 text-white px-4 py-3">
            <div className="font-bold">Jail Enforcement</div>
            <div className="text-sm text-amber-100">Screening at jail</div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-amber-600 font-bold mt-1">⚠</span>
              <div className="text-sm">
                <div className="font-medium text-slate-800">Wed, 7:15 AM:</div>
                <div className="text-slate-600">Can't be released</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-600 font-bold mt-1">⚠</span>
              <div className="text-sm">
                <div className="font-medium text-slate-800">Friday, 9 AM:</div>
                <div className="text-slate-600">Transferred to ICE</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-600 font-bold mt-1">⚠</span>
              <div className="text-sm">
                <div className="font-medium text-slate-800">3 months later:</div>
                <div className="text-slate-600">Released on bond</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <div className="text-sm">
                <div className="font-medium text-slate-800">18 months later:</div>
                <div className="text-slate-600">Allowed to remain as LPR</div>
              </div>
            </div>
            <div className="pt-3 border-t border-amber-200">
              <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Total impact</div>
              <div className="text-lg font-bold text-amber-700">94 days in custody</div>
              <div className="text-sm text-slate-600">$28,000 legal fees</div>
              <div className="text-sm text-slate-600">Lost job</div>
              <div className="text-sm text-slate-600">Family trauma</div>
            </div>
          </div>
        </div>

        {/* Task Force Model Outcome */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl overflow-hidden">
          <div className="bg-red-500 text-white px-4 py-3">
            <div className="font-bold">Task Force</div>
            <div className="text-sm text-red-100">Enforcement on patrol</div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-1">⚠</span>
              <div className="text-sm">
                <div className="font-medium text-slate-800">During stop:</div>
                <div className="text-slate-600">Immigration status queried</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-1">⚠</span>
              <div className="text-sm">
                <div className="font-medium text-slate-800">Before booking:</div>
                <div className="text-slate-600">ICE auto-notified</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-1">⚠</span>
              <div className="text-sm">
                <div className="font-medium text-slate-800">Wed, 7:15 AM:</div>
                <div className="text-slate-600">Detainer already lodged</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-1">⚠</span>
              <div className="text-sm">
                <div className="font-medium text-slate-800">Same as JEM:</div>
                <div className="text-slate-600">Less time to prepare</div>
              </div>
            </div>
            <div className="pt-3 border-t border-red-200">
              <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Total impact</div>
              <div className="text-lg font-bold text-red-700">94+ days in custody</div>
              <div className="text-sm text-slate-600">$28,000+ legal fees</div>
              <div className="text-sm text-slate-600">Lost job, separation</div>
              <div className="text-sm text-slate-600">Community mistrust</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-800 text-white rounded-xl">
        <h3 className="text-xl font-bold mb-3">The Key Takeaway</h3>
        <p className="text-slate-200 mb-3">
          Carlos was a <strong>lawful permanent resident</strong> with no criminal history. The
          only reason he entered the immigration enforcement system was that he was booked into a
          jail that participates in 287(g).
        </p>
        <p className="text-slate-200">
          In a neighboring county without an agreement, his brake light ticket would have ended
          with a fine and community service. Instead, he spent three months in detention, lost his
          job, and his children experienced the trauma of their father being taken away.
        </p>
      </div>
    </div>
  );
}
