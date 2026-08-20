# Automation Challenge — Node.js / TypeScript

Scaffold for the FastSpring SDET technical interview. This repo sets up the
environment only — the actual challenge is given during your interview session.

## Prerequisites

- Node.js 18+

## Setup

```
npm install
npm test
```

This installs Chromium the first time, then runs the smoke test. It should
pass before your interview starts — if it doesn't, let us know ahead of time
rather than during the session.

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
