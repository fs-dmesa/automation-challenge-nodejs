# Automation Challenge — Node.js / TypeScript

Scaffold for the FastSpring SDET technical interview. This repo sets up the
environment only — the actual challenge is given during your interview session.

## Prerequisites

- Node.js 18+

## Setup

```
npm install
npx playwright install chromium   # once per machine
npm test                          # runs the smoke test
```

The smoke test opens the target storefront (Test Mode — no login or account
required) and checks that a product title renders. It should pass before your
interview starts; if it doesn't, that's an environment problem worth chasing
down ahead of time rather than during the session.

## Test report

Playwright writes an HTML report automatically. View it with:

```
npx playwright show-report
```

## Traces

`playwright.config.ts` sets `trace: 'on'` — every test writes a trace, pass
or fail, to `test-results/<test-name>/trace.zip`, and the HTML report opens
it inline — `npx playwright show-report` is usually all you need. To view a trace file
directly: `npx playwright show-trace <path>`.

## Layout

- `src/pages` — page objects
- `src/support` — shared constants
- `tests` — test specs
