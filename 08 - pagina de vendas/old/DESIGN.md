---
name: Obsidian Tech
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e7'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e2e2e7'
  inverse-on-surface: '#2e3034'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#c8c6c8'
  on-secondary: '#303032'
  secondary-container: '#474649'
  on-secondary-container: '#b6b4b7'
  tertiary: '#c8c6c8'
  on-tertiary: '#303032'
  tertiary-container: '#919092'
  on-tertiary-container: '#29292b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#e4e2e4'
  tertiary-fixed-dim: '#c8c6c8'
  on-tertiary-fixed: '#1b1b1d'
  on-tertiary-fixed-variant: '#474649'
  background: '#111317'
  on-background: '#e2e2e7'
  surface-variant: '#333539'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 48px
---

## Brand & Style

The design system is engineered to evoke a sense of precision, luxury, and advanced technology. Targeting a high-end consumer base that values both fitness and executive aesthetics, the UI utilizes a **Modern Corporate** style with elements of **Minimalism**.

The visual narrative focuses on "Product as Hero." By using deep blacks and muted dark tones, we allow the vibrant displays and metallic finishes of the smartwatch to command total attention. The emotional response should be one of reliability, peak performance, and understated sophistication. High-quality whitespace is not just empty space; it is a luxury margin that frames technical excellence.

## Colors

The palette is anchored in a "True Black" (`#000000`) background to achieve infinite contrast on OLED screens and create a premium "infinite" feel. 

- **Primary (Tech Blue):** A vibrant, high-saturation blue used sparingly for calls to action, active states, and data visualizations.
- **Surface Tiers:** Dark greys (`#1C1C1E` and `#2C2C2E`) are used to create structural depth and separate content sections without breaking the dark aesthetic.
- **Typography & Accents:** High-contrast white (`#F2F2F7`) is reserved for primary headings and body text to ensure maximum legibility against the dark void.

## Typography

This design system utilizes a tiered typography strategy to balance personality with technical clarity.

- **Headlines:** Uses **Plus Jakarta Sans** for its modern, slightly rounded, and optimistic geometric shapes. It feels approachable yet cutting-edge.
- **Body:** **Inter** is employed for its exceptional legibility and neutral character, ensuring that technical specifications are easy to digest.
- **Technical Labels:** **Geist** is used for small labels, monospaced data points, and UI metadata, providing a "developer-grade" precision look.

All large display type should use tighter letter spacing to maintain a cohesive, high-end editorial appearance.

## Layout & Spacing

The layout follows a **Fluid Grid** system within a centered container. A 12-column grid is used for desktop, collapsing to 4 columns for mobile. 

The "Luxury Margin" philosophy dictates wide vertical breathing room (`120px+`) between major sections to prevent the UI from feeling cluttered. Spacing follows an 8px linear scale. For product features, use asymmetrical layouts (e.g., text spanning 5 columns, image spanning 7 columns) to create a dynamic, modern rhythm.

## Elevation & Depth

In this dark-themed system, depth is communicated through **Tonal Layering** and **Ambient Glows** rather than traditional drop shadows.

- **Level 0 (Background):** Pure black `#000000`.
- **Level 1 (Cards/Sections):** Dark Grey `#1C1C1E`.
- **Level 2 (Modals/Overlays):** Lighter Grey `#2C2C2E` with a very subtle 1px stroke of `#ffffff10`.
- **Blue Accents:** Elements like the primary button utilize a soft, diffused outer glow (`0px 4px 20px rgba(0, 122, 255, 0.3)`) to simulate light emitting from the watch screen.

## Shapes

The shape language mimics the industrial design of modern wearable tech. 

- **Standard Radius:** `0.5rem` (8px) for buttons and input fields.
- **Container Radius:** `1rem` (16px) for cards and product feature blocks.
- **Outer Shell:** `1.5rem` (24px) for large hero sections or featured promotional containers.

Avoid sharp 90-degree corners to maintain the "organic-tech" feel of the brand.

## Components

### Buttons
- **Primary:** Tech Blue background, white text. On hover, increase glow intensity and scale by 2%.
- **Secondary:** Transparent with a 1px white border. On hover, fill with white and change text to black.
- **Ghost:** Text only with Tech Blue accent color.

### Cards
Feature cards should have a subtle background gradient (top-left to bottom-right) from `#1C1C1E` to `#000000`. Images should bleed off the edges or use parallax effects on scroll.

### Form Inputs
Darker-than-surface background (`#0A0A0A`) with a focus state that changes the border to Tech Blue.

### Interaction & Animation
- **Transitions:** Use `cubic-bezier(0.4, 0, 0.2, 1)` for all state changes (300ms duration).
- **Reveal:** Components should fade in and slide up slightly (20px) as they enter the viewport to emphasize fluidity.
- **Micro-interactions:** Buttons should have a subtle "press-down" effect (scale 0.98) on active states.