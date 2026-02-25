import Scene from '../components/Scene';
import Dialogue from '../components/Dialogue';
import Tooltip from '../components/Tooltip';
import ScenarioContent from '../components/ScenarioContent';
import DatabaseQuery from '../components/DatabaseQuery';
import Insight from '../components/Insight';
import StatCallout from '../components/StatCallout';

export default function Scene1_TheStop({ scenario }) {

  return (
    <Scene number={1} title="The Stop" time="9:47 PM" scenario={scenario}>
      <p>
        A two-lane county road, dark and rural, twenty minutes east of downtown. Carlos is the
        only car on the stretch. He's thinking about the restaurant owner who said{' '}
        <em>thank god you came tonight</em> — food safety inspection in the morning, cooler down.
        He's tired. He wants to get home.
      </p>
      <p>
        In his rearview mirror, red and blue lights flare. He pulls over onto the shoulder.
        A sheriff's deputy approaches his window, flashlight sweeping the van.
      </p>

      <Dialogue speaker="Deputy">Good evening. Know why I stopped you tonight?</Dialogue>
      <Dialogue speaker="Carlos">No, officer.</Dialogue>
      <Dialogue speaker="Deputy">Your left brake light is out. License and registration?</Dialogue>

      <p>
        Carlos passes over his documents. His driver's license. His registration. He keeps his
        hands visible on the wheel while the deputy walks back to the cruiser.
      </p>

      <ScenarioContent
        scenario={scenario}
        none={
          <>
            <p>
              The deputy runs Carlos's license through{' '}
              <Tooltip term="standard databases">
                NCIC (National Crime Information Center) checks for warrants, stolen vehicles, and
                criminal history. State DMV records verify the license. Immigration status is not
                queried during a traffic stop.
              </Tooltip>
              . No warrants. No flags. Clean record.
            </p>
            <p>The deputy returns to the window.</p>
            <Dialogue speaker="Deputy">
              Everything checks out. I'm going to write you a warning for the brake light. Get it
              fixed this week.
            </Dialogue>
            <Dialogue speaker="Carlos">Yes, sir. Thank you.</Dialogue>
          </>
        }
        jem={
          <>
            <p>
              The deputy runs Carlos's license through{' '}
              <Tooltip term="standard databases">
                NCIC (National Crime Information Center) checks for warrants, stolen vehicles, and
                criminal history. State DMV records verify the license. Immigration status is not
                queried during the stop — that happens at the jail, not on the roadside.
              </Tooltip>
              . No warrants. No flags. Clean record.
            </p>
            <p>The deputy returns to the window.</p>
            <Dialogue speaker="Deputy">
              Everything checks out. I'm going to write you a warning for the brake light. Get it
              fixed this week.
            </Dialogue>
            <Dialogue speaker="Carlos">Yes, sir. Thank you.</Dialogue>
          </>
        }
        tfm={
          <>
            <p>
              The deputy runs Carlos's license through standard criminal databases. No warrants.
              No flags. Clean record.
            </p>
            <p>
              But this is a{' '}
              <Tooltip term="287(g) Task Force agreement">
                Under the Task Force Model, local deputies are trained and cross-designated by ICE
                to query federal immigration databases and perform limited immigration enforcement
                functions during their regular patrol activities — including routine traffic stops.
              </Tooltip>{' '}
              county. The deputy completed ICE's four-week Task Force training last month. In this
              county, officers are authorized — and in some circumstances expected — to query the
              DHS immigration database as part of the standard stop process when detaining a driver.
            </p>
            <p>
              He enters Carlos's information into{' '}
              <Tooltip term="DHS IDENT">
                The Department of Homeland Security's Automated Biometric Identification System.
                Contains fingerprints, photos, and immigration status for tens of millions of
                individuals who have interacted with immigration authorities.
              </Tooltip>
              .
            </p>
            <p>
              The system returns:{' '}
              <strong>Lawful Permanent Resident. Admitted 2004. Green card valid.</strong>
            </p>
            <p>
              The stop has now run three minutes longer than it would have in a non-287(g) county.
            </p>
            <div className="flex justify-center my-4">
              <StatCallout number="+3 min" label="Extended Stop Time" color="red" />
            </div>
            <p>The deputy returns to the window.</p>
            <Dialogue speaker="Deputy">Where were you born, sir?</Dialogue>
            <Dialogue speaker="Carlos">Mexico. But I've lived here for —</Dialogue>
            <Dialogue speaker="Deputy">
              I see that. You're a green card holder. How long have you been in the country?
            </Dialogue>
            <Dialogue speaker="Carlos">Twenty-two years. Twelve in this county.</Dialogue>
            <p>
              Carlos keeps his voice even. His hands haven't moved from the wheel. He knows his
              rights. He also knows that asserting them, on a dark road at night, can make things
              worse.
            </p>
          </>
        }
      />

      <DatabaseQuery scenario={scenario} stage="stop" />

      <Insight scenario={scenario} />
    </Scene>
  );
}
