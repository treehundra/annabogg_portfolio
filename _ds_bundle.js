/* @ds-bundle: {"format":3,"namespace":"BogomolovaDesignSystem_6cd50c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"BulldogClip","sourcePath":"components/decor/BulldogClip.jsx"},{"name":"MarkerStroke","sourcePath":"components/decor/MarkerStroke.jsx"},{"name":"Polaroid","sourcePath":"components/decor/Polaroid.jsx"},{"name":"ScrapCard","sourcePath":"components/decor/ScrapCard.jsx"},{"name":"SpiralBinding","sourcePath":"components/decor/SpiralBinding.jsx"},{"name":"StringBadge","sourcePath":"components/decor/StringBadge.jsx"},{"name":"TapeStrip","sourcePath":"components/decor/TapeStrip.jsx"},{"name":"TornPaper","sourcePath":"components/decor/TornPaper.jsx"},{"name":"SectionHeading","sourcePath":"components/typography/SectionHeading.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"318cca65f4e2","components/core/Button.jsx":"a307a20e1e0a","components/core/Tag.jsx":"35e2b8c06b17","components/decor/BulldogClip.jsx":"552d7fb88d5a","components/decor/MarkerStroke.jsx":"9c414a8dc6fc","components/decor/Polaroid.jsx":"4c8ae1a8bf6c","components/decor/ScrapCard.jsx":"9ddd0c209168","components/decor/SpiralBinding.jsx":"ce4caf678f19","components/decor/StringBadge.jsx":"199f51677681","components/decor/TapeStrip.jsx":"bf656ae77643","components/decor/TornPaper.jsx":"d7f97b2a115c","components/typography/SectionHeading.jsx":"d96d5d75c9f5","ui_kits/portfolio/deck-build.js":"f50758a6b451","ui_kits/portfolio/deck-stage.js":"e529c4de2f18"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BogomolovaDesignSystem_6cd50c = window.BogomolovaDesignSystem_6cd50c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small mono credit label, e.g. a publication name or a
 * "since 2019" stamp. Variants: outline (boxed), solid, plain.
 * Optional leading dot.
 */
function Badge({
  variant = 'outline',
  dot = false,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const variants = {
    outline: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1px solid var(--ink)'
    },
    solid: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      border: '1px solid var(--ink)'
    },
    plain: {
      background: 'transparent',
      color: 'var(--ink-500)',
      border: '1px solid transparent',
      padding: 0
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `bds-badge bds-badge--${variant} ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: variant === 'plain' ? 0 : '5px 9px',
      borderRadius: 'var(--radius-badge)',
      ...(variants[variant] || variants.outline),
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--marker-red)'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '4px 12px',
    fontSize: '0.72rem'
  },
  md: {
    padding: '7px 16px',
    fontSize: '0.82rem'
  }
};

/**
 * Tag — a chip for hard skills, disciplines, categories. Pill shape,
 * Oswald uppercase. Variants: outline, solid, ghost.
 */
function Tag({
  variant = 'outline',
  size = 'md',
  children,
  className = '',
  style = {},
  ...rest
}) {
  const sz = SIZES[size] || SIZES.md;
  const variants = {
    outline: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1.5px solid var(--ink)'
    },
    solid: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      border: '1.5px solid var(--ink)'
    },
    ghost: {
      background: 'var(--paper-grey)',
      color: 'var(--ink-700)',
      border: '1.5px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `bds-tag bds-tag--${variant} ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      lineHeight: 1,
      borderRadius: 'var(--radius-chip)',
      whiteSpace: 'nowrap',
      ...sz,
      ...(variants[variant] || variants.outline),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/decor/BulldogClip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BulldogClip — a folded-steel binder clip rendered in CSS, for
 * clamping the top edge of a card or photo. Two wire handles arc up
 * from a tapered metal mouth. Purely decorative.
 */
function BulldogClip({
  size = 52,
  tone = 'steel',
  rotate = 0,
  className = '',
  style = {},
  ...rest
}) {
  const bodyBg = tone === 'black' ? 'linear-gradient(180deg,#3a3a3a,#111 60%,#000)' : 'linear-gradient(180deg,#e9e9ec,#b9bcc2 45%,#7e828a)';
  const handle = tone === 'black' ? '#1c1c1c' : '#9a9ea6';
  const w = size;
  const h = size * 0.72;
  const handleW = size * 0.34;
  const handleH = size * 0.42;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `bds-clip bds-clip--${tone} ${className}`,
    style: {
      position: 'relative',
      display: 'inline-block',
      width: w,
      height: h + handleH * 0.55,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      filter: 'drop-shadow(var(--shadow-clip))',
      ...style
    }
  }, rest), [-1, 1].map(dir => /*#__PURE__*/React.createElement("span", {
    key: dir,
    style: {
      position: 'absolute',
      top: 0,
      left: '50%',
      width: handleW,
      height: handleH,
      transform: `translateX(${dir === -1 ? '-92%' : '-8%'}) rotate(${dir * 6}deg)`,
      border: `2px solid ${handle}`,
      borderBottom: 'none',
      borderRadius: '60% 60% 0 0',
      background: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: w,
      height: h,
      background: bodyBg,
      clipPath: 'polygon(0 0, 100% 0, 88% 100%, 12% 100%)',
      boxShadow: 'inset 0 -3px 4px rgba(0,0,0,0.25), inset 0 2px 2px rgba(255,255,255,0.3)'
    }
  }));
}
Object.assign(__ds_scope, { BulldogClip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/BulldogClip.jsx", error: String((e && e.message) || e) }); }

// components/decor/MarkerStroke.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MarkerStroke — the brand's ONLY use of red: a hand-drawn marker
 * mark. Underline a word, circle a name, strike a price, highlight.
 * Renders as a stretchable SVG; place it under/over text yourself.
 */
const PATHS = {
  underline: {
    vb: '0 0 320 22',
    h: 16,
    d: 'M4,13 C46,5 92,17 150,10 C212,3 268,16 316,9',
    fill: false
  },
  underline2: {
    vb: '0 0 320 26',
    h: 20,
    d: 'M3,9 C60,3 120,14 180,8 C240,2 290,13 317,7 M10,17 C70,12 150,20 240,14 C280,11 305,16 314,15',
    fill: false
  },
  strike: {
    vb: '0 0 320 18',
    h: 14,
    d: 'M2,10 C60,7 120,12 180,8 C240,5 290,11 318,8',
    fill: false
  },
  slash: {
    vb: '0 0 120 120',
    h: 'full',
    d: 'M14,104 C40,70 70,46 106,16',
    fill: false
  },
  circle: {
    vb: '0 0 320 130',
    h: 'full',
    d: 'M150,8 C70,6 18,30 14,64 C10,100 80,122 168,122 C252,122 312,98 306,60 C302,28 244,10 150,10 C120,10 96,12 80,16',
    fill: false
  },
  highlight: {
    vb: '0 0 320 60',
    h: 'full',
    d: 'M6,30 C90,18 230,18 314,28 C318,40 312,50 300,52 C210,60 96,58 14,50 C4,46 2,38 6,30 Z',
    fill: true
  },
  check: {
    vb: '0 0 80 80',
    h: 'full',
    d: 'M10,42 C18,52 26,62 34,66 C42,52 56,28 72,12',
    fill: false
  }
};
function MarkerStroke({
  variant = 'underline',
  color = 'var(--marker-red)',
  thickness = 5,
  opacity = 1,
  width = '100%',
  height,
  className = '',
  style = {},
  ...rest
}) {
  const spec = PATHS[variant] || PATHS.underline;
  const isOverlay = variant === 'circle' || variant === 'slash' || variant === 'check';
  const resolvedHeight = height != null ? height : spec.h === 'full' ? '100%' : `${spec.h}px`;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: `bds-marker bds-marker--${variant} ${className}`,
    viewBox: spec.vb,
    preserveAspectRatio: spec.h === 'full' ? 'xMidYMid meet' : 'none',
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof resolvedHeight === 'number' ? `${resolvedHeight}px` : resolvedHeight,
      overflow: 'visible',
      opacity,
      pointerEvents: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: spec.d,
    fill: spec.fill ? color : 'none',
    stroke: spec.fill ? 'none' : color,
    strokeWidth: thickness,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: spec.fill ? {
      mixBlendMode: 'multiply',
      opacity: 0.55
    } : undefined
  }));
}
Object.assign(__ds_scope, { MarkerStroke });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/MarkerStroke.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: '0.78rem'
  },
  md: {
    padding: '12px 24px',
    fontSize: '0.92rem'
  },
  lg: {
    padding: '16px 34px',
    fontSize: '1.08rem'
  }
};

/**
 * Button — editorial action. Uppercase Oswald, sharp corners.
 * Variants: solid (black), outline, marker (text + red marker
 * underline), ghost.
 */
function Button({
  variant = 'solid',
  size = 'md',
  type = 'button',
  disabled = false,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sz = SIZES[size] || SIZES.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    position: 'relative',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-medium)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    lineHeight: 1,
    border: '2px solid transparent',
    borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...sz
  };
  const variants = {
    solid: {
      background: hover && !disabled ? 'var(--ink-700)' : 'var(--ink)',
      color: 'var(--paper)',
      borderColor: 'var(--ink)'
    },
    outline: {
      background: hover && !disabled ? 'var(--ink)' : 'transparent',
      color: hover && !disabled ? 'var(--paper)' : 'var(--ink)',
      borderColor: 'var(--ink)'
    },
    marker: {
      background: 'transparent',
      color: 'var(--ink)',
      borderColor: 'transparent',
      paddingLeft: 6,
      paddingRight: 6
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink)',
      borderColor: 'transparent',
      textDecoration: hover && !disabled ? 'underline' : 'none',
      textUnderlineOffset: 4
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    className: `bds-btn bds-btn--${variant} ${className}`,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...(variants[variant] || variants.solid),
      transform: hover && !disabled ? 'translateY(-1px)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children), variant === 'marker' && /*#__PURE__*/React.createElement(__ds_scope.MarkerStroke, {
    variant: "underline",
    thickness: 6,
    opacity: hover && !disabled ? 1 : 0.85,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 2
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/decor/Polaroid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Polaroid — an instant-photo frame: white border, deep bottom lip
 * for a handwritten caption, soft drop shadow. Photos are full-colour
 * by default (set `bw` for the black-&-white cover treatment). Pass
 * `src` or leave empty for a labelled placeholder. Slightly rotate it
 * for the scrapbook look.
 */
function Polaroid({
  src,
  alt = '',
  caption,
  ratio = '1 / 1',
  width = 240,
  rotate = -2,
  bw = false,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: `bds-polaroid ${className}`,
    style: {
      margin: 0,
      width: typeof width === 'number' ? `${width}px` : width,
      background: 'var(--paper)',
      padding: '12px 12px 0',
      boxShadow: 'var(--shadow-photo)',
      transform: `rotate(${rotate}deg)`,
      borderRadius: 'var(--radius-photo)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      background: 'var(--photo-bg)',
      overflow: 'hidden'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: bw ? 'var(--filter-bw)' : 'none'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "label-micro",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-300)',
      letterSpacing: 'var(--ls-label)'
    }
  }, "\u0424\u041E\u0422\u041E")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-marker)',
      fontSize: '1.4rem',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--ink-700)',
      textAlign: 'center',
      lineHeight: 1.1,
      padding: caption ? '8px 4px 12px' : '0',
      minHeight: caption ? 40 : 12
    }
  }, caption));
}
Object.assign(__ds_scope, { Polaroid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/Polaroid.jsx", error: String((e && e.message) || e) }); }

// components/decor/ScrapCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE_BG = {
  paper: 'var(--paper)',
  cream: 'var(--paper-cream)',
  aged: 'var(--paper-aged)'
};

/**
 * ScrapCard — the base paper object of the scrapbook: a sheet with a
 * soft drop shadow and an optional slight rotation. Set `interactive`
 * for a lift-on-hover. Compose tape / clips / polaroids on top.
 */
function ScrapCard({
  tone = 'paper',
  rotate = 0,
  interactive = false,
  framed = false,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `bds-scrapcard bds-scrapcard--${tone} ${className}`,
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      position: 'relative',
      background: TONE_BG[tone] || TONE_BG.paper,
      border: framed ? 'var(--stroke-bold) solid var(--ink)' : '1px solid var(--ink-100)',
      boxShadow: hover ? 'var(--shadow-lift)' : 'var(--shadow-paper)',
      padding: 'var(--space-6)',
      transform: `rotate(${rotate}deg)${hover ? ' translateY(-3px)' : ''}`,
      transition: `transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)`,
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ScrapCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/ScrapCard.jsx", error: String((e && e.message) || e) }); }

// components/decor/SpiralBinding.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SpiralBinding — a notebook page bound by a metal coil along one
 * edge (top or left). Punched holes sit on the page; coil loops
 * straddle the edge. Wrap any page content.
 */
function SpiralBinding({
  edge = 'top',
  rings = 12,
  tone = 'cream',
  children,
  className = '',
  style = {},
  ...rest
}) {
  const horizontal = edge === 'top' || edge === 'bottom';
  const bg = tone === 'paper' ? 'var(--paper)' : tone === 'aged' ? 'var(--paper-aged)' : 'var(--paper-cream)';
  const loops = Array.from({
    length: rings
  });
  const loopEl = i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'relative',
      width: horizontal ? 13 : 30,
      height: horizontal ? 30 : 13,
      border: '3px solid',
      borderImage: 'linear-gradient(180deg,#e6e7ea,#9a9ea6,#6f747c) 1',
      borderRadius: '50%',
      transform: `rotate(${horizontal ? -16 : 74}deg)`,
      background: 'transparent',
      boxShadow: '0 1px 1px rgba(0,0,0,0.25)'
    }
  });
  const padKey = {
    top: 'paddingTop',
    bottom: 'paddingBottom',
    left: 'paddingLeft',
    right: 'paddingRight'
  }[edge];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `bds-spiral bds-spiral--${edge} ${className}`,
    style: {
      position: 'relative',
      background: bg,
      boxShadow: 'var(--shadow-paper)',
      borderRadius: 'var(--radius-photo)',
      padding: 'var(--space-6)',
      [padKey]: 'var(--space-8)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      [edge]: horizontal ? -13 : -6,
      ...(horizontal ? {
        left: '6%',
        right: '6%',
        display: 'flex',
        justifyContent: 'space-between'
      } : {
        top: '6%',
        bottom: '6%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }),
      zIndex: 'var(--z-clip)'
    }
  }, loops.map((_, i) => loopEl(i))), children);
}
Object.assign(__ds_scope, { SpiralBinding });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/SpiralBinding.jsx", error: String((e && e.message) || e) }); }

// components/decor/StringBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TAG_BG = {
  paper: 'var(--paper)',
  cream: 'var(--paper-cream)',
  aged: 'var(--paper-aged)',
  ink: 'var(--ink)'
};

/**
 * StringBadge — a hang-tag / lanyard badge: a cord drops to a punched
 * card that swings from a metal grommet. Use for credits, name tags,
 * "on set" passes, price-tag style labels.
 */
function StringBadge({
  cordLength = 46,
  cordColor = 'var(--ink-700)',
  tone = 'paper',
  rotate = 4,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const dark = tone === 'ink';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `bds-stringbadge ${className}`,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 2,
      height: cordLength,
      background: cordColor,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      marginTop: -4,
      transform: `rotate(${rotate}deg)`,
      transformOrigin: 'top center',
      background: TAG_BG[tone] || TAG_BG.paper,
      color: dark ? 'var(--paper)' : 'var(--ink)',
      boxShadow: 'var(--shadow-photo)',
      padding: '20px 22px 16px',
      border: dark ? 'none' : '1px solid var(--ink-100)',
      borderRadius: 'var(--radius-badge)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 8,
      left: '50%',
      width: 13,
      height: 13,
      transform: 'translateX(-50%)',
      borderRadius: '50%',
      background: dark ? 'var(--ink-700)' : 'var(--paper)',
      boxShadow: 'inset 0 0 0 2px #9a9ea6, 0 1px 1px rgba(0,0,0,0.2)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 10
    }
  }, children)));
}
Object.assign(__ds_scope, { StringBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/StringBadge.jsx", error: String((e && e.message) || e) }); }

// components/decor/TapeStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TAPE_BG = {
  warm: 'var(--tape-warm)',
  cool: 'var(--tape-cool)',
  paper: 'rgba(250,248,242,0.78)'
};

/**
 * TapeStrip — a strip of translucent masking tape with torn short
 * ends and a faint sheen. Decorative: lay it across the corner of a
 * photo or note to "stick it down". Can hold a short label.
 */
function TapeStrip({
  variant = 'warm',
  width = 92,
  rotate = -4,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const bg = TAPE_BG[variant] || TAPE_BG.warm;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `bds-tape bds-tape--${variant} ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: typeof width === 'number' ? `${width}px` : width,
      minHeight: 26,
      padding: '6px 12px',
      background: bg,
      backgroundImage: 'var(--tape-sheen)',
      boxShadow: 'var(--shadow-tape)',
      transform: `rotate(${rotate}deg)`,
      clipPath: 'polygon(0% 0%,100% 0%,98% 22%,100% 46%,98% 72%,100% 100%,0% 100%,2% 74%,0% 48%,2% 24%)',
      fontFamily: 'var(--font-hand)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: '1.05rem',
      color: 'var(--ink-700)',
      lineHeight: 1,
      userSelect: 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TapeStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/TapeStrip.jsx", error: String((e && e.message) || e) }); }

// components/decor/TornPaper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE_BG = {
  paper: 'var(--paper)',
  cream: 'var(--paper-cream)',
  aged: 'var(--paper-aged)'
};
const JIT = [0.2, 0.8, 0.35, 0.95, 0.15, 0.7, 0.4, 0.9, 0.25, 0.85, 0.3, 0.6, 0.45];
function buildClip(edges, amp) {
  const segs = 14;
  const topTorn = edges === 'top' || edges === 'both';
  const botTorn = edges === 'bottom' || edges === 'both';
  const pts = [];
  for (let i = 0; i <= segs; i++) {
    const x = (i / segs * 100).toFixed(2) + '%';
    const y = topTorn ? `${(JIT[i % JIT.length] * amp).toFixed(1)}px` : '0px';
    pts.push(`${x} ${y}`);
  }
  for (let i = segs; i >= 0; i--) {
    const x = (i / segs * 100).toFixed(2) + '%';
    const y = botTorn ? `calc(100% - ${(JIT[(i + 3) % JIT.length] * amp).toFixed(1)}px)` : '100%';
    pts.push(`${x} ${y}`);
  }
  return `polygon(${pts.join(',')})`;
}

/**
 * TornPaper — a paper card with a ripped deckle edge, as if torn from
 * a magazine. Tear height stays constant regardless of card size.
 * Use for clippings, quotes, mastheads.
 */
function TornPaper({
  edges = 'both',
  tone = 'cream',
  amplitude = 7,
  rotate = 0,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const topTorn = edges === 'top' || edges === 'both';
  const botTorn = edges === 'bottom' || edges === 'both';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `bds-torn bds-torn--${tone} ${className}`,
    style: {
      position: 'relative',
      background: TONE_BG[tone] || TONE_BG.cream,
      clipPath: buildClip(edges, amplitude),
      WebkitClipPath: buildClip(edges, amplitude),
      filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.14))',
      paddingTop: topTorn ? `calc(var(--space-5) + ${amplitude}px)` : 'var(--space-5)',
      paddingBottom: botTorn ? `calc(var(--space-5) + ${amplitude}px)` : 'var(--space-5)',
      paddingLeft: 'var(--space-6)',
      paddingRight: 'var(--space-6)',
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TornPaper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/TornPaper.jsx", error: String((e && e.message) || e) }); }

// components/typography/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeading — the signature pairing: a giant uppercase Oswald
 * word (PORTFOLIO / EXPERIENCE) with an elegant Playfair italic
 * subhead beneath it. Optional index number and red marker underline.
 */
function SectionHeading({
  title,
  subtitle,
  index,
  marker = false,
  align = 'left',
  level = 2,
  className = '',
  style = {},
  ...rest
}) {
  const Tag = `h${Math.min(Math.max(level, 1), 6)}`;
  const alignItems = align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start';
  return /*#__PURE__*/React.createElement("header", _extends({
    className: `bds-section-heading ${className}`,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems,
      textAlign: align,
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    className: "label-micro",
    style: {
      color: 'var(--ink-300)'
    }
  }, index), /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontSize: 'var(--text-display)',
      letterSpacing: 'var(--ls-display)',
      position: 'relative',
      display: 'inline-block'
    }
  }, title, marker && /*#__PURE__*/React.createElement(__ds_scope.MarkerStroke, {
    variant: "underline2",
    thickness: 5,
    style: {
      position: 'absolute',
      left: '-2%',
      right: '-2%',
      bottom: '-0.32em',
      width: '104%'
    }
  })), subtitle && /*#__PURE__*/React.createElement("span", {
    className: "serif-italic",
    style: {
      fontSize: 'var(--text-subhead)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--lh-snug)'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/deck-build.js
try { (() => {
/* Faithful recreation of Богомолова Анна — PORTFOLIO (17 pages).
   Builds every slide as a <section> inside <deck-stage>, in order. */
(function () {
  const P = '../../photos/';
  const stage = document.getElementById('deck');

  // ---- helpers ----
  const section = (html, cls) => {
    const s = document.createElement('section');
    if (cls) s.className = cls;
    s.innerHTML = html;
    return s;
  };
  const range = (pre, n, start = 1) => Array.from({
    length: n
  }, (_, i) => `${pre}-${String(i + start).padStart(2, '0')}.jpg`);

  // marker scribbles (the ONLY red) — hand-drawn squiggles
  const redScribble = (w = 230) => `
    <svg class="scribble" width="${w}" viewBox="0 0 230 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30,95 C25,55 70,28 115,38 C170,50 205,82 192,116 C180,148 120,160 74,146 C40,135 26,116 34,92 C44,62 92,52 138,64 C170,72 192,94 182,114"
        stroke="var(--marker-red)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M150,30 C175,40 196,58 200,84" stroke="var(--marker-red)" stroke-width="7" stroke-linecap="round"/>
    </svg>`;
  const blackScribble = (w = 200) => `
    <svg class="scribble" width="${w}" viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14,120 C70,118 150,120 210,118 M22,132 C90,128 160,134 206,130 M30,108 C80,104 140,112 196,106"
        stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/>
      <path d="M120,30 C150,20 185,34 178,60 C172,82 132,86 124,64 C118,46 150,40 168,52"
        stroke="var(--ink)" stroke-width="5" stroke-linecap="round" fill="none"/>
    </svg>`;
  const spiralRings = n => `<div class="rings">${'<div class="ring"></div>'.repeat(n)}</div>`;

  // generic gallery: rows = array of counts; imgs = filenames
  function galleryHTML(imgs, rows) {
    let i = 0,
      out = '';
    for (const n of rows) {
      const cells = imgs.slice(i, i + n).map(f => `<img src="${P}${f}" alt="" loading="eager">`).join('');
      out += `<div class="grow" style="--n:${n}">${cells}</div>`;
      i += n;
    }
    return `<div class="gallery">${out}</div>`;
  }

  // standard gallery slide
  function gallerySlide({
    title,
    imgs,
    rows,
    capL,
    capR
  }) {
    return section(`
      <h2 class="sec-title ${title.big || 't-xl'}">${title.text}</h2>
      ${galleryHTML(imgs, rows)}
      <div class="cap-row">
        <div class="left">${capL || ''}</div>
        <div class="right">${capR || ''}</div>
      </div>`, 'slide layout-gallery');
  }
  const slides = [];

  /* ===== 1. COVER ===== */
  slides.push(section(`
    <h1 class="sec-title t-xxl abs" style="left:0;right:0;top:48px;text-align:center;">PORTFOLIO</h1>
    <div class="abs" style="left:1330px;top:34px;">${redScribble(250)}</div>
    <div class="abs" style="left:1430px;top:150px;">${blackScribble(150)}</div>
    <div class="abs" style="left:0;right:0;top:300px;text-align:center;font-family:var(--font-marker);font-weight:700;font-size:128px;line-height:0.9;color:var(--ink);">БОГОМОЛОВА АННА</div>

    <!-- left polaroid -->
    <div class="abs polaroid rot-n2" style="left:84px;top:486px;width:360px;">
      <img class="" style="aspect-ratio:3/4;filter:var(--filter-bw);" src="${P}cover-model.jpg" alt="Анна Богомолова">
      <div class="pcap" style="min-height:18px;"></div>
    </div>
    <span class="tape" style="left:90px;top:470px;width:120px;height:34px;transform:rotate(-42deg);"></span>
    <span class="tape" style="left:360px;top:470px;width:120px;height:34px;transform:rotate(44deg);"></span>
    <span class="tape" style="left:70px;top:830px;width:120px;height:34px;transform:rotate(38deg);"></span>
    <span class="tape" style="left:360px;top:840px;width:120px;height:34px;transform:rotate(-40deg);"></span>
    <div class="abs" style="left:70px;top:910px;">${redScribble(150)}</div>
    <div class="abs" style="left:120px;top:980px;">${blackScribble(180)}</div>

    <!-- center contacts -->
    <div class="abs" style="left:760px;top:560px;width:660px;text-align:center;">
      <div class="kicker" style="font-size:30px;line-height:1.45;">Стилист, креативный продюсер,<br>ассистент креативного директора</div>
      <div class="contacts" style="margin-top:34px;">
        <div class="h">Контакты:</div>
        <div>Телефон: +7 916 838-06-76</div>
        <div>Email: <u>BogomolovaAnna.sty@yandex.ru</u></div>
        <div>Instagram / Telegram : @anyabogg</div>
        <div>Город: Москва</div>
        <div>Дата рождения: 26.11.2004</div>
      </div>
    </div>

    <!-- right framed photo -->
    <div class="abs framed rot-2" style="right:96px;top:600px;width:330px;">
      <img style="aspect-ratio:4/5;filter:var(--filter-bw);object-fit:cover;" src="${P}p01-01.jpg" alt="">
    </div>
    <span class="tape paper" style="right:200px;top:586px;width:140px;height:40px;transform:rotate(-3deg);"></span>
  `, 'slide'));

  /* ===== 2. EXPERIENCE / WORK CASES ===== */
  slides.push(section(`
    <h2 class="sec-title t-lg abs" style="left:200px;top:48px;">EXPERIENCE</h2>
    <!-- spiral notebook timeline -->
    <div class="abs spiral" style="left:150px;top:132px;width:760px;height:910px;padding:34px 56px 34px 96px;">
      ${spiralRings(13)}
      <div class="tabs">
        ${['A & P', 'Assessment', 'Calculations', 'Coding', 'Equipment', 'Injections'].map(t => `<div class="tab">${t}</div>`).join('')}
      </div>
      <div style="text-align:center;">
        <div class="script" style="font-size:44px;">2024 - now</div>
        <div class="serif" style="font-size:19px;line-height:1.35;margin:4px 0 14px;">Национальный исследовательский университет <b>«Высшая школа экономики»</b><br>Факультет креативных индустрий, программа «Мода»<br>Специализация: брендинг в индустрии моды</div>
        <div class="script" style="font-size:44px;">2022 – 2024</div>
        <div class="serif" style="font-size:19px;line-height:1.35;margin:4px 0 14px;"><b>Британская высшая школа дизайна</b><br>Факультет креативных индустрий, программа «Мода»<br>Специализация: дизайн одежды</div>
        <div class="script" style="font-size:44px;">2021 – 2022</div>
        <div class="serif" style="font-size:19px;line-height:1.35;margin:4px 0 14px;"><b>Британская высшая школа дизайна</b><br>Foundation Art &amp; Design<br>Специализация: совр­менное искусство</div>
        <div class="script" style="font-size:44px;">2013 – 2021</div>
        <div class="serif" style="font-size:19px;line-height:1.35;margin:4px 0 0;"><b>Архитектурная школа СТАРТ при МАрхИ</b><br>Курсы: дизайн одежды, профессиональный архитектурный класс</div>
      </div>
    </div>

    <!-- right: editorial / lookbook / tv cards -->
    <div class="abs torn white" style="left:1030px;top:140px;width:680px;padding:40px 48px;">
      <span class="paperclip" style="left:80px;top:-30px;"></span>
      <div class="script" style="font-size:46px;margin-bottom:14px;">Editorial. Fashion magazines</div>
      <ul class="blist" style="font-size:23px;font-weight:600;">
        <li>«Мнение Редакции» с Анджелиной Смерфит</li>
        <li>«Сноб» с Иваном Янковским</li>
        <li>L'Officiel × Неделя Вьетнама в Москве</li>
        <li>Open Call Badlon Magazine</li>
      </ul>
    </div>

    <div class="abs polaroid rot-n2" style="left:980px;top:470px;width:300px;">
      <img style="aspect-ratio:3/4;object-fit:cover;" src="${P}p02-03.jpg" alt="Снобъ">
      <div class="pcap" style="min-height:14px;"></div>
    </div>

    <div class="abs torn aged" style="left:1310px;top:392px;width:400px;padding:30px 40px;">
      <span class="paperclip" style="right:54px;top:-30px;"></span>
      <div class="script" style="font-size:34px;">Lookbook Production</div>
      <ul class="blist" style="font-size:18px;font-weight:700;margin-top:4px;">
        <li>Ostin Kids</li><li>Kapsula</li><li>Parit</li><li>Botrois</li>
      </ul>
      <div class="script" style="font-size:34px;margin-top:10px;">TV shows Production</div>
      <ul class="blist serif" style="font-size:17px;font-weight:600;margin-top:4px;">
        <li>Финал реалити-шоу «Королева ринга»</li>
        <li>Рекламная кампания Озон Банка с Гошей Куценко</li>
        <li>Шоу «Страсти по Фишеру» со Славой КПСС, Яном Топлесом и Азаматом Мусагалиевым</li>
        <li>Музыкальный клип Ozerniki</li>
        <li>Музыкальный клип Ozerniki × Feduk</li>
      </ul>
    </div>

    <h2 class="sec-title t-md abs" style="right:60px;bottom:48px;">WORK CASES</h2>
  `, 'slide'));

  /* ===== 3. PUBLICATIONS (list + show prod) ===== */
  slides.push(section(`
    <div class="abs torn white" style="left:60px;top:120px;width:900px;padding:60px 70px;">
      <span class="clip" style="left:140px;top:-46px;"><span class="arm l"></span><span class="arm r"></span><span class="body"></span></span>
      <h2 class="sec-title t-lg" style="margin-bottom:24px;">PUBLICATIONS</h2>
      <ul class="blist serif" style="font-size:30px;font-weight:700;">
        <li>Сноб — журнал №111, осень 2025</li>
        <li>L'Officiel — журнал №278, лето 2025</li>
        <li>«Мнение Редакции» — журнал №5 осень 2025</li>
        <li>Badlon Magazine — журнал №44 осень 2025</li>
        <li>Sheer Magazine — журнал №1 осень–зима 2025</li>
        <li>Pretty Magazine — журнал №1 лето 2026</li>
      </ul>
    </div>

    <div class="abs polaroid rot-n2" style="left:80px;top:600px;width:300px;">
      <img style="aspect-ratio:3/4;object-fit:cover;" src="${P}p03-pol1.jpg" alt=""><div class="pcap" style="min-height:12px;"></div>
    </div>
    <div class="abs polaroid rot-3" style="left:400px;top:600px;width:300px;">
      <img style="aspect-ratio:3/4;object-fit:cover;" src="${P}p03-pol2.jpg" alt=""><div class="pcap" style="min-height:12px;"></div>
    </div>
    <div class="abs" style="left:760px;top:520px;width:300px;background:#0c0c0c;padding:14px;box-shadow:var(--shadow-photo);transform:rotate(-1deg);">
      <img style="width:100%;display:block;" src="${P}p03-film.jpg" alt="PHOBOS / Pretty">
    </div>

    <!-- brand logos (wordmarks) -->
    <div class="abs" style="right:80px;top:120px;width:640px;text-align:right;">
      <div style="display:flex;justify-content:flex-end;gap:30px;align-items:center;flex-wrap:wrap;">
        <span style="font-family:var(--font-body);font-weight:800;font-size:26px;letter-spacing:.02em;">TELLING STORIES <span style="color:#7CFC4D;">FEST</span></span>
        <span style="font-family:var(--font-serif);font-style:italic;font-weight:700;font-size:40px;">L'</span>
      </div>
      <div style="display:flex;justify-content:flex-end;gap:36px;align-items:center;margin-top:14px;">
        <span style="font-family:var(--font-body);font-weight:800;font-size:34px;color:#FF5A5F;letter-spacing:-.01em;">❀ FLOWWOW</span>
      </div>
      <div style="display:flex;justify-content:flex-end;margin-top:10px;">
        <span style="font-family:var(--font-body);font-weight:800;font-size:38px;color:#FF3366;">○ самокат</span>
      </div>
    </div>

    <!-- SHOW PROD lanyard -->
    <div class="abs lanyard" style="right:140px;top:430px;">
      <div class="cord"></div>
      <div class="tag" style="width:520px;text-align:left;padding:30px 40px 34px;">
        <div class="inner">
          <h3 class="sec-title t-md" style="font-size:60px;margin-bottom:18px;">SHOW PROD</h3>
          <ul class="blist serif" style="font-size:22px;font-weight:600;">
            <li>Британская Высшая школа дизайна × Flowow (2024)</li>
            <li>HSE Fashion Show × Самокат (2025)</li>
            <li>HSE Fashion Show Hard (2025)</li>
            <li>Универмаг «Цветной»</li>
            <li>HSE Telling Stories Fest (Digital Business Hub)</li>
          </ul>
        </div>
      </div>
    </div>
  `, 'slide'));

  /* ===== 4. HARD SKILLS / SOFT SKILLS ===== */
  slides.push(section(`
    <h2 class="sec-title t-lg abs" style="left:60px;top:44px;">HARD SKILLS</h2>
    <div class="abs spiral" style="left:120px;top:150px;width:760px;height:900px;padding:30px 56px 30px 96px;">
      ${spiralRings(13)}
      <div class="script" style="font-size:40px;text-align:center;">Fashion &amp; Creative</div>
      <ul class="blist serif" style="font-size:18px;margin-top:4px;">
        <li>Editorial Styling</li><li>Commercial Styling</li><li>Fashion Styling</li>
        <li>Creative Direction</li><li>Art Direction Support</li>
        <li>Разработка визуальных концепций</li>
        <li>Создание мудбордов и работа с референсами</li>
        <li>Продюсирование fashion-проектов и съёмок</li>
        <li>Организация editorial, campaign и lookbook production</li>
      </ul>
      <div class="script" style="font-size:40px;text-align:center;margin-top:10px;">Brand &amp; Production</div>
      <ul class="blist serif" style="font-size:18px;margin-top:4px;">
        <li>Коммуникация с брендами и партнёрами</li>
        <li>Организация barter-сотрудничества</li>
        <li>Координация съёмочных команд</li>
        <li>Работа с моделями, фотографами, визажистами и продюсерами</li>
        <li>Полный цикл подготовки fashion-съёмок</li>
        <li>Управление логистикой одежды и реквизита</li>
      </ul>
      <div class="script" style="font-size:40px;text-align:center;margin-top:10px;">Digital Tools</div>
      <ul class="blist serif" style="font-size:18px;margin-top:4px;column-count:2;">
        <li>Figma</li><li>Google Workspace</li><li>Microsoft Office</li>
        <li>WaveSpeedAI</li><li>Midjourney</li><li>Ideogram</li>
      </ul>
    </div>

    <div class="abs deckle" style="right:80px;top:90px;width:780px;padding:44px 56px;">
      <ul class="blist" style="font-size:26px;font-weight:500;">
        <li>Креативное мышление</li><li>Визуальная насмотренность</li><li>Лидерство</li>
        <li>Коммуникабельность</li><li>Эмоциональный интеллект</li><li>Гибкость мышления</li>
        <li>Организованность</li><li>Работа в режиме многозадачности</li>
        <li>Стрессоустойчивость</li><li>Умение быстро принимать решения</li>
      </ul>
      <h2 class="sec-title t-md" style="font-size:64px;margin-top:18px;">SOFT SKILLS</h2>
    </div>

    <div class="abs polaroid rot-n2" style="right:430px;top:710px;width:280px;">
      <img style="aspect-ratio:4/5;object-fit:cover;" src="${P}p04-studio.jpg" alt=""><div class="pcap" style="min-height:12px;"></div>
    </div>
    <span class="tape" style="right:640px;top:700px;width:110px;height:30px;transform:rotate(-44deg);"></span>
    <span class="tape" style="right:430px;top:700px;width:110px;height:30px;transform:rotate(46deg);"></span>

    <div class="abs lanyard" style="right:110px;top:700px;">
      <div class="cord" style="height:60px;"></div>
      <div class="tag" style="width:230px;">
        <div class="inner serif" style="font-size:21px;line-height:1.5;">
          <b>Английский язык</b> — C1, IELTS 7.0.<br><b>Немецкий</b> — B1 Goethe-Test
        </div>
      </div>
    </div>
  `, 'slide'));

  /* ===== 5. PUBLICATIONS gallery (captioned columns) ===== */
  {
    const items = [['p05-01.jpg', 'Ассистирование на для «Мнение Редакции» с Анджелиной Смерфит'], ['p05-02.jpg', 'Ассистирование для «Сноба» с Иваном Янковским:'], ['p05-03.jpg', 'Ассистирование L\'Officiel × Неделя Вьетнама в Москве'], ['p05-04.jpg', 'Продюсирование и стилизация для печатного журнала "SHEER"'], ['p05-05.jpg', 'Стилизация для печатного журнала "Pretty"']];
    slides.push(section(`
      <h2 class="sec-title t-lg" style="margin-bottom:30px;">PUBLICATIONS</h2>
      <div style="display:flex;gap:36px;align-items:flex-start;justify-content:center;height:760px;">
        ${items.map(([f, c]) => `
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:24px;height:100%;">
            <div style="flex:1;display:flex;align-items:center;min-height:0;"><img src="${P}${f}" style="max-width:100%;max-height:100%;object-fit:contain;background:var(--photo-bg);" alt=""></div>
            <p class="cap" style="text-align:center;font-size:24px;">${c}</p>
          </div>`).join('')}
      </div>
    `, 'slide'));
  }

  /* ===== 6–16. gallery slides ===== */
  gallerySlide; // (defined above)
  const G = [{
    title: {
      text: 'EDITORIAL<br>STYLING'
    },
    imgs: range('p06', 10),
    rows: [5, 5],
    capL: `<p class="cap cap-serif">Ассистирование L'Officiel × Неделя Вьетнама в Москве</p><p class="cap cap-serif">L'Officiel журнал №278, лето 2025</p>`
  }, {
    title: {
      text: 'EDITORIAL<br>STYLING'
    },
    imgs: range('p07', 11),
    rows: [6, 5],
    capL: `<p class="cap">Ассистирование на для «Мнение Редакции» с Анджелиной Смерфит</p><p class="cap">«Мнение Редакции» — журнал №5 осень 2025</p>`,
    capR: `<p class="link">Ссылка на видео съемку</p><p class="link">Ссылка на бэкстейдж</p>`
  }, {
    title: {
      text: 'EDITORIAL<br>STYLING'
    },
    imgs: range('p08', 8),
    rows: [4, 4],
    capL: `<p class="cap">Ассистирование для «Сноба» с Иваном Янковским</p><p class="cap">Сноб — журнал №111, осень 2025</p>`,
    capR: `<p class="link">Ссылка на бэкстейдж</p>`
  }, {
    title: {
      text: 'PROD &amp; STYLE'
    },
    imgs: range('p09', 17),
    rows: [6, 6, 5],
    capL: `<p class="cap cap-serif">Продюсирование и стилизация съемок<br>портфолио для моделей агентсва Ultra Models</p>`,
    capR: `<p class="cap">Координация всего съемочного процесса, поиска и<br>коммуникации с фотографами, визажистами и моделями</p>`
  }, {
    title: {
      text: 'STYLE'
    },
    imgs: range('p10', 9),
    rows: [6, 3],
    capL: `<p class="cap">Продюсирование и стилизация съемки лукбука<br>для дизайнеров Высшей Школы Дизайна</p>`
  }, {
    title: {
      text: 'PROD &amp; STYLE'
    },
    imgs: range('p11', 12),
    rows: [7, 5],
    capL: `<p class="cap">Продюсирование и стилизация съемки<br>коллекции выпускницы Британской Высшей<br>Школы Дизайна -  Авроры Луниной</p>`,
    capR: `<p class="cap">Команда из 12 человек, 3 модели, локация<br>предоставлена на основе сотрудничества с<br><span class="cap-serif">Marco Polo Hotel Moscow</span></p>`
  }, {
    title: {
      text: 'PROD &amp; STYLE'
    },
    imgs: range('p12', 7),
    rows: [7],
    capL: `<p class="cap">Продюсирование и стилизация съемки с<br>макро-инфлюенсером Лизой Анохиной<br><span class="cap-serif">(TikTok: 40.5M, Inst: 4.5M подписчиков)</span></p>`
  }, {
    title: {
      text: 'PROD &amp; STYLE'
    },
    imgs: range('p13', 13),
    rows: [7, 6],
    capL: `<p class="cap">Продюсирование и стилизация серии съемок<br>для собственного печатного издания журнала "SHEER"</p>`,
    capR: `<p class="cap">Дизайн, верстка и написание текстов для<br>печатного издания журнала "SHEER"</p><p class="link">Ссылка на диджитал версию журнала</p>`
  }, {
    title: {
      text: 'STYLE'
    },
    imgs: range('p14', 8),
    rows: [6, 2],
    capL: `<p class="cap cap-serif">Стилизация творческой съемки и видео<br>клипа для  Angels project</p>`,
    capR: `<p class="cap">Ссылка на видео <span class="link">клип</span></p>`
  }, {
    title: {
      text: 'STYLE'
    },
    imgs: range('p15', 11),
    rows: [6, 5],
    capL: `<p class="cap">Стилизация музыкального клипа для "Ozerniki"</p><p class="cap">Стилизация второго музыкального клипа для<br>"Ozerniki" совместно <span class="cap-serif">Feduk</span></p>`,
    capR: `<p class="cap">Ссылка на клип <span class="link cap-serif">Parfumeur, the pak, Тейстлув - FIRST L</span></p><p class="cap">Ссылка на клип <span class="link cap-serif">Parfumeur, FEDUK, the pak, Тейстлув —<br>FIRST L (REMIX)</span></p>`
  }].map(gallerySlide);
  G.forEach(s => slides.push(s));

  /* ===== 16. PROD & STYLE — shows (per-row captions) ===== */
  slides.push(section(`
    <h2 class="sec-title t-xl" style="margin:0 0 14px;">PROD &amp; STYLE</h2>
    <div class="gallery">
      <div class="grow" style="--n:6">${range('p16', 6).map(f => `<img src="${P}${f}" alt="">`).join('')}</div>
      <p class="cap cap-serif" style="margin:10px 0 6px;font-size:24px;">Продюсирование показа HSE Fashion Design x Самокат</p>
      <div class="grow" style="--n:4">${range('p16', 4, 7).map(f => `<img src="${P}${f}" alt="">`).join('')}</div>
      <p class="cap cap-serif" style="margin:10px 0 0;font-size:24px;">Продюсирование показа Британской Высшей Школы Дизайна x <span style="font-style:italic;">Flowow</span></p>
    </div>
  `, 'slide layout-gallery'));

  /* ===== 17. PROFESSIONAL GOAL + contacts ===== */
  slides.push(section(`
    <div class="abs torn white" style="left:560px;top:90px;width:820px;padding:60px 80px 70px;">
      <span class="clip" style="left:180px;top:-46px;"><span class="arm l"></span><span class="arm r"></span><span class="body"></span></span>
      <div class="script" style="font-size:78px;text-align:center;">Professional goal :</div>
      <p class="serif" style="font-size:27px;line-height:1.55;text-align:center;margin:24px 0 0;">
        Развиваться как Editorial Stylist и Art Director, создавая визуальные концепции для
        глянцевых медиа, рекламных кампаний и fashion-брендов. Стремлюсь работать на стыке
        стилизации, креативного продюсирования и художественного руководства, формируя
        сильные визуальные истории и узнаваемую эстетику проектов.
      </p>
    </div>

    <div class="abs" style="left:700px;top:728px;width:540px;text-align:center;">
      <div class="contacts">
        <div class="h" style="font-size:32px;">Контакты:</div>
        <div>Телефон: +7 916 838-06-76</div>
        <div>Email: <u>BogomolovaAnna.sty@yandex.ru</u></div>
        <div>Instagram / Telegram : @anyabogg</div>
        <div>Город: Москва</div>
        <div>Дата рождения: 26.11.2004</div>
      </div>
    </div>
    <div class="abs" style="left:430px;top:760px;">${redScribble(150)}</div>
    <div class="abs" style="left:470px;top:840px;">${blackScribble(150)}</div>
    <div class="abs" style="right:330px;top:820px;">${blackScribble(150)}</div>
    <div class="abs" style="right:300px;top:900px;">${redScribble(120)}</div>
  `, 'slide'));

  // append all
  slides.forEach(s => stage.appendChild(s));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/deck-build.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Duplicate / Delete (Delete opens a
 *      Cancel/Delete confirm dialog). Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    _emitDcOp(op, slide, lock, newIndex) {
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      if (this._emitDcOp({
        op: 'duplicate'
      }, slide, true, i + 1)) return;
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/deck-stage.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.BulldogClip = __ds_scope.BulldogClip;

__ds_ns.MarkerStroke = __ds_scope.MarkerStroke;

__ds_ns.Polaroid = __ds_scope.Polaroid;

__ds_ns.ScrapCard = __ds_scope.ScrapCard;

__ds_ns.SpiralBinding = __ds_scope.SpiralBinding;

__ds_ns.StringBadge = __ds_scope.StringBadge;

__ds_ns.TapeStrip = __ds_scope.TapeStrip;

__ds_ns.TornPaper = __ds_scope.TornPaper;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
