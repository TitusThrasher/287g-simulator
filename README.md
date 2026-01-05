# 287(g) Simulator

An interactive explorable explanation that visualizes how the 287(g) immigration enforcement program affects people during routine encounters with local law enforcement.

## What is this?

This is a narrative simulation that follows a fictional character (Carlos Mendez, a lawful permanent resident) through a traffic stop in three different scenarios:

1. **No 287(g)** - County has no ICE agreement
2. **Jail Enforcement Model (JEM)** - ICE screening happens at the jail
3. **Task Force Model (TFM)** - Deputies enforce immigration law during patrol

The same minor incident (broken brake light) leads to drastically different outcomes depending on the county's 287(g) agreement type. Users can switch between scenarios to see how local policy decisions affect real people's lives.

## Purpose

This project aims to make immigration policy tangible through storytelling. The 287(g) program is complex and often misunderstood. By showing the same person in the same situation under different policy regimes, this simulator helps people understand:

- How 287(g) agreements work in practice
- The difference between the two 287(g) models
- How immigration enforcement intersects with routine policing
- The human impact of policy choices made by county officials

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs at `http://localhost:5173` with hot module replacement.

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **ESLint** - Code quality

No routing library, state management framework, or other dependencies. The app is intentionally simple and lightweight.

## Project Structure

```
src/
├── data/
│   └── scenarios.js         # Configuration for all 3 scenarios
├── components/
│   ├── Scene.jsx            # Wrapper for all narrative scenes
│   ├── ScenarioContent.jsx  # Branching logic component
│   ├── ScenarioSelector.jsx # Sticky tab navigation
│   └── ...                  # Other reusable components
└── scenes/
    ├── Scene1_TheStop.jsx
    ├── Scene2_TheSearch.jsx
    └── ...                  # Progressive narrative scenes
```

See [CLAUDE.md](CLAUDE.md) for detailed architecture documentation.

## Design Principles

1. **Authored narrative** - This is primarily a story, not a simulation with many variables
2. **Visual differentiation** - Each scenario has its own color palette (slate/amber/red)
3. **Progressive disclosure** - "None" scenario shows 4 scenes; JEM/TFM show 7 scenes
4. **Minimal interaction** - Users choose a scenario and read; the narrative does the teaching

## Contributing

This project is open source and contributions are welcome. Some ideas for enhancement:

- Additional scenarios (e.g., U.S. citizen variant)
- State-specific legal context
- Mobile optimizations
- Accessibility improvements
- Translations

## License

MIT

## Acknowledgments

Built to support public understanding of immigration enforcement policy. Inspired by explorable explanations and interactive journalism.

---

**Note**: This is a educational tool based on real policies and typical scenarios. Individual experiences vary based on many factors including local implementation, state laws, and individual circumstances.
