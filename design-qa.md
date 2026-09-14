# Design QA

- Source visual truth: `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-50673625-9e79-4160-ac87-09c49501d1c5.png`
- Implementation evidence: Codex in-app browser capture of `http://localhost:4173/#offer`
- Viewport: 1451 × 802 CSS px
- Density normalization: source 2902 × 1604 px at 2×, normalized to 1451 × 802 CSS px; implementation captured at 1451 × 802 CSS px
- State: desktop, Hair & Skin Ritual selected

## Full-view comparison evidence

The source showed the desktop offer content vertically centred inside a fixed-height column even though the content was taller than that column. The heading was clipped above the panel and the add-to-bag control was clipped below it. In the revised implementation, the offer card sizes to its content and the page owns vertical scrolling. Browser measurements confirm the heading and CTA both remain within the right-hand panel, the panel uses visible overflow, and `scrollHeight` equals `clientHeight`.

## Focused region comparison

A separate crop was not needed because the issue and fix are both visible in the complete offer card. The header, purchase selectors, included-products panel, and CTA were legible in the full-view capture.

## Findings and comparison history

- P1 — Desktop offer content clipped at both ends.
  - Earlier evidence: the source capture cuts off the top of “The Hair & Skin Ritual” and the bottom of the add-to-bag button.
  - Fix: removed the viewport-capped card height and nested vertical scrolling, top-aligned the desktop content column, and reduced the desktop offer heading to 3.5rem.
  - Post-fix evidence: card height 847px; content panel `scrollHeight` and `clientHeight` both 845px; heading and CTA bounds are both fully inside the panel.

## Required fidelity surfaces

- Fonts and typography: existing brand families, weights, tracking, and hierarchy preserved; heading now fits cleanly.
- Spacing and layout rhythm: desktop panel padding is balanced and no longer creates clipped overflow.
- Colors and visual tokens: unchanged from the existing site.
- Image quality and asset fidelity: original product artwork and crop preserved.
- Copy and content: unchanged.

## Primary interactions and console

- Switched from the ritual offer to the duo and verified the included-products panel hides and the CTA updates.
- Switched back to the ritual offer and verified the ritual CTA returns.
- Console errors and warnings checked: none.

## Follow-up polish

No P3 items recorded for this focused repair.

final result: passed
