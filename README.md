# Ethereal Journey

A single-page storybook. It opens in midnight blue, warms into sunrise as you scroll, and ends with a proposal.

## Personalize

Every line of the story lives in [`src/content.ts`](src/content.ts).

- `NAME` is the name in the question.
- `heroLine` is the sentence on the first screen.
- `memories` are the five gallery moments. Each one has a still image, a looping clip, a title, and a caption.
- `letter` is the sequence of lines that fade in one by one.
- `closingMessage` appears after Yes.

## Story media

The clips and their poster frames live in `public/story/`:

| File | Moment |
| --- | --- |
| `1-office.jpg` / `.mp4` | Where it all began |
| `2-arrival.jpg` / `.mp4` | The day you walked in |
| `3-hello.jpg` / `.mp4` | Hello, you |
| `4-friends.jpg` / `.mp4` | Best friends first |
| `5-date.jpg` / `.mp4` | Our first date |
| `6-proposal.jpg` / `.mp4` | The proposal portrait |

`art/characters.jpg` is the character sheet used to keep both people consistent. It is not part of the site.

If a clip fails to load, the frame shows the still. If the still is missing too, a soft placeholder appears.

### Regenerating the art

Style: cute, heartwarming 3D animated film, soft rounded features, big expressive eyes, warm gold light with twilight purple and peach, no text.

- Him: young South Indian man, warm brown skin, short neat black hair, light stubble, light blue shirt with rolled sleeves, office ID lanyard.
- Her: young South Indian woman, warm brown skin, long dark wavy hair with a small flower clip, soft pastel pink top.

1. Office. He sits at a cozy desk at golden hour with a laptop, a steaming mug, sticky notes, and a plant, and looks up toward the door. Motion: steam curls, he types, then glances up and smiles, dust sparkles in a sunbeam, camera still.
2. Arrival. She steps through the office doorway hugging books, sunlight behind her, while he looks up from his desk. Motion: she tucks her hair behind her ear, he looks up, sparkles float, camera still.
3. Hello. They sit at a study table and laugh while she shows him a notebook, with tea and tiny hearts. Motion: soft laughing, a page turns, tea steams, hearts drift up, camera still.
4. Friends. A rooftop tea break at sunset, sharing chai, fairy lights, a purple skyline. Motion: they laugh, a breeze moves her hair, the lights twinkle, camera still.
5. First date. A candlelit cafe, string lights, rain on the window, a heart-shaped dessert. Motion: the candle flickers, raindrops slide, she laughs, camera still.
6. Proposal. He kneels with an open ring box under a purple-to-gold sky, fireflies and petals, and she covers her mouth in happy surprise. Motion: fireflies drift, petals fall, the ring sparkles, camera still.

Use the same still as the first and last frame so each clip loops.

## Run it

```bash
npm install
npm run dev
```

`npm run build` writes a static site to `dist/`. That folder can be hosted on Netlify, Vercel, or any static host.

## Stack

Vite, React, TypeScript, Tailwind CSS, Framer Motion, tsParticles, and canvas-confetti.
