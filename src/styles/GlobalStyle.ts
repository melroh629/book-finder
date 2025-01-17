import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /*
  Document
  ========
  */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  /**
  Use a more readable tab size (opinionated).
  */

  :root {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  /**
  1. Correct the line height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  */

  html, body {
    line-height: 1.2; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    height: initial;
  }

  /*
  Sections
  ========
  */

  /**
Remove the margin in all browsers.
*/

  body {
    margin: 0;
  }

  /**
  Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
  */

  body {
    font-family: "Noto Sans KR", sans-serif,"Pretendard Variable", Pretendard, "Apple SD Gothic Neo", -apple-system, BlinkMacSystemFont, 맑은 고딕, Malgun Gothic,
      Apple SD 산돌고딕 Neo, Apple SD Gothic Neo, Segoe UI, Roboto, Helvetica,
      Arial, sans-serif;
      background-color: #F9F9F9;
  }

  /*
  Grouping content
  ================
  */

  /**
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  */

  hr {
    height: 0; /* 1 */
    color: inherit; /* 2 */
  }

  /*
  Text-level semantics
  ====================
  */

  /**
  Add the correct text decoration in Chrome, Edge, and Safari.
  */

  abbr[title] {
    text-decoration: underline dotted;
  }

  /**
  Add the correct font weight in Edge and Safari.
  */

  b,
  strong {
    font-weight: bolder;
  }

  /**
  1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
  2. Correct the odd 'em' font sizing in all browsers.
  */

  code,
  kbd,
  samp,
  pre {
    font-size: 1em; /* 2 */
    font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono',
      Menlo, monospace; /* 1 */
  }

  /**
  Add the correct font size in all browsers.
  */

  small {
    font-size: 80%;
  }

  /**
  Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
  */

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /*
  Tabular data
  ============
  */

  /**
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  */

  table {
    text-indent: 0; /* 1 */
    border-color: inherit; /* 2 */
  }

  /*
  Forms
  =====
  */

  /**
  1. Change the font styles in all browsers.
  2. Remove the margin in Firefox and Safari.
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0; /* 2 */
    font-size: 100%; /* 1 */
    font-family: inherit; /* 1 */
    line-height: 1.2; /* 1 */
  }

  /**
  Remove the inheritance of text transform in Edge and Firefox.
  1. Remove the inheritance of text transform in Firefox.
  */

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
  Correct the inability to style clickable types in iOS and Safari.
  */

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  /**
  Remove the inner border and padding in Firefox.
  */

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  /**
  Restore the focus styles unset by the previous rule.
  */

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
  Remove the additional ':invalid' styles in Firefox.
  See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
  */

  :-moz-ui-invalid {
    box-shadow: none;
  }

  /**
  Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
  */

  legend {
    padding: 0;
  }

  /**
  Add the correct vertical alignment in Chrome and Firefox.
  */

  progress {
    vertical-align: baseline;
  }

  /**
  Correct the cursor style of increment and decrement buttons in Safari.
  */

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /**
  1. Correct the odd appearance in Chrome and Safari.
  2. Correct the outline style in Safari.
  */

  [type='search'] {
    outline-offset: -2px; /* 2 */
    -webkit-appearance: textfield; /* 1 */
  }

  /**
  Remove the inner padding in Chrome and Safari on macOS.
  */

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
  1. Correct the inability to style clickable types in iOS and Safari.
  2. Change font properties to 'inherit' in Safari.
  */

  ::-webkit-file-upload-button {
    font: inherit; /* 2 */
    -webkit-appearance: button; /* 1 */
  }

  /*
  Interactive
  ===========
  */

  /*
  Add the correct display in Chrome and Safari.
  */

  summary {
    display: list-item;
  }

  /**
  * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
  * A thin layer on top of normalize.css that provides a starting point more
  * suitable for web applications.
  */

  /**
  * Removes the default spacing and border for appropriate elements.
  */

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  button {
    background-color: transparent;
    background-image: none;
  }

  /**
  * Work around a Firefox/IE bug where the transparent 'button' background
  * results in a loss of the default 'button' focus styles.
  */

  button:focus {
    outline: none !important;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /**
  * Tailwind custom reset styles
  */

  /**
  * Allow adding a border to an element by just adding a border-width.
  *
  * By default, the way the browser specifies that an element should have no
  * border is by setting it's border-style to 'none' in the user-agent
  * stylesheet.
  *
  * In order to easily add borders to elements by just setting the 'border-width'
  * property, we change the default border-style for all elements to 'solid', and
  * use border-width to hide them instead. This way our 'border' utilities only
  * need to set the 'border-width' property instead of the entire 'border'
  * shorthand, making our border utilities much more straightforward to compose.
  *
  * https://github.com/tailwindcss/tailwindcss/pull/116
  */

  *,
  ::before,
  ::after {
    border-width: 0;
    border-style: solid;
  }

  /**
  * Ensure horizontal rules are visible by default
  */

  hr {
    border-top-width: 1px;
  }

  textarea {
    resize: vertical;
  }

  button,
  [role='button'] {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }

  /**
  * Reset links to optimize for opt-in styling instead of
  * opt-out.
  */

  a {
    color: inherit;
    text-decoration: inherit;
  }

  /**
  * Reset form element properties that are easy to forget to
  * style explicitly so you don't inadvertently introduce
  * styles that deviate from your design system. These styles
  * supplement a partial reset that is already applied by
  * normalize.css.
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    color: inherit;
    line-height: inherit;
  }

  /**
  * Make replaced elements 'display: block' by default as that's
  * the behavior you want almost all of the time. Inspired by
  * CSS Remedy, with 'svg' added as well.
  *
  * https://github.com/mozdevs/cssremedy/issues/14
  */

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  /**
  * Constrain images and videos to the parent width and preserve
  * their instrinsic aspect ratio.
  *
  * https://github.com/mozdevs/cssremedy/issues/14
  */

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  /**
   * Custom style
   */

  html:lang(ko) {
    word-break: keep-all;
  }

  .js-focus-visible &:focus:not(.focus-visible) {
    outline: none;
  }

  input[type='text'],
  input[type='search'],
  input[type='url'],
  input[type='tel'],
  input[type='email'],
  input[type='password'],
  input[type='number'],
  input[type='date'],
  input[type='month'],
  input[type='week'],
  input[type='time'],
  input[type='datetime'],
  input[type='datetime-local'],
  textarea {
    outline: none;
  }
  *:focus {
    outline: none;
  }

  button,
  input,
  optgroup,
  textarea,
  select {
    background-color: transparent;
    border: 0px;
  }
}
`;
