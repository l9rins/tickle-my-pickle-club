# 🏓 Tickle My Pickle Club

![TMPC Banner](https://capsule-render.vercel.app/api?type=waving&color=1a5032&height=300&section=header&text=Tickle%20My%20Pickle%20Club&fontSize=55&animation=fadeIn&fontAlignY=38&desc=Est.%20For%20The%20Love%20Of%20The%20Dink&descAlignY=51&descSize=20&fontColor=ede4cc&descColor=ede4cc)

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Custom%20Properties-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**[Report Bug](https://github.com/l9rins/tickle-my-pickle-club/issues) • [Request Feature](https://github.com/l9rins/tickle-my-pickle-club/issues)**

</div>

---

## 🚀 Overview

**Tickle My Pickle Club** is the official website for a private, friends-only pickleball club built around Sunday games, good rallies, cold water, and respect for the dink. The site serves as the club's public face — a single-page landing experience with smooth scroll-driven animations and a premium court-inspired design.

> "Sunday games, paddle stacks, cold water, clean gear, and the kind of trash talk that only works because everybody is still invited next week."

---

## ✨ Features

- 🎨 **Logo-Matched Palette**: Deep forest green and warm cream color system pulled directly from the club logo.
- 🏟️ **CSS Pickleball Court**: A pure-CSS court rendered as the hero background using layered gradients.
- ✨ **Scroll Animations**: Intersection Observer-powered reveal effects with staggered delays.
- 🧲 **Magnetic Buttons**: Cursor-tracking micro-interactions on primary CTAs.
- 📱 **Fully Responsive**: Mobile-first layout with collapsible navigation and adaptive grid.
- ♿ **Accessible**: Semantic HTML, ARIA labels, `prefers-reduced-motion` support, and focus-visible outlines.
- 🔤 **Marquee Ticker**: Auto-scrolling club phrases for personality and rhythm.
- ⚡ **Page Loader**: Branded loading screen with animated progress bar.

---

## 📋 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport intro with club name, tagline, CTA buttons, and key stats |
| **Marquee** | Scrolling ticker with club phrases — *Dink Responsibly*, *No Egos*, etc. |
| **Ethos** | The club philosophy — private club energy, public-park soul |
| **Member Provisions** | 6-card grid of perks: fresh balls, cold water, paddle cleaner, DSLR photos, jerseys, loaner paddles |
| **The Ritual** | 3-step breakdown of how Sundays work — confirm, stack, play |
| **Join** | Invite CTA with club logo and Facebook link |
| **Footer** | Branding, tagline, copyright |

---

## 🛠️ Tech Stack

```text
┌─────────────────────────────────────────────┐
│              Tickle My Pickle Club           │
├─────────────────────────────────────────────┤
│                                             │
│   HTML5         Semantic structure          │
│   CSS3          Custom properties, grid,    │
│                 gradients, animations       │
│   JavaScript    Intersection Observer,      │
│                 scroll events, magnetic     │
│                 cursor tracking             │
│                                             │
│   Zero dependencies. No build step.         │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites

- Any modern web browser
- A local server (optional, for development)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/l9rins/tickle-my-pickle-club.git

# Navigate to project
cd tickle-my-pickle-club

# Option 1: Open directly
open index.html

# Option 2: Serve locally (Python)
python -m http.server 8000

# Option 3: Serve locally (Node)
npx serve .
```

Then visit `http://localhost:8000` in your browser.

---

## 📁 Project Structure

```text
tickle-my-pickle-club/
├── images/
│   └── club-logo.png       # Club logo (deep green + cream)
├── index.html               # Single-page markup
├── styles.css               # Full design system (~950 lines)
├── script.js                # Interactions & animations
└── README.md
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--forest` | `#1a5032` | Primary dark green |
| `--lime` | `#ede4cc` | Accent cream (from logo) |
| `--moss` | `#2a7a50` | Supporting mid-green |
| `--court` | `#358c5e` | Court green |
| `--clay` | `#c4a56a` | Warm gold accent |
| `--paper` | `#f5f0e4` | Page background |
| `--ink` | `#14261c` | Text color |
| `--muted` | `#5e6b5a` | Secondary text |

### Typography

- **Primary**: Inter (system fallback stack)
- **Monospace**: SF Mono / Cascadia Mono / Consolas

### Breakpoints

| Width | Behavior |
|-------|----------|
| `> 880px` | Full desktop layout |
| `580–880px` | Tablet — collapsed nav, single-column grids |
| `< 580px` | Mobile — stacked layout, full-width buttons |

---

## ⚡ Performance

| Metric | Detail |
|--------|--------|
| Dependencies | **0** — pure HTML, CSS, JS |
| Build step | **None** — ship as-is |
| Page weight | **~30 KB** (excluding logo image) |
| Animations | GPU-accelerated transforms + opacity |
| Reduced motion | Fully respected via `prefers-reduced-motion` |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<div align="center">

**Built with 🏓 for the love of the dink**

**By [l9rins](https://github.com/l9rins)**

Licensed under [MIT](./LICENSE) © 2026

</div>
