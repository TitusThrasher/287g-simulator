# 287(g) Simulator - Codebase Guide

## Overview

This is an interactive explorable explanation that visualizes the 287(g) immigration enforcement program through a narrative simulation. Users follow a fictional character (Carlos Mendez) through three different scenarios based on their county's 287(g) agreement type.

## Common Commands

### Development
```bash
npm run dev          # Start development server (Vite + HMR) at http://localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on the codebase
```

### Notes
- No test suite currently configured
- Dev server uses Vite with Hot Module Replacement (HMR)
- Tailwind CSS processes utilities during build

## High-Level Architecture

### Core Concept: Scenario-Driven Narrative

The entire application is built around **three scenarios** that branch a single narrative:

1. **"none"** (No 287(g)) - County has no ICE agreement (4 scenes, green outcome)
2. **"jem"** (Jail Enforcement Model) - ICE screening at jail (7 scenes, amber outcome)
3. **"tfm"** (Task Force Model) - Deputies enforce immigration on patrol (7 scenes, red outcome)

All components receive a `scenario` prop and render different content accordingly.

### Data Flow

```
App.jsx (root state)
  └─ scenario: 'none' | 'jem' | 'tfm'
      ├─ ScenarioSelector (sticky nav, changes scenario)
      ├─ ProgressDots (shows scene count for current scenario)
      ├─ Scene1-8 (narrative scenes, conditionally rendered)
      │   └─ ScenarioContent (renders JSX based on scenario)
      └─ OutcomesComparison (expandable side-by-side view)
```

**State Management:**
- Single `useState` hook in `App.jsx` manages scenario selection
- `scenario` value flows down as props to all components
- No global state management (Redux/Context) needed

### Directory Structure

```
src/
├── data/
│   └── scenarios.js         # Central config for all 3 scenarios
│                             # (colors, labels, descriptions)
├── components/
│   ├── Scene.jsx            # Wrapper for all scenes (colored borders)
│   ├── ScenarioContent.jsx  # Branching logic component
│   ├── ScenarioSelector.jsx # Sticky tab navigation with icons
│   ├── ProgressDots.jsx     # Journey visualization (scene dots)
│   ├── StatCallout.jsx      # Highlighted statistics boxes
│   ├── DatabaseQuery.jsx    # Animated database query visualization
│   ├── Tooltip.jsx          # Inline definitions
│   ├── Dialogue.jsx         # Character speech bubbles
│   ├── Expandable.jsx       # Collapsible Q&A sections
│   ├── OutcomesComparison.jsx # Side-by-side scenario comparison
│   ├── Header.jsx           # Top banner
│   ├── ContentWarning.jsx   # Initial gate (racial profiling warning)
│   └── TimeStamp.jsx        # Scene time display
└── scenes/
    ├── Scene1_TheStop.jsx
    ├── Scene2_TheSearch.jsx
    ├── Scene3_TheArrest.jsx
    ├── Scene4_TheBooking.jsx
    ├── Scene5_TheDetainerDecision.jsx  # Only JEM/TFM
    ├── Scene6_TheHold.jsx              # Only JEM/TFM
    ├── Scene7_TheTransfer.jsx          # Only JEM/TFM
    └── Scene8_TheOutcomes.jsx
```

## Key Architectural Patterns

### 1. Scenario Configuration (`src/data/scenarios.js`)

**Single source of truth** for scenario metadata:

```javascript
export const scenarios = {
  none: {
    id: 'none',
    label: 'No 287(g)',
    color: 'slate',
    bgColor: 'bg-slate-100',
    borderColor: 'border-slate-400',
    accentColor: 'bg-slate-500',
    description: 'County has no agreement with ICE'
  },
  // ... jem and tfm
};
```

**Usage:** Components import this object to access color classes, labels, and descriptions:

```javascript
import { scenarios } from '../data/scenarios';
const config = scenarios[scenario];
// Use config.bgColor, config.borderColor, etc.
```

### 2. Conditional Content Rendering (`ScenarioContent.jsx`)

**The branching mechanism** for scenario-specific narrative:

```javascript
export default function ScenarioContent({ scenario, none, jem, tfm }) {
  const content = { none, jem, tfm };
  return <>{content[scenario]}</>;
}
```

**Usage in scenes:**

```jsx
<ScenarioContent
  scenario={scenario}
  none={<>Content for no 287(g) scenario</>}
  jem={<>Content for jail enforcement scenario</>}
  tfm={<>Content for task force scenario</>}
/>
```

This pattern keeps scene files readable while allowing completely different content per scenario.

### 3. Progressive Scene Disclosure

**Scenes 5-7 only appear for JEM and TFM scenarios:**

```javascript
// Inside Scene5_TheDetainerDecision.jsx, Scene6_TheHold.jsx, Scene7_TheTransfer.jsx
export default function Scene5_TheDetainerDecision({ scenario }) {
  if (scenario === 'none') {
    return null;  // Don't render this scene for "none" scenario
  }
  return <Scene number={5} title="The Detainer Decision" ...>
    {/* scene content */}
  </Scene>;
}
```

**Result:**
- "none" scenario shows 4 scenes (Stop → Search → Arrest → Booking)
- "jem" and "tfm" show 7 scenes (adds Detainer Decision → Hold → Transfer)

### 4. Color-Coded Visual System

**Each scenario has a distinct color palette** to reinforce the diverging outcomes:

- **Slate (gray)** - "none" - Standard legal process, neutral
- **Amber (yellow/orange)** - "jem" - Warning, immigration screening added
- **Red** - "tfm" - Danger, patrol-level enforcement

**Applied consistently across:**
- Scenario tab buttons (ScenarioSelector)
- Scene borders and backgrounds (Scene wrapper)
- Stat callouts (StatCallout component)
- Outcome cards (Scene8_TheOutcomes)

### 5. Scene Wrapper Pattern

**All scenes use the `<Scene>` component** for consistent styling:

```jsx
<Scene number={4} title="The Booking" time="11:15 PM" elapsed="+1 hr 28 min" scenario={scenario}>
  {/* Scene content here */}
</Scene>
```

The Scene component:
- Applies scenario-specific colors (border, background, accent)
- Shows scene number in colored circle
- Displays timestamp
- Wraps content in prose styling

## Component Deep Dives

### DatabaseQuery Component

**Purpose:** Animated visualization showing which databases are queried in each scenario

**Behavior:**
- "none": 2 queries (FBI criminal databases only)
- "jem": 5 queries at booking stage (FBI + DHS/IDENT + ICE databases)
- "tfm": 4 queries at roadside (includes DHS databases during traffic stop)

**Visual:** Green dots fill in with animated timing to show query completion

### StatCallout Component

**Purpose:** Highlight key statistics at emotionally significant moments

**Props:**
- `number`: The stat to display (e.g., "8 hrs", "+3 min", "200 mi")
- `label`: Description (e.g., "Total Time in Custody")
- `color`: 'slate' | 'amber' | 'red' | 'green'
- `size`: 'sm' | 'md' | 'lg'

**Strategic placements:**
- Scene1 (TFM): "+3 min" extended stop time (red)
- Scene4 (none): "8 hrs" total custody (green)
- Scene5 (JEM): "48 hrs" maximum hold time (amber)
- Scene7 (JEM/TFM): "200 mi" distance to detention (amber/red)

### ProgressDots Component

**Purpose:** Visual "journey map" showing all scenes in the current scenario

**Behavior:**
- Dynamically shows 4 dots for "none", 7 dots for "jem"/"tfm"
- Numbered circles connected by horizontal lines
- Scene labels visible on desktop (`hidden sm:block`)

### OutcomesComparison Component

**Purpose:** Expandable side-by-side comparison of all three scenarios

**Behavior:**
- Initially collapsed with button: "View Side-by-Side Comparison"
- Expands to show three columns with timelines and impact stats
- Helps users understand divergence from same starting point

### ScenarioSelector Component

**Purpose:** Sticky navigation for switching between scenarios

**Features:**
- SVG icons for each scenario (building, magnifying glass, shield)
- Active state styling (white text, colored background, shadow)
- Responsive (hides descriptions on mobile)
- Sticky positioning (`sticky top-0 z-40`)

## Content Strategy

### Authored vs. Interactive

**Design principle:** This is primarily an **authored narrative** with minimal user interaction

**Interactive elements:**
1. **Scenario selection** (main interaction) - Users choose which 287(g) model to explore
2. **Expandable Q&A sections** - Additional context without disrupting narrative flow
3. **Outcomes comparison** - Collapsible side-by-side view

**Removed elements** (based on user feedback):
- ❌ Detainer decision buttons (made linear narrative instead)
- ❌ State law dropdown (removed complexity)
- ❌ Database query toggle (now auto-shows)
- ❌ Deputy internal thoughts (removed to focus on actions)

### Narrative Structure

**Linear storytelling** with three parallel timelines:

1. **Inciting incident** (same across all scenarios)
   - Broken brake light
   - Traffic stop at 9:47 PM
   - Small amount of marijuana found

2. **Divergence points:**
   - Scene 1: TFM queries immigration databases at roadside
   - Scene 4: JEM queries at booking vs. none does not
   - Scene 5-7: Only JEM/TFM proceed to detainer/hold/transfer

3. **Outcomes** (drastically different)
   - "none": 8 hours in custody, released, goes home
   - "jem": 47+ hours, transferred to detention 200 miles away
   - "tfm": Same as JEM but faster escalation

## Styling Approach

**Tailwind CSS utility-first** - All styling uses Tailwind classes:

```jsx
<div className="mb-8 p-6 rounded-xl border-2 bg-slate-100 border-slate-400">
```

**No custom CSS** except for Tailwind directives in `src/styles/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Responsive design:**
- `max-w-3xl` content width
- `sm:` breakpoint for mobile/desktop differences
- `hidden sm:block` pattern for progressive enhancement

## Technical Stack

- **React 19.2.0** - Latest React with modern features
- **Vite 7.2.4** - Fast development server with HMR
- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **ESLint** - Code quality (React-specific rules)

**No additional dependencies:**
- No routing library (single-page app)
- No state management (simple useState sufficient)
- No animation library (CSS transitions only)

## Future Extension Points

Based on the wireframe and conversation history, these features were discussed but not implemented:

1. **Citizen variant** - Same scenario but Carlos is a U.S. citizen
2. **Sheriff's perspective** - Policy decision layer showing constraints/state laws
3. **State-specific paths** - How state laws affect 287(g) implementation
4. **Detainer form mockup** - Visual of actual Form I-247A

These are intentionally deferred to maintain focus on core narrative.

## Development Notes

### Content Warning

**Initial gate** before entering the app (Scene racial profiling depiction):

```javascript
// In App.jsx
const [showContentWarning, setShowContentWarning] = useState(true);

if (showContentWarning) {
  return <ContentWarning onContinue={() => setShowContentWarning(false)} />;
}
```

### Hot Module Replacement

Vite's HMR works seamlessly - edit any component and see changes instantly without losing state.

### Performance

**Intentionally simple architecture:**
- No virtual scrolling needed (max 7 scenes)
- No lazy loading required (components are small)
- No memoization needed (minimal re-renders)

The entire app is fast and lightweight by design.
