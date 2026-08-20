# Automation Challenge — Node.js / TypeScript

Environment scaffold for a FastSpring SDET technical interview. This repo
contains no challenge content — that's given during the session.

## Prerequisites

- Node.js 18+

## Setup

```
npm install
npm test
```

This installs Chromium the first time, then runs the smoke test — it
verifies the environment is wired up correctly.

## Headed vs headless

Tests run headless by default. To watch the browser instead:

```
npx playwright test --headed
```

## Report

```
npx playwright show-report
```

Shows the full test result, with each test's Playwright trace viewable
inline — pass or fail.

## Layout

- `src/pages` — page objects
- `src/support` — shared constants
- `tests` — test specs
