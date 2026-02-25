import Scene from '../components/Scene';
import Dialogue from '../components/Dialogue';
import Tooltip from '../components/Tooltip';
import ScenarioContent from '../components/ScenarioContent';

export default function Scene3_TheArrest({ scenario }) {
  return (
    <Scene number={3} title="The Arrest" time="10:35 PM" elapsed="+48 min" scenario={scenario}>
      <p>
        Forty minutes later, the copper theft suspicion is cleared. Carlos found the photos on his
        phone — the cooler unit, the job site, timestamps. The restaurant owner answered on the
        second ring. <em>"Yeah, that's my guy. He was here all evening."</em>
      </p>
      <p>
        But during the more thorough search of the van, the deputy found something in the pocket
        of Carlos's work jacket: a small amount of marijuana — maybe a gram, in a crumpled plastic
        bag. Carlos barely remembers it. A friend handed it to him at a barbecue three weeks ago.
        He forgot it was there.
      </p>
      <p>
        In this state, possession of any amount of marijuana is still a{' '}
        <Tooltip term="misdemeanor">
          A minor criminal offense, typically punishable by fines, probation, or up to one year in
          jail. Misdemeanors are less serious than felonies but still generate a criminal record
          and — crucially — can trigger immigration consequences for non-citizens.
        </Tooltip>
        .
      </p>

      <Dialogue speaker="Deputy">
        Sir, I'm placing you under arrest for possession of a controlled substance. You have the
        right to remain silent. Anything you say can and will be used against you...
      </Dialogue>

      <p>
        Carlos is handcuffed. The cuffs click. He's guided into the back of the cruiser. His work
        van stays on the shoulder of the road.
      </p>

      <ScenarioContent
        scenario={scenario}
        none={
          <p>
            In the back of the patrol car, Carlos runs the math. Misdemeanor possession —
            first offense, small amount. He'll call the bail bondsman. Elena can come in the
            morning. If he's out by 9 AM, he can still make Sofia's play on Thursday. He keeps
            telling himself: <em>this is fixable.</em> Immigration is not on his mind. Why would
            it be? He's had a green card for over two decades.
          </p>
        }
        jem={
          <p>
            In the back of the patrol car, Carlos runs the math. Misdemeanor possession —
            first offense, small amount. He'll call the bail bondsman. Elena can come in the
            morning. He should make Sofia's play on Thursday. He tells himself it's fixable. He
            doesn't know that what happens next at the jail will be different here than in the
            county twenty minutes west.
          </p>
        }
        tfm={
          <>
            <p>
              In the patrol car, the deputy fills out the arrest report. Near the bottom is a
              field added to the form after the county joined the Task Force program:
            </p>
            <div className="my-3 p-3 bg-red-50 border border-red-200 rounded font-mono text-sm text-slate-700">
              Immigration status, if known: <strong>LPR — verified via DHS IDENT query at scene</strong>
            </div>
            <p>
              Carlos stares out the window at the dark road. He's thinking about Sofia's play.
              He's also thinking about the question — <em>"where were you born?"</em> — and what
              it means that the deputy ran a query he's never had run on him before. He's heard
              things about this county. He hopes they're not true.
            </p>
          </>
        }
        citizen={
          <>
            <p>
              In the patrol car, the deputy fills out the arrest report. The immigration field
              reads:
            </p>
            <div className="my-3 p-3 bg-indigo-50 border border-indigo-200 rounded font-mono text-sm text-slate-700">
              Immigration status, if known: <strong>U.S. Citizen (Naturalized 2018) — verified via DHS IDENT query at scene</strong>
            </div>
            <p>
              Carlos stares out the window. The field is filled in. The database confirmed his
              citizenship. He's still in the back of a patrol car, wrists cuffed, thinking about
              Sofia's play — and about the fact that tonight, on a dark county road, a deputy
              looked at his name and decided to check.
            </p>
          </>
        }
      />
    </Scene>
  );
}
