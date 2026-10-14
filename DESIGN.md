# Design System: Muhamad Irfan Afriyansyah - Editorial Signal AI Engineer

## 1. Visual Theme & Atmosphere

An editorial technical portfolio for fast recruiter scanning. Density 3/10, whitespace 8/10, variance 5/10, motion 4/10. The page feels direct, human, and evidence-led: real portrait first, project proof second, contact path third. Burnt Clay is sparse and functional: it marks action, emphasis, and selected evidence.

## 2. Color Palette & Roles

- **Warm Canvas** (#F7F6F2) — page canvas and quiet reading field.
- **Surface White** (#FFFDF8) — portrait and project media only.
- **Charcoal Ink** (#171917) — headings, primary copy, and the contact CTA.
- **Muted Moss** (#626963) — descriptions, dates, and factual support.
- **Warm Border** (#D3D7D0) — 1px editorial dividers and frames.
- **Burnt Clay** (#B45B3C) — the only accent for links, CTA, active states, and focus rings.

Use rules, whitespace, and one dark contact block instead of floating cards. No purple, neon, gradients, clay shadows, or second accent. Burnt Clay remains sparse and functional.

## 3. Typography Rules

- **Display:** Geist — confident, compact, and readable in large editorial headlines.
- **Editorial emphasis:** Instrument Serif — only for the human-centered hero phrase and select pull quotes.
- **Body:** Geist — minimum 16px for long-form copy, 65ch maximum measure, relaxed leading.
- **Mono:** Geist Mono — status, dates, labels, route metadata, and measured technical facts only.
- **Banned:** Inter, generic serif fonts, and monospace used as costume.

## 4. Component Stylings

- **Buttons:** One Charcoal Ink primary CTA with warm-paper text, plus quiet text links. Burnt Clay remains the hover and focus accent. Use short color/transform transitions and tactile press feedback. No glow.
- **Frames:** 1px rules for editorial structure; square or lightly rounded image frames only when they group a real artifact.
- **Portrait:** Use the supplied portrait in the hero so recruiters meet the candidate before the project diagrams.
- **Evidence:** Qalbu proof stays compact and repository-backed; it never becomes a fake metric dashboard.
- **Project evidence:** Real portrait, source-informed diagrams, MDX case studies, and repository links. No fake app screenshots or invented metrics.
- **CV control:** One public ATS-friendly PDF download; editing remains source-controlled by the portfolio owner.

## 5. Layout Principles

- Use an asymmetric grid inside a 1400px shell.
- The hero is a publication spread: specific role direction and value statement left, the real portrait and concise facts right.
- Selected work leads with editorial rows across AI, data, and applied machine learning; Qalbu keeps its deeper technical presentation on its case-study route.
- Experience uses chronology. Thinking and process use dividers rather than equal cards.
- No decorative overlaps. Every image, diagram, and text block owns a clear spatial zone.
- Below 768px, collapse to one column, preserve the narrative order, and prevent horizontal overflow.
- Spacing follows a practical golden-ratio rhythm: 4, 8, 13, 21, 34, 55, 89, and 144px.
- Priority layouts use a 61.8/38.2 split; repeated equal-priority items remain balanced rather than being forced into unequal columns.

## 6. Motion & Interaction

- One restrained IntersectionObserver reveal uses opacity with small up/left/right translations to make the editorial split composition readable as it enters view. Hover movement is limited to image crop, underline, and button feedback.
- Interactive UI stays below 300ms and uses a short exponential ease-out.
- Header scrolled state uses an IntersectionObserver sentinel, never a scroll event listener.
- Reduced motion removes movement while preserving visible content and focus transitions.

## 7. Content Architecture

- Next.js App Router with static export. Server Components by default; header and reveal wrapper are the only interaction layers.
- `content/projects/*.mdx` holds case-study evidence. `data/*.ts` holds stable site, experience, principles, and process copy.
- Primary navigation follows the recruiter scan path: Work, Experience, About, and Contact. Thinking, process, skills, and education remain available in the page narrative.
- Qalbu preserves the public repository truth and its safety boundary: not therapy, diagnosis, fatwa, or a replacement for trusted people or professionals.

## 8. Anti-Patterns (Banned)

- No dark dashboard shell, dotted paper canvas, neon glow, gradient text, section-number clutter, or decorative eyebrow stacks.
- No game UI, pixel typography for body copy, saturated retro palette, or pixel art on every section.
- No three-equal-card rows, skill clouds, progress bars, fake metrics, or technology logo walls.
- No fabricated client results, awards, responsibilities, user counts, or project outcomes.
- No generic AI clichés such as “Elevate”, “Seamless”, “Unleash”, or “Next-Gen”.
- No Unicode or emoji used as a substitute for an icon system.

## 9. Source Rules

- Factual sources remain `Irfandroid`, `muhirfanaf`, the public project repositories, the supplied profile photo, and the existing MDX evidence.
- Reference libraries and Stitch concepts inform visual grammar only; they do not supply copied identity or claims.
- When data is not public, state that uncertainty plainly.
