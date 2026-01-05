import Scene from '../components/Scene';
import Dialogue from '../components/Dialogue';
import ScenarioContent from '../components/ScenarioContent';

export default function Scene2_TheSearch({ scenario }) {
  return (
    <Scene number={2} title="The Search" time="9:52 PM" elapsed="+5 min" scenario={scenario}>
      <p>
        While the deputy finishes running Carlos's information, his radio crackles: a DUI
        checkpoint nearby needs backup. He's distracted, scanning the interior of the van with his
        flashlight.
      </p>
      <p>
        In the back, he notices an open toolbox. Copper pipe. Spools of wire. A folding knife with
        a 4-inch blade.
      </p>

      <Dialogue speaker="Deputy">That's a lot of copper you've got back there.</Dialogue>
      <Dialogue speaker="Carlos">I'm an HVAC tech. That's from the job I just finished.</Dialogue>
      <Dialogue speaker="Deputy">Mind if I take a look?</Dialogue>

      <p>
        Carlos hesitates. It's late. He wants to get home to his kids. But he also doesn't want
        trouble.
      </p>

      <Dialogue speaker="Carlos">Sure. Go ahead.</Dialogue>

      <p>
        The deputy examines the contents of the toolbox. There's been a string of copper thefts
        from construction sites in the area recently.
      </p>

      <ScenarioContent
        scenario={scenario}
        none={
          <p>
            The deputy examines the materials. The situation is ambiguous. His decision is based
            solely on his read of the circumstances and state law.
          </p>
        }
        jem={
          <p>
            The deputy examines the materials. The situation is ambiguous. His decision is based
            solely on his read of the circumstances and state law. Immigration status doesn't
            factor in—he doesn't know Carlos's status and has no authority to ask.
          </p>
        }
        tfm={
          <p>
            The deputy already knows Carlos is a green card holder—not a citizen. Research shows
            that in Task Force jurisdictions, stops involving Latino drivers last longer on
            average, and officers are more likely to conduct searches. The deputy decides to
            investigate further.
          </p>
        }
      />

      <p>The deputy makes a decision.</p>

      <Dialogue speaker="Deputy">
        Sir, I'm going to ask you to step out of the vehicle. We've had some thefts in the area,
        and I need to verify where this material came from. You're not under arrest, but I'm
        detaining you while we sort this out.
      </Dialogue>

      <p>Carlos is placed in the back of the patrol car while the deputy calls it in.</p>
    </Scene>
  );
}
