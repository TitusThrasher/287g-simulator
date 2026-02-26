import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import ScenarioSelector from './components/ScenarioSelector';
import ContentWarning from './components/ContentWarning';
import Tooltip from './components/Tooltip';
import OutcomesComparison from './components/OutcomesComparison';
import ProgressDots from './components/ProgressDots';
import ModelComparison from './components/ModelComparison';
import ScenarioBriefing from './components/ScenarioBriefing';
import RemovalProceedings from './components/RemovalProceedings';

// Scene imports
import Scene1_TheStop from './scenes/Scene1_TheStop';
import Scene2_TheSearch from './scenes/Scene2_TheSearch';
import Scene3_TheArrest from './scenes/Scene3_TheArrest';
import Scene4_TheBooking from './scenes/Scene4_TheBooking';
import Scene5_TheDetainerDecision from './scenes/Scene5_TheDetainerDecision';
import Scene6_TheHold from './scenes/Scene6_TheHold';
import Scene7_TheTransfer from './scenes/Scene7_TheTransfer';
import Scene8_TheOutcomes from './scenes/Scene8_TheOutcomes';

function App() {
  const [scenario, setScenario] = useState('none');
  const [showContentWarning, setShowContentWarning] = useState(true);
  const [hasSeenEnd, setHasSeenEnd] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const endSentinelRef = useRef(null);

  // Reset progress and switch scenario together so currentScene never lags a render
  const handleSetScenario = (next) => {
    setCurrentScene(0);
    setScenario(next);
  };

  // Unlock the citizen scenario tab once the user scrolls through the outcome section
  useEffect(() => {
    const node = endSentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasSeenEnd(true); },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Track which scene is currently in view — fills in ProgressDots as user scrolls
  useEffect(() => {
    const scenes = document.querySelectorAll('[data-scene-number]');
    if (!scenes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const num = parseInt(entry.target.dataset.sceneNumber, 10);
            setCurrentScene(prev => Math.max(prev, num));
          }
        });
      },
      { threshold: 0.2 }
    );
    scenes.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [scenario]);

  if (showContentWarning) {
    return <ContentWarning onContinue={() => setShowContentWarning(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <ScenarioSelector scenario={scenario} setScenario={handleSetScenario} hasSeenEnd={hasSeenEnd} />

      <main className="max-w-3xl mx-auto px-4 py-8">

        {/* Program Context */}
        <div className="mb-8 p-6 bg-slate-900 text-white rounded-xl">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
            About this program
          </div>
          <h2 className="font-bold text-xl text-white mb-4">What is 287(g)?</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Section 287(g) of the Immigration and Nationality Act authorizes the Department of
            Homeland Security and its component agency, Immigration and Customs Enforcement (ICE), to partner with state and local law enforcement agencies. 
            These agreements give participating officers the authority to perform immigration enforcement functions — including
            querying federal immigration databases, processing ICE detainer requests against people who've
            been arrested, and even making arrests for suspected immigration violations during routine police work.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            Today, more than 1,200 law enforcement agencies participate in the program across 1,400+ active 287(g) agreements
            — a massive increase since January 2025, when less than 140 agreements were active. The program's scope, and impact, can vary
            significantly depending on which type of agreement (or agreements) an agency has signed. The same
            encounter with police can lead to very different outcomes depending on the type of agreement(s) in place.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="text-3xl font-extrabold text-amber-400 mb-1">1,400+</div>
              <div className="text-xs text-slate-400 leading-snug">Active 287(g) agreements nationwide</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="text-3xl font-extrabold text-amber-400 mb-1">2</div>
              <div className="text-xs text-slate-400 leading-snug">Agreement types simulated below: Jail Enforcement &amp; Task Force</div>
            </div>
          </div>
          {/* Visual comparison table: JEM vs TFM vs None */}
          <ModelComparison />

          <div className="flex flex-wrap gap-4 border-t border-slate-700 pt-4 mt-5">
            <a
              href="https://lookerstudio.google.com/reporting/ebe8be08-53be-4afc-9240-83ec3075e873"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
            >
              View our full 287(g) data report →
            </a>
            <a
              href="https://maxwellcommons.substack.com/p/287g-program"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
            >
              Read our newsletter coverage →
            </a>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-8 p-6 bg-white rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-4">Meet Carlos Mendez</h3>
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-slate-200">
              <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div className="text-slate-700 space-y-2 text-sm">
              <p>
                <strong className="text-base text-slate-900">Carlos Mendez, 34</strong>, is a
                self-employed HVAC technician who has lived in this county for 12 years. He's a{' '}
                <Tooltip term="lawful permanent resident">
                  A green card holder. Carlos has legal status to live and work in the U.S.
                  permanently, but he is not a citizen and can be deported for certain offenses —
                  including some misdemeanors.
                </Tooltip>{' '}
                — he came from Mexico as a teenager, and has been in the U.S. for over 22 years.
                He built his HVAC client list over a decade of work in this county.
              </p>
              <p>
                He's married to Elena, a U.S. citizen. They have two children: Sofia, 7, and
                Miguel, 4. Both were born here. Sofia has a school play on Thursday. Carlos
                promised he wouldn't miss it.
              </p>
              <p className="text-slate-500 italic border-l-2 border-slate-200 pl-3">
                Tonight is a Tuesday in November. Carlos is driving home after a 14-hour emergency
                call — a restaurant's walk-in cooler went down. His left brake light is out. He
                doesn't know.
              </p>
            </div>
          </div>
        </div>

        {/* Scenario orientation — what to watch for */}
        <ScenarioBriefing scenario={scenario} />

        {/* Progress indicator */}
        <ProgressDots scenario={scenario} currentScene={currentScene} />

        {/* All Scenes */}
        <Scene1_TheStop scenario={scenario} />
        <Scene2_TheSearch scenario={scenario} />
        <Scene3_TheArrest scenario={scenario} />
        <Scene4_TheBooking scenario={scenario} />
        <Scene5_TheDetainerDecision scenario={scenario} />
        <Scene6_TheHold scenario={scenario} />
        <Scene7_TheTransfer scenario={scenario} />

        {/* Outcome - specific to current scenario */}
        <Scene8_TheOutcomes scenario={scenario} />

        {/* Sentinel: becomes visible when user has read through a full scenario */}
        <div ref={endSentinelRef} />

        {/* Removal proceedings — shown for JEM and TFM after the outcome */}
        <RemovalProceedings scenario={scenario} />

        {/* Comparison view - all three scenarios side-by-side */}
        <OutcomesComparison />

        {/* Sources */}
        <footer className="my-12 pt-8 border-t border-slate-200">
          <h4 className="font-bold text-slate-700 mb-3">Sources & Methodology</h4>
          <p className="text-sm text-slate-600 mb-4">
            This interactive depicts fictional events, but the procedures shown are based on
            documented 287(g) program operations, ICE memoranda of agreement, court records,
            legal research, and investigative reporting. Carlos Mendez is a composite character;
            his story reflects documented real-world cases.
          </p>
          <div className="text-sm text-slate-500 space-y-1">
            <div>• ICE 287(g) Program Overview and Memoranda of Agreement templates</div>
            <div>• American Immigration Council, "The 287(g) Program: An Overview"</div>
            <div>• ACLU, "License to Abuse: How ICE's 287(g) Program Empowers Racist Policing" (2022)</div>
            <div>• Migration Policy Institute analysis of federal-local enforcement partnerships</div>
            <div>• Immigrant Legal Resource Center, "The Immigration Detainer Problem" (2021)</div>
            <div>• State-specific legal opinions (MN, WI, OR) on 287(g) authority and detainer compliance</div>
          </div>
          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href="https://lookerstudio.google.com/reporting/ebe8be08-53be-4afc-9240-83ec3075e873"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              View our full 287(g) data report →
            </a>
            <a
              href="https://maxwellcommons.substack.com/p/287g-program"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Read our newsletter coverage →
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
