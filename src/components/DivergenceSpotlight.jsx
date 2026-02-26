// DivergenceSpotlight — renders a callout at the exact scene where a scenario's path diverges.
// Used in Scene1 (TFM, citizen) and Scene4 (JEM).

const divergences = {
  1: {
    tfm: {
      color: 'red',
      message:
        "In a Task Force county, this stop doesn't end with a warning. The deputy is authorized — and in this county expected — to query the DHS immigration database as part of the standard stop process.",
    },
    citizen: {
      color: 'indigo',
      message:
        "Same Task Force county. Same deputy. The IDENT query runs — but this time it returns \"U.S. Citizen.\" The stop still runs three minutes longer. The questions still get asked.",
    },
  },
  4: {
    jem: {
      color: 'amber',
      message:
        "In a Jail Enforcement county, the booking triggers a second process: a 287(g)-designated officer will screen Carlos's file this morning and query federal immigration databases — something that never happens in non-participating counties.",
    },
  },
};

const borderClass  = { red: 'border-red-200',    amber: 'border-amber-200',    indigo: 'border-indigo-200'    };
const bgClass      = { red: 'bg-red-50',          amber: 'bg-amber-50',          indigo: 'bg-indigo-50'          };
const dotClass     = { red: 'bg-red-400',          amber: 'bg-amber-400',          indigo: 'bg-indigo-400'         };
const lineClass    = { red: 'bg-red-200',          amber: 'bg-amber-200',          indigo: 'bg-indigo-200'         };
const labelClass   = { red: 'text-red-500',        amber: 'text-amber-600',        indigo: 'text-indigo-500'       };
const messageClass = { red: 'text-red-900',        amber: 'text-amber-900',        indigo: 'text-indigo-900'       };

export default function DivergenceSpotlight({ scenario, sceneNumber }) {
  const sceneEntry = divergences[sceneNumber];
  if (!sceneEntry) return null;

  const entry = sceneEntry[scenario];
  if (!entry) return null;

  const { color, message } = entry;

  return (
    <div className={`my-4 flex gap-3 p-3.5 rounded-lg border ${bgClass[color]} ${borderClass[color]}`}>
      {/* Fork indicator */}
      <div className="flex flex-col items-center pt-1 flex-shrink-0">
        <div className={`w-2 h-2 rounded-full ${dotClass[color]}`} />
        <div className={`w-px flex-1 mt-1 ${lineClass[color]}`} />
      </div>
      <div>
        <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${labelClass[color]}`}>
          Where this scenario diverges
        </div>
        <p className={`text-sm leading-relaxed ${messageClass[color]}`}>{message}</p>
      </div>
    </div>
  );
}
