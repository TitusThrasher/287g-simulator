import { useState, useEffect } from 'react';
import Scene from '../components/Scene';
import ScenarioContent from '../components/ScenarioContent';

export default function Scene6_TheHold({ scenario }) {
  const [hoursElapsed, setHoursElapsed] = useState(0);

  useEffect(() => {
    setHoursElapsed(0);
    const timer = setInterval(() => {
      setHoursElapsed((prev) => (prev < 47 ? prev + 1 : 47));
    }, 80); // Accelerated for demo
    return () => clearInterval(timer);
  }, [scenario]); // Reset when switching between JEM and TFM

  // Only show for JEM and TFM scenarios (not 'none')
  if (scenario === 'none') {
    return null;
  }

  return (
    <Scene number={6} title="The Hold" time="48 hours later" elapsed="(2 days)" scenario={scenario}>
      <p>
        Carlos is still in the same holding cell. Same fluorescent lights. Same narrow bunk. The
        small window above the door shows the sky going from black to gray to pale. A second
        sunrise since the traffic stop.
      </p>

      {/* Visual progress bar showing the 48-hour window */}
      <div className="my-6 p-4 bg-slate-100 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-700">ICE detainer hold window</span>
          <span className="text-sm font-bold text-slate-900">{hoursElapsed} / 48 hours</span>
        </div>
        <div className="w-full bg-slate-300 rounded-full h-3 overflow-hidden">
          <div
            className="bg-red-500 h-full transition-all duration-300 ease-linear"
            style={{ width: `${(hoursElapsed / 48) * 100}%` }}
          ></div>
        </div>
        <p className="text-xs text-slate-600 mt-2">
          Federal regulations give ICE 48 hours (excluding weekends and holidays) to take custody
          of someone held on a detainer. After that window, the jail is legally required to release
          them — though many don't.
        </p>
      </div>

      <ScenarioContent
        scenario={scenario}
        jem={
          <>
            <p>
              Carlos waits. He has asked twice to make additional phone calls. He was allowed one.
              He called Elena. He told her to call an attorney. She's been calling the jail too:
              once Wednesday morning, once Wednesday afternoon, once Thursday. Each time, the
              answer is the same.
            </p>
            <p className="italic text-slate-600 border-l-2 border-amber-300 pl-3">
              "Immigration hold. Contact ICE."
            </p>
            <p>
              When Elena calls ICE, she's placed on hold for 47 minutes. When someone answers, she's
              told they cannot discuss the case without Carlos's A-number — the immigration ID
              number on his green card, which she doesn't have memorized and can't access because
              his documents are at home.
            </p>
            <p>
              Carlos has missed his bail hearing. He's missed two client service calls. He doesn't
              know if his van is still on the roadside or if it's been towed. At hour 46, an ICE
              officer arrives at the jail to take him into federal custody.
            </p>
          </>
        }
        tfm={
          <>
            <p>
              Carlos waits. His criminal case — the misdemeanor marijuana charge — is still
              pending in the state court system. His bail hearing was scheduled for Thursday
              morning. He can't attend. He's in immigration custody now, and that takes precedence.
            </p>
            <p>
              Elena has hired an immigration attorney. The consultation cost $300 — a significant
              amount on a week when Carlos hasn't worked. The attorney explains, carefully, that
              Carlos is now in ICE custody. That this is a parallel system. That the bail money
              she scraped together doesn't apply here.
            </p>
            <p>
              Sofia's school play was Thursday afternoon. Carlos missed it. Miguel keeps asking
              when Daddy is coming home. Elena doesn't know what to tell him.
            </p>
            <p>
              At hour 46, ICE transfers Carlos to an immigration detention facility.
            </p>
          </>
        }
      />

      <div className="my-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="font-medium text-blue-900 mb-2">Who this happens to</div>
        <p className="text-blue-800 text-sm">
          Carlos is a <strong>Lawful Permanent Resident</strong> — a green card holder with legal
          status to live and work in the United States. He is not undocumented. He has lived in
          the country for over two decades. Yet because of a misdemeanor marijuana charge and his
          county's 287(g) agreement, he is now in immigration detention — awaiting a proceeding
          that could end in deportation.
        </p>
      </div>
    </Scene>
  );
}
