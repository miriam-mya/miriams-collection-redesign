# Design QA

## Source visual truth

- Desktop Our Story issue: `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-d261f82f-3ed5-4a65-b820-d5e8c3b2fe6b.png`
- Mobile review-card issue: `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-f78c83b3-70f2-44cf-8afe-a3a86cd0d9da.png`
- Haircare and challenge sections: `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-173c3feb-13b4-48f0-9696-886595c64c45.png` and `/var/folders/df/tffbsvv13x3f7vl4jz8z4m300000gn/T/codex-clipboard-2bebd82d-2ec1-4a80-b83b-515b3f0c076a.png`

## Captured implementation

- Desktop Our Story: `/private/tmp/miriam-story-desktop-revised.png`
- Product header and press strip: `/private/tmp/miriam-product-sticky-press.png`
- Desktop reviews: `/private/tmp/miriam-product-review-revised.png`
- Mobile review: `/private/tmp/miriam-product-review-mobile-final.png`
- Story mobile: `/private/tmp/miriam-story-mobile-revised.png`
- Desktop customer challenge: `/private/tmp/miriam-challenge-final-0918.png`
- Desktop Haircare section: `/private/tmp/miriam-haircare-target.png`
- Mobile Haircare section: `/private/tmp/miriam-mobile-haircare-final.png`
- Final mobile review card: `/private/tmp/miriam-review-mobile-verified-right-final.png`

## Comparison setup

- Story comparison: `/private/tmp/miriam-story-comparison.png`; source normalized to a 1440 × 900 desktop viewport and compared with the implementation at 1440 × 900 CSS pixels, DPR 1, initial hero state.
- Review comparison: source card and final implementation were checked at a 390 × 844 CSS-pixel mobile viewport, DPR 1, at `#product-reviews`.
- Sticky navigation was checked after scrolling the product page; computed position was `sticky`, `top: 0`, and the header remained visible.

## Visual comparison

- Typography: the site now uses two declared families, shared display/section/feature/card title scales, a shared body scale, and shared eyebrow/meta styles. Near-duplicate 8–12 px utility labels were consolidated into the 12–13 px meta scale.
- Spacing and geometry: the Story card is reduced and positioned to preserve the product image; the review fade is restrained and the verification label now sits beside the reviewer details.
- Colour and effects: established cream, forest, white, and glass-blur treatments are preserved.
- Imagery: the Story background remains prominent; the review image occupies the upper portion of the card without the earlier excess white space.
- Content: existing brand messaging and review copy remain unchanged.
- Section proposals: the Haircare section is now a restrained editorial sequence; the challenge section is a concise text-led proposition with a single conversion action and no decorative imagery.

## Interaction and responsive checks

- Product navigation remains visible during scroll on desktop and mobile.
- The complete As Seen In logo strip is present on the product page.
- Story and product routes were checked at desktop and mobile sizes.
- Haircare, challenge, and review components were checked at 1440 × 900 and 390 × 844.

## Findings resolved

- P1: oversized desktop Story card obscured the hero image — fixed.
- P1: product navigation disappeared on scroll — fixed.
- P1: As Seen In logos were missing from the product page — fixed.
- P2: review verification competed with the image-to-copy transition — fixed by restoring the restrained fade and moving a shorter “Verified” label to the reviewer row.
- P2: Haircare and challenge sections read as undifferentiated dark panels — fixed with clearer proposition-led hierarchy and restrained use of existing imagery.
- P2: the challenge section carried a redundant image and repeated the comparison figures directly above it — removed to keep the proposition focused.
- P2: the challenge eyebrow and long two-part setup weakened the proposition — removed and rewritten as one concise bottle-to-formula comparison.
- P2: the product-page Wash Day Set badge crowded the price column — moved to the centred, half-overlapping position used by the homepage offer.
- P2: typography had too many near-duplicate micro sizes and heading scales — consolidated into reusable tokens while preserving special-purpose hero titles.

## Final result

passed
