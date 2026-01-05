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
      <p>An ICE transport van pulls into the jail parking lot.</p>

      <ScenarioContent
        scenario={scenario}
        jem={
          <>
            <p>
              ICE arrives. Carlos is transferred from county custody to ICE custody. He's taken to
              an immigration detention facility 200 miles away.
            </p>
            <div className="flex justify-center my-4">
              <StatCallout number="200 mi" label="Distance to Detention" color="amber" />
            </div>
            <p>
              His misdemeanor marijuana case is still pending. He now has to fight two legal battles
              simultaneously: the state criminal charge, and a potential deportation proceeding.
            </p>
            <p>
              From the detention center, it's much harder to attend his criminal case hearings. His
              public defender will have to coordinate with ICE for transport—if they approve it.
            </p>
          </>
        }
        tfm={
          <>
            <p>
              Carlos is escorted out in handcuffs. The same misdemeanor that would have resulted in a
              fine in another county has now led to immigration detention.
            </p>
            <div className="flex justify-center my-4">
              <StatCallout number="200 mi" label="Distance to Detention" color="red" />
            </div>
            <p>
              The immigration detention facility is 200 miles away. Visiting hours are limited. Elena
              will have to take time off work and arrange childcare to see him.
            </p>
            <p>
              Carlos's green card status means he has some legal rights in immigration proceedings.
              But fighting from detention is exponentially harder than fighting from home.
            </p>
          </>
        }
      />

      <div className="my-4 p-4 bg-slate-100 border-l-4 border-slate-400">
        <div className="font-medium text-slate-800 mb-2">The Sheriff's Decision</div>
        <p className="text-slate-700 text-sm">
          In many states, the decision to participate in 287(g) is made by the county sheriff alone,
          without input from the county board or community. In others, state law restricts or
          prohibits such agreements. The legal landscape varies dramatically.
        </p>
      </div>

      <div className="my-4 p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="font-medium text-red-800">What this means</div>
        <p className="text-red-700 text-sm mt-1">
          The same traffic stop. The same broken brake light. The same small amount of marijuana.
          But in this county, because of the 287(g) agreement, Carlos is now facing potential
          deportation from the country where he's lived for over two decades—where his children were
          born, where he's built his life.
        </p>
      </div>
    </Scene>
  );
}
