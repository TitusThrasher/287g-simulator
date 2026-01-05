export default function ContentWarning({ onContinue }) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-lg bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Before You Begin</h1>
        <div className="prose prose-slate mb-6">
          <p>
            This interactive follows a fictional person through the criminal justice and
            immigration enforcement systems. While the scenario is invented, the processes depicted
            are based on documented procedures, legal research, and reporting.
          </p>
          <p>
            The piece depicts a traffic stop, arrest, and jail booking. It includes depictions of
            racial profiling and immigration enforcement that some readers may find distressing.
          </p>
          <p className="text-sm text-slate-600">
            <strong>Resources:</strong>{' '}
            <a
              href="https://www.ilrc.org/red-cards"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Know Your Rights
            </a>{' '}
            ·{' '}
            <a
              href="https://www.immigrationadvocates.org/nonprofit/legaldirectory/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Legal Help
            </a>
          </p>
        </div>
        <button
          onClick={onContinue}
          className="w-full bg-slate-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-slate-700 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
