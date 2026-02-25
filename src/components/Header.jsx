export default function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-8">
        <div className="inline-flex items-center gap-2 bg-red-900/60 border border-red-700/50 text-red-200 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
          Interactive Explainer
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
          One Traffic Stop.<br />Three Futures.
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
          How a county's 287(g) agreement with ICE determines what happens to the same
          person after the same encounter with police.
        </p>
        <p className="text-sm text-slate-500 mt-3">
          Part of our ongoing coverage of the 287(g) program's expansion across the United States.
        </p>
      </div>
    </header>
  );
}
