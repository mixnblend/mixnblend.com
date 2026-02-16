# Mix n Blend — Site Theming & Content Plan

This document is a plan for Claude Code to theme and populate the Mix n Blend Astro website. It covers visual identity, content, discography data, and implementation guidance.

---

## 1. Brand Identity

### Who They Are

Mix n Blend is a 9-piece electronic band from Cape Town, South Africa. Core members are Jonathan Arnold, Kevin Ribbans, and Ross Finck (joined 2008), who have been mixing and blending since 2001. They started as DJs, evolved into producers, and grew into a full live band with horns, vocalists, a VJ, drummer, and guitarist.

They were part of the African Dope Records stable — a legendary Cape Town label that kick-started South Africa's electronic scene alongside acts like Sibot, Markus Wormstorm, The Real Estate Agents, Felix la Band, Krushed & Sorted, and Goddessa.

### Personality & Tone

- **Low-key and fun** — no pretension, no manifestos, just people having a good time making music
- **Collaborative** — the project is bigger than any one person, always has been
- **Genre-agnostic** — dub, reggae, drum n bass, funk, glitch hop, swing, nu disco... whatever feels right
- **Cape Town through and through** — beach culture, late nights, a creative scene built on people from different backgrounds making things together

### Voice

Keep the site copy casual and understated. Don't oversell. Let the music and the artwork do the talking. Think "mates telling you about their band" not "press release".

---

## 2. Visual Design System

### Colour Palette

Primary brand colours derived from the logo, plus complementary accents chosen to keep things playful without looking like a flag.

**Core Brand Colours:**

| Token                | Hex       | Usage                                      |
| -------------------- | --------- | ------------------------------------------ |
| `--color-brand-red`  | `#C8232C` | Primary accent, CTAs, hero elements        |
| `--color-brand-blue` | `#1A5DAB` | Primary accent, links, section backgrounds |

**Complementary Accents:**

| Token                  | Hex       | Usage                                                  |
| ---------------------- | --------- | ------------------------------------------------------ |
| `--color-brand-yellow` | `#FFD23F` | Highlights, callout boxes, hover states, badges        |
| `--color-brand-teal`   | `#2EC4B6` | Secondary backgrounds, alternative links, card accents |
| `--color-brand-coral`  | `#FF6B35` | Warm CTAs, emphasis, notification dots (use sparingly) |
| `--color-brand-purple` | `#6B2D8B` | Dark section alternative to black, special features    |

**Neutrals:**

| Token               | Hex       | Usage                          |
| ------------------- | --------- | ------------------------------ |
| `--color-white`     | `#FFFFFF` | Text on dark, card backgrounds |
| `--color-off-white` | `#F5F5F0` | Page background                |
| `--color-dark`      | `#1A1A1A` | Body text, dark sections       |
| `--color-warm-grey` | `#E8E4DF` | Subtle backgrounds, dividers   |

**Palette Strategy:**

Red and blue are the hero brand colours — they anchor the identity and appear in the logo, nav, and key CTAs. Yellow and teal are the primary supporting colours used generously across section backgrounds, cards, and interactive states. Coral and purple are seasoning — used sparingly for emphasis and variety.

The goal is **crayon box / Cape Town surf shop / M&M's candy** — not any national flag. Alternate section backgrounds between white, off-white, teal, and blue to create rhythm. Use yellow for energy (hover states, featured badges, pull quotes). Drop in coral or purple occasionally to keep things unexpected.

**Colour pairing guidance:**

- Red on white or off-white (high contrast, punchy)
- Blue on white or off-white (clean, readable)
- Yellow on dark or blue backgrounds (highlight/pop)
- Teal on white or as a section background with dark text
- White text on red, blue, purple, or dark backgrounds
- Avoid red on blue or blue on red directly (vibrates, hard to read)
- Avoid yellow text on white (insufficient contrast)

### Typography

The logo font is close to the **M&M's brand font** — rounded, bold, lowercase, playful.

**Implementation:**

- **Headings**: Use a rounded/bubbly sans-serif. Good options: `Nunito` (Google Fonts), `Poppins` (weight 700+), or `Baloo 2`. These capture the rounded, friendly M&M's feel.
- **Body**: `Inter` or `DM Sans` — clean, modern, readable.
- **Headings should be lowercase or sentence case** to match the playful logo style.

### Logo

The uploaded logo (`Untitled.png`) features an `m` in a red circle and a `b` in a blue circle, connected with a playful swoosh. Use this as the primary brand mark.

- Place in the site header/nav
- Use as a favicon (crop to just the `m` circle or both circles)
- The red-blue pairing should be echoed throughout the site

### Art Direction

Looking at their album artwork:

- **Look Mom No Hands** (`look_mom_no_hands.jpg`): Illustrated nautical theme, whimsical ship with character faces, ocean waves — hand-drawn, storybook quality
- **You Can** (`example_album_2.jpg`): Retro cassette tape illustration, bold green background, the band logo on the tape — pop art, vintage feel
- **Example album art** (`example_album.jpg`): Minimalist beach/summer illustration, flat colour, stylised figure — clean, modern illustration style

**Design direction:** The site should feel like a colourful collage/scrapbook. Mix illustrated and photographic elements. Bold colour blocks. Generous whitespace. Slightly irreverent layout. Think festival poster meets playful zine.

### Component Styling Notes

- **Cards** (for albums, news): Rounded corners (12-16px), subtle shadow, hover scale effect
- **Buttons**: Rounded pill shape, bold colours, playful hover states
- **Section transitions**: Use angled/wavy dividers between sections (not straight lines) — reference the ocean wave motif from Look Mom No Hands
- **Image treatment**: Mix full-bleed images with contained cards. Album art should be prominent.
- **Navigation**: Simple, clean. The brand colours do the heavy lifting. Consider a sticky nav with the logo.

---

## 3. Site Structure & Pages

### Navigation

```
Home | About | Music | Listen | Contact
```

### Home Page

1. **Hero Section**: Bold intro with band name, a short tagline like "Electronic band from Cape Town", and a featured track embed (Bandcamp or SoundCloud)
2. **Latest Release**: Highlight "Drummers Always Cheat" (2020) with artwork and streaming links
3. **About Teaser**: Short band bio with link to full about page
4. **Discography Grid**: Visual grid of album covers linking to Music page
5. **Social Links**: Facebook, Instagram, SoundCloud, Bandcamp, Apple Music

### About Page

**Band Bio (draft content):**

> Mix n Blend started in 2001 when Jon and Kev began making beats together in Cape Town. They were DJing, got bored of just two turntables and a mixer, bought more toys, and started making their own tracks. Ross joined in 2008 and the three of them put out their debut album "Look Mom No Hands" on African Dope Records the following year.
>
> Since then the project has grown into a 9-piece live band — horns, vocalists, a VJ, drummer, guitarist — all people who do incredible things in their own right. No two live sets are the same. They mash up whatever feels right on the night: dub, reggae, drum n bass, funk, swing, glitch hop, and a whole bunch of other stuff.
>
> They've always been about collaboration. There are 20+ musicians on the debut album alone. If you look at any golden age of music, it happens because people from different backgrounds get together and make things. That's what the Cape Town scene has always been about, and that's what Mix n Blend is about. Making music because they like making music, and making sure everyone's having a good time.

**Members:**

- Jonathan Arnold (Jon) — Production, software, beats. "Supreme nerd" and professional software developer. Born in PE, grew up in Grahamstown.
- Kevin Ribbans (Kev) — Production, beats, photography. Born in Johannesburg, grew up in Plettenberg Bay.
- Ross Finck — Sound, production. Joined 2008. "Sound nerd." Born and grew up in Johannesburg.
- Plus rotating cast of collaborators and live musicians

**Key facts for the about page:**

- Core trio met in high school in Grahamstown
- Part of the African Dope Records family alongside Sibot, Markus Wormstorm, Fletcher, The Real Estate Agents
- "The more people collaborate, the more creative it gets"
- Genre tags: electronic, nu disco, disco, drum n bass, funk, nudisco, reggae, swing, glitch hop, dub

### Music Page (Discography)

Display as a visual grid with album artwork, title, year, and streaming links.

### Listen Page

Embed players from SoundCloud and Bandcamp. Could also link out to Apple Music and Spotify.

### Contact / Connect Page

Social links, booking enquiry form or email, and embeds for latest social posts.

---

## 4. Complete Discography Data

Use this as a content collection in Astro (`src/content/releases/`). Each release gets a markdown file with frontmatter.

### Albums

#### Look Mom, No Hands

- **Type**: Album
- **Year**: 2009
- **Release Date**: 6 November 2009
- **Label**: African Dope Records
- **Tracks**: 14 songs, 1 hour 3 minutes
- **Cover Art**: `look_mom_no_hands.jpg` (uploaded — pirate ship illustration)
- **Apple Music**: https://music.apple.com/za/album/look-mom-no-hands/334925097
- **Tracklist**:
  1. Bass Nitties (2:40)
  2. Spring Step (feat. P.H.Fat) (3:40)
  3. Shall We Swing (feat. Fletcher & Sindy) (4:49)
  4. Morphed Code (3:26)
  5. Lazy Friday Sounds (feat. Farrell Adams) (4:40)
  6. Out of Line (feat. Farrell Adams) (5:03)
  7. Sunday Afternoon Dub (feat. Pedro from 340ml) (4:37)
  8. Sik Wid It (3:25)
  9. First Light (feat. Rayelle Goodman) (6:22)
  10. Drug in a Mug (3:18)
  11. Outta Town (feat. Crosby) (5:02)
  12. Tantrum (feat. EJ Von Lyrik & SFR) (4:13)
  13. Champion Sound (5:18)
  14. Full Ahead (6:24)
- **Description**: The debut album. 14 tracks with contributions from 20+ musicians including members of 340ml and Goddessa, African Dope's Fletcher, and Farrell Adams. An hour of dub, drum n bass, funk, swing, and whatever else felt right at the time.

### Singles & EPs

#### Look Mom No Hands Remixes, Vol. 1

- **Type**: EP
- **Year**: 2010
- **Release Date**: 5 May 2010
- **Label**: African Dope Records
- **Tracks**: 4 songs, 20 minutes
- **Apple Music**: https://music.apple.com/za/album/look-mom-no-hands-remixes-vol-1-ep/365374963
- **Tracklist**:
  1. Shall We Swing (feat. Liver) [Liver Remix] (4:42)
  2. Outta Town (feat. Hyphen & SFR) [Hyphen and SFR Remix] (3:08)
  3. Sik Wid It (feat. Bioscope) [Bioscope Remix] (7:05)
  4. Full Ahead (feat. Fletcher) [Fletcher Remix] (5:16)

#### Skanky Panky vol. 1

- **Type**: EP
- **Year**: 2010
- **Notable Track**: Get Crunk Wit Jesus

#### Acid Crunk EP 6 — I Got...

- **Type**: EP (compilation appearance with Narch)
- **Year**: 2010
- **Notable Track**: I Got... (Original) — collaboration with Narch, also remixed by Beats Antique
- **Apple Music**: https://music.apple.com/za/album/acid-crunk-ep-6-i-got/366573343

#### Joy/Lost EP

- **Type**: EP
- **Year**: 2011
- **Release Date**: 2011
- **Apple Music (original)**: https://music.apple.com/za/album/mix-n-blend-joy-lost-ep/416161395
- **Apple Music (reissue as Joy Lost)**: https://music.apple.com/za/album/joy-lost/455246623
- **Tracklist**:
  1. Joy (feat. Crosby)
  2. Lost
  3. Narona (feat. Bosko Popovac)
  4. Kitten Mincer

#### Rebel Gun / Mercy

- **Type**: Single
- **Year**: 2014
- **Release Date**: January 2014
- **Apple Music**: https://music.apple.com/za/album/rebel-gun-mercy-single/811486833
- **Bandcamp**: https://mixnblend.bandcamp.com/album/rebel-gun-mercy
- **Tracklist**:
  1. Rebel Gun (feat. Sannie Fox)
  2. Mercy (feat. Yaelle Trules)

#### You Can

- **Type**: Single
- **Year**: 2016
- **Release Date**: 18 May 2016
- **Cover Art**: `example_album_2.jpg` (uploaded — cassette tape illustration)
- **Apple Music**: https://music.apple.com/za/album/you-can-single/1104675041
- **Bandcamp**: https://mixnblend.bandcamp.com/track/you-can
- **Credits**: J. Arnold, K. Ribbans, R. MacDonald, L. Thomson, E. Jones, C. MacDonald
- **Description**: First track from the album "When Life Gets in the Way"

#### Home is Just Below the Horizon

- **Type**: Single
- **Year**: 2019
- **Apple Music**: https://music.apple.com/za/album/home-is-just-below-the-horizon-single/1489127325

#### Drummers Always Cheat (feat. Hawkword)

- **Type**: Single
- **Year**: 2020
- **Apple Music**: https://music.apple.com/za/album/drummers-always-cheat-feat-hawkword-single/1501622452

### Compilation Appearances

- **Cape of Good Dope 2** (2009) — "Outta Town"
- **Various — Zoo City Soundtrack** (2010) — "Shall We Swing (Liver Remix) [feat. Sindy and Fletcher]"
- **Blind Threshold** (2010) — "I Got… (Beats Antique Remix)" with Narch

---

## 5. External Links & Embeds

### Social Media & Streaming

| Platform         | URL                                                     |
| ---------------- | ------------------------------------------------------- |
| Facebook         | https://www.facebook.com/mixnblend/                     |
| Instagram        | https://www.instagram.com/mixnblendyo/                  |
| Bandcamp         | https://mixnblend.bandcamp.com                          |
| SoundCloud       | https://soundcloud.com/mixnblend                        |
| Apple Music      | https://music.apple.com/za/artist/mix-n-blend/285190899 |
| Website (legacy) | http://www.mixnblend.com                                |
| Twitter/X        | https://twitter.com/mixnblendyo                         |

### Bandcamp Embed (You Can)

```html
<iframe
  style="border: 0; width: 100%; height: 120px;"
  src="https://bandcamp.com/EmbeddedPlayer/track=3405298534/size=large/bgcol=ffffff/linkcol=1A5DAB/tracklist=false/artwork=small/transparent=true/"
  seamless
>
  <a href="https://mixnblend.bandcamp.com/track/you-can">You Can by Mix n Blend</a>
</iframe>
```

### SoundCloud Embed Example

Use the SoundCloud oEmbed API or iframe embed for tracks like Kitten Mincer, Rebel Gun, etc.

### Press / Articles

- **Cape Town Magazine Interview**: https://www.capetownmagazine.com/interviews/mix-n-blend-creative-djs-are-mixing-it-up-down-south/146_22_17181
- **African Dope Records history (Medium)**: https://medium.com/@DontParty/where-has-all-the-african-dope-gone-82ebaffd29bc
- **IOL CD Review — Look Mom No Hands**: https://www.iol.co.za/entertainment/music/cd-review-look-mom-no-hands-975641

---

## 6. Implementation Notes for Claude Code

### Assets

The following images are uploaded and available:

1. `Untitled.png` — Band logo (m in red circle, b in blue circle)
2. `look_mom_no_hands.jpg` — Look Mom No Hands album artwork
3. `example_album.jpg` — Album art example (beach illustration)
4. `example_album_2.jpg` — You Can single artwork (cassette tape)

For album artwork not provided as uploads, use placeholder cards with the album title and year styled in brand colours. Add a `TODO` comment noting the artwork needs sourcing.

### Content Collections

Set up Astro content collections for:

```
src/content/
├── releases/           # Each release as a .md file
│   ├── look-mom-no-hands.md
│   ├── look-mom-no-hands-remixes-vol-1.md
│   ├── joy-lost.md
│   ├── rebel-gun-mercy.md
│   ├── you-can.md
│   ├── home-is-just-below-the-horizon.md
│   └── drummers-always-cheat.md
└── news/               # Future news articles
```

Each release frontmatter should include: `title`, `type` (album/ep/single), `year`, `releaseDate`, `label`, `coverImage`, `appleMusic`, `bandcamp`, `soundcloud`, `tracklist[]`, `credits`, `description`.

### Tailwind Config

Extend Tailwind with the brand tokens:

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        red: '#C8232C',
        blue: '#1A5DAB',
        yellow: '#FFD23F',
        teal: '#2EC4B6',
        coral: '#FF6B35',
        purple: '#6B2D8B',
        dark: '#1A1A1A',
        'off-white': '#F5F5F0',
        'warm-grey': '#E8E4DF',
      },
    },
    fontFamily: {
      display: ['Nunito', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    borderRadius: {
      card: '16px',
    },
  },
}
```

### Key Astro Components to Build

- `<BandLogo />` — SVG or optimised image of the logo
- `<AlbumCard />` — Displays cover art, title, year, streaming links
- `<DiscographyGrid />` — Grid layout of AlbumCards
- `<StreamingLinks />` — Row of platform icons linking to the release
- `<BandcampEmbed />` — Configurable Bandcamp iframe embed
- `<SocialLinks />` — Footer/connect section with all platforms
- `<WaveDivider />` — SVG wavy section separator (ocean motif)
- `<Hero />` — Bold intro section with gradient or image background

### CSS/Animation Ideas

- Subtle parallax on hero images
- Album cards that tilt on hover (3D transform)
- Wavy SVG dividers between sections (animated slowly)
- Colour transitions between sections (red → blue → white)
- Playful loading states

### Accessibility Reminders

- All album artwork needs descriptive `alt` text
- Ensure colour contrast meets WCAG AA on brand-red and brand-blue backgrounds
- Streaming embeds should have fallback links
- Test keyboard navigation on all interactive elements
