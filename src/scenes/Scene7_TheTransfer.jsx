import Scene from '../components/Scene';
import ScenarioContent from '../components/ScenarioContent';
import StatCallout from '../components/StatCallout';

export default function Scene7_TheTransfer({ scenario }) {
  // Only show for scenarios with detainer
  if (scenario === 'none') {
    return null;
  }

  return (
    <Scene number={7} title="The Transfer" time="Hour 47" scenario={scenario}>
      <p>
        An ICE transport van backs into the jail's sally port. Two federal officers in dark
        uniforms enter the booking area.
      </p>

      <ScenarioContent
        scenario={scenario}
        jem={
          <>
            <p>
              Carlos is transferred from county custody to federal ICE custody. He's taken to an
              immigration detention facility 200 miles away — a privately-operated facility that
              contracts with ICE to hold immigration detainees.
            </p>
            <div className="flex justify-center my-4">
              <StatCallout number="200 mi" label="Distance to Detention Facility" color="amber" />
            </div>
            <p>
              His misdemeanor marijuana case is still active in state court. He now has to fight
              two legal proceedings simultaneously: the state criminal charge in the county where
              he was stopped, and a deportation proceeding in immigration court. His public
              defender — handling the criminal case — will need to coordinate with ICE each time
              there's a court date. ICE doesn't always approve the transport.
            </p>
            <p>
              Elena can visit him, but the facility doesn't have evening hours. She'll need to
              arrange childcare, take time off work, and drive four hours roundtrip on a
              weekday — each visit.
            </p>
          </>
        }
        tfm={
          <>
            <p>
              Carlos is escorted out in handcuffs. The same small amount of marijuana that would
              have resulted in a fine and community service two counties over has now led to
              federal immigration detention.
            </p>
            <div className="flex justify-center my-4">
              <StatCallout number="200 mi" label="Distance to Detention Facility" color="red" />
            </div>
            <p>
              The immigration detention facility is 200 miles away. Elena will need to arrange
              childcare, take days off work, and make the four-hour roundtrip during the facility's
              limited visiting hours to see her husband.
            </p>
            <p>
              His misdemeanor marijuana case is still pending in state court. His criminal defense
              attorney now has to coordinate with ICE every time there's a hearing. His green card
              status gives him some legal rights in immigration court — but fighting from inside
              a detention facility is exponentially harder than fighting from home.
            </p>
            <p>
              He has three HVAC clients scheduled this week who will need to find someone else.
              He's been building that client list for a decade.
            </p>
          </>
        }
      />

      <div className="my-4 p-4 bg-slate-100 border-l-4 border-slate-400 rounded-r-lg">
        <div className="font-medium text-slate-800 mb-2">How this decision gets made</div>
        <p className="text-slate-700 text-sm">
          In most states, the decision to enter a 287(g) agreement is made by the county sheriff
          alone — without a vote by the county board, without a public comment process, without
          community input. In some states, legislation restricts or prohibits such agreements
          entirely. Whether a traffic stop leads to immigration detention often depends simply on
          which side of a county line you're on.
        </p>
      </div>

      <div className="my-4 p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="font-medium text-red-800 mb-2">The same incident. A different county.</div>
        <p className="text-red-700 text-sm">
          A broken brake light. A forgotten gram of marijuana. In a neighboring county without a
          287(g) agreement, Carlos would have been released on bail Wednesday morning, paid a fine,
          and made his daughter's school play. In this county, he is now in federal immigration
          detention — facing potential deportation from the country where he has lived for over
          twenty years, where his children were born, where he built his business.
        </p>
      </div>
    </Scene>
  );
}
