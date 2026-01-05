import Scene from '../components/Scene';
import Dialogue from '../components/Dialogue';
import Tooltip from '../components/Tooltip';
import ScenarioContent from '../components/ScenarioContent';

export default function Scene3_TheArrest({ scenario }) {
  return (
    <Scene number={3} title="The Arrest" time="10:35 PM" elapsed="+48 min" scenario={scenario}>
      <p>
        Forty minutes later, the copper theft suspicion doesn't pan out. Carlos pulls up photos on
        his phone showing the materials at the job site. The restaurant owner confirms by phone
        that Carlos was there doing legitimate work.
      </p>
      <p>
        But during a more thorough search of the van, the deputy found something else: a small
        amount of marijuana in Carlos's coat pocket, forgotten from weeks ago when a friend gave it
        to him at a barbecue.
      </p>
      <p>
        In this state, possession of a small amount of marijuana is still a{' '}
        <Tooltip term="misdemeanor">
          A minor criminal offense, typically punishable by fines, probation, or less than one year
          in jail. Misdemeanors are less serious than felonies but still create a criminal record.
        </Tooltip>
        .
      </p>

      <Dialogue speaker="Deputy">
        Sir, I'm placing you under arrest for possession of a controlled substance. You have the
        right to remain silent...
      </Dialogue>

      <p>Carlos is handcuffed, read his rights, and transported to the county jail.</p>

      <ScenarioContent
        scenario={scenario}
        none={
          <p>
            In the patrol car, Carlos is thinking about bail, about calling his wife, about whether
            he'll make it to his daughter's school play tomorrow. Immigration is not on his mind.
            Why would it be? He's had a green card for over two decades.
          </p>
        }
        jem={
          <p>
            In the patrol car, Carlos is thinking about bail, about calling his wife, about whether
            he'll make it to his daughter's school play tomorrow. He doesn't know that what happens
            next at the jail will be different here than in neighboring counties.
          </p>
        }
        tfm={
          <>
            <p>
              In the patrol car, the deputy is already filling out paperwork. One of the boxes on
              his arrest form, added after the county joined the Task Force program, reads:{' '}
              <em>"Immigration status, if known."</em>
            </p>
            <p>
              He writes: <strong>LPR - verified via IDENT query at scene.</strong>
            </p>
            <p>
              Carlos stares out the window, wondering if his green card status will somehow make
              this worse. He's heard stories.
            </p>
          </>
        }
      />
    </Scene>
  );
}
