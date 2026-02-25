import Scene from '../components/Scene';
import Dialogue from '../components/Dialogue';
import ScenarioContent from '../components/ScenarioContent';
import StatCallout from '../components/StatCallout';

// Visual mockup of ICE Form I-247A — the "immigration detainer."
// Replaces three Expandable Q&A sections with a single concrete artifact.
function DetainerFormMockup() {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-slate-400 text-sm font-mono">
      {/* Header */}
      <div className="bg-slate-700 text-white px-4 py-2 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wide">
          U.S. Department of Homeland Security — ICE
        </span>
        <span className="text-xs text-slate-300">Form I-247A</span>
      </div>
      <div className="bg-slate-100 px-4 py-2 text-center border-b border-slate-400">
        <div className="font-bold text-slate-800 tracking-wide">
          IMMIGRATION DETAINER — NOTICE OF ACTION
        </div>
      </div>

      {/* Form fields */}
      <div className="bg-white p-4 space-y-4">
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs">
          <div>
            <div className="text-slate-400 uppercase font-bold tracking-wide mb-0.5">Subject Name</div>
            <div className="border-b border-slate-400 pb-1 font-bold text-slate-800">MENDEZ, CARLOS</div>
          </div>
          <div>
            <div className="text-slate-400 uppercase font-bold tracking-wide mb-0.5">Country of Birth</div>
            <div className="border-b border-slate-400 pb-1 text-slate-800">MEXICO</div>
          </div>
          <div>
            <div className="text-slate-400 uppercase font-bold tracking-wide mb-0.5">Immigration Status</div>
            <div className="border-b border-slate-400 pb-1 text-slate-800">Lawful Permanent Resident</div>
          </div>
          <div>
            <div className="text-slate-400 uppercase font-bold tracking-wide mb-0.5">A-Number</div>
            <div className="border-b border-slate-400 pb-1 text-slate-400 italic">A-XXX-XXX-XXX</div>
          </div>
        </div>

        <div className="text-xs">
          <div className="text-slate-400 uppercase font-bold tracking-wide mb-0.5">Current Criminal Charge</div>
          <div className="border-b border-slate-400 pb-1 text-slate-800">
            Possession of Controlled Substance — Misdemeanor
          </div>
        </div>

        <div className="text-xs">
          <div className="text-slate-400 uppercase font-bold tracking-wide mb-1">ICE Request</div>
          <div className="p-3 bg-amber-50 border border-amber-300 rounded text-slate-700 leading-relaxed font-sans">
            ICE hereby requests that you maintain custody of the above-named individual for a
            period{' '}
            <strong className="text-slate-900">NOT TO EXCEED 48 HOURS</strong> beyond the time
            when he/she would otherwise be released from your custody, to allow ICE to assume
            custody of the individual.
          </div>
        </div>
      </div>

      {/* Footer — key legal facts */}
      <div className="bg-slate-50 border-t border-slate-300 px-4 py-3 font-sans space-y-1.5">
        <div className="flex items-start gap-2 text-xs text-slate-600">
          <span className="text-amber-600 font-bold flex-shrink-0">◆</span>
          <span>
            <strong>This is not a warrant.</strong> A detainer is a request. Jails are not legally
            required to comply — but most do. Several courts have found detainer-only holds
            unconstitutional without independent probable cause.
          </span>
        </div>
        <div className="flex items-start gap-2 text-xs text-slate-600">
          <span className="text-amber-600 font-bold flex-shrink-0">◆</span>
          <span>
            <strong>No judicial review.</strong> Unlike arrest warrants, detainers are not
            reviewed by a judge. Carlos has no direct way to challenge this from inside the jail.
          </span>
        </div>
        <div className="flex items-start gap-2 text-xs text-slate-600">
          <span className="text-amber-600 font-bold flex-shrink-0">◆</span>
          <span>
            <strong>After 48 hours without ICE pickup,</strong> the jail is legally required to
            release him — but some hold people longer, creating significant legal liability for the
            county.
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Scene5_TheDetainerDecision({ scenario }) {
  if (scenario === 'none') return null;

  return (
    <Scene number={5} title="The Detainer Decision" time="6:30 AM" elapsed="(next morning)" scenario={scenario}>
      <ScenarioContent
        scenario={scenario}
        jem={
          <>
            <p>
              Carlos is in a holding cell. Through the small window, he can see sunrise. He hasn't
              slept.
            </p>
            <p>
              At 6:45 AM, a 287(g)-designated officer reviews overnight bookings. Carlos's LPR
              status was flagged during screening. The officer contacts the local ICE field office.
              The ICE officer reviews the case — LPR, 12 years in the country, no criminal history,
              family ties, misdemeanor marijuana — and decides to lodge a detainer.
            </p>

            <div className="my-5 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="font-semibold text-amber-800 mb-3">Detainer Lodged</div>
              <div className="flex justify-center mb-3">
                <StatCallout number="48 hrs" label="Maximum Hold Time" color="amber" />
              </div>
              <Dialogue speaker="Elena">Why not? I have the money.</Dialogue>
              <Dialogue speaker="Jail Staff">There's an immigration hold. You'll need to talk to ICE.</Dialogue>
            </div>

            <DetainerFormMockup />
          </>
        }
        tfm={
          <>
            <p>
              The detainer was lodged before Carlos even finished booking. By the time Elena
              arrives with bail, there's nothing to discuss.
            </p>

            <Dialogue speaker="Elena">I'm here to bail out my husband, Carlos Mendez.</Dialogue>
            <Dialogue speaker="Jail Staff">There's an immigration hold on him. He can't be released.</Dialogue>
            <Dialogue speaker="Elena">But he has a green card. He's not illegal.</Dialogue>
            <Dialogue speaker="Jail Staff">You'll need to contact ICE. Here's the number.</Dialogue>

            <div className="my-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="font-medium text-red-800 mb-1">What happens to the family</div>
              <p className="text-red-700 text-sm">
                Elena has missed work. The kids asked why Daddy didn't come home. The family
                doesn't know if he'll be held for days, weeks, or months — or whether he'll be
                deported.
              </p>
            </div>

            <DetainerFormMockup />
          </>
        }
      />
    </Scene>
  );
}
