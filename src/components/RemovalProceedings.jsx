// RemovalProceedings.jsx
// Shown after Scene 8 for JEM and TFM scenarios.
// Visualizes what happens to Carlos once he's in ICE custody —
// the legal options available, the 2025-2026 policy changes that constrain them,
// and the voluntary departure pressure designed to short-circuit the process.

const PolicyChange = ({ children }) => (
  <div className="mt-2 flex items-start gap-2 text-xs bg-amber-950/40 border border-amber-700/50 rounded px-2.5 py-2">
    <span className="text-amber-400 font-bold flex-shrink-0 mt-0.5">2025</span>
    <span className="text-amber-200">{children}</span>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    available:   'bg-green-900/50 text-green-300 border-green-700',
    restricted:  'bg-amber-900/50 text-amber-300 border-amber-700',
    eliminated:  'bg-red-900/50  text-red-300   border-red-700',
  };
  const labels = {
    available:   'Available in theory',
    restricted:  'Severely restricted',
    eliminated:  'Eliminated in practice',
  };
  return (
    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};

const LegalOption = ({ title, status, description, policyChange }) => (
  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
    <div className="flex items-start justify-between gap-3 mb-2">
      <h4 className="text-white font-semibold text-sm">{title}</h4>
      <StatusBadge status={status} />
    </div>
    <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
    {policyChange && <PolicyChange>{policyChange}</PolicyChange>}
  </div>
);

export default function RemovalProceedings({ scenario }) {
  if (scenario !== 'jem' && scenario !== 'tfm') return null;

  return (
    <div className="my-12 bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">

      {/* Header */}
      <div className="px-6 pt-8 pb-6 border-b border-slate-700">
        <div className="inline-block text-xs font-bold tracking-widest text-red-400 uppercase mb-3">
          What happens next
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Inside the System: Removal Proceedings
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
          Carlos is now in federal immigration detention, 200 miles from home. The criminal
          marijuana charge is still being processed in county court. But a separate legal
          proceeding — civil, not criminal — has already begun. There is no public defender.
          There is no right to one.
        </p>
      </div>

      {/* The clock */}
      <div className="px-6 py-5 border-b border-slate-700 bg-slate-800/50">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 font-mono">Day 1</div>
            <div className="text-xs text-slate-500 mt-1">in federal detention</div>
          </div>
          <div className="flex-1 text-sm text-slate-400 leading-relaxed">
            <p>
              Carlos is in a county jail under contract with ICE, 200 miles from his family.
              Elena drove four hours round-trip to see him for a 30-minute visit.
              His HVAC clients are calling. He has three jobs scheduled this week.
            </p>
            <p className="mt-1.5 text-slate-500 text-xs">
              Average time from ICE detention to a removal hearing: <strong className="text-slate-300">6–18 months.</strong> Average time to a final order: <strong className="text-slate-300">2–4 years.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Legal options grid */}
      <div className="px-6 py-6">
        <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">
          Carlos's legal options
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <LegalOption
            title="Bond Hearing"
            status="restricted"
            description="A hearing before an immigration judge to set bond, so Carlos can fight his case from home while proceedings continue. Standard for most LPRs without serious criminal history."
            policyChange="January 2025 executive order directs DHS to maximize detention. Controlled substance charges — even misdemeanors — are being used to argue mandatory detention under 8 U.S.C. § 1226(c), with no bond possible. When bonds are granted, amounts have risen sharply: median bond exceeded $15,000 in 2025."
          />

          <LegalOption
            title="Cancellation of Removal"
            status="available"
            description="Relief available to LPRs who have been permanent residents for 5+ years, resided continuously in the U.S. for 7+ years, and have not been convicted of an aggravated felony. Carlos's marijuana possession is likely not an aggravated felony. He appears to qualify — on paper."
            policyChange="Under prior administrations, cases like Carlos's were routinely closed via prosecutorial discretion. As of 2025, DHS has eliminated discretion-based case closure. Every case is fully litigated regardless of factors like family ties, length of residence, or minor offense. The backlog is 3.5 million cases."
          />

          <LegalOption
            title="Pro Se Defense"
            status="restricted"
            description="If Carlos cannot afford an immigration attorney ($5,000–$25,000+ for full proceedings), he represents himself. Immigration court is a civil proceeding — there is no Sixth Amendment right to appointed counsel."
            policyChange="Executive orders in 2025 restricted federal funding to nonprofit legal aid organizations serving detained immigrants. DOJ rescinded a policy allowing pro bono legal visits to detention facilities. Unrepresented immigrants lose removal cases at rates 5–10x higher than represented ones."
          />

          <LegalOption
            title="Voluntary Departure"
            status="available"
            description="Carlos agrees to leave the U.S. at his own expense within 60–120 days. In exchange: no formal removal order on his record, which preserves some future immigration options. He would be deported, but without the 10-year bar that follows a formal removal."
            policyChange="ICE facilities have been documented — by ACLU, SPLC, and Human Rights Watch — as operating under conditions designed to create pressure: overcrowding, limited phone access, inadequate medical care, remote video hearings. Voluntary departure is the exit valve. It ends detention immediately."
          />
        </div>
      </div>

      {/* The offer — voluntary departure pressure point */}
      <div className="mx-6 mb-6 rounded-xl border border-slate-600 overflow-hidden">
        <div className="bg-slate-700 px-4 py-3">
          <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Week 11 in detention — The offer
          </div>
        </div>
        <div className="bg-slate-800 p-5">
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            An ICE deportation officer meets with Carlos. His attorney — if he has one —
            may or may not be present by phone. The offer is simple: sign voluntary departure
            papers and be on a plane to Mexico within 30 days. Or wait.
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-700/60 rounded-lg p-3">
              <div className="font-semibold text-green-400 mb-1.5">If he signs</div>
              <ul className="text-slate-400 space-y-1">
                <li>• Detention ends within 30 days</li>
                <li>• No 10-year reentry bar</li>
                <li>• Returns to Mexico — alone</li>
                <li>• Leaves behind 22 years, family, business</li>
                <li>• Waives right to further hearings</li>
              </ul>
            </div>
            <div className="bg-slate-700/60 rounded-lg p-3">
              <div className="font-semibold text-amber-400 mb-1.5">If he waits</div>
              <ul className="text-slate-400 space-y-1">
                <li>• Stays in detention — months or years</li>
                <li>• Remote video hearings from a cell</li>
                <li>• Legal fees continue to mount</li>
                <li>• May ultimately win the case</li>
                <li>• Or may not</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500 leading-relaxed">
            Research consistently shows that immigrants who have been detained for months — separated
            from family, unable to work, uncertain about outcomes — accept voluntary departure at
            far higher rates than those who fight their cases from home. This is the documented
            effect of maximum detention as a policy tool.
          </p>
        </div>
      </div>

      {/* Closing context */}
      <div className="px-6 pb-8">
        <div className="p-4 rounded-lg bg-slate-800 border border-slate-600">
          <p className="text-sm text-slate-300 leading-relaxed">
            Carlos was a lawful permanent resident. He had 22 years of continuous residence,
            no prior criminal record, no immigration violations, and a family in this country.
            Under prior enforcement priorities, his case would likely have been closed without
            proceedings. Under current policy, every case proceeds — the outcome depends on
            how long he can hold on, and whether he can afford someone to help him do it.
          </p>
          <div className="mt-3 pt-3 border-t border-slate-700">
            <p className="text-xs text-slate-500">
              Sources: ACLU, American Immigration Council, Human Rights Watch, TRAC Immigration
              (Syracuse University), Vera Institute, INA §§ 236, 237, 240A, 240B.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
