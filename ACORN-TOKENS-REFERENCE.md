# Acorn Design Tokens - Quick Reference

Quick reference guide for using Acorn design tokens in this project.

## 🎨 Colors

### Accent Colors (Primary Brand)
```css
var(--color-accent-primary)        /* Main blue - use for primary actions */
var(--color-accent-primary-hover)  /* Hover state */
var(--color-accent-primary-active) /* Active/pressed state */
```

### Background Colors
```css
var(--color-background-primary)    /* Main background (white/light gray) */
var(--color-background-secondary)  /* Subtle contrast (light gray) */
var(--color-background-tertiary)   /* More contrast (medium gray) */
```

### Text Colors
```css
var(--color-text-primary)    /* Main text (dark) */
var(--color-text-secondary)  /* Subtle text (medium gray) */
var(--color-text-tertiary)   /* Disabled text (light gray) */
var(--color-text-link)       /* Links (accent color) */
```

### Border Colors
```css
var(--color-border-default)     /* Standard borders */
var(--color-border-interactive) /* Interactive element borders */
```

### Status Colors
```css
/* Success (green) */
var(--color-success-background)
var(--color-success-text)

/* Error (red) */
var(--color-error-background)
var(--color-error-text)

/* Warning (yellow) */
var(--color-warning-background)
var(--color-warning-text)

/* Info (blue) */
var(--color-info-background)
var(--color-info-text)
```

### Base Color Palette (Direct Use Rarely Needed)
```css
/* Blues: --color-blue-05 through --color-blue-90 */
/* Grays: --color-gray-05 through --color-gray-100 */
/* Use semantic tokens above instead! */
```

## 🔤 Typography

### Font Family
```css
var(--font-family-default)   /* Inter + system fonts */
var(--font-family-monospace) /* Code/monospace */
```

### Font Size
```css
var(--font-size-root)    /* 15px - default */
var(--font-size-small)   /* 13px - captions */
var(--font-size-default) /* 15px - body */
var(--font-size-large)   /* 17px - emphasis */
var(--font-size-xlarge)  /* 22px - headings */
var(--font-size-xxlarge) /* 24px - large headings */
```

### Font Weight
```css
var(--font-weight-default) /* 400 - normal */
var(--font-weight-medium)  /* 500 - emphasis */
var(--font-weight-bold)    /* 600 - strong */
```

### Line Height
```css
var(--line-height-default) /* 1.5 - body text */
var(--line-height-heading) /* 1.2 - headings */
```

## 📐 Spacing

```css
var(--space-xsmall)  /*  4px - tight spacing */
var(--space-small)   /*  8px - compact */
var(--space-medium)  /* 12px - default */
var(--space-large)   /* 16px - comfortable */
var(--space-xlarge)  /* 24px - spacious */
var(--space-xxlarge) /* 32px - very spacious */
```

### Usage Examples
```css
padding: var(--space-medium);                    /* All sides */
margin-bottom: var(--space-large);               /* One side */
gap: var(--space-small);                         /* Flexbox/Grid gap */
padding: var(--space-medium) var(--space-large); /* Block/Inline */
```

## 📏 Sizes

### Item Sizes (Icons, Avatars, Buttons)
```css
var(--size-item-small)  /* 16px - small icons */
var(--size-item-medium) /* 24px - medium icons */
var(--size-item-large)  /* 32px - buttons, large icons */
var(--size-item-xlarge) /* 48px - avatars */
```

## 🔲 Borders

### Border Width
```css
var(--border-width)       /* 1px - standard */
var(--border-width-thick) /* 2px - emphasis */
```

### Border Radius
```css
var(--border-radius-small)  /*    4px - tight corners */
var(--border-radius-medium) /*    8px - standard UI */
var(--border-radius-large)  /*   12px - cards, modals */
var(--border-radius-circle) /* 9999px - pills, toggles */
```

### Border Shorthand
```css
border: var(--border-width) solid var(--color-border-default);
```

## 👆 Focus Outline

```css
outline: var(--focus-outline);              /* 2px solid accent */
outline-offset: var(--focus-outline-offset); /* 2px */

/* Or individual parts: */
outline-width: var(--focus-outline-width);  /* 2px */
outline-color: var(--focus-outline-color);  /* accent color */
```

## 💧 Shadows

```css
var(--shadow-small)  /* Subtle - cards */
var(--shadow-medium) /* Medium - dropdowns */
var(--shadow-large)  /* Strong - modals */
```

## 🔘 Component Tokens

### Buttons
```css
var(--button-background)
var(--button-background-hover)
var(--button-background-active)
var(--button-text-color)
var(--button-padding-block)
var(--button-padding-inline)
var(--button-border-radius)
var(--button-font-weight)

/* Secondary variant */
var(--button-secondary-background)
var(--button-secondary-background-hover)
var(--button-secondary-text-color)
```

### Toggle Switches
```css
var(--toggle-width)                      /* 32px */
var(--toggle-height)                     /* 16px */
var(--toggle-border-radius)              /* circular */
var(--toggle-background-color)           /* off state */
var(--toggle-background-color-hover)     /* off hover */
var(--toggle-background-color-pressed)   /* on state */
var(--toggle-background-color-pressed-hover) /* on hover */
var(--toggle-knob-size)                  /* 12px */
var(--toggle-knob-offset)                /* 2px */
var(--toggle-knob-translate)             /* 16px - slide distance */
```

### Input Fields
```css
var(--input-background)
var(--input-border-color)
var(--input-border-radius)
var(--input-padding-block)
var(--input-padding-inline)
var(--input-text-color)
```

### Cards
```css
var(--card-background)
var(--card-border-radius)
var(--card-padding)
var(--card-shadow)
```

## 📝 Common Patterns

### Primary Button
```css
.my-button {
    background: var(--button-background);
    color: var(--button-text-color);
    padding: var(--button-padding-block) var(--button-padding-inline);
    border-radius: var(--button-border-radius);
    font-weight: var(--button-font-weight);
    border: none;
}

.my-button:hover {
    background: var(--button-background-hover);
}

.my-button:focus {
    outline: var(--focus-outline);
    outline-offset: var(--focus-outline-offset);
}
```

### Input Field
```css
.my-input {
    background: var(--input-background);
    color: var(--input-text-color);
    border: var(--border-width-thick) solid var(--input-border-color);
    border-radius: var(--input-border-radius);
    padding: var(--input-padding-block) var(--input-padding-inline);
    font-family: var(--font-family-default);
}

.my-input:focus {
    outline: var(--focus-outline);
    outline-offset: var(--focus-outline-offset);
    border-color: var(--color-accent-primary);
}
```

### Card Component
```css
.my-card {
    background: var(--card-background);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    box-shadow: var(--card-shadow);
}
```

### Status Message
```css
.success-message {
    background: var(--color-success-background);
    color: var(--color-success-text);
    border: var(--border-width-thick) solid var(--color-success-text);
    border-radius: var(--border-radius-medium);
    padding: var(--space-medium);
}
```

## ⚠️ Best Practices

### ✅ DO
- Use semantic tokens (`--color-text-primary`) over base tokens (`--color-gray-90`)
- Use spacing scale tokens instead of arbitrary values
- Always include focus states on interactive elements
- Use component tokens for common UI elements

### ❌ DON'T
- Don't use hardcoded colors or sizes
- Don't skip the token hierarchy (base → application → component)
- Don't forget focus outlines
- Don't create custom values that duplicate existing tokens

## 🔍 Finding the Right Token

1. **For colors**: Is it text, background, border, or accent? → Use semantic tokens
2. **For spacing**: How much space do you need? → Use spacing scale
3. **For typography**: Is it body, heading, or emphasis? → Use typography tokens
4. **For components**: Does a component token exist? → Use it first

## 🚀 Quick Examples

### Before (Hardcoded)
```css
.element {
    color: #34495e;
    background: #fff;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 15px;
    border: 1px solid #e9ecef;
}
```

### After (Acorn Tokens)
```css
.element {
    color: var(--color-text-primary);
    background: var(--color-background-primary);
    padding: var(--space-medium) var(--space-large);
    border-radius: var(--border-radius-medium);
    font-size: var(--font-size-default);
    border: var(--border-width) solid var(--color-border-default);
}
```

## 📚 More Information

- Full documentation: `ACORN-DESIGN-SYSTEM.md`
- Visual comparison: `VISUAL-CHANGES.md`
- Summary: `ACORN-ADAPTATION-SUMMARY.md`
- Acorn website: https://acorn.firefox.com

---

**Pro tip**: Use your IDE's autocomplete to discover available tokens. Type `var(--` and browse!
