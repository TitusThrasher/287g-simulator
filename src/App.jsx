import { useState } from 'react';
import Header from './components/Header';
import ScenarioSelector from './components/ScenarioSelector';
import ContentWarning from './components/ContentWarning';
import Tooltip from './components/Tooltip';
import OutcomesComparison from './components/OutcomesComparison';
import ProgressDots from './components/ProgressDots';

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

  if (showContentWarning) {
    return <ContentWarning onContinue={() => setShowContentWarning(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <ScenarioSelector scenario={scenario} setScenario={setScenario} />

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-8 p-6 bg-white rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-3">Meet Carlos</h3>
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div className="text-slate-700">
              <p className="mb-2">
                <strong>Carlos Mendez</strong>, 34, is an HVAC technician. He's a{' '}
                <Tooltip term="lawful permanent resident">
                  A green card holder. Carlos has legal status to live and work in the U.S.
                  permanently, but he is not a citizen and can still be deported for certain
                  offenses.
                </Tooltip>{' '}
                who has lived in this county for 12 years. He's married with two U.S. citizen
                children, ages 7 and 4.
              </p>
              <p className="text-slate-600">
                Tonight, he's driving home from an emergency repair call. His left brake light is
                out. He doesn't know.
              </p>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <ProgressDots scenario={scenario} />

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

        {/* Comparison view - all three scenarios side-by-side */}
        <OutcomesComparison />

        {/* Sources */}
        <footer className="my-12 pt-8 border-t border-slate-200">
          <h4 className="font-bold text-slate-700 mb-3">Sources & Methodology</h4>
          <p className="text-sm text-slate-600 mb-4">
            This interactive depicts fictional events, but the procedures shown are based on
            documented 287(g) program operations, ICE memoranda of agreement, legal research, and
            investigative reporting.
          </p>
          <div className="text-sm text-slate-500 space-y-1">
            <div>• ICE 287(g) Program Overview and MOA Templates</div>
            <div>• American Immigration Council, "The 287(g) Program: An Overview"</div>
            <div>• ACLU, "License to Abuse" (2022)</div>
            <div>• Migration Policy Institute analysis of federal-local partnerships</div>
            <div>• State-specific legal opinions (MN, WI) on 287(g) authority</div>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            <a href="#" className="text-blue-600 hover:underline">
              View our full 287(g) data report →
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
