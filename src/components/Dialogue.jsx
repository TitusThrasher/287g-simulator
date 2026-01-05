export default function Dialogue({ speaker, children }) {
  return (
    <div className="my-3 pl-4 border-l-2 border-slate-300">
      <span className="font-semibold text-slate-600">{speaker}:</span>{" "}
      <span className="italic text-slate-800">"{children}"</span>
    </div>
  );
}
