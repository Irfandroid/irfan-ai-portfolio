# Design System: Editorial Signal AI Engineer

## Purpose and audience

The portfolio helps recruiters, hiring managers, and technical collaborators understand Muhamad Irfan Afriyansyah's direction in AI engineering, machine learning, and dependable data systems within seconds. The interface prioritizes evidence, clarity, and a credible human point of view over decorative novelty.

The fast path is: role direction → Qalbu evidence → inspectable repository → contact. The deep path is: selected work → experience → thinking → process → about.

## Visual direction

An editorial technical portfolio with real portrait-led hero composition, hard rules, compact metadata, and asymmetric publication-like spacing. Keep the ratio near 85% editorial interface and 15% evidence framing. Density 3/10, whitespace 8/10, variance 5/10, motion 4/10. The page should feel authored and calm, not like an AI template, dark dashboard, or indie game website.

## Color tokens

| Token | Value | Role |
| --- | --- | --- |
| Warm Canvas | `#F7F6F2` | page canvas |
| Paper Deep | `#EBE9E2` | quiet bands and image fallback |
| Surface White | `#FFFDF8` | portrait and project media |
| Charcoal Ink | `#171917` | headings, primary copy, contact block |
| Muted Moss | `#626963` | descriptions and metadata |
| Warm Border | `#D3D7D0` | structural dividers |
| Burnt Clay | `#B45B3C` | the single accent: links, CTA, focus, pattern |

Pixel-derived shades are allowed only inside illustrations: Burnt Clay highlight `#C97859`, base `#B45B3C`, and shadow `#88422D`.

Use one accent only. Never add neon, purple, gradients, clay shadows, pure black surfaces outside the contact block, or glow treatments.

## Typography

- `Geist`: display headings, navigation, and controls.
- `Instrument Serif`: restrained editorial emphasis in the hero and pull quotes only.
- `Geist`: body copy and readable interface text.
- `Geist Mono`: dates, labels, status, routes, and technical facts.
- Body copy is at least 16px with relaxed leading and a maximum measure of roughly 65ch.
- Editorial serif emphasis must remain deliberate; never mix typefaces inside a word or use generic serif defaults.

## Layout and spacing

- Use an asymmetric grid inside a centered shell capped at 1400px.
- The hero is a publication spread: specific role direction and value proposition on the left; the supplied real portrait and concise facts on the right.
- Qalbu is the lead technical story. Selected work uses evidence-rich rows, not a gallery of equal cards.
- Use a 4px spacing base, with section rhythm in the 32–96px range.
- Below 768px, collapse to one column, keep narrative order, and preserve readable measures. No horizontal overflow.
- Every visual owns a clear spatial zone; avoid decorative overlaps and absolute-positioned content stacks.

## Component rules

- **Primary CTA:** one Burnt Clay fill with white text; tactile press feedback; no glow.
- **Secondary links:** quiet text or rule treatment, with a visible underline or arrow label.
- **Frames:** 1px rules for editorial structure; square or lightly rounded image frames only when they group a real artifact.
- **Project evidence:** prefer real portrait, authored SVG diagrams, repository-backed proof strips, MDX case studies, limitations, and next steps.
- **Hero artifact:** use the supplied portrait and clear role facts; project diagrams belong to project sections.
- **CV control:** one public PDF download; the owner edits the source file and redeploys it.
- **Navigation:** stable desktop links plus a keyboard-usable mobile menu.

## Interaction and motion

- IntersectionObserver reveal uses opacity with small directional translations; visible content remains available without JavaScript or motion preferences.
- UI transitions stay under 300ms and animate transform, opacity, color, or underline only.
- Header state uses an IntersectionObserver sentinel rather than a scroll event listener.
- Respect `prefers-reduced-motion`: remove movement while retaining readable content, color, and focus feedback.
- Focus indicators use a 2px cobalt outline with visible offset.

## Accessibility and content

- Maintain one logical heading hierarchy and descriptive link names.
- Every informative image has meaningful `alt`; decorative images use empty `alt`.
- Do not communicate state by color alone. Status text and labels must remain explicit.
- Interactive targets are keyboard reachable and touch-friendly; form controls have visible labels.
- Use Indonesian for the primary narrative and established English technical terms where they are clearer.
- Never invent metrics, responsibilities, awards, outcomes, client claims, or repository capabilities.

## Anti-patterns

- No dark dashboard shell, dotted-paper wallpaper, skill clouds, progress bars, fake metrics, logo walls, floating clay cards, or equal three-card rows.
- No pixel font for navigation/body/CTAs, no game menus, no saturated retro palette, and no pixel art repeated in every section.
- No generic AI copy such as “Elevate”, “Seamless”, “Unleash”, or “Next-Gen”.
- No emoji or Unicode glyph used as an icon substitute.
- No filler prompts such as “Scroll to explore” or bouncing chevrons.
- No copied identity, claims, project stories, or visual identity from reference portfolios.

## Implementation boundary

Next.js App Router with static export; server components by default. Stable content lives in `data/` and `content/projects/`. Interaction is isolated to the header and reveal wrapper. Public repositories, supplied profile photo, and existing MDX evidence remain the source of truth.
