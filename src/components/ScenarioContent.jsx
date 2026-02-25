export default function ScenarioContent({ scenario, none, jem, tfm, citizen }) {
  const content = { none, jem, tfm, citizen };
  return <>{content[scenario] ?? null}</>;
}
