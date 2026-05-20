---
name: Modern Academic Support
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#40484f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#707880'
  outline-variant: '#bfc7d0'
  surface-tint: '#006493'
  primary: '#006493'
  on-primary: '#ffffff'
  primary-container: '#73c2fb'
  on-primary-container: '#004f75'
  inverse-primary: '#8dcdff'
  secondary: '#006e20'
  on-secondary: '#ffffff'
  secondary-container: '#90f691'
  on-secondary-container: '#007322'
  tertiary: '#625981'
  on-tertiary: '#ffffff'
  tertiary-container: '#bfb4e1'
  on-tertiary-container: '#4d456b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cae6ff'
  primary-fixed-dim: '#8dcdff'
  on-primary-fixed: '#001e30'
  on-primary-fixed-variant: '#004b70'
  secondary-fixed: '#93f993'
  secondary-fixed-dim: '#77dc7a'
  on-secondary-fixed: '#002105'
  on-secondary-fixed-variant: '#005316'
  tertiary-fixed: '#e7deff'
  tertiary-fixed-dim: '#ccc0ee'
  on-tertiary-fixed: '#1e1539'
  on-tertiary-fixed-variant: '#4a4168'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 20px
  container-padding-desktop: 64px
  gutter: 24px
  section-gap: 80px
  element-gap: 16px
---

## Brand & Style

The design system is built to bridge the gap between academic rigor and parental peace of mind. It targets mothers aged 25-40 who seek a trustworthy yet approachable environment for their children’s mathematical growth. 

The aesthetic is **Modern Educational**, blending corporate reliability with a "Fresh-Start" energy. We utilize a refined **Minimalism** enriched by **Soft Tactile** elements. By using a bright, pastel-driven palette on stark white backgrounds, the interface feels light and optimistic rather than clinical. The visual language conveys order, clarity, and the joy of understanding complex subjects like math and statistics through a friendly, non-intimidating lens.

## Colors

The palette avoids the "juvenile" trap by using sophisticated, desaturated pastels that maintain professional credibility while remaining vibrant.

- **Primary (Sky Blue):** Used for main actions and trust-building elements.
- **Secondary (Mint Green):** Represents progress, growth, and "correct" answers.
- **Tertiary (Soft Lilac):** Used for creative problem solving and statistical data visualization categories.
- **Accent Coral:** Reserved for urgent alerts or high-priority calls to action (avoiding pink tones).
- **Backgrounds:** Pure white (#FFFFFF) is the primary canvas to ensure the "Airy" feel, with light neutral grays used only for subtle structural separation.

## Typography

This design system utilizes **Plus Jakarta Sans** across all levels. Its modern, slightly rounded apertures complement the "friendly but professional" goal perfectly.

- **Headlines:** Use Bold (700) or SemiBold (600) weights with slightly tighter letter-spacing to create a strong visual anchor.
- **Body Text:** Use Regular (400) weight with generous line height (1.6) to ensure high legibility for educational content and parent communications.
- **Micro-copy:** Labels for chips and buttons should use Medium/SemiBold weights to ensure they stand out against the soft pastel backgrounds.

## Layout & Spacing

The layout philosophy centers on **Generous Breathing Room**. We avoid density to reduce cognitive load for busy parents.

- **Grid:** A standard 12-column fluid grid for desktop with wide 24px gutters.
- **Margins:** High horizontal padding on desktop (64px+) ensures the content feels centered and curated.
- **Vertical Rhythm:** Sections are separated by large gaps (80px) to allow each educational module or value proposition to stand alone.
- **Mobile:** Content reflows to a single column with 20px side margins, maintaining the airy feel through increased vertical white space between cards.

## Elevation & Depth

To match the soft, friendly aesthetic, depth is created through **Ambient Shadows** rather than harsh lines.

- **Shadow Character:** Use high blur radii (20px - 40px) with very low opacity (5% - 10%). Shadows should be slightly tinted with the primary color (#73C2FB) rather than pure black to keep the UI feeling "fresh."
- **Layering:** Elements like cards use a "Floating" effect. When an element is interactive (like a tutor profile), its elevation increases on hover (shadow becomes deeper and more spread out).
- **Glassmorphism:** Use subtle backdrop blurs (8px - 12px) for navigation bars or modals to maintain a sense of context and lightness.

## Shapes

The shape language is defined by **High Circularity**. 

- **Cards:** Use `rounded-3xl` (approx 24px - 32px) for all main content containers to evoke a sense of safety and friendliness.
- **Inputs & Buttons:** Follow a "Pill" style or `rounded-2xl` minimum.
- **Icon Enclosures:** Educational icons should be placed within soft-colored circles or "squidgy" organic shapes rather than sharp squares.
- **Math Symbols:** Even mathematical operators used in the UI should have rounded terminals to align with the overall system.

## Components

### Buttons
- **Primary:** Pill-shaped, Primary Blue background, white text.
- **Interaction:** On hover, a subtle scale-up (1.02) and a slight shift in shadow depth. Active state involves a subtle "press-in" scale-down (0.98).
- **Secondary:** Transparent background with a 2px Mint or Lilac border.

### Cards
- **Structure:** White background, high-roundedness (32px), and an ambient blue-tinted shadow.
- **Usage:** Used for "Tutor Profiles," "Course Modules," and "Student Progress." Content inside cards must have at least 32px of internal padding.

### Input Fields
- **Style:** Backgrounds should be a very light neutral (#F8FAFC) or white with a soft border. 
- **Focus:** Border transitions to Primary Blue with a subtle outer glow (halo effect).

### Chips & Tags
- **Design:** Small pill shapes using the secondary or tertiary pastel colors with dark text for high contrast. Used for indicating subjects (e.g., "Calculus," "Algebra").

### Icons
- **Style:** 2px stroke weight, linear, modern. Terminals should be rounded. 
- **Theming:** Use icons representing growth (leaves), clarity (sparkles/stars), and classic academic tools (geometry sets, graphs) in a simplified, non-busy style.

### Progress Bars
- **Style:** Thick, rounded tracks with a gradient transition from Mint Green to Sky Blue to represent the journey of learning.