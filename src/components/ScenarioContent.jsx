export default function ScenarioContent({ scenario, none, jem, tfm }) {
  const content = { none, jem, tfm };
  return <>{content[scenario]}</>;
}
