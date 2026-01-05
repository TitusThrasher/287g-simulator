import Scene from '../components/Scene';
import Dialogue from '../components/Dialogue';
import Expandable from '../components/Expandable';
import ScenarioContent from '../components/ScenarioContent';
import StatCallout from '../components/StatCallout';

export default function Scene5_TheDetainerDecision({ scenario }) {
  // Only show this scene for JEM and TFM scenarios
  if (scenario === 'none') {
    return null;
  }

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
            </p>
            <p>
              The ICE officer on duty reviews the case: LPR, 12 years in the country, no criminal
              history, family ties, misdemeanor marijuana. The officer decides to lodge a detainer.
            </p>

            <div className="my-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="font-medium text-amber-800 mb-2">Detainer Lodged</div>
              <div className="flex justify-center my-3">
                <StatCallout number="48 hrs" label="Maximum Hold Time" color="amber" />
              </div>
              <p className="text-amber-700 text-sm">
                A Form I-247A arrives at the jail. It requests that Carlos be held for up to 48
                hours beyond when he would otherwise be released, so ICE can pick him up.
              </p>
              <p className="text-amber-700 text-sm mt-2">
                Carlos's wife arrives with bail money at 7:15 AM. She's told he can't be released.
              </p>
              <Dialogue speaker="Elena">Why not? I have the money.</Dialogue>
              <Dialogue speaker="Jail Staff">There's an immigration hold. You'll need to talk to ICE.</Dialogue>
            </div>

            <div className="mt-4">
              <Expandable question="What is an ICE detainer?">
                <p>
                  An ICE detainer (Form I-247A) is not a warrant. It's a request. Whether local
                  jails must honor it is legally contested—several courts have found that holding
                  someone solely on a detainer violates the Fourth Amendment. But in practice, most
                  jails comply.
                </p>
              </Expandable>

              <Expandable question="What happens if ICE doesn't show up within 48 hours?">
                <p>
                  The jail should release him. But in practice, some jails hold people longer. This
                  creates legal liability for the county—several people have successfully sued for
                  being held beyond the 48-hour window.
                </p>
              </Expandable>

              <Expandable question="Can Carlos fight the detainer?">
                <p>
                  Not really. Detainers aren't subject to judicial review in the way arrest warrants
                  are. His best option is to contact an immigration attorney, but from inside the
                  jail, that's difficult.
                </p>
              </Expandable>
            </div>
          </>
        }
        tfm={
          <>
            <p>
              The detainer was lodged before Carlos even finished booking. By the time his wife
              arrives with bail, there's nothing to discuss.
            </p>
            <p>
              At 7:15 AM, Elena stands at the jail counter, confused and frightened.
            </p>
            <Dialogue speaker="Elena">I'm here to bail out my husband, Carlos Mendez.</Dialogue>
            <Dialogue speaker="Jail Staff">There's an immigration hold on him. He can't be released.</Dialogue>
            <Dialogue speaker="Elena">But he has a green card. He's not illegal.</Dialogue>
            <Dialogue speaker="Jail Staff">You'll need to contact ICE. Here's the number.</Dialogue>

            <div className="my-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="font-medium text-red-800">What happens to the family</div>
              <p className="text-red-700 text-sm mt-1">
                Elena has now missed work. The kids asked why Daddy didn't come home. The family
                doesn't know if he'll be detained for days, weeks, or months—or deported.
              </p>
            </div>

            <Expandable question="What is an ICE detainer?">
              <p>
                An ICE detainer (Form I-247A) is not a warrant. It's a request. Whether local
                jails must honor it is legally contested—several courts have found that holding
                someone solely on a detainer violates the Fourth Amendment. But in practice, most
                jails comply.
              </p>
            </Expandable>

            <Expandable question="What about Carlos's family?">
              <p>
                His wife has now missed work. His kids asked why Daddy didn't come home. The family
                doesn't know if he'll be detained for days, weeks, or months—or deported. They can't
                visit him easily—the immigration detention center is 200 miles away.
              </p>
            </Expandable>
          </>
        }
      />
    </Scene>
  );
}
