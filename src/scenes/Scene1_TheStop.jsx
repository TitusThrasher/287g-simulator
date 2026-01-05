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
        A dark county road. Carlos is driving his work van home after replacing a broken AC unit
        at a restaurant. In his rearview mirror, red and blue lights appear.
      </p>
      <p>He pulls over. A sheriff's deputy approaches his window.</p>

      <Dialogue speaker="Deputy">Good evening. Know why I stopped you?</Dialogue>
      <Dialogue speaker="Carlos">No, officer.</Dialogue>
      <Dialogue speaker="Deputy">Your left brake light is out. License and registration?</Dialogue>

      <p>Carlos hands over his documents. The deputy returns to his cruiser to run the information.</p>

      <ScenarioContent
        scenario={scenario}
        none={
          <>
            <p>
              The deputy runs Carlos's license through{' '}
              <Tooltip term="standard databases">
                NCIC (National Crime Information Center) checks for warrants, stolen vehicles, and
                criminal history. State DMV records verify the license. Immigration status is not
                queried.
              </Tooltip>
              . Everything comes back clean.
            </p>
          </>
        }
        jem={
          <>
            <p>
              The deputy runs Carlos's license through{' '}
              <Tooltip term="standard databases">
                NCIC (National Crime Information Center) checks for warrants, stolen vehicles, and
                criminal history. State DMV records verify the license. Immigration status is not
                queried during the stop—that happens at the jail.
              </Tooltip>
              . Everything comes back clean.
            </p>
          </>
        }
        tfm={
          <>
            <p>
              The deputy runs Carlos's license through standard criminal databases. Everything
              comes back clean.
            </p>
            <p>
              But this county has a{' '}
              <Tooltip term="287(g) Task Force agreement">
                Under the Task Force Model, deputies are trained and authorized by ICE to query
                federal immigration databases and perform limited immigration enforcement during
                routine patrol activities.
              </Tooltip>
              . The deputy was trained by ICE last month. He runs an additional query through DHS
              databases.
            </p>
            <p>
              The system returns: <strong>Lawful Permanent Resident. Green card valid.</strong>
            </p>
            <p>
              The deputy returns to Carlos's window. The stop has now taken three minutes longer
              than it would have in a non-287(g) county.
            </p>
            <div className="flex justify-center my-4">
              <StatCallout number="+3 min" label="Extended Stop Time" color="red" />
            </div>
            <Dialogue speaker="Deputy">Where were you born, sir?</Dialogue>
            <Dialogue speaker="Carlos">Mexico. But I've been here for—</Dialogue>
            <Dialogue speaker="Deputy">
              I see that. Green card holder. How long have you been in the country?
            </Dialogue>
            <Dialogue speaker="Carlos">Twenty-two years. Twelve in this county.</Dialogue>
            <p>
              Carlos's hands are steady, but his heart is pounding. He knows his rights. He also
              knows that asserting them can make things worse.
            </p>
          </>
        }
      />

      <DatabaseQuery scenario={scenario} stage="stop" />

      <Insight scenario={scenario} />
    </Scene>
  );
}
