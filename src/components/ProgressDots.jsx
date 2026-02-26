import { scenarios } from '../data/scenarios';

const ringClass = {
  none:    'ring-slate-400',
  jem:     'ring-amber-400',
  tfm:     'ring-red-400',
  citizen: 'ring-indigo-400',
};

const connectorCompleted = {
  none:    'bg-slate-400',
  jem:     'bg-amber-400',
  tfm:     'bg-red-400',
  citizen: 'bg-indigo-400',
};

const connectorUpcoming = {
  none:    'bg-slate-200',
  jem:     'bg-amber-100',
  tfm:     'bg-red-100',
  citizen: 'bg-indigo-100',
};

export default function ProgressDots({ scenario, currentScene = 0 }) {
  const config = scenarios[scenario];

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
    ],
    citizen: [
      { num: 1, label: 'Stop' },
      { num: 2, label: 'Search' },
      { num: 3, label: 'Arrest' },
      { num: 4, label: 'Booking' }
    ]
  };

  const currentScenes = scenes[scenario];

  return (
    <div className="my-8 p-6 bg-white rounded-xl border border-slate-200">
      <div className="text-sm font-medium text-slate-600 mb-4 text-center">
        Journey Through the System
      </div>
      <div className="flex items-center justify-between">
        {currentScenes.map((scene, index) => {
          const state =
            scene.num < currentScene  ? 'completed' :
            scene.num === currentScene ? 'active'    : 'upcoming';

          return (
            <div key={scene.num} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-1
                    transition-all duration-500
                    ${state === 'upcoming'
                      ? 'bg-white border-2 border-slate-200 text-slate-300'
                      : `${config.accentColor} text-white`
                    }
                    ${state === 'active'
                      ? `ring-2 ring-offset-2 ${ringClass[scenario]} scale-110`
                      : ''
                    }
                  `}
                >
                  {scene.num}
                </div>
                <div className={`text-xs text-center hidden sm:block transition-colors duration-300 ${
                  state === 'upcoming' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {scene.label}
                </div>
              </div>
              {index < currentScenes.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-1 transition-colors duration-500 ${
                    scene.num < currentScene
                      ? connectorCompleted[scenario]
                      : connectorUpcoming[scenario]
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-center">
        <div className="inline-flex items-center gap-2 text-xs text-slate-500">
          <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
            currentScene > 0 ? config.accentColor : 'bg-slate-300'
          }`}></div>
          <span>
            {currentScene === 0
              ? `${currentScenes.length} scenes in this scenario`
              : currentScene >= currentScenes.length
                ? `All ${currentScenes.length} scenes complete`
                : `Scene ${currentScene} of ${currentScenes.length}`
            }
          </span>
        </div>
      </div>
    </div>
  );
}
