import Scene from '../components/Scene';
import Dialogue from '../components/Dialogue';
import ScenarioContent from '../components/ScenarioContent';

export default function Scene2_TheSearch({ scenario }) {
  return (
    <Scene number={2} title="The Search" time="9:52 PM" elapsed="+5 min" scenario={scenario}>
      <p>
        Before the deputy finishes writing the warning, he sweeps his flashlight across the van's
        interior. In the back: an open metal toolbox, copper pipe, spools of wire, fittings and
        connectors. A folding knife in a worn leather sheath.
      </p>

      <Dialogue speaker="Deputy">That's a lot of copper you've got back there.</Dialogue>
      <Dialogue speaker="Carlos">I'm an HVAC technician. That's from the job I just finished.</Dialogue>
      <Dialogue speaker="Deputy">Mind if I take a look?</Dialogue>

      <p>
        Carlos hesitates. He's been awake since 5 AM. He wants to get home to his kids. He also
        knows what saying no to a deputy can mean at 9:52 PM on a dark road.
      </p>

      <Dialogue speaker="Carlos">Sure. Go ahead.</Dialogue>

      <p>
        There's been a string of copper thefts from construction sites in the county — HVAC coils
        stripped from vacant buildings, wire pulled from walls. The deputy takes a closer look.
      </p>

      <ScenarioContent
        scenario={scenario}
        none={
          <>
            <p>
              The materials are organized in labeled bins. Clearly professional. The deputy sees
              work receipts clipped to the passenger visor, a company polo hanging on the hook
              behind Carlos. His decision is based on what he observes — and nothing else.
            </p>
          </>
        }
        jem={
          <>
            <p>
              The materials are organized in labeled bins. Clearly professional. The deputy sees
              work receipts clipped to the passenger visor, a company polo on the hook behind
              Carlos. He doesn't know Carlos's immigration status — that question, if it comes at
              all, comes later, at the jail. His decision is based on what he sees in front of him.
            </p>
          </>
        }
        tfm={
          <>
            <p>
              The deputy already knows Carlos is not a U.S. citizen — he just ran his status.
              Research on Task Force jurisdictions consistently finds that stops involving Latino
              drivers take longer on average and are more likely to escalate to searches and
              detention. The deputy isn't necessarily acting on that pattern consciously. But the
              IDENT query changed the texture of his attention.
            </p>
            <p>He examines the toolbox more thoroughly than he otherwise might have.</p>
          </>
        }
      />

      <p>The deputy makes a decision.</p>

      <Dialogue speaker="Deputy">
        Sir, I'm going to ask you to step out of the vehicle. We've had some thefts in the area,
        and I need to verify where this material came from. You're not under arrest, but I'm
        detaining you while we sort this out.
      </Dialogue>

      <p>
        Carlos steps out. He's placed in the back of the patrol car while the deputy calls in
        the job site address.
      </p>
    </Scene>
  );
}
