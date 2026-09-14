# Design QA

- Source visual truth:
  - `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-3dfbfe1c-cda8-4be5-8d3d-584b333f6dd6.png` — combined challenge/formula layout, 2616 × 1496 px
  - `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-5ee4bbc3-dad8-4393-ac37-70d98c8e6998.png` — homepage USP copy, 1516 × 508 px
  - `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-dc8e192e-5511-4ecb-af4e-e181032e6729.png` — results timeline, 1434 × 484 px
  - `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-9b248d3d-e58f-42ee-b4c3-6cfd3f7814bd.png` — hair-care insight section, 2906 × 1182 px
  - `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-d30c81b9-461f-444b-b034-7c2b2ad7c200.png` — compact ingredient-cell feedback, 2578 × 1124 px
  - `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-55ddf395-67bb-4149-8b73-1b9f7350aec9.png` — product offer title, 1156 × 270 px
  - `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-78aa5d63-a5a9-4bd9-b2c8-fecb7ecf3ddd.png` — announcement bar, 2976 × 68 px
- Implementation evidence: Codex in-app browser captures of `http://localhost:4173/` and `http://localhost:4173/products/rice-water-revive-duo`
- Viewports: 390 × 844 CSS px and 1440 × 1000 CSS px
- States checked: homepage, product page, selected Wash Day Set Offer, combined ingredient grid, ingredient slide-over, review carousel, sticky navigation, and all three mobile announcement messages

## Full-view comparison evidence

The selected concept is implemented as one rounded white card with a split editorial header and a 16-cell photo grid. It replaces the separate challenge and formula-gallery instances. The source concept's gold footer has been removed, and the cells use existing site ingredient photography while preserving the original slide-over interaction.

The homepage and product page were checked at mobile and desktop widths. Browser measurements confirm no horizontal overflow: `innerWidth` and `scrollWidth` matched at 390px on both pages and at 1440px on the desktop product page.

## Focused region comparisons

- Ingredient grid: source concept compared with the rendered combined card. The final cells are content-sized, use tighter spacing, and retain clear labels and click targets without the large empty lower area shown in the feedback capture.
- Product offer: the former eyebrow was removed and the visible product heading is “Wash Day Set Offer.”
- Announcement bar: desktop retains all three messages; mobile cycles shipping, reviews, and the Wash Day Set Offer vertically with a 3D cube-style transition.
- Review carousel: all cards have equal total height. Shorter reviews allocate the spare height to their image region first.
- Product additions: the four-stage “What you’ll notice” panel and the hair-care insight split section use the supplied exact copy in the existing site design language.

## Findings and comparison history

- P2 — Ingredient cells contained excessive unused vertical space.
  - Fix: removed forced tile minimum heights and tightened image, label, and grid spacing.
  - Post-fix evidence: both mobile and desktop renders show compact content-driven rows with no empty lower half.
- P2 — Review-card image intrinsic dimensions inflated some cards and produced inconsistent heights.
  - Fix: made cards flex columns, absolutely positioned their media, and allowed the media region to absorb available height.
  - Post-fix evidence: mobile card heights are consistently 731px; desktop card heights are consistently 720px.
- P2 — The mobile announcement bar displayed only the reviews message.
  - Fix: added a three-face vertical cube rotation with staggered timing and a reduced-motion fallback.
  - Post-fix evidence: captures at the start, 3.2 seconds, and 6.4 seconds show shipping, reviews, and offer messages respectively.
- P2 — Separate challenge and ingredient sections duplicated the same proposition.
  - Fix: consolidated them into the selected all-in-one challenge/formula card and removed the standalone gallery.
- No remaining P0, P1, or P2 issues were observed in the checked states.

## Required fidelity surfaces

- Fonts and typography: existing brand serif and sans-serif families retained; hierarchy uses the audited site scale.
- Spacing and layout rhythm: content-driven ingredient cells, aligned video and section gutters, and responsive stacked layouts verified.
- Colors and visual tokens: existing forest, cream, white, and muted gold palette retained.
- Image quality and asset fidelity: existing site photography reused; no generated imagery added.
- Copy and content: supplied USP, results timeline, insight copy, and Wash Day Set Offer naming applied.

## Primary interactions and console

- Opened an ingredient tile and verified the image, description, “What it helps with,” and “The Science” content in the slide-over; close interaction also verified.
- Verified all three mobile announcement messages rotate without overflow.
- Verified product navigation remains sticky while scrolling.
- Verified review carousel cards remain equal height across content lengths.
- Console errors and warnings checked: none.

## Follow-up polish

No P3 items recorded for this implementation.

final result: passed
