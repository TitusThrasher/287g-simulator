import Scene from '../components/Scene';
import Dialogue from '../components/Dialogue';
import DatabaseQuery from '../components/DatabaseQuery';
import StatCallout from '../components/StatCallout';

// Visual step-by-step flow replacing the "behind the counter" prose block.
// Each scenario shows what actually happens to Carlos's records after booking.
function BookingStepFlow({ scenario }) {
  const steps = {
    none: [
      {
        label: 'Fingerprints submitted',
        sub: 'FBI NCIC / AFIS — criminal databases only',
      },
      {
        label: 'Criminal history check complete',
        result: '✓  No warrants. No criminal record.',
        resultColor: 'text-green-700 bg-green-50',
      },
      {
        label: 'No immigration databases queried',
        sub: 'No ICE contact. No one asks where Carlos was born.',
      },
    ],
    jem: [
      {
        label: 'Fingerprints submitted',
        sub: 'FBI NCIC / AFIS — criminal databases',
        result: '✓  No warrants. No criminal record.',
        resultColor: 'text-green-700 bg-green-50',
      },
      {
        label: '287(g)-designated officer reviews overnight bookings',
        sub: '6:45 AM — all new arrivals screened for immigration status',
      },
      {
        label: 'Additional query: DHS IDENT + ICE enforcement database',
        sub: 'Run on all bookings under the 287(g) jail agreement',
        result: 'Returns: LPR. Admitted 2004. No prior immigration violations.',
        resultColor: 'text-amber-800 bg-amber-50',
      },
      {
        label: 'Case forwarded to ICE field office',
        sub: 'Officer notes: LPR, misdemeanor marijuana, no criminal history',
        result: '⏳  Decision pending — detainer or release?',
        resultColor: 'text-amber-700 bg-amber-50',
      },
    ],
    tfm: [
      {
        label: "Deputy's IDENT query already on file — logged at the roadside",
        sub: 'ICE system automatically flags the arrest when it is entered',
      },
      {
        label: "ICE officer reviews Carlos's file at the regional field office",
        sub: 'This happens during booking — not the morning after',
      },
      {
        label: 'Detainer lodged (Form I-247A)',
        sub: 'Before midnight. Before bail is even set.',
        result: '⚠  Carlos cannot be released, even if bail is posted.',
        resultColor: 'text-red-800 bg-red-50',
      },
    ],
  };

  const dotColor  = { none: 'bg-slate-500',  jem: 'bg-amber-500', tfm: 'bg-red-500'  };
  const lineColor = { none: 'bg-slate-200',  jem: 'bg-amber-200', tfm: 'bg-red-200'  };

  return (
    <div>
      {steps[scenario].map((step, i, arr) => (
        <div key={i} className="flex gap-3">
          {/* Number + connector line */}
          <div className="flex flex-col items-center" style={{ width: 28 }}>
            <div className={`w-7 h-7 rounded-full ${dotColor[scenario]} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>
              {i + 1}
            </div>
            {i < arr.length - 1 && (
              <div className={`w-0.5 flex-1 min-h-[14px] my-1 ${lineColor[scenario]}`} />
            )}
          </div>

          {/* Step content */}
          <div className="pb-4 flex-1">
            <div className="text-sm font-semibold text-slate-800 leading-snug">{step.label}</div>
            {step.sub && (
              <div className="text-xs text-slate-500 mt-0.5 leading-snug">{step.sub}</div>
            )}
            {step.result && (
              <div className={`mt-1.5 inline-block text-xs font-medium px-2.5 py-1 rounded-full ${step.resultColor}`}>
                {step.result}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Outcome callout */}
      {scenario === 'none' && (
        <div className="mt-2 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="font-medium text-green-800 mb-2">What happens next</div>
          <div className="flex justify-center my-2">
            <StatCallout number="8 hrs" label="Total Time in Custody" color="green" size="sm" />
          </div>
          <p className="text-green-700 text-sm text-center mt-1">
            Carlos is held overnight. Elena arrives with bail at 7:15 AM. He goes home — barely
            in time for Sofia's play on Thursday.
          </p>
        </div>
      )}

      {scenario === 'jem' && (
        <div className="mt-2 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="font-medium text-amber-800 mb-1">What happens next</div>
          <p className="text-amber-700 text-sm">
            Carlos's fate depends on what an ICE officer decides to do with his file. Will they
            lodge a detainer — requesting the jail hold him for up to 48 additional hours — so
            ICE can pick him up? Or decline, and let him go home?
          </p>
        </div>
      )}

      {scenario === 'tfm' && (
        <div className="mt-2 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="font-medium text-red-800 mb-1">What happens next</div>
          <p className="text-red-700 text-sm">
            A detainer is already lodged. When Elena arrives with bail money at 7:15 AM, she is
            told Carlos cannot be released.
          </p>
          <p className="text-red-600 text-xs mt-2 italic">
            "There's an immigration hold. You'll need to talk to ICE."
          </p>
        </div>
      )}
    </div>
  );
}

export default function Scene4_TheBooking({ scenario }) {
  return (
    <Scene number={4} title="The Booking" time="11:15 PM" elapsed="+1 hr 28 min" scenario={scenario}>
      <p>
        The county jail. Fluorescent lights. A long counter. Carlos is photographed, fingerprinted,
        and asked to empty his pockets. His watch, wallet, and phone are placed in a plastic bag
        and labeled.
      </p>

      <Dialogue speaker="Booking Officer">One phone call. Make it count.</Dialogue>

      <p>
        Carlos calls Elena. He tells her where he is — that it's a misdemeanor, that he'll
        probably be out by morning if she can arrange bail. He can hear Miguel asking in the
        background why Daddy isn't home yet.
      </p>

      <Dialogue speaker="Carlos">I'll be home soon. Don't worry. It's a mistake.</Dialogue>

      <div className="my-6 border-t border-slate-300 pt-6">
        <div className="text-sm uppercase tracking-wide text-slate-500 mb-4">
          Meanwhile, behind the counter...
        </div>
        <BookingStepFlow scenario={scenario} />
      </div>

      <DatabaseQuery scenario={scenario} stage="booking" />
    </Scene>
  );
}
