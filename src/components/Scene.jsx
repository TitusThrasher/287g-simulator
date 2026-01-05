import { scenarios } from '../data/scenarios';
import TimeStamp from './TimeStamp';

export default function Scene({ number, title, time, elapsed, children, scenario }) {
  const config = scenarios[scenario];

  return (
    <section
      className={`mb-8 p-6 rounded-xl border-2 ${config.borderColor} ${config.bgColor} transition-colors duration-300`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`w-8 h-8 rounded-full ${config.accentColor} text-white flex items-center justify-center font-bold text-sm`}
        >
          {number}
        </span>
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      </div>
      <TimeStamp time={time} elapsed={elapsed} />
      <div className="prose prose-slate max-w-none">{children}</div>
    </section>
  );
}
