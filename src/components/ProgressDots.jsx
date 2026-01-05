export default function ProgressDots({ scenario }) {
  const scenes = {
    none: [
      { num: 1, label: 'Stop' },
      { num: 2, label: 'Search' },
      { num: 3, label: 'Arrest' },
      { num: 4, label: 'Booking' }
    ],
    jem: [
      { num: 1, label: 'Stop' },
      { num: 2, label: 'Search' },
      { num: 3, label: 'Arrest' },
      { num: 4, label: 'Booking' },
      { num: 5, label: 'Detainer' },
      { num: 6, label: 'Hold' },
      { num: 7, label: 'Transfer' }
    ],
    tfm: [
      { num: 1, label: 'Stop' },
      { num: 2, label: 'Search' },
      { num: 3, label: 'Arrest' },
      { num: 4, label: 'Booking' },
      { num: 5, label: 'Detainer' },
      { num: 6, label: 'Hold' },
      { num: 7, label: 'Transfer' }
    ]
  };

  const currentScenes = scenes[scenario];

  return (
    <div className="my-8 p-6 bg-white rounded-xl border border-slate-200">
      <div className="text-sm font-medium text-slate-600 mb-4 text-center">
        Journey Through the System
      </div>
      <div className="flex items-center justify-between">
        {currentScenes.map((scene, index) => (
          <div key={scene.num} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div className="w-8 h-8 rounded-full bg-slate-500 text-white flex items-center justify-center text-sm font-bold mb-1">
                {scene.num}
              </div>
              <div className="text-xs text-slate-600 text-center hidden sm:block">
                {scene.label}
              </div>
            </div>
            {index < currentScenes.length - 1 && (
              <div className="h-0.5 bg-slate-300 flex-1 mx-1" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-slate-500">
          <div className="w-2 h-2 rounded-full bg-slate-500"></div>
          <span>{currentScenes.length} scenes in this scenario</span>
        </div>
      </div>
    </div>
  );
}
