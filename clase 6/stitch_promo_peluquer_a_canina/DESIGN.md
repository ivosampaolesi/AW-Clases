---
name: Canine Clarity
colors:
  surface: '#f3faff'
  surface-dim: '#c7dde9'
  surface-bright: '#f3faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e6f6ff'
  surface-container: '#dbf1fe'
  surface-container-high: '#d5ecf8'
  surface-container-highest: '#cfe6f2'
  on-surface: '#071e27'
  on-surface-variant: '#3c494c'
  inverse-surface: '#1e333c'
  inverse-on-surface: '#dff4ff'
  outline: '#6c797c'
  outline-variant: '#bbc9cc'
  surface-tint: '#006876'
  primary: '#006876'
  on-primary: '#ffffff'
  primary-container: '#00bcd4'
  on-primary-container: '#004650'
  inverse-primary: '#44d8f1'
  secondary: '#4f6169'
  on-secondary: '#ffffff'
  secondary-container: '#d2e6ef'
  on-secondary-container: '#55676f'
  tertiary: '#ac3509'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff8b67'
  on-tertiary-container: '#791f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a1efff'
  primary-fixed-dim: '#44d8f1'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e59'
  secondary-fixed: '#d2e6ef'
  secondary-fixed-dim: '#b6cad2'
  on-secondary-fixed: '#0b1e24'
  on-secondary-fixed-variant: '#374951'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59f'
  on-tertiary-fixed: '#3a0a00'
  on-tertiary-fixed-variant: '#852300'
  background: '#f3faff'
  on-background: '#071e27'
  surface-variant: '#cfe6f2'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  caption:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base-unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  section-gap-desktop: 80px
  section-gap-mobile: 48px
---

## Brand & Style

The design system is centered on the intersection of professional hygiene and warm, approachable care. It targets pet owners who view their dogs as family members and seek a stress-free, premium grooming experience. 

The visual style is **Modern Minimalist with Tactile Softness**. It utilizes generous whitespace to signify cleanliness and "breathability," balanced by soft, organic shapes that evoke a friendly and safe environment. The interface should feel "airy" and "fresh," avoiding clutter to ensure the user's focus remains on the quality of care and the ease of booking. Emotional responses should range from immediate trust in the service's professionalism to a sense of comfort and joy.

## Colors

The palette is designed to mirror the refreshing experience of a bath. 

- **Primary (Vibrant Turquoise):** Used for key actions and branding elements. It represents energy, water, and freshness.
- **Secondary (Soft Sky Blue):** Used for large background sections and decorative containers to create a calming atmosphere.
- **Tertiary (Warm Coral):** A strategic accent color used sparingly for high-priority alerts or "Book Now" highlights to provide a warm, human (and canine) touch.
- **Neutral (Slate Gray):** Provides grounded professional legibility for body text and icons without the harshness of pure black.
- **Base (Clean White):** The primary surface color, emphasizing hygiene and a sterile (but not cold) environment.

## Typography

This design system uses a dual-font strategy to balance friendliness with clarity.

- **Headings:** **Plus Jakarta Sans** is used for its soft, rounded terminals and modern geometric construction. It feels welcoming and optimistic. High weights (700+) should be used for major titles to create a strong visual anchor.
- **Body & UI:** **Work Sans** provides a stable, professional contrast. Its slightly wider apertures ensure excellent readability for service descriptions and booking forms, even at smaller sizes. 

Maintain a "loose" line height for body text to reinforce the airy, stress-free brand personality.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum width constraint for desktop to maintain readability. 

- **Desktop (12 columns):** 24px gutters with 80px vertical spacing between major sections to allow the design to "breathe."
- **Tablet (8 columns):** 20px gutters with 64px vertical spacing.
- **Mobile (4 columns):** 16px gutters and margins. Content should stack vertically, with card components occupying the full width minus margins.

Spacing is based on an 8px rhythm. Use larger padding (32px+) inside containers like service cards to emphasize the premium, spacious feel of the grooming salon.

## Elevation & Depth

Depth is achieved through **Ambient Shadows** and tonal layering rather than harsh borders.

1.  **Low Elevation:** Used for cards and interactive elements. Shadows should be ultra-diffused: `0px 4px 20px rgba(0, 188, 212, 0.08)`. The slight turquoise tint in the shadow keeps the "clean water" theme alive.
2.  **High Elevation:** Reserved for floating action buttons (like a "Chat" bubble) or active Modals: `0px 12px 32px rgba(69, 90, 100, 0.12)`.
3.  **Tonal Depth:** Use the Secondary color (Soft Sky Blue) as a subtle background "well" to group related form elements or service tiers, creating depth without physical shadows.

## Shapes

The shape language is consistently **Rounded**. This avoids sharp "scary" corners, mirroring the safety-first approach of the grooming service.

- **Standard Elements (Buttons, Inputs):** 0.5rem (8px) corner radius.
- **Large Elements (Cards, Images):** 1rem (16px) corner radius.
- **Decorative Elements:** Use perfectly circular containers for pet portraits or icons to maintain a friendly, organic feel.

## Components

- **Buttons:** Primary buttons use the Turquoise background with white text and a subtle 4px bottom-heavy shadow. Hover states should slightly brighten the color. CTA buttons should be large (min-height 48px) with bold labels.
- **Service Cards:** Cards feature a top-aligned high-quality photo with a 16px radius. The content area below should have 24px of internal padding, using Headline-MD for the service name and Body-MD for the price and description.
- **Appointment Form:** Inputs use a 1px solid border in a lightened Neutral shade, which transitions to the Primary Turquoise on focus. Labels should be placed above the input for clarity.
- **Chips/Badges:** Use these for dog sizes (Small, Medium, Large). They should have a Pill-shape (rounded-xl) and use the Secondary Sky Blue background with a darker blue text.
- **Success States:** Use rounded icons with a soft green tint to confirm bookings, ensuring the "relief" of a completed task is felt by the user.