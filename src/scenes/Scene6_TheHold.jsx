import { useState, useEffect } from 'react';
import Scene from '../components/Scene';
import ScenarioContent from '../components/ScenarioContent';

export default function Scene6_TheHold({ scenario }) {
  const [hoursElapsed, setHoursElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHoursElapsed((prev) => (prev < 47 ? prev + 1 : 47));
    }, 100); // Speed up for demo purposes
    return () => clearInterval(timer);
  }, []);

  // Only show for JEM and TFM scenarios (not 'none')
  if (scenario === 'none') {
    return null;
  }

  return (
    <Scene number={6} title="The Hold" time="48 hours later" elapsed="(2 days)" scenario={scenario}>
      <p>
        Carlos is still in the same holding cell. He's been here for two days now. The window shows
        another sunrise.
      </p>

      {/* Visual progress bar showing the 48-hour window */}
      <div className="my-6 p-4 bg-slate-100 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-700">Time in detention</span>
          <span className="text-sm font-bold text-slate-900">{hoursElapsed} / 48 hours</span>
        </div>
        <div className="w-full bg-slate-300 rounded-full h-3 overflow-hidden">
          <div
            className="bg-red-500 h-full transition-all duration-300 ease-linear"
            style={{ width: `${(hoursElapsed / 48) * 100}%` }}
          ></div>
        </div>
        <p className="text-xs text-slate-600 mt-2">
          Under federal law, ICE has 48 hours (not counting weekends and holidays) to pick up
          someone held on a detainer.
        </p>
      </div>

      <ScenarioContent
        scenario={scenario}
        jem={
          <>
            <p>
              Carlos waits. His wife has called the jail three times. She's been told the same thing
              each time: "Immigration hold. Contact ICE."
            </p>
            <p>
              When she calls ICE, she's put on hold for 45 minutes. When someone finally answers,
              they tell her they can't discuss the case without Carlos's A-number, which she doesn't
              have.
            </p>
            <p>
              At hour 46, an ICE officer arrives at the jail.
            </p>
          </>
        }
        tfm={
          <>
            <p>
              Carlos waits. His criminal case—the misdemeanor marijuana charge—is still pending. His
              bail hearing was scheduled for today, but he can't attend. He's in immigration custody
              now.
            </p>
            <p>
              His wife has hired an immigration attorney. The consultation cost $300. The attorney
              explains that Carlos is in ICE custody, which is separate from the criminal system.
              The bail in his criminal case doesn't matter anymore.
            </p>
            <p>
              At hour 46, ICE transfers Carlos to an immigration detention facility.
            </p>
          </>
        }
      />

      <div className="my-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="font-medium text-blue-900 mb-2">Key fact</div>
        <p className="text-blue-800 text-sm">
          Carlos is a <strong>Lawful Permanent Resident</strong>—a green card holder with legal
          status to live and work in the U.S. He is not undocumented. Yet because of a misdemeanor
          marijuana charge and his county's participation in 287(g), he's now in immigration
          detention.
        </p>
      </div>
    </Scene>
  );
}
