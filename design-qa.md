# Design QA

- Source visual truth: `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-e37a5349-5503-43c6-a705-aeb87ed08215.png`
- Source pixels: 2818 × 888 px
- Implementation evidence: Codex in-app browser captures of `http://localhost:4173/results-concepts`
- Implementation viewports: 1440 × 1000 CSS px and 390 × 844 CSS px, device scale factor 1
- State: all three concept sections; option 2 also checked with “Month 3” selected

## Full-view comparison evidence

The source communicates four result stages in a single horizontal container. The comparison route preserves the same sequence and core copy while intentionally exploring three different structures: a progress path, an image-led interactive journey, and an editorial four-chapter grid. All three maintain Miriam’s existing cream, forest, pale aqua, and muted gold palette and reuse the site’s established serif/sans typography pairing.

The complete route was visually inspected at desktop width. Each concept has a distinct hierarchy and section boundary, and the designs do not rely on generated artwork. At 390px, each direction stacks cleanly, the sticky navigation remains visible, and browser measurements show `innerWidth: 390` and `scrollWidth: 390` with no horizontal overflow.

## Focused region comparison evidence

- Option 1: the horizontal source structure becomes a numbered progress rail on desktop and a legible vertical journey on mobile. Timing labels and outcomes remain easy to scan.
- Option 2: the four stages become interactive tabs beside existing customer photography. Selecting “Month 3” visibly changed the result headline and supporting explanation, and the selected control moved to the gold state.
- Option 3: the four stages become four editorial chapters with alternating brand surfaces. Mobile preserves the chapter order and gives each outcome enough typographic space.

## Findings and comparison history

- Initial implementation showed no actionable P0, P1, or P2 issues in the checked desktop or mobile states.
- No fix iteration was required.

## Required fidelity surfaces

- Fonts and typography: existing brand heading and body families, optical weights, letter spacing, and hierarchy are consistent across all options.
- Spacing and layout rhythm: section gutters align with the rest of the site; desktop layouts use balanced negative space and mobile layouts stack without crowding.
- Colors and visual tokens: all treatments use the existing site palette and border-opacity system.
- Image quality and asset fidelity: option 2 uses the existing `social-curly.webp` customer asset with a deliberate crop; options 1 and 3 are typography-led and require no imagery.
- Copy and content: all four supplied stages and outcomes are preserved; short supporting lines clarify the progression without changing the promise.

## Primary interactions and console

- Used all three jump links and verified their destination anchors.
- Switched option 2 from “First few washes” to “Month 3” and verified the selected state, headline, and explanatory copy update.
- Checked responsive layout at 1440 × 1000 and 390 × 844.
- Console errors and warnings checked: none.

## Follow-up polish

No P3 items recorded. The next design decision is which concept should replace the existing product-page section.

final result: passed
