import { scenarios } from '../data/scenarios';
import ScenarioContent from './ScenarioContent';

export default function Insight({ scenario }) {
  const config = scenarios[scenario];

  return (
    <div className={`my-4 p-4 rounded-lg border-l-4 ${config.borderColor} bg-white`}>
      <div className="flex items-start gap-2">
        <svg
          className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="text-sm text-slate-700">
          <ScenarioContent
            scenario={scenario}
            none={
              <span>
                In counties without 287(g) agreements, deputies run standard criminal databases
                during traffic stops. Immigration status is not checked.
              </span>
            }
            jem={
              <span>
                Under the Jail Enforcement Model, immigration screening happens{' '}
                <em>at the jail</em>, not during the traffic stop. The roadside encounter is the
                same as a county without 287(g).
              </span>
            }
            tfm={
              <span>
                The Task Force Model changes what happens <em>before</em> anyone reaches the jail.
                Deputies can query immigration databases and contact ICE during routine encounters.
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}
