import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // You can add global styles to this file, and also import other style files
  'import': ''~@angular/material/prebuilt-themes/deeppurple-amber.css'',
  // colors
  'back-translate>input': {
    'background': 'transparent !important',
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  'dark-card': {
    'backgroundColor': 'rgba(44, 44, 44, 0.94)',
    'padding': [{ 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 2 }]
  },
  'color1': {
    'backgroundColor': '#913ab7 !important'
  },
  'color1-dark': {
    'backgroundColor': '#51158c !important'
  },
  'color1-darker': {
    'backgroundColor': '#551a8b !important'
  },
  'color2': {
    'backgroundColor': '#fefe2f !important'
  },
  'color2-dark': {
    'backgroundColor': '#cea208 !important'
  },
  // button
  'my-btn-lg': {
    // changed
    'height': [{ 'unit': 'rem', 'value': 2.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'my-btn-md': {
    // changed
    'height': [{ 'unit': 'rem', 'value': 2 }, { 'unit': 'string', 'value': '!important' }]
  },
  'my-btn-sm': {
    // changed
    'height': [{ 'unit': 'rem', 'value': 1.2 }, { 'unit': 'string', 'value': '!important' }],
    'padding': [{ 'unit': 'rem', 'value': 0.1 }, { 'unit': 'rem', 'value': 0.8 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'rem', 'value': 0.8 }],
    'borderRadius': '0.4rem !important',
    'fontSize': [{ 'unit': 'string', 'value': 'smaller' }]
  },
  'table-button': {
    'backgroundColor': '#913ab7',
    'opacity': '0.5',
    'height': [{ 'unit': 'rem', 'value': 2.3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'my-primary': {
    'backgroundColor': '#ffc107f5 !important',
    'color': 'rgba(0, 0, 0, .87) !important'
  },
  'my-button': {
    'justifyContent': 'center !important',
    'backgroundColor': 'transparent',
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#673ab7' }, { 'unit': 'string', 'value': '!important' }],
    'color': '#673ab7',
    'borderRadius': '0.7rem',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#8161b9' }]
  },
  'my-button:hover': {
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#ffc107' }, { 'unit': 'string', 'value': '!important' }],
    'color': '#ffc107 !important'
  },
  'link-botton': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'marginTop': [{ 'unit': 'px', 'value': -1 }],
    // Prevent double borders
    'backgroundColor': '#f6f6f6',
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'textDecoration': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': 'black',
    'display': 'block',
    'textAlign': 'center'
  },
  'link-botton:hover': {
    'backgroundColor': '#eee'
  },
  // forms
  'inputmat-input-element': {
    // changed
    'marginTop': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'mat-select': {
    // changed
    'marginTop': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'mat-form-field-label': {
    // changed
    'color': 'white',
    'marginRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.3 }, { 'unit': 'string', 'value': '!important' }],
    'marginTop': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }],
    'marginRight': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'form-item-select': {
    'maxWidth': [{ 'unit': '%H', 'value': 1.15 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'maxHeight': [{ 'unit': '%V', 'value': 2 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': '%V', 'value': 2 }, { 'unit': 'string', 'value': '!important' }],
    'fontSize': [{ 'unit': '%V', 'value': 1.6 }, { 'unit': 'string', 'value': '!important' }]
  },
  'form-item-date': {
    'maxWidth': [{ 'unit': '%H', 'value': 1.15 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'form-item-inputmask': {
    'maxWidth': [{ 'unit': '%H', 'value': 1.15 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'maxHeight': [{ 'unit': '%V', 'value': 2 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': '%V', 'value': 2 }, { 'unit': 'string', 'value': '!important' }],
    'fontSize': [{ 'unit': '%V', 'value': 1.6 }, { 'unit': 'string', 'value': '!important' }]
  },
  'form-item:not([focus])': {
    'backgroundColor': 'rgba(151, 146, 146, 0.945)',
    'paddingRight': [{ 'unit': 'rem', 'value': 1 }],
    'borderRadius': '0.3rem',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#ffc107' }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'double' }, { 'unit': 'string', 'value': '#e7e4dc' }],
    'maxWidth': [{ 'unit': '%H', 'value': 1.15 }],
    'maxHeight': [{ 'unit': '%V', 'value': 1.15 }]
  },
  'form-item:focus': {
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffc107' }, { 'unit': 'string', 'value': '!important' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#913ab7' }, { 'unit': 'string', 'value': '!important' }]
  },
  'form-item:hover': {
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffc107' }, { 'unit': 'string', 'value': '!important' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#913ab7' }, { 'unit': 'string', 'value': '!important' }]
  },
  // text
  'orange-text': {
    'color': '#ffc107'
  },
  'nice-text': {
    'color': '#ffc107f5',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#913ab7' }],
    'fontStyle': 'italic'
  },
  'black-text': {
    'color': 'black'
  },
  // border
  'orange-border': {
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': 'string', 'value': '#ffc107' }]
  },
  'border-top-bottom': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#673ab7' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffc107f5' }]
  },
  'border-top': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffc107f5' }]
  },
  // .custom-file-control {
    position: relative;
}
  'w-80': {
    'width': [{ 'unit': '%H', 'value': 0.8 }, { 'unit': 'string', 'value': '!important' }]
  },
  'w-90': {
    'width': [{ 'unit': '%H', 'value': 0.9 }, { 'unit': 'string', 'value': '!important' }]
  },
  'w-60': {
    'width': [{ 'unit': '%H', 'value': 0.6 }, { 'unit': 'string', 'value': '!important' }]
  },
  'w-35': {
    'width': [{ 'unit': '%H', 'value': 0.35 }, { 'unit': 'string', 'value': '!important' }]
  },
  'link-cosmo': {
    'cursor': 'pointer',
    'WebkitTapHighlightColor': 'transparent'
  },
  'text-center': {
    'textAlign': 'center'
  },
  'scrollable-x': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'overflowX': 'scroll !important',
    'display': 'grid !important'
  },
  'mr-8': {
    'marginRight': [{ 'unit': 'rem', 'value': 6 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mx-8': {
    'marginRight': [{ 'unit': 'rem', 'value': 6 }, { 'unit': 'string', 'value': '!important' }]
  },
  'scrollable': {
    'maxHeight': [{ 'unit': '%V', 'value': 0.9 }],
    'overflowY': 'scroll'
  },
  'fixed-top': {
    'zIndex': '1000 !important'
  },
  'main': {
    'paddingTop': [{ 'unit': 'rem', 'value': 3 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 2 }]
  },
  'jaspero__dialog': {
    'color': 'white !important',
    'backgroundColor': 'black !important',
    'position': 'absolute !important',
    'bottom': [{ 'unit': '%V', 'value': 0.1 }],
    'right': [{ 'unit': '%H', 'value': 0.03 }],
    'height': [{ 'unit': 'px', 'value': 130 }, { 'unit': 'string', 'value': '!important' }],
    'weight': '300px !important',
    'borderStyle': 'double',
    'border': [{ 'unit': 'string', 'value': 'white' }]
  },
  'svg': {
    'height': [{ 'unit': 'px', 'value': 35 }, { 'unit': 'string', 'value': '!important' }],
    'weight': '35px !important',
    'display': 'inline !important'
  },
  'jaspero__dialog-actions': {
    'height': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'jaspero__dialog-icon': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'display': 'inline !important',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'jaspero__dialog-title': {
    'fontSize': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'string', 'value': '!important' }],
    'letterSpacing': [{ 'unit': 'em', 'value': 0.005 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '!important' }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'textTransform': 'capitalize',
    'textAlign': 'center',
    'fontWeight': '450 !important'
  },
  'jaspero__dialog-content': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': '!important' }],
    'MsFlex': '1',
    'flex': '1',
    'fontWeight': '300 !important'
  },
  'ground': {
    'background': 'rgba(74, 64, 64, 0.6509803921568628)'
  },
  'modal-backdrop': {
    'zIndex': '0'
  },
  'modal-content': {
    'zIndex': '5000'
  },
  'center': {
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'tooltipDiv': {
    'display': 'inline-flex',
    'alignItems': 'center'
  },
  'margin-15': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }]
  },
  'link': {
    'cursor': 'pointer',
    'WebkitTapHighlightColor': 'transparent'
  },
  'body-margin': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }]
  },
  'float-right': {
    'textAlign': 'left'
  },
  'text-center': {
    'textAlign': 'center !important'
  },
  'fullwidth': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'col-4': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    'WebkitBoxFlex': '0',
    'MsFlex': '0 0 27%',
    'flex': '0 0 27%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.27 }]
  },
  'col-8': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    'WebkitBoxFlex': '0',
    'MsFlex': '0 0 66.6666666667%',
    'flex': '0 0 66.6666666667%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.6666666666669999 }]
  },
  'row': {
    'display': '-webkit-box',
    'display': '-ms-flexbox',
    'display': 'flex',
    'MsFlexWrap': 'wrap',
    'flexWrap': 'wrap',
    'marginRight': [{ 'unit': 'px', 'value': -15 }],
    'marginLeft': [{ 'unit': 'px', 'value': -15 }]
  },
  // ***********************************************************************
  // html,
body {
    height: 100%;
    position: relative;
}

body {
    margin: 0;
    padding: 0;
}

[tabindex='-1']:focus {
    outline: none;
}

.inset {
    padding: 10px;
}

a.md-no-style,
button.md-no-style {
    font-weight: normal;
    background-color: inherit;
    text-align: center;
    border: none;
    padding: 0;
    margin: 0;
}

select,
button,
textarea,
input {
    vertical-align: baseline;
}

input[type="reset"],
input[type="submit"],
html input[type="button"],
button {
    cursor: pointer;
    -webkit-appearance: button;
}

input[type="reset"][disabled],
input[type="submit"][disabled],
html input[type="button"][disabled],
button[disabled] {
    cursor: default;
}

textarea {
    vertical-align: top;
    overflow: auto;
}

input[type="search"] {
    -webkit-appearance: textfield;
    box-sizing: content-box;
    -webkit-box-sizing: content-box;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
}

input:-webkit-autofill {
    text-shadow: none;
}

.md-visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    text-transform: none;
    width: 1px;
}

.md-shadow {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit;
    pointer-events: none;
}

.md-shadow-bottom-z-1 {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
}

.md-shadow-bottom-z-2 {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
}

.md-shadow-animated.md-shadow {
    -webkit-transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}
  // * A container inside of a rippling element (eg a button),
   * which contains all of the individual ripples
  // .md-ripple-container {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.55s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.55s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.md-ripple {
    position: absolute;
    -webkit-transform: translate(-50%, -50%) scale(0);
    transform: translate(-50%, -50%) scale(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    opacity: 0;
    border-radius: 50%;
}

.md-ripple.md-ripple-placed {
    -webkit-transition: margin 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), border 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: margin 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), border 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: margin 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), border 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: margin 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), border 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), height 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.md-ripple.md-ripple-scaled {
    -webkit-transform: translate(-50%, -50%) scale(1);
    transform: translate(-50%, -50%) scale(1);
}

.md-ripple.md-ripple-active,
.md-ripple.md-ripple-full,
.md-ripple.md-ripple-visible {
    opacity: 0.20;
}

.md-ripple.md-ripple-remove {
    -webkit-animation: md-remove-ripple 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
    animation: md-remove-ripple 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
}

@-webkit-keyframes md-remove-ripple {
    0% {
        opacity: .15;
    }
    100% {
        opacity: 0;
    }
}

@keyframes md-remove-ripple {
    0% {
        opacity: .15;
    }
    100% {
        opacity: 0;
    }
}

.md-padding {
    padding: 8px;
}

.md-margin {
    margin: 8px;
}

.md-scroll-mask {
    position: absolute;
    background-color: transparent;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
}

.md-scroll-mask>.md-scroll-mask-bar {
    display: block;
    position: absolute;
    background-color: #fafafa;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 65;
    box-shadow: inset 0px 0px 1px rgba(0, 0, 0, 0.3);
}

.md-no-momentum {
    -webkit-overflow-scrolling: auto;
}

.md-no-flicker {
    -webkit-filter: blur(0px);
}

@media (min-width: 960px) {
    .md-padding {
        padding: 16px;
    }
}

html[dir=rtl],
html[dir=ltr],
body[dir=rtl],
body[dir=ltr] {
    unicode-bidi: embed;
}

bdo[dir=rtl] {
    direction: rtl;
    unicode-bidi: bidi-override;
}

bdo[dir=ltr] {
    direction: ltr;
    unicode-bidi: bidi-override;
}

html,
body {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    min-height: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
  // ***********
   * Headings
   ***********
  // .md-display-4 {
    font-size: 112px;
    font-weight: 300;
    letter-spacing: -0.010em;
    line-height: 112px;
}

.md-display-3 {
    font-size: 56px;
    font-weight: 400;
    letter-spacing: -0.005em;
    line-height: 56px;
}

.md-display-2 {
    font-size: 45px;
    font-weight: 400;
    line-height: 64px;
}

.md-display-1 {
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
}

.md-headline {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
}

.md-title {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.005em;
}

.md-subhead {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.010em;
    line-height: 24px;
}
  // ***********
   * Body Copy
   ***********
  // .md-body-1 {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.010em;
    line-height: 20px;
}

.md-body-2 {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.010em;
    line-height: 24px;
}

.md-caption {
    font-size: 12px;
    letter-spacing: 0.020em;
}

.md-button {
    letter-spacing: 0.010em;
}
  // ***********
   * Defaults
   ***********
  // button,
select,
html,
textarea,
input {
    font-family: Roboto, "Helvetica Neue", sans-serif;
}

select,
button,
textarea,
input {
    font-size: 100%;
}
  // *
  *  Responsive attributes
  *
  *
  *
  *
  // .md-panel-outer-wrapper {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

._md-panel-hidden {
    display: none;
}

._md-panel-offscreen {
    left: -9999px;
}

._md-panel-fullscreen {
    border-radius: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    position: fixed;
    top: 0;
}

._md-panel-shown .md-panel {
    opacity: 1;
    -webkit-transition: none;
    transition: none;
}

.md-panel {
    opacity: 0;
    position: fixed;
}

.md-panel._md-panel-shown {
    opacity: 1;
    -webkit-transition: none;
    transition: none;
}

.md-panel._md-panel-animate-enter {
    opacity: 1;
    -webkit-transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.md-panel._md-panel-animate-leave {
    opacity: 1;
    -webkit-transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
    transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.md-panel._md-panel-animate-scale-out,
.md-panel._md-panel-animate-fade-out {
    opacity: 0;
}

.md-panel._md-panel-backdrop {
    height: 100%;
    position: absolute;
    width: 100%;
}

.md-panel._md-opaque-enter {
    opacity: .48;
    -webkit-transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.md-panel._md-opaque-leave {
    -webkit-transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
    transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
}

md-autocomplete {
    border-radius: 2px;
    display: block;
    height: 40px;
    position: relative;
    overflow: visible;
    min-width: 190px;
}

md-autocomplete[disabled] input {
    cursor: default;
}

md-autocomplete[md-floating-label] {
    border-radius: 0;
    background: transparent;
    height: auto;
}

md-autocomplete[md-floating-label] md-input-container {
    padding-bottom: 0;
}

md-autocomplete[md-floating-label] md-autocomplete-wrap {
    height: auto;
}

md-autocomplete[md-floating-label] .md-show-clear-button button {
    display: block;
    position: absolute;
    right: 0;
    top: 20px;
    width: 30px;
    height: 30px;
}

md-autocomplete[md-floating-label] .md-show-clear-button input {
    padding-right: 30px;
}

[dir=rtl] md-autocomplete[md-floating-label] .md-show-clear-button input {
    padding-right: 0;
    padding-left: 30px;
}

md-autocomplete md-autocomplete-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    box-sizing: border-box;
    position: relative;
    overflow: visible;
    height: 40px;
}

md-autocomplete md-autocomplete-wrap.md-menu-showing {
    z-index: 51;
}

md-autocomplete md-autocomplete-wrap md-input-container,
md-autocomplete md-autocomplete-wrap input {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0%;
    flex: 1 1 0%;
    box-sizing: border-box;
    min-width: 0;
}

md-autocomplete md-autocomplete-wrap md-progress-linear {
    position: absolute;
    bottom: -2px;
    left: 0;
}

md-autocomplete md-autocomplete-wrap md-progress-linear.md-inline {
    bottom: 40px;
    right: 2px;
    left: 2px;
    width: auto;
}

md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    -webkit-transition: none;
    transition: none;
}

md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate .md-container {
    -webkit-transition: none;
    transition: none;
    height: 3px;
}

md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-enter {
    -webkit-transition: opacity 0.15s linear;
    transition: opacity 0.15s linear;
}

md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-enter.ng-enter-active {
    opacity: 1;
}

md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-leave {
    -webkit-transition: opacity 0.15s linear;
    transition: opacity 0.15s linear;
}

md-autocomplete md-autocomplete-wrap md-progress-linear .md-mode-indeterminate.ng-leave.ng-leave-active {
    opacity: 0;
}

md-autocomplete input:not(.md-input) {
    font-size: 14px;
    box-sizing: border-box;
    border: none;
    box-shadow: none;
    outline: none;
    background: transparent;
    width: 100%;
    padding: 0 15px;
    line-height: 40px;
    height: 40px;
}

md-autocomplete input:not(.md-input)::-ms-clear {
    display: none;
}

md-autocomplete .md-show-clear-button button {
    position: relative;
    line-height: 20px;
    text-align: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    padding: 0;
    font-size: 12px;
    background: transparent;
    margin: auto 5px;
}

md-autocomplete .md-show-clear-button button:after {
    content: '';
    position: absolute;
    top: -6px;
    right: -6px;
    bottom: -6px;
    left: -6px;
    border-radius: 50%;
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

md-autocomplete .md-show-clear-button button:focus {
    outline: none;
}

md-autocomplete .md-show-clear-button button:focus:after {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
}

md-autocomplete .md-show-clear-button button md-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0) scale(0.9);
    transform: translate3d(-50%, -50%, 0) scale(0.9);
}

md-autocomplete .md-show-clear-button button md-icon path {
    stroke-width: 0;
}

md-autocomplete .md-show-clear-button button.ng-enter {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition: -webkit-transform 0.15s ease-out;
    transition: -webkit-transform 0.15s ease-out;
    transition: transform 0.15s ease-out;
    transition: transform 0.15s ease-out, -webkit-transform 0.15s ease-out;
}

md-autocomplete .md-show-clear-button button.ng-enter.ng-enter-active {
    -webkit-transform: scale(1);
    transform: scale(1);
}

md-autocomplete .md-show-clear-button button.ng-leave {
    -webkit-transition: -webkit-transform 0.15s ease-out;
    transition: -webkit-transform 0.15s ease-out;
    transition: transform 0.15s ease-out;
    transition: transform 0.15s ease-out, -webkit-transform 0.15s ease-out;
}

md-autocomplete .md-show-clear-button button.ng-leave.ng-leave-active {
    -webkit-transform: scale(0);
    transform: scale(0);
}

@media screen and (-ms-high-contrast: active) {
    md-autocomplete input {
        border: 1px solid #fff;
    }
    md-autocomplete li:focus {
        color: #fff;
    }
}

.md-virtual-repeat-container.md-autocomplete-suggestions-container {
    position: absolute;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    z-index: 100;
    height: 100%;
}

.md-virtual-repeat-container.md-not-found {
    height: 48px;
}

.md-autocomplete-suggestions {
    margin: 0;
    list-style: none;
    padding: 0;
}

.md-autocomplete-suggestions li {
    font-size: 14px;
    overflow: hidden;
    padding: 0 15px;
    line-height: 48px;
    height: 48px;
    -webkit-transition: background 0.15s linear;
    transition: background 0.15s linear;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.md-autocomplete-suggestions li:focus {
    outline: none;
}

.md-autocomplete-suggestions li:not(.md-not-found-wrapper) {
    cursor: pointer;
}

@media screen and (-ms-high-contrast: active) {
    md-autocomplete,
    .md-autocomplete-suggestions {
        border: 1px solid #fff;
    }
}

md-backdrop {
    -webkit-transition: opacity 450ms;
    transition: opacity 450ms;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 50;
}

md-backdrop.md-menu-backdrop {
    position: fixed !important;
    z-index: 99;
}

md-backdrop.md-select-backdrop {
    z-index: 81;
    -webkit-transition-duration: 0;
    transition-duration: 0;
}

md-backdrop.md-dialog-backdrop {
    z-index: 79;
}

md-backdrop.md-bottom-sheet-backdrop {
    z-index: 69;
}

md-backdrop.md-sidenav-backdrop {
    z-index: 59;
}

md-backdrop.md-click-catcher {
    position: absolute;
}

md-backdrop.md-opaque {
    opacity: .48;
}

md-backdrop.md-opaque.ng-enter {
    opacity: 0;
}

md-backdrop.md-opaque.ng-enter.md-opaque.ng-enter-active {
    opacity: .48;
}

md-backdrop.md-opaque.ng-leave {
    opacity: .48;
    -webkit-transition: opacity 400ms;
    transition: opacity 400ms;
}

md-backdrop.md-opaque.ng-leave.md-opaque.ng-leave-active {
    opacity: 0;
}

md-bottom-sheet {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 8px 16px 88px 16px;
    z-index: 70;
    border-top-width: 1px;
    border-top-style: solid;
    -webkit-transform: translate3d(0, 80px, 0);
    transform: translate3d(0, 80px, 0);
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
}

md-bottom-sheet.md-has-header {
    padding-top: 0;
}

md-bottom-sheet.ng-enter {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
}

md-bottom-sheet.ng-enter-active {
    opacity: 1;
    display: block;
    -webkit-transform: translate3d(0, 80px, 0) !important;
    transform: translate3d(0, 80px, 0) !important;
}

md-bottom-sheet.ng-leave-active {
    -webkit-transform: translate3d(0, 100%, 0) !important;
    transform: translate3d(0, 100%, 0) !important;
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
}

md-bottom-sheet .md-subheader {
    background-color: transparent;
    font-family: Roboto, "Helvetica Neue", sans-serif;
    line-height: 56px;
    padding: 0;
    white-space: nowrap;
}

md-bottom-sheet md-inline-icon {
    display: inline-block;
    height: 24px;
    width: 24px;
    fill: #444;
}

md-bottom-sheet md-list-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    outline: none;
}

md-bottom-sheet md-list-item:hover {
    cursor: pointer;
}

md-bottom-sheet.md-list md-list-item {
    padding: 0;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 48px;
}

md-bottom-sheet.md-grid {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 0;
}

md-bottom-sheet.md-grid md-list {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}

md-bottom-sheet.md-grid md-list-item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    height: 96px;
    margin-top: 8px;
    margin-bottom: 8px;
  // Mixin for how many grid items to show per row
  // }

@media (max-width: 960px) {
    md-bottom-sheet.md-grid md-list-item {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33333%;
        flex: 1 1 33.33333%;
        max-width: 33.33333%;
    }
    md-bottom-sheet.md-grid md-list-item:nth-of-type(3n + 1) {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
    }
    md-bottom-sheet.md-grid md-list-item:nth-of-type(3n) {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
    }
}

@media (min-width: 960px) and (max-width: 1279px) {
    md-bottom-sheet.md-grid md-list-item {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 25%;
        flex: 1 1 25%;
        max-width: 25%;
    }
}

@media (min-width: 1280px) and (max-width: 1919px) {
    md-bottom-sheet.md-grid md-list-item {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 16.66667%;
        flex: 1 1 16.66667%;
        max-width: 16.66667%;
    }
}

@media (min-width: 1920px) {
    md-bottom-sheet.md-grid md-list-item {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 14.28571%;
        flex: 1 1 14.28571%;
        max-width: 14.28571%;
    }
}

md-bottom-sheet.md-grid md-list-item::before {
    display: none;
}

md-bottom-sheet.md-grid md-list-item .md-list-item-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 48px;
    padding-bottom: 16px;
}

md-bottom-sheet.md-grid md-list-item .md-grid-item-content {
    border: 1px solid transparent;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 80px;
}

md-bottom-sheet.md-grid md-list-item .md-grid-text {
    font-weight: 400;
    line-height: 16px;
    font-size: 13px;
    margin: 0;
    white-space: nowrap;
    width: 64px;
    text-align: center;
    text-transform: none;
    padding-top: 8px;
}

@media screen and (-ms-high-contrast: active) {
    md-bottom-sheet {
        border: 1px solid #fff;
    }
}

button.md-button::-moz-focus-inner {
    border: 0;
}

.md-button {
    display: inline-block;
    position: relative;
    cursor: pointer;

    min-height: 36px;
    min-width: 88px;
    line-height: 36px;
    vertical-align: middle;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    text-align: center;
    border-radius: 2px;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none;
    border: 0;

    padding: 0 6px;
    margin: 6px 8px;
    background: transparent;
    color: currentColor;
    white-space: nowrap;

    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    font-style: inherit;
    font-variant: inherit;
    font-family: inherit;
    text-decoration: none;
    overflow: hidden;
    -webkit-transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.md-dense>.md-button:not(.md-dense-disabled),
.md-dense :not(.md-dense-disabled) .md-button:not(.md-dense-disabled) {
    min-height: 32px;
}

.md-dense>.md-button:not(.md-dense-disabled),
.md-dense :not(.md-dense-disabled) .md-button:not(.md-dense-disabled) {
    line-height: 32px;
}

.md-dense>.md-button:not(.md-dense-disabled),
.md-dense :not(.md-dense-disabled) .md-button:not(.md-dense-disabled) {
    font-size: 13px;
}

.md-button:focus {
    outline: none;
}

.md-button:hover,
.md-button:focus {
    text-decoration: none;
}

.md-button.ng-hide,
.md-button.ng-leave {
    -webkit-transition: none;
    transition: none;
}

.md-button.md-cornered {
    border-radius: 0;
}

.md-button.md-icon {
    padding: 0;
    background: none;
}

.md-button.md-raised:not([disabled]) {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
}

.md-button.md-icon-button {
    margin: 0 6px;
    height: 40px;
    min-width: 0;
    line-height: 24px;
    padding: 8px;
    width: 40px;
    border-radius: 50%;
}

.md-button.md-icon-button .md-ripple-container {
    border-radius: 50%;
    background-clip: padding-box;
    overflow: hidden;
    -webkit-mask-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC");
}

.md-button.md-fab {
    z-index: 20;
    line-height: 56px;
    min-width: 0;
    width: 56px;
    height: 56px;
    vertical-align: middle;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    border-radius: 50%;
    background-clip: padding-box;
    overflow: hidden;
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    -webkit-transition-property: background-color, box-shadow, -webkit-transform;
    transition-property: background-color, box-shadow, -webkit-transform;
    transition-property: background-color, box-shadow, transform;
    transition-property: background-color, box-shadow, transform, -webkit-transform;
}

.md-button.md-fab.md-fab-bottom-right {
    top: auto;
    right: 20px;
    bottom: 20px;
    left: auto;
    position: absolute;
}

.md-button.md-fab.md-fab-bottom-left {
    top: auto;
    right: auto;
    bottom: 20px;
    left: 20px;
    position: absolute;
}

.md-button.md-fab.md-fab-top-right {
    top: 20px;
    right: 20px;
    bottom: auto;
    left: auto;
    position: absolute;
}

.md-button.md-fab.md-fab-top-left {
    top: 20px;
    right: auto;
    bottom: auto;
    left: 20px;
    position: absolute;
}

.md-button.md-fab .md-ripple-container {
    border-radius: 50%;
    background-clip: padding-box;
    overflow: hidden;
    -webkit-mask-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC");
}

.md-button.md-fab.md-mini {
    line-height: 40px;
    width: 40px;
    height: 40px;
}

.md-button.md-fab.ng-hide,
.md-button.md-fab.ng-leave {
    -webkit-transition: none;
    transition: none;
}

.md-button:not([disabled]).md-raised.md-focused,
.md-button:not([disabled]).md-fab.md-focused {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
}

.md-button:not([disabled]).md-raised:active,
.md-button:not([disabled]).md-fab:active {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
}

.md-button .md-ripple-container {
    border-radius: 2px;
    background-clip: padding-box;
    overflow: hidden;
    -webkit-mask-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC");
}

.md-button.md-icon-button md-icon,
button.md-button.md-fab md-icon {
    display: block;
}

.md-toast-open-top .md-button.md-fab-top-left,
.md-toast-open-top .md-button.md-fab-top-right {
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transform: translate3d(0, 42px, 0);
    transform: translate3d(0, 42px, 0);
}

.md-toast-open-top .md-button.md-fab-top-left:not([disabled]).md-focused,
.md-toast-open-top .md-button.md-fab-top-left:not([disabled]):hover,
.md-toast-open-top .md-button.md-fab-top-right:not([disabled]).md-focused,
.md-toast-open-top .md-button.md-fab-top-right:not([disabled]):hover {
    -webkit-transform: translate3d(0, 41px, 0);
    transform: translate3d(0, 41px, 0);
}

.md-toast-open-bottom .md-button.md-fab-bottom-left,
.md-toast-open-bottom .md-button.md-fab-bottom-right {
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transform: translate3d(0, -42px, 0);
    transform: translate3d(0, -42px, 0);
}

.md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]).md-focused,
.md-toast-open-bottom .md-button.md-fab-bottom-left:not([disabled]):hover,
.md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]).md-focused,
.md-toast-open-bottom .md-button.md-fab-bottom-right:not([disabled]):hover {
    -webkit-transform: translate3d(0, -43px, 0);
    transform: translate3d(0, -43px, 0);
}

.md-button-group {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 100%;
}

.md-button-group>.md-button {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    display: block;
    overflow: hidden;
    width: 0;
    border-width: 1px 0px 1px 1px;
    border-radius: 0;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.md-button-group>.md-button:first-child {
    border-radius: 2px 0px 0px 2px;
}

.md-button-group>.md-button:last-child {
    border-right-width: 1px;
    border-radius: 0px 2px 2px 0px;
}

@media screen and (-ms-high-contrast: active) {
    .md-button.md-raised,
    .md-button.md-fab {
        border: 1px solid #fff;
    }
}

md-card {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    margin: 8px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}

md-card md-card-header {
    padding: 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
}

md-card md-card-header:first-child md-card-avatar {
    margin-right: 12px;
}

[dir=rtl] md-card md-card-header:first-child md-card-avatar {
    margin-right: auto;
    margin-left: 12px;
}

md-card md-card-header:last-child md-card-avatar {
    margin-left: 12px;
}

[dir=rtl] md-card md-card-header:last-child md-card-avatar {
    margin-left: auto;
    margin-right: 12px;
}

md-card md-card-header md-card-avatar {
    width: 40px;
    height: 40px;
}

md-card md-card-header md-card-avatar .md-user-avatar,
md-card md-card-header md-card-avatar md-icon {
    border-radius: 50%;
}

md-card md-card-header md-card-avatar md-icon {
    padding: 8px;
}

md-card md-card-header md-card-avatar md-icon>svg {
    height: inherit;
    width: inherit;
}

md-card md-card-header md-card-avatar+md-card-header-text {
    max-height: 40px;
}

md-card md-card-header md-card-avatar+md-card-header-text .md-title {
    font-size: 14px;
}

md-card md-card-header md-card-header-text {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
}

md-card md-card-header md-card-header-text .md-subhead {
    font-size: 14px;
}

md-card>img,
md-card>md-card-header img,
md-card md-card-title-media img {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 100%;
    height: auto;
}

md-card md-card-title {
    padding: 24px 16px 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
}

md-card md-card-title+md-card-content {
    padding-top: 0;
}

md-card md-card-title md-card-title-text {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

md-card md-card-title md-card-title-text .md-subhead {
    padding-top: 0;
    font-size: 14px;
}

md-card md-card-title md-card-title-text:only-child .md-subhead {
    padding-top: 12px;
}

md-card md-card-title md-card-title-media {
    margin-top: -8px;
}

md-card md-card-title md-card-title-media .md-media-sm {
    height: 80px;
    width: 80px;
}

md-card md-card-title md-card-title-media .md-media-md {
    height: 112px;
    width: 112px;
}

md-card md-card-title md-card-title-media .md-media-lg {
    height: 152px;
    width: 152px;
}

md-card md-card-content {
    display: block;
    padding: 16px;
}

md-card md-card-content>p:first-child {
    margin-top: 0;
}

md-card md-card-content>p:last-child {
    margin-bottom: 0;
}

md-card md-card-content .md-media-xl {
    height: 240px;
    width: 240px;
}

md-card .md-actions,
md-card md-card-actions {
    margin: 8px;
}

md-card .md-actions.layout-column .md-button:not(.md-icon-button),
md-card md-card-actions.layout-column .md-button:not(.md-icon-button) {
    margin: 2px 0;
}

md-card .md-actions.layout-column .md-button:not(.md-icon-button):first-of-type,
md-card md-card-actions.layout-column .md-button:not(.md-icon-button):first-of-type {
    margin-top: 0;
}

md-card .md-actions.layout-column .md-button:not(.md-icon-button):last-of-type,
md-card md-card-actions.layout-column .md-button:not(.md-icon-button):last-of-type {
    margin-bottom: 0;
}

md-card .md-actions.layout-column .md-button.md-icon-button,
md-card md-card-actions.layout-column .md-button.md-icon-button {
    margin-top: 6px;
    margin-bottom: 6px;
}

md-card .md-actions md-card-icon-actions,
md-card md-card-actions md-card-icon-actions {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
}

md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button),
md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button) {
    margin: 0 4px;
}

md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type,
md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type {
    margin-left: 0;
}

[dir=rtl] md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type,
[dir=rtl] md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):first-of-type {
    margin-left: auto;
    margin-right: 0;
}

md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type,
md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type {
    margin-right: 0;
}

[dir=rtl] md-card .md-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type,
[dir=rtl] md-card md-card-actions:not(.layout-column) .md-button:not(.md-icon-button):last-of-type {
    margin-right: auto;
    margin-left: 0;
}

md-card .md-actions:not(.layout-column) .md-button.md-icon-button,
md-card md-card-actions:not(.layout-column) .md-button.md-icon-button {
    margin-left: 6px;
    margin-right: 6px;
}

md-card .md-actions:not(.layout-column) .md-button.md-icon-button:first-of-type,
md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:first-of-type {
    margin-left: 12px;
}

[dir=rtl] md-card .md-actions:not(.layout-column) .md-button.md-icon-button:first-of-type,
[dir=rtl] md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:first-of-type {
    margin-left: auto;
    margin-right: 12px;
}

md-card .md-actions:not(.layout-column) .md-button.md-icon-button:last-of-type,
md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:last-of-type {
    margin-right: 12px;
}

[dir=rtl] md-card .md-actions:not(.layout-column) .md-button.md-icon-button:last-of-type,
[dir=rtl] md-card md-card-actions:not(.layout-column) .md-button.md-icon-button:last-of-type {
    margin-right: auto;
    margin-left: 12px;
}

md-card .md-actions:not(.layout-column) .md-button+md-card-icon-actions,
md-card md-card-actions:not(.layout-column) .md-button+md-card-icon-actions {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
}

md-card md-card-footer {
    margin-top: auto;
    padding: 16px;
}

@media screen and (-ms-high-contrast: active) {
    md-card {
        border: 1px solid #fff;
    }
}

.md-image-no-fill>img {
    width: auto;
    height: auto;
}

.md-contact-chips .md-chips md-chip {
    padding: 0 25px 0 0;
}

[dir=rtl] .md-contact-chips .md-chips md-chip {
    padding: 0 0 0 25px;
}

.md-contact-chips .md-chips md-chip .md-contact-avatar {
    float: left;
}

[dir=rtl] .md-contact-chips .md-chips md-chip .md-contact-avatar {
    float: right;
}

.md-contact-chips .md-chips md-chip .md-contact-avatar img {
    height: 32px;
    border-radius: 16px;
}

.md-contact-chips .md-chips md-chip .md-contact-name {
    display: inline-block;
    height: 32px;
    margin-left: 8px;
}

[dir=rtl] .md-contact-chips .md-chips md-chip .md-contact-name {
    margin-left: auto;
    margin-right: 8px;
}

.md-contact-suggestion {
    height: 56px;
}

.md-contact-suggestion img {
    height: 40px;
    border-radius: 20px;
    margin-top: 8px;
}

.md-contact-suggestion .md-contact-name {
    margin-left: 8px;
    width: 120px;
}

[dir=rtl] .md-contact-suggestion .md-contact-name {
    margin-left: auto;
    margin-right: 8px;
}

.md-contact-suggestion .md-contact-name,
.md-contact-suggestion .md-contact-email {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
}

.md-contact-chips-suggestions li {
    height: 100%;
}

.md-chips {
    display: block;
    font-family: Roboto, "Helvetica Neue", sans-serif;
    font-size: 16px;
    padding: 0 0 8px 3px;
    vertical-align: middle;
}

.md-chips:after {
    content: '';
    display: table;
    clear: both;
}

[dir=rtl] .md-chips {
    padding: 0 3px 8px 0;
}

.md-chips.md-readonly .md-chip-input-container {
    min-height: 32px;
}

.md-chips:not(.md-readonly) {
    cursor: text;
}

.md-chips.md-removable md-chip {
    padding-right: 22px;
}

[dir=rtl] .md-chips.md-removable md-chip {
    padding-right: 0;
    padding-left: 22px;
}

.md-chips.md-removable md-chip .md-chip-content {
    padding-right: 4px;
}

[dir=rtl] .md-chips.md-removable md-chip .md-chip-content {
    padding-right: 0;
    padding-left: 4px;
}

.md-chips md-chip {
    cursor: default;
    border-radius: 16px;
    display: block;
    height: 32px;
    line-height: 32px;
    margin: 8px 8px 0 0;
    padding: 0 12px 0 12px;
    float: left;
    box-sizing: border-box;
    max-width: 100%;
    position: relative;
}

[dir=rtl] .md-chips md-chip {
    margin: 8px 0 0 8px;
}

[dir=rtl] .md-chips md-chip {
    float: right;
}

.md-chips md-chip .md-chip-content {
    display: block;
    float: left;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}

[dir=rtl] .md-chips md-chip .md-chip-content {
    float: right;
}

.md-chips md-chip .md-chip-content:focus {
    outline: none;
}

.md-chips md-chip._md-chip-content-edit-is-enabled {
    -webkit-user-select: none;

    -moz-user-select: none;

    -khtml-user-select: none;

    -ms-user-select: none;

}

.md-chips md-chip .md-chip-remove-container {
    position: absolute;
    right: 0;
    line-height: 22px;
}

[dir=rtl] .md-chips md-chip .md-chip-remove-container {
    right: auto;
    left: 0;
}

.md-chips md-chip .md-chip-remove {
    text-align: center;
    width: 32px;
    height: 32px;
    min-width: 0;
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    margin: 0;
    position: relative;
}

.md-chips md-chip .md-chip-remove md-icon {
    height: 18px;
    width: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
}

.md-chips .md-chip-input-container {
    display: block;
    line-height: 32px;
    margin: 8px 8px 0 0;
    padding: 0;
    float: left;
}

[dir=rtl] .md-chips .md-chip-input-container {
    margin: 8px 0 0 8px;
}

[dir=rtl] .md-chips .md-chip-input-container {
    float: right;
}

.md-chips .md-chip-input-container input:not([type]),
.md-chips .md-chip-input-container input[type="email"],
.md-chips .md-chip-input-container input[type="number"],
.md-chips .md-chip-input-container input[type="tel"],
.md-chips .md-chip-input-container input[type="url"],
.md-chips .md-chip-input-container input[type="text"] {
    border: 0;
    height: 32px;
    line-height: 32px;
    padding: 0;
}

.md-chips .md-chip-input-container input:not([type]):focus,
.md-chips .md-chip-input-container input[type="email"]:focus,
.md-chips .md-chip-input-container input[type="number"]:focus,
.md-chips .md-chip-input-container input[type="tel"]:focus,
.md-chips .md-chip-input-container input[type="url"]:focus,
.md-chips .md-chip-input-container input[type="text"]:focus {
    outline: none;
}

.md-chips .md-chip-input-container md-autocomplete,
.md-chips .md-chip-input-container md-autocomplete-wrap {
    background: transparent;
    height: 32px;
}

.md-chips .md-chip-input-container md-autocomplete md-autocomplete-wrap {
    box-shadow: none;
}

.md-chips .md-chip-input-container md-autocomplete input {
    position: relative;
}

.md-chips .md-chip-input-container input {
    border: 0;
    height: 32px;
    line-height: 32px;
    padding: 0;
}

.md-chips .md-chip-input-container input:focus {
    outline: none;
}

.md-chips .md-chip-input-container md-autocomplete,
.md-chips .md-chip-input-container md-autocomplete-wrap {
    height: 32px;
}

.md-chips .md-chip-input-container md-autocomplete {
    box-shadow: none;
}

.md-chips .md-chip-input-container md-autocomplete input {
    position: relative;
}

.md-chips .md-chip-input-container:not(:first-child) {
    margin: 8px 8px 0 0;
}

[dir=rtl] .md-chips .md-chip-input-container:not(:first-child) {
    margin: 8px 0 0 8px;
}

.md-chips .md-chip-input-container input {
    background: transparent;
    border-width: 0;
}

.md-chips md-autocomplete button {
    display: none;
}

@media screen and (-ms-high-contrast: active) {
    .md-chip-input-container,
    md-chip {
        border: 1px solid #fff;
    }
    .md-chip-input-container md-autocomplete {
        border: none;
    }
}

.md-inline-form md-checkbox {
    margin: 19px 0 18px;
}

md-checkbox {
    box-sizing: border-box;
    display: inline-block;
    margin-bottom: 16px;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    min-width: 20px;
    min-height: 20px;
    margin-left: 0;
    margin-right: 16px;
}

[dir=rtl] md-checkbox {
    margin-left: 16px;
}

[dir=rtl] md-checkbox {
    margin-right: 0;
}

md-checkbox:last-of-type {
    margin-left: 0;
    margin-right: 0;
}

md-checkbox.md-focused:not([disabled]) .md-container:before {
    left: -8px;
    top: -8px;
    right: -8px;
    bottom: -8px;
}

md-checkbox.md-focused:not([disabled]):not(.md-checked) .md-container:before {
    background-color: rgba(0, 0, 0, 0.12);
}

md-checkbox.md-align-top-left>div.md-container {
    top: 12px;
}

md-checkbox .md-container {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    box-sizing: border-box;
    display: inline-block;
    width: 20px;
    height: 20px;
    left: 0;
    right: auto;
}

[dir=rtl] md-checkbox .md-container {
    left: auto;
}

[dir=rtl] md-checkbox .md-container {
    right: 0;
}

md-checkbox .md-container:before {
    box-sizing: border-box;
    background-color: transparent;
    border-radius: 50%;
    content: '';
    position: absolute;
    display: block;
    height: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    width: auto;
}

md-checkbox .md-container:after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
}

md-checkbox .md-container .md-ripple-container {
    position: absolute;
    display: block;
    width: auto;
    height: auto;
    left: -15px;
    top: -15px;
    right: -15px;
    bottom: -15px;
}

md-checkbox .md-icon {
    box-sizing: border-box;
    -webkit-transition: 240ms;
    transition: 240ms;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-width: 2px;
    border-style: solid;
    border-radius: 2px;
}

md-checkbox.md-checked .md-icon {
    border-color: transparent;
}

md-checkbox.md-checked .md-icon:after {
    box-sizing: border-box;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    left: 4.66667px;
    top: 0.22222px;
    display: table;
    width: 6.66667px;
    height: 13.33333px;
    border-width: 2px;
    border-style: solid;
    border-top: 0;
    border-left: 0;
    content: '';
}

md-checkbox[disabled] {
    cursor: default;
}

md-checkbox.md-indeterminate .md-icon:after {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: table;
    width: 12px;
    height: 2px;
    border-width: 2px;
    border-style: solid;
    border-top: 0;
    border-left: 0;
    content: '';
}

md-checkbox .md-label {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    margin-left: 30px;
    margin-right: 0;
}

[dir=rtl] md-checkbox .md-label {
    margin-left: 0;
}

[dir=rtl] md-checkbox .md-label {
    margin-right: 30px;
}

md-content {
    display: block;
    position: relative;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

md-content[md-scroll-y] {
    overflow-y: auto;
    overflow-x: hidden;
}

md-content[md-scroll-x] {
    overflow-x: auto;
    overflow-y: hidden;
}

@media print {
    md-content {
        overflow: visible !important;
    }
}
  // * Styles for mdCalendar.
  // md-calendar {
    font-size: 13px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.md-calendar-scroll-mask {
    display: inline-block;
    overflow: hidden;
    height: 308px;
}

.md-calendar-scroll-mask .md-virtual-repeat-scroller {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}

.md-calendar-scroll-mask .md-virtual-repeat-scroller::-webkit-scrollbar {
    display: none;
}

.md-calendar-scroll-mask .md-virtual-repeat-offsetter {
    width: 100%;
}

.md-calendar-scroll-container {
    box-shadow: inset -3px 3px 6px rgba(0, 0, 0, 0.2);
    display: inline-block;
    height: 308px;
    width: 346px;
}

.md-calendar-date {
    height: 44px;
    width: 44px;
    text-align: center;
    padding: 0;
    border: none;
    box-sizing: content-box;
}

.md-calendar-date:first-child {
    padding-left: 16px;
}

[dir=rtl] .md-calendar-date:first-child {
    padding-left: 0;
    padding-right: 16px;
}

.md-calendar-date:last-child {
    padding-right: 16px;
}

[dir=rtl] .md-calendar-date:last-child {
    padding-right: 0;
    padding-left: 16px;
}

.md-calendar-date.md-calendar-date-disabled {
    cursor: default;
}

.md-calendar-date-selection-indicator {
    -webkit-transition: background-color, color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: background-color, color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    border-radius: 50%;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
}

.md-calendar-date:not(.md-disabled) .md-calendar-date-selection-indicator {
    cursor: pointer;
}

.md-calendar-month-label {
    height: 44px;
    font-size: 14px;
    font-weight: 500;
    padding: 0 0 0 24px;
}

[dir=rtl] .md-calendar-month-label {
    padding: 0 24px 0 0;
}

md-calendar-month .md-calendar-month-label:not(.md-calendar-month-label-disabled) {
    cursor: pointer;
}

.md-calendar-month-label md-icon {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

[dir=rtl] .md-calendar-month-label md-icon {
    -webkit-transform: none;
    transform: none;
}

.md-calendar-month-label span {
    vertical-align: middle;
}

.md-calendar-day-header {
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;
}

.md-calendar-day-header th {
    height: 40px;
    width: 44px;
    text-align: center;
    padding: 0;
    border: none;
    box-sizing: content-box;
    font-weight: normal;
}

.md-calendar-day-header th:first-child {
    padding-left: 16px;
}

[dir=rtl] .md-calendar-day-header th:first-child {
    padding-left: 0;
    padding-right: 16px;
}

.md-calendar-day-header th:last-child {
    padding-right: 16px;
}

[dir=rtl] .md-calendar-day-header th:last-child {
    padding-right: 0;
    padding-left: 16px;
}

.md-calendar {
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;
}

.md-calendar tr:last-child td {
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

.md-calendar:first-child {
    border-top: 1px solid transparent;
}

.md-calendar tbody,
.md-calendar td,
.md-calendar tr {
    vertical-align: middle;
    box-sizing: content-box;
}
  // * Styles for mdDatepicker.
  // md-datepicker {
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
}

.md-inline-form md-datepicker {
    margin-top: 12px;
}

.md-datepicker-button {
    display: inline-block;
    box-sizing: border-box;
    background: none;
    vertical-align: middle;
    position: relative;
}

.md-datepicker-button:before {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    content: '';
    speak: none;
}

.md-datepicker-input {
    font-size: 14px;
    box-sizing: border-box;
    border: none;
    box-shadow: none;
    outline: none;
    background: transparent;
    min-width: 120px;
    max-width: 328px;
    padding: 0 0 5px;
}

.md-datepicker-input::-ms-clear {
    display: none;
}

._md-datepicker-floating-label>md-datepicker {
    overflow: visible;
}

._md-datepicker-floating-label>md-datepicker .md-datepicker-input-container {
    border: none;
}

._md-datepicker-floating-label>md-datepicker .md-datepicker-button {
    float: left;
    margin-top: -12px;
    top: 9.5px;
}

[dir=rtl] ._md-datepicker-floating-label>md-datepicker .md-datepicker-button {
    float: right;
}

._md-datepicker-floating-label .md-input {
    float: none;
}

._md-datepicker-floating-label._md-datepicker-has-calendar-icon>label:not(.md-no-float):not(.md-container-ignore) {
    right: 18px;
    left: auto;
    width: calc(100% - 84px);
}

[dir=rtl] ._md-datepicker-floating-label._md-datepicker-has-calendar-icon>label:not(.md-no-float):not(.md-container-ignore) {
    right: auto;
}

[dir=rtl] ._md-datepicker-floating-label._md-datepicker-has-calendar-icon>label:not(.md-no-float):not(.md-container-ignore) {
    left: 18px;
}

._md-datepicker-floating-label._md-datepicker-has-calendar-icon .md-input-message-animation {
    margin-left: 64px;
}

[dir=rtl] ._md-datepicker-floating-label._md-datepicker-has-calendar-icon .md-input-message-animation {
    margin-left: auto;
    margin-right: 64px;
}

._md-datepicker-has-triangle-icon {
    padding-right: 18px;
    margin-right: -18px;
}

[dir=rtl] ._md-datepicker-has-triangle-icon {
    padding-right: 0;
    padding-left: 18px;
}

[dir=rtl] ._md-datepicker-has-triangle-icon {
    margin-right: auto;
    margin-left: -18px;
}

.md-datepicker-input-container {
    position: relative;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    display: inline-block;
    width: auto;
}

.md-icon-button+.md-datepicker-input-container {
    margin-left: 12px;
}

[dir=rtl] .md-icon-button+.md-datepicker-input-container {
    margin-left: auto;
    margin-right: 12px;
}

.md-datepicker-input-container.md-datepicker-focused {
    border-bottom-width: 2px;
}

.md-datepicker-is-showing .md-scroll-mask {
    z-index: 99;
}

.md-datepicker-calendar-pane {
    position: absolute;
    top: 0;
    left: -100%;
    z-index: 100;
    border-width: 1px;
    border-style: solid;
    background: transparent;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: -webkit-transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.md-datepicker-calendar-pane.md-pane-open {
    -webkit-transform: scale(1);
    transform: scale(1);
}

.md-datepicker-input-mask {
    height: 40px;
    width: 340px;
    position: relative;
    overflow: hidden;
    background: transparent;
    pointer-events: none;
    cursor: text;
}

.md-datepicker-calendar {
    opacity: 0;
    -webkit-transition: opacity 0.2s cubic-bezier(0.5, 0, 0.25, 1);
    transition: opacity 0.2s cubic-bezier(0.5, 0, 0.25, 1);
}

.md-pane-open .md-datepicker-calendar {
    opacity: 1;
}

.md-datepicker-calendar md-calendar:focus {
    outline: none;
}

.md-datepicker-expand-triangle {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid;
}

.md-datepicker-triangle-button {
    position: absolute;
    right: 0;
    bottom: -2.5px;
    -webkit-transform: translateX(45%);
    transform: translateX(45%);
}

[dir=rtl] .md-datepicker-triangle-button {
    right: auto;
    left: 0;
}

[dir=rtl] .md-datepicker-triangle-button {
    -webkit-transform: translateX(-45%);
    transform: translateX(-45%);
}

.md-datepicker-triangle-button.md-button.md-icon-button {
    height: 36px;
    width: 36px;
    position: absolute;
    padding: 8px;
}

md-datepicker[disabled] .md-datepicker-input-container {
    border-bottom-color: transparent;
}

md-datepicker[disabled] .md-datepicker-triangle-button {
    display: none;
}

.md-datepicker-open {
    overflow: hidden;
}

.md-datepicker-open .md-datepicker-input-container,
.md-datepicker-open input.md-input {
    border-bottom-color: transparent;
}

.md-datepicker-open .md-datepicker-triangle-button,
.md-datepicker-open.md-input-has-value>label,
.md-datepicker-open.md-input-has-placeholder>label {
    display: none;
}

.md-datepicker-pos-adjusted .md-datepicker-input-mask {
    display: none;
}

.md-datepicker-calendar-pane .md-calendar {
    -webkit-transform: translateY(-85px);
    transform: translateY(-85px);
    -webkit-transition: -webkit-transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: -webkit-transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transition-delay: 0.125s;
    transition-delay: 0.125s;
}

.md-datepicker-calendar-pane.md-pane-open .md-calendar {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}

.md-dialog-is-showing {
    max-height: 100%;
}

.md-dialog-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 80;
    overflow: hidden;
}

md-dialog {
    opacity: 0;
    min-width: 240px;
    max-width: 80%;
    max-height: 80%;
    position: relative;
    overflow: auto;
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
}

md-dialog.md-transition-in {
    opacity: 1;
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transform: translate(0, 0) scale(1);
    transform: translate(0, 0) scale(1);
}

md-dialog.md-transition-out {
    opacity: 0;
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transform: translate(0, 100%) scale(0.2);
    transform: translate(0, 100%) scale(0.2);
}

md-dialog>form {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    overflow: auto;
}

md-dialog .md-dialog-content {
    padding: 24px;
}

md-dialog md-dialog-content {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    order: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

md-dialog md-dialog-content:not([layout=row])>*:first-child:not(.md-subheader) {
    margin-top: 0;
}

md-dialog md-dialog-content:focus {
    outline: none;
}

md-dialog md-dialog-content .md-subheader {
    margin: 0;
}

md-dialog md-dialog-content .md-dialog-content-body {
    width: 100%;
}

md-dialog md-dialog-content .md-prompt-input-container {
    width: 100%;
    box-sizing: border-box;
}

md-dialog .md-actions,
md-dialog md-dialog-actions {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    order: 2;
    box-sizing: border-box;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    margin-bottom: 0;
    padding-right: 8px;
    padding-left: 16px;
    min-height: 52px;
    overflow: hidden;
}

[dir=rtl] md-dialog .md-actions,
[dir=rtl] md-dialog md-dialog-actions {
    padding-right: 16px;
}

[dir=rtl] md-dialog .md-actions,
[dir=rtl] md-dialog md-dialog-actions {
    padding-left: 8px;
}

md-dialog .md-actions .md-button,
md-dialog md-dialog-actions .md-button {
    margin-bottom: 8px;
    margin-left: 8px;
    margin-right: 0;
    margin-top: 8px;
}

[dir=rtl] md-dialog .md-actions .md-button,
[dir=rtl] md-dialog md-dialog-actions .md-button {
    margin-left: 0;
}

[dir=rtl] md-dialog .md-actions .md-button,
[dir=rtl] md-dialog md-dialog-actions .md-button {
    margin-right: 8px;
}

md-dialog.md-content-overflow .md-actions,
md-dialog.md-content-overflow md-dialog-actions {
    border-top-width: 1px;
    border-top-style: solid;
}

@media screen and (-ms-high-contrast: active) {
    md-dialog {
        border: 1px solid #fff;
    }
}

@media (max-width: 959px) {
    md-dialog.md-dialog-fullscreen {
        min-height: 100%;
        min-width: 100%;
        border-radius: 0;
    }
}

md-divider {
    display: block;
    border-top-width: 1px;
    border-top-style: solid;
    margin: 0;
}

md-divider[md-inset] {
    margin-left: 80px;
}

[dir=rtl] md-divider[md-inset] {
    margin-left: auto;
    margin-right: 80px;
}

.layout-row>md-divider,
.layout-xs-row>md-divider,
.layout-gt-xs-row>md-divider,
.layout-sm-row>md-divider,
.layout-gt-sm-row>md-divider,
.layout-md-row>md-divider,
.layout-gt-md-row>md-divider,
.layout-lg-row>md-divider,
.layout-gt-lg-row>md-divider,
.layout-xl-row>md-divider {
    border-top-width: 0;
    border-right-width: 1px;
    border-right-style: solid;
}

md-fab-speed-dial {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    z-index: 20;

}

md-fab-speed-dial.md-fab-bottom-right {
    top: auto;
    right: 20px;
    bottom: 20px;
    left: auto;
    position: absolute;
}

md-fab-speed-dial.md-fab-bottom-left {
    top: auto;
    right: auto;
    bottom: 20px;
    left: 20px;
    position: absolute;
}

md-fab-speed-dial.md-fab-top-right {
    top: 20px;
    right: 20px;
    bottom: auto;
    left: auto;
    position: absolute;
}

md-fab-speed-dial.md-fab-top-left {
    top: 20px;
    right: auto;
    bottom: auto;
    left: 20px;
    position: absolute;
}

md-fab-speed-dial:not(.md-hover-full) {
    pointer-events: none;
}

md-fab-speed-dial:not(.md-hover-full) md-fab-trigger,
md-fab-speed-dial:not(.md-hover-full) .md-fab-action-item {
    pointer-events: auto;
}

md-fab-speed-dial:not(.md-hover-full).md-is-open {
    pointer-events: auto;
}

md-fab-speed-dial ._md-css-variables {
    z-index: 20;
}

md-fab-speed-dial.md-is-open .md-fab-action-item {
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}

md-fab-speed-dial md-fab-actions {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: auto;
}

md-fab-speed-dial md-fab-actions .md-fab-action-item {
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
}

md-fab-speed-dial.md-down {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
}

md-fab-speed-dial.md-down md-fab-trigger {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    order: 1;
}

md-fab-speed-dial.md-down md-fab-actions {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    order: 2;
}

md-fab-speed-dial.md-up {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
}

md-fab-speed-dial.md-up md-fab-trigger {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    order: 2;
}

md-fab-speed-dial.md-up md-fab-actions {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
    flex-direction: column-reverse;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    order: 1;
}

md-fab-speed-dial.md-left {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
}

md-fab-speed-dial.md-left md-fab-trigger {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    order: 2;
}

md-fab-speed-dial.md-left md-fab-actions {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    order: 1;
}

md-fab-speed-dial.md-left md-fab-actions .md-fab-action-item {
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
}

md-fab-speed-dial.md-right {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
}

md-fab-speed-dial.md-right md-fab-trigger {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    order: 1;
}

md-fab-speed-dial.md-right md-fab-actions {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    order: 2;
}

md-fab-speed-dial.md-right md-fab-actions .md-fab-action-item {
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
}

md-fab-speed-dial.md-fling-remove .md-fab-action-item>*,
md-fab-speed-dial.md-scale-remove .md-fab-action-item>* {
    visibility: hidden;
}

md-fab-speed-dial.md-fling .md-fab-action-item {
    opacity: 1;
}

md-fab-speed-dial.md-fling.md-animations-waiting .md-fab-action-item {
    opacity: 0;
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
}

md-fab-speed-dial.md-scale .md-fab-action-item {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    -webkit-transition-duration: 0.14286s;
    transition-duration: 0.14286s;
}

md-fab-toolbar {
    display: block;

}

md-fab-toolbar.md-fab-bottom-right {
    top: auto;
    right: 20px;
    bottom: 20px;
    left: auto;
    position: absolute;
}

md-fab-toolbar.md-fab-bottom-left {
    top: auto;
    right: auto;
    bottom: 20px;
    left: 20px;
    position: absolute;
}

md-fab-toolbar.md-fab-top-right {
    top: 20px;
    right: 20px;
    bottom: auto;
    left: auto;
    position: absolute;
}

md-fab-toolbar.md-fab-top-left {
    top: 20px;
    right: auto;
    bottom: auto;
    left: 20px;
    position: absolute;
}

md-fab-toolbar .md-fab-toolbar-wrapper {
    display: block;
    position: relative;
    overflow: hidden;
    height: 68px;
}

md-fab-toolbar md-fab-trigger {
    position: absolute;
    z-index: 20;
}

md-fab-toolbar md-fab-trigger button {
    overflow: visible !important;
}

md-fab-toolbar md-fab-trigger .md-fab-toolbar-background {
    display: block;
    position: absolute;
    z-index: 21;
    opacity: 1;
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
}

md-fab-toolbar md-fab-trigger md-icon {
    position: relative;
    z-index: 22;
    opacity: 1;
    -webkit-transition: all 200ms ease-in;
    transition: all 200ms ease-in;
}

md-fab-toolbar.md-left md-fab-trigger {
    right: 0;
}

[dir=rtl] md-fab-toolbar.md-left md-fab-trigger {
    right: auto;
    left: 0;
}

md-fab-toolbar.md-left .md-toolbar-tools {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
}

md-fab-toolbar.md-left .md-toolbar-tools>.md-button:first-child {
    margin-right: 0.6rem;
}

[dir=rtl] md-fab-toolbar.md-left .md-toolbar-tools>.md-button:first-child {
    margin-right: auto;
    margin-left: 0.6rem;
}

md-fab-toolbar.md-left .md-toolbar-tools>.md-button:first-child {
    margin-left: -0.8rem;
}

[dir=rtl] md-fab-toolbar.md-left .md-toolbar-tools>.md-button:first-child {
    margin-left: auto;
    margin-right: -0.8rem;
}

md-fab-toolbar.md-left .md-toolbar-tools>.md-button:last-child {
    margin-right: 8px;
}

[dir=rtl] md-fab-toolbar.md-left .md-toolbar-tools>.md-button:last-child {
    margin-right: auto;
    margin-left: 8px;
}

md-fab-toolbar.md-right md-fab-trigger {
    left: 0;
}

[dir=rtl] md-fab-toolbar.md-right md-fab-trigger {
    left: auto;
    right: 0;
}

md-fab-toolbar.md-right .md-toolbar-tools {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
}

md-fab-toolbar md-toolbar {
    background-color: transparent !important;
    pointer-events: none;
    z-index: 23;
}

md-fab-toolbar md-toolbar .md-toolbar-tools {
    padding: 0 20px;
    margin-top: 3px;
}

md-fab-toolbar md-toolbar .md-fab-action-item {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    -webkit-transition-duration: 0.15s;
    transition-duration: 0.15s;
}

md-fab-toolbar.md-is-open md-fab-trigger>button {
    box-shadow: none;
}

md-fab-toolbar.md-is-open md-fab-trigger>button md-icon {
    opacity: 0;
}

md-fab-toolbar.md-is-open .md-fab-action-item {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}

md-icon {
    margin: auto;
    background-repeat: no-repeat no-repeat;
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    height: 24px;
    width: 24px;
    min-height: 24px;
    min-width: 24px;
}

md-icon svg {
    pointer-events: none;
    display: block;
}

md-icon[md-font-icon] {
    line-height: 24px;
    width: auto;
}

md-grid-list {
    box-sizing: border-box;
    display: block;
    position: relative;
}

md-grid-list md-grid-tile,
md-grid-list md-grid-tile>figure,
md-grid-list md-grid-tile-header,
md-grid-list md-grid-tile-footer {
    box-sizing: border-box;
}

md-grid-list md-grid-tile {
    display: block;
    position: absolute;
}

md-grid-list md-grid-tile figure {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
}

md-grid-list md-grid-tile md-grid-tile-header,
md-grid-list md-grid-tile md-grid-tile-footer {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 48px;
    color: #fff;
    background: rgba(0, 0, 0, 0.18);
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
}

md-grid-list md-grid-tile md-grid-tile-header h3,
md-grid-list md-grid-tile md-grid-tile-header h4,
md-grid-list md-grid-tile md-grid-tile-footer h3,
md-grid-list md-grid-tile md-grid-tile-footer h4 {
    font-weight: 400;
    margin: 0 0 0 16px;
}

md-grid-list md-grid-tile md-grid-tile-header h3,
md-grid-list md-grid-tile md-grid-tile-footer h3 {
    font-size: 14px;
}

md-grid-list md-grid-tile md-grid-tile-header h4,
md-grid-list md-grid-tile md-grid-tile-footer h4 {
    font-size: 12px;
}

md-grid-list md-grid-tile md-grid-tile-header {
    top: 0;
}

md-grid-list md-grid-tile md-grid-tile-footer {
    bottom: 0;
}

@media screen and (-ms-high-contrast: active) {
    md-grid-tile {
        border: 1px solid #fff;
    }
    md-grid-tile-footer {
        border-top: 1px solid #fff;
    }
}

md-input-container {
    display: inline-block;
    position: relative;
    padding: 2px;
    margin: 18px 0;
    vertical-align: middle;

}

md-input-container:after {
    content: '';
    display: table;
    clear: both;
}

md-input-container.md-block {
    display: block;
}

md-input-container .md-errors-spacer {
    float: right;
    min-height: 24px;
    min-width: 1px;
}

[dir=rtl] md-input-container .md-errors-spacer {
    float: left;
}

md-input-container>md-icon {
    position: absolute;
    top: 8px;
    left: 2px;
    right: auto;
}

[dir=rtl] md-input-container>md-icon {
    left: auto;
}

[dir=rtl] md-input-container>md-icon {
    right: 2px;
}

md-input-container textarea,
md-input-container input[type="text"],
md-input-container input[type="password"],
md-input-container input[type="datetime"],
md-input-container input[type="datetime-local"],
md-input-container input[type="date"],
md-input-container input[type="month"],
md-input-container input[type="time"],
md-input-container input[type="week"],
md-input-container input[type="number"],
md-input-container input[type="email"],
md-input-container input[type="url"],
md-input-container input[type="search"],
md-input-container input[type="tel"],
md-input-container input[type="color"] {

    -moz-appearance: none;
    -webkit-appearance: none;
}

md-input-container input[type="date"],
md-input-container input[type="datetime-local"],
md-input-container input[type="month"],
md-input-container input[type="time"],
md-input-container input[type="week"] {
    min-height: 26px;
}

md-input-container textarea {
    resize: none;
    overflow: hidden;
}

md-input-container textarea.md-input {
    min-height: 26px;
    -ms-flex-preferred-size: auto;
}

md-input-container textarea[md-no-autogrow] {
    height: auto;
    overflow: auto;
}

md-input-container label:not(.md-container-ignore) {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: auto;
}

[dir=rtl] md-input-container label:not(.md-container-ignore) {
    left: auto;
}

[dir=rtl] md-input-container label:not(.md-container-ignore) {
    right: 0;
}

md-input-container label:not(.md-container-ignore).md-required:after {
    content: ' *';
    font-size: 13px;
    vertical-align: top;
}

md-input-container label:not(.md-no-float):not(.md-container-ignore),
md-input-container .md-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    order: 1;
    pointer-events: none;
    -webkit-font-smoothing: antialiased;
    padding-left: 3px;
    padding-right: 0;
    z-index: 1;
    -webkit-transform: translate3d(0, 28px, 0) scale(1);
    transform: translate3d(0, 28px, 0) scale(1);
    -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    max-width: 100%;
    -webkit-transform-origin: left top;
    transform-origin: left top;
}

[dir=rtl] md-input-container label:not(.md-no-float):not(.md-container-ignore),
[dir=rtl] md-input-container .md-placeholder {
    padding-left: 0;
}

[dir=rtl] md-input-container label:not(.md-no-float):not(.md-container-ignore),
[dir=rtl] md-input-container .md-placeholder {
    padding-right: 3px;
}

[dir=rtl] md-input-container label:not(.md-no-float):not(.md-container-ignore),
[dir=rtl] md-input-container .md-placeholder {
    -webkit-transform-origin: right top;
    transform-origin: right top;
}

md-input-container .md-placeholder {
    position: absolute;
    top: 0;
    opacity: 0;
    -webkit-transition-property: opacity, -webkit-transform;
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    transition-property: opacity, transform, -webkit-transform;
    -webkit-transform: translate3d(0, 30px, 0);
    transform: translate3d(0, 30px, 0);
}

md-input-container.md-input-focused .md-placeholder {
    opacity: 1;
    -webkit-transform: translate3d(0, 24px, 0);
    transform: translate3d(0, 24px, 0);
}

md-input-container.md-input-has-value .md-placeholder {
    -webkit-transition: none;
    transition: none;
    opacity: 0;
}

md-input-container:not(.md-input-has-value) input:not(:focus),
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-ampm-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-day-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-hour-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-millisecond-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-minute-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-month-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-second-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-week-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-year-field,
md-input-container:not(.md-input-has-value) input:not(:focus)::-webkit-datetime-edit-text {
    color: transparent;
}

md-input-container .md-input {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    order: 2;
    display: block;
    margin-top: 0;
    background: none;
    padding-top: 2px;
    padding-bottom: 1px;
    padding-left: 2px;
    padding-right: 2px;
    border-width: 0 0 1px 0;
    line-height: 26px;
    height: 30px;
    -ms-flex-preferred-size: 26px;
    border-radius: 0;
    border-style: solid;
    width: 100%;
    box-sizing: border-box;
    float: left;
}

[dir=rtl] md-input-container .md-input {
    float: right;
}

md-input-container .md-input:focus {
    outline: none;
}

md-input-container .md-input:invalid {
    outline: none;
    box-shadow: none;
}

md-input-container .md-input.md-no-flex {
    -webkit-box-flex: 0 !important;
    -webkit-flex: none !important;
    flex: none !important;
}

md-input-container .md-char-counter {
    text-align: right;
    padding-right: 2px;
    padding-left: 0;
}

[dir=rtl] md-input-container .md-char-counter {
    text-align: left;
}

[dir=rtl] md-input-container .md-char-counter {
    padding-right: 0;
}

[dir=rtl] md-input-container .md-char-counter {
    padding-left: 2px;
}

md-input-container .md-input-messages-animation {
    position: relative;
    -webkit-box-ordinal-group: 5;
    -webkit-order: 4;
    order: 4;
    overflow: hidden;
    clear: left;
}

[dir=rtl] md-input-container .md-input-messages-animation {
    clear: right;
}

md-input-container .md-input-message-animation,
md-input-container .md-char-counter {
    font-size: 12px;
    line-height: 14px;
    overflow: hidden;
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    opacity: 1;
    margin-top: 0;
    padding-top: 5px;
}

md-input-container .md-input-message-animation:not(.md-char-counter),
md-input-container .md-char-counter:not(.md-char-counter) {
    padding-right: 5px;
    padding-left: 0;
}

[dir=rtl] md-input-container .md-input-message-animation:not(.md-char-counter),
[dir=rtl] md-input-container .md-char-counter:not(.md-char-counter) {
    padding-right: 0;
}

[dir=rtl] md-input-container .md-input-message-animation:not(.md-char-counter),
[dir=rtl] md-input-container .md-char-counter:not(.md-char-counter) {
    padding-left: 5px;
}

md-input-container:not(.md-input-invalid) .md-auto-hide .md-input-message-animation {
    opacity: 0;
    margin-top: -100px;
}

md-input-container .md-input-message-animation.ng-enter-prepare {
    opacity: 0;
    margin-top: -100px;
}

md-input-container .md-input-message-animation.ng-enter:not(.ng-enter-active) {
    opacity: 0;
    margin-top: -100px;
}

md-input-container.md-input-focused label:not(.md-no-float),
md-input-container.md-input-has-placeholder label:not(.md-no-float),
md-input-container.md-input-has-value label:not(.md-no-float) {
    -webkit-transform: translate3d(0, 6px, 0) scale(0.75);
    transform: translate3d(0, 6px, 0) scale(0.75);
    -webkit-transition: width cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s, -webkit-transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s;
    transition: width cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s, -webkit-transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s;
    transition: transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s, width cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s;
    transition: transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s, width cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s, -webkit-transform cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s;
}

md-input-container.md-input-has-value label {
    -webkit-transition: none;
    transition: none;
}

md-input-container.md-input-focused .md-input,
md-input-container .md-input.ng-invalid.ng-dirty,
md-input-container.md-input-resized .md-input {
    padding-bottom: 0;
    border-width: 0 0 2px 0;
}

md-input-container .md-input[disabled],
[disabled] md-input-container .md-input {
    background-position: bottom -1px left 0;
    background-size: 4px 1px;
    background-repeat: repeat-x;
}

md-input-container.md-icon-float {
    -webkit-transition: margin-top 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: margin-top 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

md-input-container.md-icon-float>label {
    pointer-events: none;
    position: absolute;
}

md-input-container.md-icon-float>md-icon {
    top: 8px;
    left: 2px;
    right: auto;
}

[dir=rtl] md-input-container.md-icon-float>md-icon {
    left: auto;
}

[dir=rtl] md-input-container.md-icon-float>md-icon {
    right: 2px;
}

md-input-container.md-icon-left>label:not(.md-no-float):not(.md-container-ignore),
md-input-container.md-icon-left>label .md-placeholder,
md-input-container.md-icon-right>label:not(.md-no-float):not(.md-container-ignore),
md-input-container.md-icon-right>label .md-placeholder {
    width: calc(100% - 36px - 18px);
}

md-input-container.md-icon-left {
    padding-left: 36px;
    padding-right: 0;
}

[dir=rtl] md-input-container.md-icon-left {
    padding-left: 0;
}

[dir=rtl] md-input-container.md-icon-left {
    padding-right: 36px;
}

md-input-container.md-icon-left>label {
    left: 36px;
    right: auto;
}

[dir=rtl] md-input-container.md-icon-left>label {
    left: auto;
}

[dir=rtl] md-input-container.md-icon-left>label {
    right: 36px;
}

md-input-container.md-icon-right {
    padding-left: 0;
    padding-right: 36px;
}

[dir=rtl] md-input-container.md-icon-right {
    padding-left: 36px;
}

[dir=rtl] md-input-container.md-icon-right {
    padding-right: 0;
}

md-input-container.md-icon-right>md-icon:last-of-type {
    margin: 0;
    right: 2px;
    left: auto;
}

[dir=rtl] md-input-container.md-icon-right>md-icon:last-of-type {
    right: auto;
}

[dir=rtl] md-input-container.md-icon-right>md-icon:last-of-type {
    left: 2px;
}

md-input-container.md-icon-left.md-icon-right {
    padding-left: 36px;
    padding-right: 36px;
}

md-input-container.md-icon-left.md-icon-right>label:not(.md-no-float):not(.md-container-ignore),
md-input-container.md-icon-left.md-icon-right>label .md-placeholder {
    width: calc(100% - (36px * 2));
}

.md-resize-wrapper {
    position: relative;
}

.md-resize-wrapper:after {
    content: '';
    display: table;
    clear: both;
}

.md-resize-handle {
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 10px;
    background: transparent;
    width: 100%;
    cursor: ns-resize;
}

@media screen and (-ms-high-contrast: active) {
    md-input-container.md-default-theme>md-icon {
        fill: #fff;
    }
}

md-list {
    display: block;
    padding: 8px 0px 8px 0px;
}

md-list .md-subheader {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.010em;
    line-height: 1.2em;
}

md-list.md-dense md-list-item,
md-list.md-dense md-list-item .md-list-item-inner {
    min-height: 48px;
}

md-list.md-dense md-list-item::before,
md-list.md-dense md-list-item .md-list-item-inner::before {
    content: '';
    min-height: 48px;
    visibility: hidden;
    display: inline-block;
}

md-list.md-dense md-list-item md-icon:first-child,
md-list.md-dense md-list-item .md-list-item-inner md-icon:first-child {
    width: 20px;
    height: 20px;
}

md-list.md-dense md-list-item>md-icon:first-child:not(.md-avatar-icon),
md-list.md-dense md-list-item .md-list-item-inner>md-icon:first-child:not(.md-avatar-icon) {
    margin-right: 36px;
}

[dir=rtl] md-list.md-dense md-list-item>md-icon:first-child:not(.md-avatar-icon),
[dir=rtl] md-list.md-dense md-list-item .md-list-item-inner>md-icon:first-child:not(.md-avatar-icon) {
    margin-right: auto;
    margin-left: 36px;
}

md-list.md-dense md-list-item .md-avatar,
md-list.md-dense md-list-item .md-avatar-icon,
md-list.md-dense md-list-item .md-list-item-inner .md-avatar,
md-list.md-dense md-list-item .md-list-item-inner .md-avatar-icon {
    margin-right: 20px;
}

[dir=rtl] md-list.md-dense md-list-item .md-avatar,
[dir=rtl] md-list.md-dense md-list-item .md-avatar-icon,
[dir=rtl] md-list.md-dense md-list-item .md-list-item-inner .md-avatar,
[dir=rtl] md-list.md-dense md-list-item .md-list-item-inner .md-avatar-icon {
    margin-right: auto;
    margin-left: 20px;
}

md-list.md-dense md-list-item .md-avatar,
md-list.md-dense md-list-item .md-list-item-inner .md-avatar {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    flex: none;
    width: 36px;
    height: 36px;
}

md-list.md-dense md-list-item.md-2-line .md-list-item-text.md-offset,
md-list.md-dense md-list-item.md-2-line>.md-no-style .md-list-item-text.md-offset,
md-list.md-dense md-list-item.md-3-line .md-list-item-text.md-offset,
md-list.md-dense md-list-item.md-3-line>.md-no-style .md-list-item-text.md-offset {
    margin-left: 56px;
}

[dir=rtl] md-list.md-dense md-list-item.md-2-line .md-list-item-text.md-offset,
[dir=rtl] md-list.md-dense md-list-item.md-2-line>.md-no-style .md-list-item-text.md-offset,
[dir=rtl] md-list.md-dense md-list-item.md-3-line .md-list-item-text.md-offset,
[dir=rtl] md-list.md-dense md-list-item.md-3-line>.md-no-style .md-list-item-text.md-offset {
    margin-left: auto;
    margin-right: 56px;
}

md-list.md-dense md-list-item.md-2-line .md-list-item-text h3,
md-list.md-dense md-list-item.md-2-line .md-list-item-text h4,
md-list.md-dense md-list-item.md-2-line .md-list-item-text p,
md-list.md-dense md-list-item.md-2-line>.md-no-style .md-list-item-text h3,
md-list.md-dense md-list-item.md-2-line>.md-no-style .md-list-item-text h4,
md-list.md-dense md-list-item.md-2-line>.md-no-style .md-list-item-text p,
md-list.md-dense md-list-item.md-3-line .md-list-item-text h3,
md-list.md-dense md-list-item.md-3-line .md-list-item-text h4,
md-list.md-dense md-list-item.md-3-line .md-list-item-text p,
md-list.md-dense md-list-item.md-3-line>.md-no-style .md-list-item-text h3,
md-list.md-dense md-list-item.md-3-line>.md-no-style .md-list-item-text h4,
md-list.md-dense md-list-item.md-3-line>.md-no-style .md-list-item-text p {
    line-height: 1.05;
    font-size: 12px;
}

md-list.md-dense md-list-item.md-2-line .md-list-item-text h3,
md-list.md-dense md-list-item.md-2-line>.md-no-style .md-list-item-text h3,
md-list.md-dense md-list-item.md-3-line .md-list-item-text h3,
md-list.md-dense md-list-item.md-3-line>.md-no-style .md-list-item-text h3 {
    font-size: 13px;
}

md-list.md-dense md-list-item.md-2-line,
md-list.md-dense md-list-item.md-2-line>.md-no-style {
    min-height: 60px;
}

md-list.md-dense md-list-item.md-2-line::before,
md-list.md-dense md-list-item.md-2-line>.md-no-style::before {
    content: '';
    min-height: 60px;
    visibility: hidden;
    display: inline-block;
}

md-list.md-dense md-list-item.md-2-line>.md-avatar,
md-list.md-dense md-list-item.md-2-line .md-avatar-icon,
md-list.md-dense md-list-item.md-2-line>.md-no-style>.md-avatar,
md-list.md-dense md-list-item.md-2-line>.md-no-style .md-avatar-icon {
    margin-top: 12px;
}

md-list.md-dense md-list-item.md-3-line,
md-list.md-dense md-list-item.md-3-line>.md-no-style {
    min-height: 76px;
}

md-list.md-dense md-list-item.md-3-line::before,
md-list.md-dense md-list-item.md-3-line>.md-no-style::before {
    content: '';
    min-height: 76px;
    visibility: hidden;
    display: inline-block;
}

md-list.md-dense md-list-item.md-3-line>md-icon:first-child,
md-list.md-dense md-list-item.md-3-line>.md-avatar,
md-list.md-dense md-list-item.md-3-line>.md-no-style>md-icon:first-child,
md-list.md-dense md-list-item.md-3-line>.md-no-style>.md-avatar {
    margin-top: 16px;
}

md-list-item {
    position: relative;
}

md-list-item.md-proxy-focus.md-focused .md-no-style {
    -webkit-transition: background-color 0.15s linear;
    transition: background-color 0.15s linear;
}

md-list-item._md-button-wrap {
    position: relative;
}

md-list-item._md-button-wrap>div.md-button:first-child {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    padding: 0 16px;
    margin: 0;
    font-weight: 400;
    text-align: left;
    border: medium none;
}

[dir=rtl] md-list-item._md-button-wrap>div.md-button:first-child {
    text-align: right;
}

md-list-item._md-button-wrap>div.md-button:first-child>.md-button:first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    margin: 0;
    padding: 0;
}

md-list-item._md-button-wrap>div.md-button:first-child .md-list-item-inner {
    width: 100%;
    min-height: inherit;
}

md-list-item.md-no-proxy,
md-list-item .md-no-style {
    position: relative;
    padding: 0px 16px;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
}

md-list-item.md-no-proxy.md-button,
md-list-item .md-no-style.md-button {
    font-size: inherit;
    height: inherit;
    text-align: left;
    text-transform: none;
    width: 100%;
    white-space: normal;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: inherit;
    flex-direction: inherit;
    -webkit-box-align: inherit;
    -webkit-align-items: inherit;
    align-items: inherit;
    border-radius: 0;
    margin: 0;
}

[dir=rtl] md-list-item.md-no-proxy.md-button,
[dir=rtl] md-list-item .md-no-style.md-button {
    text-align: right;
}

md-list-item.md-no-proxy.md-button>.md-ripple-container,
md-list-item .md-no-style.md-button>.md-ripple-container {
    border-radius: 0;
}

md-list-item.md-no-proxy:focus,
md-list-item .md-no-style:focus {
    outline: none;
}

md-list-item.md-clickable:hover {
    cursor: pointer;
}

md-list-item md-divider {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

[dir=rtl] md-list-item md-divider {
    left: auto;
    right: 0;
}

md-list-item md-divider[md-inset] {
    left: 72px;
    width: calc(100% - 72px);
    margin: 0 !important;
}

[dir=rtl] md-list-item md-divider[md-inset] {
    left: auto;
    right: 72px;
}

md-list-item,
md-list-item .md-list-item-inner {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    min-height: 48px;
    height: auto;
}

md-list-item::before,
md-list-item .md-list-item-inner::before {
    content: '';
    min-height: 48px;
    visibility: hidden;
    display: inline-block;
}

md-list-item>div.md-primary>md-icon:not(.md-avatar-icon),
md-list-item>div.md-secondary>md-icon:not(.md-avatar-icon),
md-list-item>md-icon:first-child:not(.md-avatar-icon),
md-list-item>md-icon.md-secondary:not(.md-avatar-icon),
md-list-item .md-list-item-inner>div.md-primary>md-icon:not(.md-avatar-icon),
md-list-item .md-list-item-inner>div.md-secondary>md-icon:not(.md-avatar-icon),
md-list-item .md-list-item-inner>md-icon:first-child:not(.md-avatar-icon),
md-list-item .md-list-item-inner>md-icon.md-secondary:not(.md-avatar-icon) {
    width: 24px;
    margin-top: 16px;
    margin-bottom: 12px;
    box-sizing: content-box;
}

md-list-item>div.md-primary>md-checkbox,
md-list-item>div.md-secondary>md-checkbox,
md-list-item>md-checkbox,
md-list-item md-checkbox.md-secondary,
md-list-item .md-list-item-inner>div.md-primary>md-checkbox,
md-list-item .md-list-item-inner>div.md-secondary>md-checkbox,
md-list-item .md-list-item-inner>md-checkbox,
md-list-item .md-list-item-inner md-checkbox.md-secondary {
    -webkit-align-self: center;
    -ms-grid-row-align: center;
    align-self: center;
}

md-list-item>div.md-primary>md-checkbox .md-label,
md-list-item>div.md-secondary>md-checkbox .md-label,
md-list-item>md-checkbox .md-label,
md-list-item md-checkbox.md-secondary .md-label,
md-list-item .md-list-item-inner>div.md-primary>md-checkbox .md-label,
md-list-item .md-list-item-inner>div.md-secondary>md-checkbox .md-label,
md-list-item .md-list-item-inner>md-checkbox .md-label,
md-list-item .md-list-item-inner md-checkbox.md-secondary .md-label {
    display: none;
}

md-list-item>md-icon:first-child:not(.md-avatar-icon),
md-list-item .md-list-item-inner>md-icon:first-child:not(.md-avatar-icon) {
    margin-right: 32px;
}

[dir=rtl] md-list-item>md-icon:first-child:not(.md-avatar-icon),
[dir=rtl] md-list-item .md-list-item-inner>md-icon:first-child:not(.md-avatar-icon) {
    margin-right: auto;
    margin-left: 32px;
}

md-list-item .md-avatar,
md-list-item .md-avatar-icon,
md-list-item .md-list-item-inner .md-avatar,
md-list-item .md-list-item-inner .md-avatar-icon {
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 16px;
    border-radius: 50%;
    box-sizing: content-box;
}

[dir=rtl] md-list-item .md-avatar,
[dir=rtl] md-list-item .md-avatar-icon,
[dir=rtl] md-list-item .md-list-item-inner .md-avatar,
[dir=rtl] md-list-item .md-list-item-inner .md-avatar-icon {
    margin-right: auto;
    margin-left: 16px;
}

md-list-item .md-avatar,
md-list-item .md-list-item-inner .md-avatar {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    flex: none;
    width: 40px;
    height: 40px;
}

md-list-item .md-avatar-icon,
md-list-item .md-list-item-inner .md-avatar-icon {
    padding: 8px;
}

md-list-item .md-avatar-icon svg,
md-list-item .md-list-item-inner .md-avatar-icon svg {
    width: 24px;
    height: 24px;
}

md-list-item>md-checkbox,
md-list-item .md-list-item-inner>md-checkbox {
    width: 24px;
    margin-left: 3px;
    margin-right: 29px;
    margin-top: 16px;
}

[dir=rtl] md-list-item>md-checkbox,
[dir=rtl] md-list-item .md-list-item-inner>md-checkbox {
    margin-left: 29px;
}

[dir=rtl] md-list-item>md-checkbox,
[dir=rtl] md-list-item .md-list-item-inner>md-checkbox {
    margin-right: 3px;
}

md-list-item .md-secondary-container,
md-list-item .md-list-item-inner .md-secondary-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    margin: auto;
    margin-right: 0;
    margin-left: auto;
}

[dir=rtl] md-list-item .md-secondary-container,
[dir=rtl] md-list-item .md-list-item-inner .md-secondary-container {
    margin-right: auto;
}

[dir=rtl] md-list-item .md-secondary-container,
[dir=rtl] md-list-item .md-list-item-inner .md-secondary-container {
    margin-left: 0;
}

md-list-item .md-secondary-container .md-button:last-of-type,
md-list-item .md-secondary-container .md-icon-button:last-of-type,
md-list-item .md-list-item-inner .md-secondary-container .md-button:last-of-type,
md-list-item .md-list-item-inner .md-secondary-container .md-icon-button:last-of-type {
    margin-right: 0;
}

[dir=rtl] md-list-item .md-secondary-container .md-button:last-of-type,
[dir=rtl] md-list-item .md-secondary-container .md-icon-button:last-of-type,
[dir=rtl] md-list-item .md-list-item-inner .md-secondary-container .md-button:last-of-type,
[dir=rtl] md-list-item .md-list-item-inner .md-secondary-container .md-icon-button:last-of-type {
    margin-right: auto;
    margin-left: 0;
}

md-list-item .md-secondary-container md-checkbox,
md-list-item .md-list-item-inner .md-secondary-container md-checkbox {
    margin-top: 0;
    margin-bottom: 0;
}

md-list-item .md-secondary-container md-checkbox:last-child,
md-list-item .md-list-item-inner .md-secondary-container md-checkbox:last-child {
    width: 24px;
    margin-right: 0;
}

[dir=rtl] md-list-item .md-secondary-container md-checkbox:last-child,
[dir=rtl] md-list-item .md-list-item-inner .md-secondary-container md-checkbox:last-child {
    margin-right: auto;
    margin-left: 0;
}

md-list-item .md-secondary-container md-switch,
md-list-item .md-list-item-inner .md-secondary-container md-switch {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: -6px;
}

[dir=rtl] md-list-item .md-secondary-container md-switch,
[dir=rtl] md-list-item .md-list-item-inner .md-secondary-container md-switch {
    margin-right: auto;
    margin-left: -6px;
}

md-list-item>p,
md-list-item>.md-list-item-inner>p,
md-list-item .md-list-item-inner>p,
md-list-item .md-list-item-inner>.md-list-item-inner>p {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    margin: 0;
}

md-list-item.md-2-line,
md-list-item.md-2-line>.md-no-style,
md-list-item.md-3-line,
md-list-item.md-3-line>.md-no-style {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}

md-list-item.md-2-line.md-long-text,
md-list-item.md-2-line>.md-no-style.md-long-text,
md-list-item.md-3-line.md-long-text,
md-list-item.md-3-line>.md-no-style.md-long-text {
    margin-top: 8px;
    margin-bottom: 8px;
}

md-list-item.md-2-line .md-list-item-text,
md-list-item.md-2-line>.md-no-style .md-list-item-text,
md-list-item.md-3-line .md-list-item-text,
md-list-item.md-3-line>.md-no-style .md-list-item-text {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    margin: auto;
    text-overflow: ellipsis;
    overflow: hidden;
}

md-list-item.md-2-line .md-list-item-text.md-offset,
md-list-item.md-2-line>.md-no-style .md-list-item-text.md-offset,
md-list-item.md-3-line .md-list-item-text.md-offset,
md-list-item.md-3-line>.md-no-style .md-list-item-text.md-offset {
    margin-left: 56px;
}

[dir=rtl] md-list-item.md-2-line .md-list-item-text.md-offset,
[dir=rtl] md-list-item.md-2-line>.md-no-style .md-list-item-text.md-offset,
[dir=rtl] md-list-item.md-3-line .md-list-item-text.md-offset,
[dir=rtl] md-list-item.md-3-line>.md-no-style .md-list-item-text.md-offset {
    margin-left: auto;
    margin-right: 56px;
}

md-list-item.md-2-line .md-list-item-text h3,
md-list-item.md-2-line>.md-no-style .md-list-item-text h3,
md-list-item.md-3-line .md-list-item-text h3,
md-list-item.md-3-line>.md-no-style .md-list-item-text h3 {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.010em;
    margin: 0 0 0px 0;
    line-height: 1.2em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

md-list-item.md-2-line .md-list-item-text h4,
md-list-item.md-2-line>.md-no-style .md-list-item-text h4,
md-list-item.md-3-line .md-list-item-text h4,
md-list-item.md-3-line>.md-no-style .md-list-item-text h4 {
    font-size: 14px;
    letter-spacing: 0.010em;
    margin: 3px 0 1px 0;
    font-weight: 400;
    line-height: 1.2em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

md-list-item.md-2-line .md-list-item-text p,
md-list-item.md-2-line>.md-no-style .md-list-item-text p,
md-list-item.md-3-line .md-list-item-text p,
md-list-item.md-3-line>.md-no-style .md-list-item-text p {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.010em;
    margin: 0 0 0 0;
    line-height: 1.6em;
}

md-list-item.md-2-line,
md-list-item.md-2-line>.md-no-style {
    height: auto;
    min-height: 72px;
}

md-list-item.md-2-line::before,
md-list-item.md-2-line>.md-no-style::before {
    content: '';
    min-height: 72px;
    visibility: hidden;
    display: inline-block;
}

md-list-item.md-2-line>.md-avatar,
md-list-item.md-2-line .md-avatar-icon,
md-list-item.md-2-line>.md-no-style>.md-avatar,
md-list-item.md-2-line>.md-no-style .md-avatar-icon {
    margin-top: 12px;
}

md-list-item.md-2-line>md-icon:first-child,
md-list-item.md-2-line>.md-no-style>md-icon:first-child {
    -webkit-align-self: flex-start;
    align-self: flex-start;
}

md-list-item.md-2-line .md-list-item-text,
md-list-item.md-2-line>.md-no-style .md-list-item-text {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
}

md-list-item.md-3-line,
md-list-item.md-3-line>.md-no-style {
    height: auto;
    min-height: 88px;
}

md-list-item.md-3-line::before,
md-list-item.md-3-line>.md-no-style::before {
    content: '';
    min-height: 88px;
    visibility: hidden;
    display: inline-block;
}

md-list-item.md-3-line>md-icon:first-child,
md-list-item.md-3-line>.md-avatar,
md-list-item.md-3-line>.md-no-style>md-icon:first-child,
md-list-item.md-3-line>.md-no-style>.md-avatar {
    margin-top: 16px;
}

.md-open-menu-container {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    opacity: 0;
    border-radius: 2px;
    max-height: calc(100vh - 10px);
    overflow: auto;
}

.md-open-menu-container md-menu-divider {
    margin-top: 4px;
    margin-bottom: 4px;
    height: 1px;
    min-height: 1px;
    max-height: 1px;
    width: 100%;
}

.md-open-menu-container md-menu-content>* {
    opacity: 0;
}

.md-open-menu-container:not(.md-clickable) {
    pointer-events: none;
}

.md-open-menu-container.md-active {
    opacity: 1;
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
}

.md-open-menu-container.md-active>md-menu-content>* {
    opacity: 1;
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
    -webkit-transition-delay: 100ms;
    transition-delay: 100ms;
}

.md-open-menu-container.md-leave {
    opacity: 0;
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    -webkit-transition-duration: 250ms;
    transition-duration: 250ms;
}

md-menu-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    padding: 8px 0;
    max-height: 304px;
    overflow-y: auto;
}

md-menu-content.md-dense {
    max-height: 208px;
}

md-menu-content.md-dense md-menu-item {
    height: 32px;
    min-height: 0px;
}

md-menu-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    min-height: 48px;
    height: 48px;
    -webkit-align-content: center;
    align-content: center;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;

}

md-menu-item>* {
    width: 100%;
    margin: auto 0;
    padding-left: 16px;
    padding-right: 16px;
}

md-menu-item>a.md-button {
    padding-top: 5px;
}

md-menu-item>.md-button {
    text-align: left;
    display: inline-block;
    border-radius: 0;
    margin: auto 0;
    font-size: 15px;
    text-transform: none;
    font-weight: 400;
    height: 100%;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
}

md-menu-item>.md-button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

[dir=rtl] md-menu-item>.md-button {
    text-align: right;
}

md-menu-item>.md-button md-icon {
    margin: auto 16px auto 0;
}

[dir=rtl] md-menu-item>.md-button md-icon {
    margin: auto 0 auto 16px;
}

md-menu-item>.md-button p {
    display: inline-block;
    margin: auto;
}

md-menu-item>.md-button span {
    margin-top: auto;
    margin-bottom: auto;
}

md-menu-item>.md-button .md-ripple-container {
    border-radius: inherit;
}

md-toolbar .md-menu {
    height: auto;
    margin: auto;
    padding: 0;
}

@media (max-width: 959px) {
    md-menu-content {
        min-width: 112px;
    }
    md-menu-content[width="3"] {
        min-width: 168px;
    }
    md-menu-content[width="4"] {
        min-width: 224px;
    }
    md-menu-content[width="5"] {
        min-width: 280px;
    }
    md-menu-content[width="6"] {
        min-width: 336px;
    }
    md-menu-content[width="7"] {
        min-width: 392px;
    }
}

@media (min-width: 960px) {
    md-menu-content {
        min-width: 96px;
    }
    md-menu-content[width="3"] {
        min-width: 192px;
    }
    md-menu-content[width="4"] {
        min-width: 256px;
    }
    md-menu-content[width="5"] {
        min-width: 320px;
    }
    md-menu-content[width="6"] {
        min-width: 384px;
    }
    md-menu-content[width="7"] {
        min-width: 448px;
    }
}

md-toolbar.md-menu-toolbar h2.md-toolbar-tools {
    line-height: 1rem;
    height: auto;
    padding: 28px;
    padding-bottom: 12px;
}

md-toolbar.md-has-open-menu {
    position: relative;
    z-index: 100;
}

md-menu-bar {
    padding: 0 20px;
    display: block;
    position: relative;
    z-index: 2;
}

md-menu-bar .md-menu {
    display: inline-block;
    padding: 0;
    position: relative;
}

md-menu-bar button {
    font-size: 14px;
    padding: 0 10px;
    margin: 0;
    border: 0;
    background-color: transparent;
    height: 40px;
}

md-menu-bar md-backdrop.md-menu-backdrop {
    z-index: -2;
}

md-menu-content.md-menu-bar-menu.md-dense {
    max-height: none;
    padding: 16px 0;
}

md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent {
    position: relative;
}

md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent>md-icon {
    position: absolute;
    padding: 0;
    width: 24px;
    top: 6px;
    left: 24px;
}

[dir=rtl] md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent>md-icon {
    left: auto;
    right: 24px;
}

md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent>.md-button,
md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent .md-menu>.md-button {
    padding: 0 32px 0 64px;
}

[dir=rtl] md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent>.md-button,
[dir=rtl] md-menu-content.md-menu-bar-menu.md-dense md-menu-item.md-indent .md-menu>.md-button {
    padding: 0 64px 0 32px;
}

md-menu-content.md-menu-bar-menu.md-dense .md-button {
    min-height: 0;
    height: 32px;
}

md-menu-content.md-menu-bar-menu.md-dense .md-button span {
    float: left;
}

[dir=rtl] md-menu-content.md-menu-bar-menu.md-dense .md-button span {
    float: right;
}

md-menu-content.md-menu-bar-menu.md-dense .md-button span.md-alt-text {
    float: right;
    margin: 0 8px;
}

[dir=rtl] md-menu-content.md-menu-bar-menu.md-dense .md-button span.md-alt-text {
    float: left;
}

md-menu-content.md-menu-bar-menu.md-dense md-menu-divider {
    margin: 8px 0;
}

md-menu-content.md-menu-bar-menu.md-dense md-menu-item>.md-button,
md-menu-content.md-menu-bar-menu.md-dense .md-menu>.md-button {
    text-align: left;
}

[dir=rtl] md-menu-content.md-menu-bar-menu.md-dense md-menu-item>.md-button,
[dir=rtl] md-menu-content.md-menu-bar-menu.md-dense .md-menu>.md-button {
    text-align: right;
}

md-menu-content.md-menu-bar-menu.md-dense .md-menu {
    padding: 0;
}

md-menu-content.md-menu-bar-menu.md-dense .md-menu>.md-button {
    position: relative;
    margin: 0;
    width: 100%;
    text-transform: none;
    font-weight: normal;
    border-radius: 0px;
    padding-left: 16px;
}

[dir=rtl] md-menu-content.md-menu-bar-menu.md-dense .md-menu>.md-button {
    padding-left: 0;
    padding-right: 16px;
}

md-menu-content.md-menu-bar-menu.md-dense .md-menu>.md-button:after {
    display: block;
    content: '\25BC';
    position: absolute;
    top: 0px;
    speak: none;
    -webkit-transform: rotate(270deg) scaleY(0.45) scaleX(0.9);
    transform: rotate(270deg) scaleY(0.45) scaleX(0.9);
    right: 28px;
}

[dir=rtl] md-menu-content.md-menu-bar-menu.md-dense .md-menu>.md-button:after {
    -webkit-transform: rotate(90deg) scaleY(0.45) scaleX(0.9);
    transform: rotate(90deg) scaleY(0.45) scaleX(0.9);
}

[dir=rtl] md-menu-content.md-menu-bar-menu.md-dense .md-menu>.md-button:after {
    right: auto;
    left: 28px;
}



.md-nav-bar {
    border-style: solid;
    border-width: 0 0 1px;
    height: 48px;
    position: relative;
}

._md-nav-bar-list {
    outline: none;
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
}

.md-nav-item:first-of-type {
    margin-left: 8px;
}

.md-button._md-nav-button {
    line-height: 24px;
    margin: 0 4px;
    padding: 12px 16px;
    -webkit-transition: background-color 0.35s cubic-bezier(0.35, 0, 0.25, 1);
    transition: background-color 0.35s cubic-bezier(0.35, 0, 0.25, 1);
}

.md-button._md-nav-button:focus {
    outline: none;
}

.md-button._md-nav-button:hover {
    background-color: inherit;
}

md-nav-ink-bar {
    bottom: 0;
    height: 2px;
    left: auto;
    position: absolute;
    right: auto;
    background-color: black;
}

md-nav-ink-bar._md-left {
    -webkit-transition: left 0.125s cubic-bezier(0.35, 0, 0.25, 1), right 0.25s cubic-bezier(0.35, 0, 0.25, 1);
    transition: left 0.125s cubic-bezier(0.35, 0, 0.25, 1), right 0.25s cubic-bezier(0.35, 0, 0.25, 1);
}

md-nav-ink-bar._md-right {
    -webkit-transition: left 0.25s cubic-bezier(0.35, 0, 0.25, 1), right 0.125s cubic-bezier(0.35, 0, 0.25, 1);
    transition: left 0.25s cubic-bezier(0.35, 0, 0.25, 1), right 0.125s cubic-bezier(0.35, 0, 0.25, 1);
}

md-nav-ink-bar.ng-animate {
    -webkit-transition: none;
    transition: none;
}

md-nav-extra-content {
    min-height: 48px;
    padding-right: 12px;
}

@-webkit-keyframes indeterminate-rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes indeterminate-rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

md-progress-circular {
    position: relative;
    display: block;
}

md-progress-circular._md-progress-circular-disabled {
    visibility: hidden;
}

md-progress-circular.md-mode-indeterminate svg {
    -webkit-animation: indeterminate-rotate 1568.63ms linear infinite;
    animation: indeterminate-rotate 1568.63ms linear infinite;
}

md-progress-circular svg {
    position: absolute;
    overflow: visible;
    top: 0;
    left: 0;
}

md-progress-linear {
    display: block;
    position: relative;
    width: 100%;
    height: 5px;
    padding-top: 0 !important;
    margin-bottom: 0 !important;
}

md-progress-linear._md-progress-linear-disabled {
    visibility: hidden;
}

md-progress-linear .md-container {
    display: block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 5px;
    -webkit-transform: translate(0, 0) scale(1, 1);
    transform: translate(0, 0) scale(1, 1);
}

md-progress-linear .md-container .md-bar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
}

md-progress-linear .md-container .md-dashed:before {
    content: "";
    display: none;
    position: absolute;
    margin-top: 0;
    height: 5px;
    width: 100%;
    background-color: transparent;
    background-size: 10px 10px !important;
    background-position: 0px -23px;
}

md-progress-linear .md-container .md-bar1,
md-progress-linear .md-container .md-bar2 {
    -webkit-transition: -webkit-transform 0.2s linear;
    transition: -webkit-transform 0.2s linear;
    transition: transform 0.2s linear;
    transition: transform 0.2s linear, -webkit-transform 0.2s linear;
}

md-progress-linear .md-container.md-mode-query .md-bar1 {
    display: none;
}

md-progress-linear .md-container.md-mode-query .md-bar2 {
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);
    animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);
}

md-progress-linear .md-container.md-mode-determinate .md-bar1 {
    display: none;
}

md-progress-linear .md-container.md-mode-indeterminate .md-bar1 {
    -webkit-animation: md-progress-linear-indeterminate-scale-1 4s infinite, md-progress-linear-indeterminate-1 4s infinite;
    animation: md-progress-linear-indeterminate-scale-1 4s infinite, md-progress-linear-indeterminate-1 4s infinite;
}

md-progress-linear .md-container.md-mode-indeterminate .md-bar2 {
    -webkit-animation: md-progress-linear-indeterminate-scale-2 4s infinite, md-progress-linear-indeterminate-2 4s infinite;
    animation: md-progress-linear-indeterminate-scale-2 4s infinite, md-progress-linear-indeterminate-2 4s infinite;
}

md-progress-linear .md-container.ng-hide ._md-progress-linear-disabled md-progress-linear .md-container {
    -webkit-animation: none;
    animation: none;
}

md-progress-linear .md-container.ng-hide ._md-progress-linear-disabled md-progress-linear .md-container .md-bar1 {
    -webkit-animation-name: none;
    animation-name: none;
}

md-progress-linear .md-container.ng-hide ._md-progress-linear-disabled md-progress-linear .md-container .md-bar2 {
    -webkit-animation-name: none;
    animation-name: none;
}

md-progress-linear .md-container.md-mode-buffer {
    background-color: transparent !important;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
}

md-progress-linear .md-container.md-mode-buffer .md-dashed:before {
    display: block;
    -webkit-animation: buffer 3s infinite linear;
    animation: buffer 3s infinite linear;
}

@-webkit-keyframes query {
    0% {
        opacity: 1;
        -webkit-transform: translateX(35%) scale(0.3, 1);
        transform: translateX(35%) scale(0.3, 1);
    }
    100% {
        opacity: 0;
        -webkit-transform: translateX(-50%) scale(0, 1);
        transform: translateX(-50%) scale(0, 1);
    }
}

@keyframes query {
    0% {
        opacity: 1;
        -webkit-transform: translateX(35%) scale(0.3, 1);
        transform: translateX(35%) scale(0.3, 1);
    }
    100% {
        opacity: 0;
        -webkit-transform: translateX(-50%) scale(0, 1);
        transform: translateX(-50%) scale(0, 1);
    }
}

@-webkit-keyframes buffer {
    0% {
        opacity: 1;
        background-position: 0px -23px;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        background-position: -200px -23px;
    }
}

@keyframes buffer {
    0% {
        opacity: 1;
        background-position: 0px -23px;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        background-position: -200px -23px;
    }
}

@-webkit-keyframes md-progress-linear-indeterminate-scale-1 {
    0% {
        -webkit-transform: scaleX(0.1);
        transform: scaleX(0.1);
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
    }
    36.6% {
        -webkit-transform: scaleX(0.1);
        transform: scaleX(0.1);
        -webkit-animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);
        animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);
    }
    69.15% {
        -webkit-transform: scaleX(0.83);
        transform: scaleX(0.83);
        -webkit-animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);
        animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);
    }
    100% {
        -webkit-transform: scaleX(0.1);
        transform: scaleX(0.1);
    }
}

@keyframes md-progress-linear-indeterminate-scale-1 {
    0% {
        -webkit-transform: scaleX(0.1);
        transform: scaleX(0.1);
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
    }
    36.6% {
        -webkit-transform: scaleX(0.1);
        transform: scaleX(0.1);
        -webkit-animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);
        animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);
    }
    69.15% {
        -webkit-transform: scaleX(0.83);
        transform: scaleX(0.83);
        -webkit-animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);
        animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);
    }
    100% {
        -webkit-transform: scaleX(0.1);
        transform: scaleX(0.1);
    }
}

@-webkit-keyframes md-progress-linear-indeterminate-1 {
    0% {
        left: -105.16667%;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
    }
    20% {
        left: -105.16667%;
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);
        animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);
    }
    69.15% {
        left: 21.5%;
        -webkit-animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
        animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
    }
    100% {
        left: 95.44444%;
    }
}

@keyframes md-progress-linear-indeterminate-1 {
    0% {
        left: -105.16667%;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
    }
    20% {
        left: -105.16667%;
        -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);
        animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);
    }
    69.15% {
        left: 21.5%;
        -webkit-animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
        animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
    }
    100% {
        left: 95.44444%;
    }
}

@-webkit-keyframes md-progress-linear-indeterminate-scale-2 {
    0% {
        -webkit-transform: scaleX(0.1);
        transform: scaleX(0.1);
        -webkit-animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);
        animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);
    }
    19.15% {
        -webkit-transform: scaleX(0.57);
        transform: scaleX(0.57);
        -webkit-animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);
        animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);
    }
    44.15% {
        -webkit-transform: scaleX(0.91);
        transform: scaleX(0.91);
        -webkit-animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);
        animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);
    }
    100% {
        -webkit-transform: scaleX(0.1);
        transform: scaleX(0.1);
    }
}

@keyframes md-progress-linear-indeterminate-scale-2 {
    0% {
        -webkit-transform: scaleX(0.1);
        transform: scaleX(0.1);
        -webkit-animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);
        animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);
    }
    19.15% {
        -webkit-transform: scaleX(0.57);
        transform: scaleX(0.57);
        -webkit-animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);
        animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);
    }
    44.15% {
        -webkit-transform: scaleX(0.91);
        transform: scaleX(0.91);
        -webkit-animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);
        animation-timing-function: cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);
    }
    100% {
        -webkit-transform: scaleX(0.1);
        transform: scaleX(0.1);
    }
}

@-webkit-keyframes md-progress-linear-indeterminate-2 {
    0% {
        left: -54.88889%;
        -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);
        animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);
    }
    25% {
        left: -17.25%;
        -webkit-animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);
        animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);
    }
    48.35% {
        left: 29.5%;
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);
        animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);
    }
    100% {
        left: 117.38889%;
    }
}

@keyframes md-progress-linear-indeterminate-2 {
    0% {
        left: -54.88889%;
        -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);
        animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);
    }
    25% {
        left: -17.25%;
        -webkit-animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);
        animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);
    }
    48.35% {
        left: 29.5%;
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);
        animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);
    }
    100% {
        left: 117.38889%;
    }
}

md-radio-button {
    box-sizing: border-box;
    display: block;
    margin-bottom: 16px;
    white-space: nowrap;
    cursor: pointer;
    position: relative;
}

md-radio-button[disabled] {
    cursor: default;
}

md-radio-button[disabled] .md-container {
    cursor: default;
}

md-radio-button .md-container {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    box-sizing: border-box;
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    left: 0;
    right: auto;
}

[dir=rtl] md-radio-button .md-container {
    left: auto;
}

[dir=rtl] md-radio-button .md-container {
    right: 0;
}

md-radio-button .md-container .md-ripple-container {
    position: absolute;
    display: block;
    width: auto;
    height: auto;
    left: -15px;
    top: -15px;
    right: -15px;
    bottom: -15px;
}

md-radio-button .md-container:before {
    box-sizing: border-box;
    background-color: transparent;
    border-radius: 50%;
    content: '';
    position: absolute;
    display: block;
    height: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    width: auto;
}

md-radio-button.md-align-top-left>div.md-container {
    top: 12px;
}

md-radio-button .md-off {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-style: solid;
    border-width: 2px;
    border-radius: 50%;
    -webkit-transition: border-color ease 0.28s;
    transition: border-color ease 0.28s;
}

md-radio-button .md-on {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    -webkit-transition: -webkit-transform ease 0.28s;
    transition: -webkit-transform ease 0.28s;
    transition: transform ease 0.28s;
    transition: transform ease 0.28s, -webkit-transform ease 0.28s;
    -webkit-transform: scale(0);
    transform: scale(0);
}

md-radio-button.md-checked .md-on {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
}

md-radio-button .md-label {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    margin-left: 30px;
    margin-right: 0;
    vertical-align: middle;
    white-space: normal;
    pointer-events: none;
    width: auto;
}

[dir=rtl] md-radio-button .md-label {
    margin-left: 0;
}

[dir=rtl] md-radio-button .md-label {
    margin-right: 30px;
}

md-radio-group {

}

md-radio-group.layout-column md-radio-button,
md-radio-group.layout-xs-column md-radio-button,
md-radio-group.layout-gt-xs-column md-radio-button,
md-radio-group.layout-sm-column md-radio-button,
md-radio-group.layout-gt-sm-column md-radio-button,
md-radio-group.layout-md-column md-radio-button,
md-radio-group.layout-gt-md-column md-radio-button,
md-radio-group.layout-lg-column md-radio-button,
md-radio-group.layout-gt-lg-column md-radio-button,
md-radio-group.layout-xl-column md-radio-button {
    margin-bottom: 16px;
}

md-radio-group.layout-row md-radio-button,
md-radio-group.layout-xs-row md-radio-button,
md-radio-group.layout-gt-xs-row md-radio-button,
md-radio-group.layout-sm-row md-radio-button,
md-radio-group.layout-gt-sm-row md-radio-button,
md-radio-group.layout-md-row md-radio-button,
md-radio-group.layout-gt-md-row md-radio-button,
md-radio-group.layout-lg-row md-radio-button,
md-radio-group.layout-gt-lg-row md-radio-button,
md-radio-group.layout-xl-row md-radio-button {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 16px;
}

[dir=rtl] md-radio-group.layout-row md-radio-button,
[dir=rtl] md-radio-group.layout-xs-row md-radio-button,
[dir=rtl] md-radio-group.layout-gt-xs-row md-radio-button,
[dir=rtl] md-radio-group.layout-sm-row md-radio-button,
[dir=rtl] md-radio-group.layout-gt-sm-row md-radio-button,
[dir=rtl] md-radio-group.layout-md-row md-radio-button,
[dir=rtl] md-radio-group.layout-gt-md-row md-radio-button,
[dir=rtl] md-radio-group.layout-lg-row md-radio-button,
[dir=rtl] md-radio-group.layout-gt-lg-row md-radio-button,
[dir=rtl] md-radio-group.layout-xl-row md-radio-button {
    margin-left: 16px;
}

[dir=rtl] md-radio-group.layout-row md-radio-button,
[dir=rtl] md-radio-group.layout-xs-row md-radio-button,
[dir=rtl] md-radio-group.layout-gt-xs-row md-radio-button,
[dir=rtl] md-radio-group.layout-sm-row md-radio-button,
[dir=rtl] md-radio-group.layout-gt-sm-row md-radio-button,
[dir=rtl] md-radio-group.layout-md-row md-radio-button,
[dir=rtl] md-radio-group.layout-gt-md-row md-radio-button,
[dir=rtl] md-radio-group.layout-lg-row md-radio-button,
[dir=rtl] md-radio-group.layout-gt-lg-row md-radio-button,
[dir=rtl] md-radio-group.layout-xl-row md-radio-button {
    margin-right: 0;
}

md-radio-group.layout-row md-radio-button:last-of-type,
md-radio-group.layout-xs-row md-radio-button:last-of-type,
md-radio-group.layout-gt-xs-row md-radio-button:last-of-type,
md-radio-group.layout-sm-row md-radio-button:last-of-type,
md-radio-group.layout-gt-sm-row md-radio-button:last-of-type,
md-radio-group.layout-md-row md-radio-button:last-of-type,
md-radio-group.layout-gt-md-row md-radio-button:last-of-type,
md-radio-group.layout-lg-row md-radio-button:last-of-type,
md-radio-group.layout-gt-lg-row md-radio-button:last-of-type,
md-radio-group.layout-xl-row md-radio-button:last-of-type {
    margin-left: 0;
    margin-right: 0;
}

md-radio-group:focus {
    outline: none;
}

md-radio-group.md-focused .md-checked .md-container:before {
    left: -8px;
    top: -8px;
    right: -8px;
    bottom: -8px;
}

md-radio-group[disabled] md-radio-button {
    cursor: default;
}

md-radio-group[disabled] md-radio-button .md-container {
    cursor: default;
}

.md-inline-form md-radio-group {
    margin: 18px 0 19px;
}

.md-inline-form md-radio-group md-radio-button {
    display: inline-block;
    height: 30px;
    padding: 2px;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 0;
}

@media screen and (-ms-high-contrast: active) {
    md-radio-button.md-default-theme .md-on {
        background-color: #fff;
    }
}

md-input-container:not([md-no-float]) .md-select-placeholder span:first-child {
    -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transform-origin: left top;
    transform-origin: left top;
}

[dir=rtl] md-input-container:not([md-no-float]) .md-select-placeholder span:first-child {
    -webkit-transform-origin: right top;
    transform-origin: right top;
}

md-input-container.md-input-focused:not([md-no-float]) .md-select-placeholder span:first-child {
    -webkit-transform: translateY(-22px) translateX(-2px) scale(0.75);
    transform: translateY(-22px) translateX(-2px) scale(0.75);
}

.md-select-menu-container {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 90;
    opacity: 0;
    display: none;
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
}

.md-select-menu-container:not(.md-clickable) {
    pointer-events: none;
}

.md-select-menu-container md-progress-circular {
    display: table;
    margin: 24px auto !important;
}

.md-select-menu-container.md-active {
    display: block;
    opacity: 1;
}

.md-select-menu-container.md-active md-select-menu {
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transition-duration: 150ms;
    transition-duration: 150ms;
}

.md-select-menu-container.md-active md-select-menu>* {
    opacity: 1;
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    -webkit-transition-duration: 150ms;
    transition-duration: 150ms;
    -webkit-transition-delay: 100ms;
    transition-delay: 100ms;
}

.md-select-menu-container.md-leave {
    opacity: 0;
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    -webkit-transition-duration: 250ms;
    transition-duration: 250ms;
}

md-input-container>md-select {
    margin: 0;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    order: 2;
}

md-input-container:not(.md-input-has-value) md-select[required]:not(.md-no-asterisk) .md-select-value span:first-child:after,
md-input-container:not(.md-input-has-value) md-select.ng-required:not(.md-no-asterisk) .md-select-value span:first-child:after {
    content: ' *';
    font-size: 13px;
    vertical-align: top;
}

md-input-container.md-input-invalid md-select .md-select-value {
    border-bottom-style: solid;
    padding-bottom: 1px;
}

md-select {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    margin: 20px 0 26px 0;
}

md-select[required].ng-invalid:not(.md-no-asterisk) .md-select-value span:first-child:after,
md-select.ng-required.ng-invalid:not(.md-no-asterisk) .md-select-value span:first-child:after {
    content: ' *';
    font-size: 13px;
    vertical-align: top;
}

md-select[disabled] .md-select-value {
    background-position: 0 bottom;
    background-size: 4px 1px;
    background-repeat: repeat-x;
    margin-bottom: -1px;
}

md-select:focus {
    outline: none;
}

md-select[disabled]:hover {
    cursor: default;
}

md-select:not([disabled]):hover {
    cursor: pointer;
}

md-select:not([disabled]).ng-invalid.ng-touched .md-select-value {
    border-bottom-style: solid;
    padding-bottom: 1px;
}

md-select:not([disabled]):focus .md-select-value {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    padding-bottom: 0;
}

md-select:not([disabled]):focus.ng-invalid.ng-touched .md-select-value {
    padding-bottom: 0;
}

md-input-container.md-input-has-value .md-select-value>span:not(.md-select-icon) {
    -webkit-transform: translate3d(0, 1px, 0);
    transform: translate3d(0, 1px, 0);
}

.md-select-value {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 2px 2px 1px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    background-color: transparent;
    position: relative;
    box-sizing: content-box;
    min-width: 64px;
    min-height: 26px;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
}

.md-select-value>span:not(.md-select-icon) {
    max-width: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.md-select-value>span:not(.md-select-icon) .md-text {
    display: inline;
}

.md-select-value .md-select-icon {
    display: block;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end;
    text-align: end;
    width: 24px;
    margin: 0 4px;
    -webkit-transform: translate3d(0, -2px, 0);
    transform: translate3d(0, -2px, 0);
    font-size: 1.2rem;
}

.md-select-value .md-select-icon:after {
    display: block;
    content: '\25BC';
    position: relative;
    top: 2px;
    speak: none;
    font-size: 13px;
    -webkit-transform: scaleY(0.5) scaleX(1);
    transform: scaleY(0.5) scaleX(1);
}

.md-select-value.md-select-placeholder {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    order: 1;
    pointer-events: none;
    -webkit-font-smoothing: antialiased;
    padding-left: 2px;
    z-index: 1;
}

md-select-menu {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    max-height: 256px;
    min-height: 48px;
    overflow-y: hidden;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    -webkit-transform: scale(1);
    transform: scale(1);
}

md-select-menu.md-reverse {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
    flex-direction: column-reverse;
}

md-select-menu:not(.md-overflow) md-content {
    padding-top: 8px;
    padding-bottom: 8px;
}

[dir=rtl] md-select-menu {
    -webkit-transform-origin: right top;
    transform-origin: right top;
}

md-select-menu md-content {
    min-width: 136px;
    min-height: 48px;
    max-height: 256px;
    overflow-y: auto;
}

md-select-menu>* {
    opacity: 0;
}

md-option {
    cursor: pointer;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: auto;
    -webkit-transition: background 0.15s linear;
    transition: background 0.15s linear;
    padding: 0 16px 0 16px;
    height: 48px;
}

md-option[disabled] {
    cursor: default;
}

md-option:focus {
    outline: none;
}

md-option .md-text {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

md-optgroup {
    display: block;
}

md-optgroup label {
    display: block;
    font-size: 14px;
    text-transform: uppercase;
    padding: 16px;
    font-weight: 500;
}

md-optgroup md-option {
    padding-left: 32px;
    padding-right: 32px;
}

@media screen and (-ms-high-contrast: active) {
    .md-select-backdrop {
        background-color: transparent;
    }
    md-select-menu {
        border: 1px solid #fff;
    }
}

md-select-menu[multiple] md-option.md-checkbox-enabled {
    padding-left: 40px;
    padding-right: 16px;
}

[dir=rtl] md-select-menu[multiple] md-option.md-checkbox-enabled {
    padding-left: 16px;
}

[dir=rtl] md-select-menu[multiple] md-option.md-checkbox-enabled {
    padding-right: 40px;
}

md-select-menu[multiple] md-option.md-checkbox-enabled .md-container {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    box-sizing: border-box;
    display: inline-block;
    width: 20px;
    height: 20px;
    left: 0;
    right: auto;
}

[dir=rtl] md-select-menu[multiple] md-option.md-checkbox-enabled .md-container {
    left: auto;
}

[dir=rtl] md-select-menu[multiple] md-option.md-checkbox-enabled .md-container {
    right: 0;
}

md-select-menu[multiple] md-option.md-checkbox-enabled .md-container:before {
    box-sizing: border-box;
    background-color: transparent;
    border-radius: 50%;
    content: '';
    position: absolute;
    display: block;
    height: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    width: auto;
}

md-select-menu[multiple] md-option.md-checkbox-enabled .md-container:after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
}

md-select-menu[multiple] md-option.md-checkbox-enabled .md-container .md-ripple-container {
    position: absolute;
    display: block;
    width: auto;
    height: auto;
    left: -15px;
    top: -15px;
    right: -15px;
    bottom: -15px;
}

md-select-menu[multiple] md-option.md-checkbox-enabled .md-icon {
    box-sizing: border-box;
    -webkit-transition: 240ms;
    transition: 240ms;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-width: 2px;
    border-style: solid;
    border-radius: 2px;
}

md-select-menu[multiple] md-option.md-checkbox-enabled[selected] .md-icon {
    border-color: transparent;
}

md-select-menu[multiple] md-option.md-checkbox-enabled[selected] .md-icon:after {
    box-sizing: border-box;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    left: 4.66667px;
    top: 0.22222px;
    display: table;
    width: 6.66667px;
    height: 13.33333px;
    border-width: 2px;
    border-style: solid;
    border-top: 0;
    border-left: 0;
    content: '';
}

md-select-menu[multiple] md-option.md-checkbox-enabled[disabled] {
    cursor: default;
}

md-select-menu[multiple] md-option.md-checkbox-enabled.md-indeterminate .md-icon:after {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: table;
    width: 12px;
    height: 2px;
    border-width: 2px;
    border-style: solid;
    border-top: 0;
    border-left: 0;
    content: '';
}

md-select-menu[multiple] md-option.md-checkbox-enabled .md-container {
    margin-left: 10.66667px;
    margin-right: auto;
}

[dir=rtl] md-select-menu[multiple] md-option.md-checkbox-enabled .md-container {
    margin-left: auto;
}

[dir=rtl] md-select-menu[multiple] md-option.md-checkbox-enabled .md-container {
    margin-right: 10.66667px;
}

md-sidenav {
    box-sizing: border-box;
    position: absolute;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    z-index: 60;
    width: 320px;
    max-width: 320px;
    bottom: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

md-sidenav ul {
    list-style: none;
}

md-sidenav.md-closed {
    display: none;
}

md-sidenav.md-closed-add,
md-sidenav.md-closed-remove {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-transition: 0.2s ease-in all;
    transition: 0.2s ease-in all;
}

md-sidenav.md-closed-add.md-closed-add-active,
md-sidenav.md-closed-remove.md-closed-remove-active {
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

md-sidenav.md-locked-open-add,
md-sidenav.md-locked-open-remove {
    position: static;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

md-sidenav.md-locked-open,
md-sidenav.md-locked-open.md-closed,
md-sidenav.md-locked-open.md-closed.md-sidenav-left,
md-sidenav.md-locked-open.md-closed,
md-sidenav.md-locked-open.md-closed.md-sidenav-right {
    position: static;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

md-sidenav.md-locked-open-remove.md-closed {
    position: static;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

md-sidenav.md-closed.md-locked-open-add {
    position: static;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-transform: translate3d(0%, 0, 0);
    transform: translate3d(0%, 0, 0);
}

md-sidenav.md-closed.md-locked-open-add:not(.md-locked-open-add-active) {
    -webkit-transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    width: 0 !important;
    min-width: 0 !important;
}

md-sidenav.md-closed.md-locked-open-add-active {
    -webkit-transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
}

md-sidenav.md-locked-open-remove-active {
    -webkit-transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), min-width 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    width: 0 !important;
    min-width: 0 !important;
}

.md-sidenav-backdrop.md-locked-open {
    display: none;
}

.md-sidenav-left,
md-sidenav {
    left: 0;
    top: 0;
    -webkit-transform: translate3d(0%, 0, 0);
    transform: translate3d(0%, 0, 0);
}

.md-sidenav-left.md-closed,
md-sidenav.md-closed {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
}

.md-sidenav-right {
    left: 100%;
    top: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
}

.md-sidenav-right.md-closed {
    -webkit-transform: translate(0%, 0);
    transform: translate(0%, 0);
}

@media (min-width: 600px) {
    md-sidenav {
        max-width: 400px;
    }
}

@media (max-width: 456px) {
    md-sidenav {
        width: calc(100% - 56px);
        min-width: calc(100% - 56px);
        max-width: calc(100% - 56px);
    }
}

@media screen and (-ms-high-contrast: active) {
    .md-sidenav-left,
    md-sidenav {
        border-right: 1px solid #fff;
    }
    .md-sidenav-right {
        border-left: 1px solid #fff;
    }
}

@-webkit-keyframes sliderFocusThumb {
    0% {
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
    }
    30% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    100% {
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
    }
}

@keyframes sliderFocusThumb {
    0% {
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
    }
    30% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    100% {
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
    }
}

@-webkit-keyframes sliderDiscreteFocusThumb {
    0% {
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
    }
    50% {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
}

@keyframes sliderDiscreteFocusThumb {
    0% {
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
    }
    50% {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
}

@-webkit-keyframes sliderDiscreteFocusRing {
    0% {
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
        opacity: 0;
    }
    50% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
}

@keyframes sliderDiscreteFocusRing {
    0% {
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
        opacity: 0;
    }
    50% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
}

md-slider {
    height: 48px;
    min-width: 128px;
    position: relative;
    margin-left: 4px;
    margin-right: 4px;
    padding: 0;
    display: block;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;

}

md-slider *,
md-slider *:after {
    box-sizing: border-box;
}

md-slider .md-slider-wrapper {
    outline: none;
    width: 100%;
    height: 100%;
}

md-slider .md-slider-content {
    position: relative;
}

md-slider .md-track-container {
    width: 100%;
    position: absolute;
    top: 23px;
    height: 2px;
}

md-slider .md-track {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
}

md-slider .md-track-fill {
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transition-property: width, height;
    transition-property: width, height;
}

md-slider .md-track-ticks {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
}

md-slider .md-track-ticks canvas {
    width: 100%;
    height: 100%;
}

md-slider .md-thumb-container {
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transition-property: left, right, bottom;
    transition-property: left, right, bottom;
}

[dir=rtl] md-slider .md-thumb-container {
    left: auto;
    right: 0;
}

md-slider .md-thumb {
    z-index: 1;
    position: absolute;
    left: -10px;
    top: 14px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

[dir=rtl] md-slider .md-thumb {
    left: auto;
    right: -10px;
}

md-slider .md-thumb:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border-width: 3px;
    border-style: solid;
    -webkit-transition: inherit;
    transition: inherit;
}

md-slider .md-sign {

    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: absolute;
    left: -14px;
    top: -17px;
    width: 28px;
    height: 28px;
    border-radius: 28px;
    -webkit-transform: scale(0.4) translate3d(0, 67.5px, 0);
    transform: scale(0.4) translate3d(0, 67.5px, 0);
    -webkit-transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);

}

md-slider .md-sign:after {
    position: absolute;
    content: '';
    left: 0px;
    border-radius: 16px;
    top: 19px;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top-width: 16px;
    border-top-style: solid;
    opacity: 0;
    -webkit-transform: translate3d(0, -8px, 0);
    transform: translate3d(0, -8px, 0);
    -webkit-transition: all 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: all 0.2s cubic-bezier(0.35, 0, 0.25, 1);
}

[dir=rtl] md-slider .md-sign:after {
    left: auto;
    right: 0px;
}

md-slider .md-sign .md-thumb-text {
    z-index: 1;
    font-size: 12px;
    font-weight: bold;
}

md-slider .md-focus-ring {
    position: absolute;
    left: -17px;
    top: 7px;
    width: 34px;
    height: 34px;
    border-radius: 34px;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    opacity: 0;
    -webkit-transition: all 0.35s cubic-bezier(0.35, 0, 0.25, 1);
    transition: all 0.35s cubic-bezier(0.35, 0, 0.25, 1);
}

[dir=rtl] md-slider .md-focus-ring {
    left: auto;
    right: -17px;
}

md-slider .md-disabled-thumb {
    position: absolute;
    left: -14px;
    top: 10px;
    width: 28px;
    height: 28px;
    border-radius: 28px;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    border-width: 4px;
    border-style: solid;
    display: none;
}

[dir=rtl] md-slider .md-disabled-thumb {
    left: auto;
    right: -14px;
}

md-slider.md-min .md-sign {
    opacity: 0;
}

md-slider:focus {
    outline: none;
}

md-slider.md-dragging .md-thumb-container,
md-slider.md-dragging .md-track-fill {
    -webkit-transition: none;
    transition: none;
}

md-slider:not([md-discrete]) {

}

md-slider:not([md-discrete]) .md-track-ticks,
md-slider:not([md-discrete]) .md-sign {
    display: none;
}

md-slider:not([md-discrete]):not([disabled]) .md-slider-wrapper .md-thumb:hover {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
}

md-slider:not([md-discrete]):not([disabled]) .md-slider-wrapper.md-focused .md-focus-ring {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
}

md-slider:not([md-discrete]):not([disabled]) .md-slider-wrapper.md-focused .md-thumb {
    -webkit-animation: sliderFocusThumb 0.7s cubic-bezier(0.35, 0, 0.25, 1);
    animation: sliderFocusThumb 0.7s cubic-bezier(0.35, 0, 0.25, 1);
}

md-slider:not([md-discrete]):not([disabled]).md-active .md-slider-wrapper .md-thumb {
    -webkit-transform: scale(1);
    transform: scale(1);
}

md-slider[md-discrete]:not([disabled]) .md-slider-wrapper.md-focused .md-focus-ring {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-animation: sliderDiscreteFocusRing 0.5s cubic-bezier(0.35, 0, 0.25, 1);
    animation: sliderDiscreteFocusRing 0.5s cubic-bezier(0.35, 0, 0.25, 1);
}

md-slider[md-discrete]:not([disabled]) .md-slider-wrapper.md-focused .md-thumb {
    -webkit-animation: sliderDiscreteFocusThumb 0.5s cubic-bezier(0.35, 0, 0.25, 1);
    animation: sliderDiscreteFocusThumb 0.5s cubic-bezier(0.35, 0, 0.25, 1);
}

md-slider[md-discrete]:not([disabled]) .md-slider-wrapper.md-focused .md-thumb,
md-slider[md-discrete]:not([disabled]).md-active .md-thumb {
    -webkit-transform: scale(0);
    transform: scale(0);
}

md-slider[md-discrete]:not([disabled]) .md-slider-wrapper.md-focused .md-sign,
md-slider[md-discrete]:not([disabled]) .md-slider-wrapper.md-focused .md-sign:after,
md-slider[md-discrete]:not([disabled]).md-active .md-sign,
md-slider[md-discrete]:not([disabled]).md-active .md-sign:after {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0) scale(1);
    transform: translate3d(0, 0, 0) scale(1);
}

md-slider[md-discrete][disabled][readonly] .md-thumb {
    -webkit-transform: scale(0);
    transform: scale(0);
}

md-slider[md-discrete][disabled][readonly] .md-sign,
md-slider[md-discrete][disabled][readonly] .md-sign:after {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0) scale(1);
    transform: translate3d(0, 0, 0) scale(1);
}

md-slider[disabled] .md-track-fill {
    display: none;
}

md-slider[disabled] .md-track-ticks {
    opacity: 0;
}

md-slider[disabled]:not([readonly]) .md-sign {
    opacity: 0;
}

md-slider[disabled] .md-thumb {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
}

md-slider[disabled] .md-disabled-thumb {
    display: block;
}

md-slider[md-vertical] {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    min-height: 128px;
    min-width: 0;
}

md-slider[md-vertical] .md-slider-wrapper {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding-top: 12px;
    padding-bottom: 12px;
    width: 48px;
    -webkit-align-self: center;
    align-self: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}

md-slider[md-vertical] .md-track-container {
    height: 100%;
    width: 2px;
    top: 0;
    left: calc(50% - (2px / 2));
}

md-slider[md-vertical] .md-thumb-container {
    top: auto;
    margin-bottom: 23px;
    left: calc(50% - 1px);
    bottom: 0;
}

md-slider[md-vertical] .md-thumb-container .md-thumb:after {
    left: 1px;
}

md-slider[md-vertical] .md-thumb-container .md-focus-ring {
    left: -16px;
}

md-slider[md-vertical] .md-track-fill {
    bottom: 0;
}

md-slider[md-vertical][md-discrete] .md-sign {
    left: -40px;
    top: 9.5px;
    -webkit-transform: scale(0.4) translate3d(67.5px, 0, 0);
    transform: scale(0.4) translate3d(67.5px, 0, 0);

}

md-slider[md-vertical][md-discrete] .md-sign:after {
    top: 9.5px;
    left: 19px;
    border-top: 14px solid transparent;
    border-right: 0;
    border-bottom: 14px solid transparent;
    border-left-width: 16px;
    border-left-style: solid;
    opacity: 0;
    -webkit-transform: translate3d(0, -8px, 0);
    transform: translate3d(0, -8px, 0);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

md-slider[md-vertical][md-discrete] .md-sign .md-thumb-text {
    z-index: 1;
    font-size: 12px;
    font-weight: bold;
}

md-slider[md-vertical][md-discrete].md-active .md-sign:after,
md-slider[md-vertical][md-discrete] .md-focused .md-sign:after,
md-slider[md-vertical][md-discrete][disabled][readonly] .md-sign:after {
    top: 0;
}

md-slider[md-vertical][disabled][readonly] .md-thumb {
    -webkit-transform: scale(0);
    transform: scale(0);
}

md-slider[md-vertical][disabled][readonly] .md-sign,
md-slider[md-vertical][disabled][readonly] .md-sign:after {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0) scale(1);
    transform: translate3d(0, 0, 0) scale(1);
}

md-slider[md-invert]:not([md-vertical]) .md-track-fill {
    left: auto;
    right: 0;
}

[dir=rtl] md-slider[md-invert]:not([md-vertical]) .md-track-fill {
    left: 0;
}

[dir=rtl] md-slider[md-invert]:not([md-vertical]) .md-track-fill {
    right: auto;
}

md-slider[md-invert][md-vertical] .md-track-fill {
    bottom: auto;
    top: 0;
}

md-slider-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
}

md-slider-container>*:first-child:not(md-slider),
md-slider-container>*:last-child:not(md-slider) {
    min-width: 25px;
    max-width: 42px;
    height: 25px;
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transition-property: color, max-width;
    transition-property: color, max-width;
}

md-slider-container>*:first-child:not(md-slider) {
    margin-right: 16px;
}

[dir=rtl] md-slider-container>*:first-child:not(md-slider) {
    margin-right: auto;
    margin-left: 16px;
}

md-slider-container>*:last-child:not(md-slider) {
    margin-left: 16px;
}

[dir=rtl] md-slider-container>*:last-child:not(md-slider) {
    margin-left: auto;
    margin-right: 16px;
}

md-slider-container[md-vertical] {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
}

md-slider-container[md-vertical]>*:first-child:not(md-slider),
md-slider-container[md-vertical]>*:last-child:not(md-slider) {
    margin-right: 0;
    margin-left: 0;
    text-align: center;
}

md-slider-container md-input-container input[type="number"] {
    text-align: center;
    padding-left: 15px;
    height: 50px;
    margin-top: -25px;
}

[dir=rtl] md-slider-container md-input-container input[type="number"] {
    padding-left: 0;
    padding-right: 15px;
}

@media screen and (-ms-high-contrast: active) {
    md-slider.md-default-theme .md-track {
        border-bottom: 1px solid #fff;
    }
}

.md-sticky-clone {
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    position: absolute !important;
    -webkit-transform: translate3d(-9999px, -9999px, 0);
    transform: translate3d(-9999px, -9999px, 0);
}

.md-sticky-clone[sticky-state="active"] {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

.md-sticky-clone[sticky-state="active"]:not(.md-sticky-no-effect) .md-subheader-inner {
    -webkit-animation: subheaderStickyHoverIn 0.3s ease-out both;
    animation: subheaderStickyHoverIn 0.3s ease-out both;
}

@-webkit-keyframes subheaderStickyHoverIn {
    0% {
        box-shadow: 0 0 0 0 transparent;
    }
    100% {
        box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16);
    }
}

@keyframes subheaderStickyHoverIn {
    0% {
        box-shadow: 0 0 0 0 transparent;
    }
    100% {
        box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16);
    }
}

@-webkit-keyframes subheaderStickyHoverOut {
    0% {
        box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16);
    }
    100% {
        box-shadow: 0 0 0 0 transparent;
    }
}

@keyframes subheaderStickyHoverOut {
    0% {
        box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.16);
    }
    100% {
        box-shadow: 0 0 0 0 transparent;
    }
}

.md-subheader-wrapper:not(.md-sticky-no-effect) {
    -webkit-transition: 0.2s ease-out margin;
    transition: 0.2s ease-out margin;
}

.md-subheader-wrapper:not(.md-sticky-no-effect) .md-subheader {
    margin: 0;
}

.md-subheader-wrapper:not(.md-sticky-no-effect).md-sticky-clone {
    z-index: 2;
}

.md-subheader-wrapper:not(.md-sticky-no-effect)[sticky-state="active"] {
    margin-top: -2px;
}

.md-subheader-wrapper:not(.md-sticky-no-effect):not(.md-sticky-clone)[sticky-prev-state="active"] .md-subheader-inner:after {
    -webkit-animation: subheaderStickyHoverOut 0.3s ease-out both;
    animation: subheaderStickyHoverOut 0.3s ease-out both;
}

.md-subheader {
    display: block;
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    margin: 0 0 0 0;
    position: relative;
}

.md-subheader .md-subheader-inner {
    display: block;
    padding: 16px;
}

.md-subheader .md-subheader-content {
    display: block;
    z-index: 1;
    position: relative;
}

[md-swipe-left],
[md-swipe-right] {
    touch-action: pan-y;
}

[md-swipe-up],
[md-swipe-down] {
    touch-action: pan-x;
}

.md-inline-form md-switch {
    margin-top: 18px;
    margin-bottom: 19px;
}

md-switch {
    margin: 16px 0;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 30px;
    line-height: 28px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    margin-left: inherit;
    margin-right: 16px;
}

[dir=rtl] md-switch {
    margin-left: 16px;
}

[dir=rtl] md-switch {
    margin-right: inherit;
}

md-switch:last-of-type {
    margin-left: inherit;
    margin-right: 0;
}

[dir=rtl] md-switch:last-of-type {
    margin-left: 0;
}

[dir=rtl] md-switch:last-of-type {
    margin-right: inherit;
}

md-switch[disabled] {
    cursor: default;
}

md-switch[disabled] .md-container {
    cursor: default;
}

md-switch .md-container {
    cursor: -webkit-grab;
    cursor: grab;
    width: 36px;
    height: 24px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: 8px;
    float: left;
}

[dir=rtl] md-switch .md-container {
    margin-right: 0px;
    margin-left: 8px;
}

md-switch.md-inverted .md-container {
    margin-right: initial;
    margin-left: 8px;
}

[dir=rtl] md-switch.md-inverted .md-container {
    margin-right: 8px;
}

[dir=rtl] md-switch.md-inverted .md-container {
    margin-left: initial;
}

md-switch:not([disabled]) .md-dragging,
md-switch:not([disabled]).md-dragging .md-container {
    cursor: -webkit-grabbing;
    cursor: grabbing;
}

md-switch.md-focused:not([disabled]) .md-thumb:before {
    left: -8px;
    top: -8px;
    right: -8px;
    bottom: -8px;
}

md-switch.md-focused:not([disabled]):not(.md-checked) .md-thumb:before {
    background-color: rgba(0, 0, 0, 0.12);
}

md-switch .md-label {
    border-color: transparent;
    border-width: 0;
    float: left;
}

md-switch .md-bar {
    left: 1px;
    width: 34px;
    top: 5px;
    height: 14px;
    border-radius: 8px;
    position: absolute;
}

md-switch .md-thumb-container {
    top: 2px;
    left: 0;
    width: 16px;
    position: absolute;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 1;
}

md-switch.md-checked .md-thumb-container {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
}

md-switch .md-thumb {
    position: absolute;
    margin: 0;
    left: 0;
    top: 0;
    outline: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}

md-switch .md-thumb:before {
    background-color: transparent;
    border-radius: 50%;
    content: '';
    position: absolute;
    display: block;
    height: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    width: auto;
}

md-switch .md-thumb .md-ripple-container {
    position: absolute;
    display: block;
    width: auto;
    height: auto;
    left: -20px;
    top: -20px;
    right: -20px;
    bottom: -20px;
}

md-switch:not(.md-dragging) .md-bar,
md-switch:not(.md-dragging) .md-thumb-container,
md-switch:not(.md-dragging) .md-thumb {
    -webkit-transition: all 0.08s linear;
    transition: all 0.08s linear;
    -webkit-transition-property: background-color, -webkit-transform;
    transition-property: background-color, -webkit-transform;
    transition-property: transform, background-color;
    transition-property: transform, background-color, -webkit-transform;
}

md-switch:not(.md-dragging) .md-bar,
md-switch:not(.md-dragging) .md-thumb {
    -webkit-transition-delay: 0.05s;
    transition-delay: 0.05s;
}

@media screen and (-ms-high-contrast: active) {
    md-switch.md-default-theme .md-bar {
        background-color: #666;
    }
    md-switch.md-default-theme.md-checked .md-bar {
        background-color: #9E9E9E;
    }
    md-switch.md-default-theme .md-thumb {
        background-color: #fff;
    }
}

@-webkit-keyframes md-tab-content-hide {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes md-tab-content-hide {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

md-tab-data {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0;
}

md-tabs {
    display: block;
    margin: 0;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
}

md-tabs:not(.md-no-tab-content):not(.md-dynamic-height) {
    min-height: 248px;
}

md-tabs[md-align-tabs="bottom"] {
    padding-bottom: 48px;
}

md-tabs[md-align-tabs="bottom"] md-tabs-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 48px;
    z-index: 2;
}

md-tabs[md-align-tabs="bottom"] md-tabs-content-wrapper {
    top: 0;
    bottom: 48px;
}

md-tabs.md-dynamic-height md-tabs-content-wrapper {
    min-height: 0;
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    overflow: visible;
}

md-tabs.md-dynamic-height md-tab-content.md-active {
    position: relative;
}

md-tabs[md-border-bottom] md-tabs-wrapper {
    border-width: 0 0 1px;
    border-style: solid;
}

md-tabs[md-border-bottom]:not(.md-dynamic-height) md-tabs-content-wrapper {
    top: 49px;
}

md-tabs-wrapper {
    display: block;
    position: relative;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

md-tabs-wrapper md-prev-button,
md-tabs-wrapper md-next-button {
    height: 100%;
    width: 32px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    line-height: 1em;
    z-index: 2;
    cursor: pointer;
    font-size: 16px;
    background: transparent no-repeat center center;
    -webkit-transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);
    transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);
}

md-tabs-wrapper md-prev-button:focus,
md-tabs-wrapper md-next-button:focus {
    outline: none;
}

md-tabs-wrapper md-prev-button.md-disabled,
md-tabs-wrapper md-next-button.md-disabled {
    opacity: 0.25;
    cursor: default;
}

md-tabs-wrapper md-prev-button.ng-leave,
md-tabs-wrapper md-next-button.ng-leave {
    -webkit-transition: none;
    transition: none;
}

md-tabs-wrapper md-prev-button md-icon,
md-tabs-wrapper md-next-button md-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
}

[dir="rtl"] md-tabs-wrapper md-prev-button,
[dir="rtl"] md-tabs-wrapper md-next-button {
    -webkit-transform: rotateY(180deg) translateY(-50%);
    transform: rotateY(180deg) translateY(-50%);
}

md-tabs-wrapper md-prev-button {
    left: 0;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMjA4IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyIAkJIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4gPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+IDwvZz4gPC9nPiA8ZyBpZD0iR3JpZCIgZGlzcGxheT0ibm9uZSI+IDxnIGRpc3BsYXk9ImlubGluZSI+IDwvZz4gPC9nPiA8L3N2Zz4NCg==");
}

[dir=rtl] md-tabs-wrapper md-prev-button {
    left: auto;
    right: 0;
}

md-tabs-wrapper md-next-button {
    right: 0;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPiA8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPiA8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iSGVhZGVyIj4gPGc+IDxyZWN0IHg9Ii02MTgiIHk9Ii0xMzM2IiBmaWxsPSJub25lIiB3aWR0aD0iMTQwMCIgaGVpZ2h0PSIzNjAwIi8+IDwvZz4gPC9nPiA8ZyBpZD0iTGFiZWwiPiA8L2c+IDxnIGlkPSJJY29uIj4gPGc+IDxwb2x5Z29uIHBvaW50cz0iMTAsNiA4LjYsNy40IDEzLjIsMTIgOC42LDE2LjYgMTAsMTggMTYsMTIgCQkiIHN0eWxlPSJmaWxsOndoaXRlOyIvPiA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz4gPC9nPiA8L2c+IDxnIGlkPSJHcmlkIiBkaXNwbGF5PSJub25lIj4gPGcgZGlzcGxheT0iaW5saW5lIj4gPC9nPiA8L2c+IDwvc3ZnPg0K");
}

[dir=rtl] md-tabs-wrapper md-next-button {
    right: auto;
    left: 0;
}

md-tabs-wrapper md-next-button md-icon {
    -webkit-transform: translate3d(-50%, -50%, 0) rotate(180deg);
    transform: translate3d(-50%, -50%, 0) rotate(180deg);
}

md-tabs-wrapper.md-stretch-tabs md-pagination-wrapper {
    width: 100%;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
}

md-tabs-wrapper.md-stretch-tabs md-pagination-wrapper md-tab-item {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
}

md-tabs-canvas {
    position: relative;
    overflow: hidden;
    display: block;
    height: 48px;
}

md-tabs-canvas:after {
    content: '';
    display: table;
    clear: both;
}

md-tabs-canvas .md-dummy-wrapper {
    position: absolute;
    top: 0;
    left: 0;
}

[dir=rtl] md-tabs-canvas .md-dummy-wrapper {
    left: auto;
    right: 0;
}

md-tabs-canvas.md-paginated {
    margin: 0 32px;
}

md-tabs-canvas.md-center-tabs {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    text-align: center;
}

md-tabs-canvas.md-center-tabs .md-tab {
    float: none;
    display: inline-block;
}

md-pagination-wrapper {
    height: 48px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
    transition: -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
    position: absolute;
    left: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

md-pagination-wrapper:after {
    content: '';
    display: table;
    clear: both;
}

[dir=rtl] md-pagination-wrapper {
    left: auto;
    right: 0;
}

md-pagination-wrapper.md-center-tabs {
    position: relative;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}

md-tabs-content-wrapper {
    display: block;
    position: absolute;
    top: 48px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

md-tab-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
    transition: -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
    overflow: auto;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

md-tab-content.md-no-scroll {
    bottom: auto;
    overflow: hidden;
}

md-tab-content.ng-leave,
md-tab-content.md-no-transition {
    -webkit-transition: none;
    transition: none;
}

md-tab-content.md-left:not(.md-active) {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-animation: 1s md-tab-content-hide;
    animation: 1s md-tab-content-hide;
    visibility: hidden;
}

[dir=rtl] md-tab-content.md-left:not(.md-active) {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
}

md-tab-content.md-left:not(.md-active) * {
    -webkit-transition: visibility 0s linear;
    transition: visibility 0s linear;
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s;
    visibility: hidden;
}

md-tab-content.md-right:not(.md-active) {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    -webkit-animation: 1s md-tab-content-hide;
    animation: 1s md-tab-content-hide;
    visibility: hidden;
}

[dir=rtl] md-tab-content.md-right:not(.md-active) {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}

md-tab-content.md-right:not(.md-active) * {
    -webkit-transition: visibility 0s linear;
    transition: visibility 0s linear;
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s;
    visibility: hidden;
}

md-tab-content>div {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 100%;
    flex: 1 0 100%;
    min-width: 0;
}

md-tab-content>div.ng-leave {
    -webkit-animation: 1s md-tab-content-hide;
    animation: 1s md-tab-content-hide;
}

md-ink-bar {
    position: absolute;
    left: auto;
    right: auto;
    bottom: 0;
    height: 2px;
}

md-ink-bar.md-left {
    -webkit-transition: left 0.125s cubic-bezier(0.35, 0, 0.25, 1), right 0.25s cubic-bezier(0.35, 0, 0.25, 1);
    transition: left 0.125s cubic-bezier(0.35, 0, 0.25, 1), right 0.25s cubic-bezier(0.35, 0, 0.25, 1);
}

md-ink-bar.md-right {
    -webkit-transition: left 0.25s cubic-bezier(0.35, 0, 0.25, 1), right 0.125s cubic-bezier(0.35, 0, 0.25, 1);
    transition: left 0.25s cubic-bezier(0.35, 0, 0.25, 1), right 0.125s cubic-bezier(0.35, 0, 0.25, 1);
}

md-tab {
    position: absolute;
    z-index: -1;
    left: -9999px;
}

.md-tab {
    font-size: 14px;
    text-align: center;
    line-height: 24px;
    padding: 12px 24px;
    -webkit-transition: background-color 0.35s cubic-bezier(0.35, 0, 0.25, 1);
    transition: background-color 0.35s cubic-bezier(0.35, 0, 0.25, 1);
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    text-transform: uppercase;
    float: left;
    font-weight: 500;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
}

[dir=rtl] .md-tab {
    float: right;
}

.md-tab.md-focused,
.md-tab:focus {
    box-shadow: none;
    outline: none;
}

.md-tab.md-active {
    cursor: default;
}

.md-tab.md-disabled {
    pointer-events: none;
    touch-action: pan-y;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    opacity: 0.5;
    cursor: default;
}

.md-tab.ng-leave {
    -webkit-transition: none;
    transition: none;
}

md-toolbar+md-tabs,
md-toolbar+md-dialog-content md-tabs {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.md-toast-text {
    padding: 0 6px;
}

md-toast {
    position: absolute;
    z-index: 105;
    box-sizing: border-box;
    cursor: default;
    overflow: hidden;
    padding: 8px;
    opacity: 1;
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

}

md-toast .md-toast-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    max-height: 168px;
    max-width: 100%;
    min-height: 48px;
    padding: 0 18px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    border-radius: 2px;
    font-size: 14px;
    overflow: hidden;
    -webkit-transform: translate3d(0, 0, 0) rotateZ(0deg);
    transform: translate3d(0, 0, 0) rotateZ(0deg);
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
}

md-toast .md-toast-content::before {
    content: '';
    min-height: 48px;
    visibility: hidden;
    display: inline-block;
}

[dir=rtl] md-toast .md-toast-content {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
}

md-toast .md-toast-content span {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 0%;
    flex: 1 1 0%;
    box-sizing: border-box;
    min-width: 0;
}

md-toast.md-capsule {
    border-radius: 24px;
}

md-toast.md-capsule .md-toast-content {
    border-radius: 24px;
}

md-toast.ng-leave-active .md-toast-content {
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
}

md-toast.md-swipeleft .md-toast-content,
md-toast.md-swiperight .md-toast-content,
md-toast.md-swipeup .md-toast-content,
md-toast.md-swipedown .md-toast-content {
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

md-toast.ng-enter {
    opacity: 0;
}

md-toast.ng-enter .md-toast-content {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
}

md-toast.ng-enter.md-top .md-toast-content {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
}

md-toast.ng-enter.ng-enter-active {
    opacity: 1;
}

md-toast.ng-enter.ng-enter-active .md-toast-content {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

md-toast.ng-leave.ng-leave-active .md-toast-content {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
}

md-toast.ng-leave.ng-leave-active.md-swipeup .md-toast-content {
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
}

md-toast.ng-leave.ng-leave-active.md-swipedown .md-toast-content {
    -webkit-transform: translate3d(0, 50%, 0);
    transform: translate3d(0, 50%, 0);
}

md-toast.ng-leave.ng-leave-active.md-top .md-toast-content {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
}

md-toast .md-action {
    line-height: 19px;
    margin-left: 24px;
    margin-right: 0;
    cursor: pointer;
    text-transform: uppercase;
    float: right;
}

md-toast .md-button {
    min-width: 0;
    margin-right: 0;
    margin-left: 12px;
}

[dir=rtl] md-toast .md-button {
    margin-right: 12px;
}

[dir=rtl] md-toast .md-button {
    margin-left: 0;
}

@media (max-width: 959px) {
    md-toast {
        left: 0;
        right: 0;
        width: 100%;
        max-width: 100%;
        min-width: 0;
        border-radius: 0;
        bottom: 0;
        padding: 0;
    }
    md-toast.ng-leave.ng-leave-active.md-swipeup .md-toast-content {
        -webkit-transform: translate3d(0, -50%, 0);
        transform: translate3d(0, -50%, 0);
    }
    md-toast.ng-leave.ng-leave-active.md-swipedown .md-toast-content {
        -webkit-transform: translate3d(0, 50%, 0);
        transform: translate3d(0, 50%, 0);
    }
}

@media (min-width: 960px) {
    md-toast {
        min-width: 304px;

    }
    md-toast.md-bottom {
        bottom: 0;
    }
    md-toast.md-left {
        left: 0;
    }
    md-toast.md-right {
        right: 0;
    }
    md-toast.md-top {
        top: 0;
    }
    md-toast._md-start {
        left: 0;
    }
    [dir=rtl] md-toast._md-start {
        left: auto;
        right: 0;
    }
    md-toast._md-end {
        right: 0;
    }
    [dir=rtl] md-toast._md-end {
        right: auto;
        left: 0;
    }
    md-toast.ng-leave.ng-leave-active.md-swipeleft .md-toast-content {
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);
    }
    md-toast.ng-leave.ng-leave-active.md-swiperight .md-toast-content {
        -webkit-transform: translate3d(50%, 0, 0);
        transform: translate3d(50%, 0, 0);
    }
}

@media (min-width: 1920px) {
    md-toast .md-toast-content {
        max-width: 568px;
    }
}

@media screen and (-ms-high-contrast: active) {
    md-toast {
        border: 1px solid #fff;
    }
}

.md-toast-animating {
    overflow: hidden !important;
}

md-toolbar {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    position: relative;
    z-index: 2;
    font-size: 20px;
    min-height: 64px;
    width: 100%;
}

md-toolbar._md-toolbar-transitions {
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    transition-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    -webkit-transition-property: background-color, fill, color;
    transition-property: background-color, fill, color;
}

md-toolbar.md-whiteframe-z1-add,
md-toolbar.md-whiteframe-z1-remove {
    -webkit-transition: box-shadow 0.5s linear;
    transition: box-shadow 0.5s linear;
}

md-toolbar md-toolbar-filler {
    width: 72px;
}

md-toolbar *,
md-toolbar *:before,
md-toolbar *:after {
    box-sizing: border-box;
}

md-toolbar.ng-animate {
    -webkit-transition: none;
    transition: none;
}

md-toolbar.md-tall {
    height: 128px;
    min-height: 128px;
    max-height: 128px;
}

md-toolbar.md-medium-tall {
    height: 88px;
    min-height: 88px;
    max-height: 88px;
}

md-toolbar.md-medium-tall .md-toolbar-tools {
    height: 48px;
    min-height: 48px;
    max-height: 48px;
}

md-toolbar>.md-indent {
    margin-left: 64px;
}

[dir=rtl] md-toolbar>.md-indent {
    margin-left: auto;
    margin-right: 64px;
}

md-toolbar~md-content>md-list {
    padding: 0;
}

md-toolbar~md-content>md-list md-list-item:last-child md-divider {
    display: none;
}

.md-toolbar-tools {
    font-size: 20px;
    letter-spacing: 0.005em;
    box-sizing: border-box;
    font-weight: 400;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    width: 100%;
    height: 64px;
    max-height: 64px;
    padding: 0 16px;
    margin: 0;
}

.md-toolbar-tools h1,
.md-toolbar-tools h2,
.md-toolbar-tools h3 {
    font-size: inherit;
    font-weight: inherit;
    margin: inherit;
}

.md-toolbar-tools a {
    color: inherit;
    text-decoration: none;
}

.md-toolbar-tools .fill-height {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.md-toolbar-tools md-checkbox {
    margin: inherit;
}

.md-toolbar-tools .md-button {
    margin-top: 0;
    margin-bottom: 0;
}

.md-toolbar-tools .md-button,
.md-toolbar-tools .md-button.md-icon-button md-icon {
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    transition-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    -webkit-transition-property: background-color, fill, color;
    transition-property: background-color, fill, color;
}

.md-toolbar-tools .md-button.ng-animate,
.md-toolbar-tools .md-button.md-icon-button md-icon.ng-animate {
    -webkit-transition: none;
    transition: none;
}

.md-toolbar-tools>.md-button:first-child {
    margin-left: -8px;
}

[dir=rtl] .md-toolbar-tools>.md-button:first-child {
    margin-left: auto;
    margin-right: -8px;
}

.md-toolbar-tools>.md-button:last-child {
    margin-right: -8px;
}

[dir=rtl] .md-toolbar-tools>.md-button:last-child {
    margin-right: auto;
    margin-left: -8px;
}

.md-toolbar-tools>md-menu:last-child {
    margin-right: -8px;
}

[dir=rtl] .md-toolbar-tools>md-menu:last-child {
    margin-right: auto;
    margin-left: -8px;
}

.md-toolbar-tools>md-menu:last-child>.md-button {
    margin-right: 0;
}

[dir=rtl] .md-toolbar-tools>md-menu:last-child>.md-button {
    margin-right: auto;
    margin-left: 0;
}

@media screen and (-ms-high-contrast: active) {
    .md-toolbar-tools {
        border-bottom: 1px solid #fff;
    }
}

@media (min-width: 0) and (max-width: 959px) and (orientation: portrait) {
    md-toolbar {
        min-height: 56px;
    }
    .md-toolbar-tools {
        height: 56px;
        max-height: 56px;
    }
}

@media (min-width: 0) and (max-width: 959px) and (orientation: landscape) {
    md-toolbar {
        min-height: 48px;
    }
    .md-toolbar-tools {
        height: 48px;
        max-height: 48px;
    }
}

.md-tooltip {
    pointer-events: none;
    border-radius: 4px;
    overflow: hidden;
    opacity: 0;
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 32px;
    line-height: 32px;
    padding-right: 16px;
    padding-left: 16px;
}

.md-tooltip.md-origin-top {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    margin-top: -24px;
}

.md-tooltip.md-origin-right {
    -webkit-transform-origin: left center;
    transform-origin: left center;
    margin-left: 24px;
}

.md-tooltip.md-origin-bottom {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    margin-top: 24px;
}

.md-tooltip.md-origin-left {
    -webkit-transform-origin: right center;
    transform-origin: right center;
    margin-left: -24px;
}

@media (min-width: 960px) {
    .md-tooltip {
        font-size: 10px;
        height: 22px;
        line-height: 22px;
        padding-right: 8px;
        padding-left: 8px;
    }
    .md-tooltip.md-origin-top {
        margin-top: -14px;
    }
    .md-tooltip.md-origin-right {
        margin-left: 14px;
    }
    .md-tooltip.md-origin-bottom {
        margin-top: 14px;
    }
    .md-tooltip.md-origin-left {
        margin-left: -14px;
    }
}

.md-tooltip.md-show-add {
    -webkit-transform: scale(0);
    transform: scale(0);
}

.md-tooltip.md-show {
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    -webkit-transition-duration: 150ms;
    transition-duration: 150ms;
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0.9;
}

.md-tooltip.md-hide {
    -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
    -webkit-transition-duration: 150ms;
    transition-duration: 150ms;
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
}

.md-truncate {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.md-truncate.md-clip {
    text-overflow: clip;
}

.md-truncate.flex {
    width: 0;
}

.md-virtual-repeat-container {
    box-sizing: border-box;
    display: block;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
}

.md-virtual-repeat-container .md-virtual-repeat-scroller {
    bottom: 0;
    box-sizing: border-box;
    left: 0;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-overflow-scrolling: touch;
}

.md-virtual-repeat-container .md-virtual-repeat-sizer {
    box-sizing: border-box;
    height: 1px;
    display: block;
    margin: 0;
    padding: 0;
    width: 1px;
}

.md-virtual-repeat-container .md-virtual-repeat-offsetter {
    box-sizing: border-box;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
}

.md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-scroller {
    overflow-x: auto;
    overflow-y: hidden;
}

.md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-offsetter {
    bottom: 16px;
    right: auto;
    white-space: nowrap;
}

[dir=rtl] .md-virtual-repeat-container.md-orient-horizontal .md-virtual-repeat-offsetter {
    right: auto;
    left: auto;
}

.md-whiteframe-1dp,
.md-whiteframe-z1 {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-2dp {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-3dp {
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-4dp,
.md-whiteframe-z2 {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-5dp {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-6dp {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-7dp,
.md-whiteframe-z3 {
    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-8dp {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-9dp {
    box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-10dp,
.md-whiteframe-z4 {
    box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-11dp {
    box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-12dp {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-13dp,
.md-whiteframe-z5 {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-14dp {
    box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-15dp {
    box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-16dp {
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-17dp {
    box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-18dp {
    box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-19dp {
    box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-20dp {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-21dp {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-22dp {
    box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-23dp {
    box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);
}

.md-whiteframe-24dp {
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
}

@media screen and (-ms-high-contrast: active) {
    md-whiteframe {
        border: 1px solid #fff;
    }
}

@media print {
    md-whiteframe,
    [md-whiteframe] {
        background-color: #ffffff;
    }
}



[ng\:cloak],
[ng-cloak],
[data-ng-cloak],
[x-ng-cloak],
.ng-cloak,
.x-ng-cloak {
    display: none !important;
}
  // *
  *  Responsive attributes
  *
  *
  // @-moz-document url-prefix() {
    .layout-fill {
        margin: 0;
        width: 100%;
        min-height: 100%;
        height: 100%;
    }
}




.flex-order {
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    order: 0;
}

.flex-order--20 {
    -webkit-box-ordinal-group: -19;
    -webkit-order: -20;
    order: -20;
}

.flex-order--19 {
    -webkit-box-ordinal-group: -18;
    -webkit-order: -19;
    order: -19;
}

.flex-order--18 {
    -webkit-box-ordinal-group: -17;
    -webkit-order: -18;
    order: -18;
}

.flex-order--17 {
    -webkit-box-ordinal-group: -16;
    -webkit-order: -17;
    order: -17;
}

.flex-order--16 {
    -webkit-box-ordinal-group: -15;
    -webkit-order: -16;
    order: -16;
}

.flex-order--15 {
    -webkit-box-ordinal-group: -14;
    -webkit-order: -15;
    order: -15;
}

.flex-order--14 {
    -webkit-box-ordinal-group: -13;
    -webkit-order: -14;
    order: -14;
}

.flex-order--13 {
    -webkit-box-ordinal-group: -12;
    -webkit-order: -13;
    order: -13;
}

.flex-order--12 {
    -webkit-box-ordinal-group: -11;
    -webkit-order: -12;
    order: -12;
}

.flex-order--11 {
    -webkit-box-ordinal-group: -10;
    -webkit-order: -11;
    order: -11;
}

.flex-order--10 {
    -webkit-box-ordinal-group: -9;
    -webkit-order: -10;
    order: -10;
}

.flex-order--9 {
    -webkit-box-ordinal-group: -8;
    -webkit-order: -9;
    order: -9;
}

.flex-order--8 {
    -webkit-box-ordinal-group: -7;
    -webkit-order: -8;
    order: -8;
}

.flex-order--7 {
    -webkit-box-ordinal-group: -6;
    -webkit-order: -7;
    order: -7;
}

.flex-order--6 {
    -webkit-box-ordinal-group: -5;
    -webkit-order: -6;
    order: -6;
}

.flex-order--5 {
    -webkit-box-ordinal-group: -4;
    -webkit-order: -5;
    order: -5;
}

.flex-order--4 {
    -webkit-box-ordinal-group: -3;
    -webkit-order: -4;
    order: -4;
}

.flex-order--3 {
    -webkit-box-ordinal-group: -2;
    -webkit-order: -3;
    order: -3;
}

.flex-order--2 {
    -webkit-box-ordinal-group: -1;
    -webkit-order: -2;
    order: -2;
}

.flex-order--1 {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    order: -1;
}

.flex-order-0 {
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    order: 0;
}

.flex-order-1 {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    order: 1;
}

.flex-order-2 {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    order: 2;
}

.flex-order-3 {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
    order: 3;
}

.flex-order-4 {
    -webkit-box-ordinal-group: 5;
    -webkit-order: 4;
    order: 4;
}

.flex-order-5 {
    -webkit-box-ordinal-group: 6;
    -webkit-order: 5;
    order: 5;
}

.flex-order-6 {
    -webkit-box-ordinal-group: 7;
    -webkit-order: 6;
    order: 6;
}

.flex-order-7 {
    -webkit-box-ordinal-group: 8;
    -webkit-order: 7;
    order: 7;
}

.flex-order-8 {
    -webkit-box-ordinal-group: 9;
    -webkit-order: 8;
    order: 8;
}

.flex-order-9 {
    -webkit-box-ordinal-group: 10;
    -webkit-order: 9;
    order: 9;
}

.flex-order-10 {
    -webkit-box-ordinal-group: 11;
    -webkit-order: 10;
    order: 10;
}

.flex-order-11 {
    -webkit-box-ordinal-group: 12;
    -webkit-order: 11;
    order: 11;
}

.flex-order-12 {
    -webkit-box-ordinal-group: 13;
    -webkit-order: 12;
    order: 12;
}

.flex-order-13 {
    -webkit-box-ordinal-group: 14;
    -webkit-order: 13;
    order: 13;
}

.flex-order-14 {
    -webkit-box-ordinal-group: 15;
    -webkit-order: 14;
    order: 14;
}

.flex-order-15 {
    -webkit-box-ordinal-group: 16;
    -webkit-order: 15;
    order: 15;
}

.flex-order-16 {
    -webkit-box-ordinal-group: 17;
    -webkit-order: 16;
    order: 16;
}

.flex-order-17 {
    -webkit-box-ordinal-group: 18;
    -webkit-order: 17;
    order: 17;
}

.flex-order-18 {
    -webkit-box-ordinal-group: 19;
    -webkit-order: 18;
    order: 18;
}

.flex-order-19 {
    -webkit-box-ordinal-group: 20;
    -webkit-order: 19;
    order: 19;
}

.flex-order-20 {
    -webkit-box-ordinal-group: 21;
    -webkit-order: 20;
    order: 20;
}

.offset-0,
.flex-offset-0 {
    margin-left: 0;
}

[dir=rtl] .offset-0,
[dir=rtl] .flex-offset-0 {
    margin-left: auto;
    margin-right: 0;
}

.offset-5,
.flex-offset-5 {
    margin-left: 5%;
}

[dir=rtl] .offset-5,
[dir=rtl] .flex-offset-5 {
    margin-left: auto;
    margin-right: 5%;
}

.offset-10,
.flex-offset-10 {
    margin-left: 10%;
}

[dir=rtl] .offset-10,
[dir=rtl] .flex-offset-10 {
    margin-left: auto;
    margin-right: 10%;
}

.offset-15,
.flex-offset-15 {
    margin-left: 15%;
}

[dir=rtl] .offset-15,
[dir=rtl] .flex-offset-15 {
    margin-left: auto;
    margin-right: 15%;
}

.offset-20,
.flex-offset-20 {
    margin-left: 20%;
}

[dir=rtl] .offset-20,
[dir=rtl] .flex-offset-20 {
    margin-left: auto;
    margin-right: 20%;
}

.offset-25,
.flex-offset-25 {
    margin-left: 25%;
}

[dir=rtl] .offset-25,
[dir=rtl] .flex-offset-25 {
    margin-left: auto;
    margin-right: 25%;
}

.offset-30,
.flex-offset-30 {
    margin-left: 30%;
}

[dir=rtl] .offset-30,
[dir=rtl] .flex-offset-30 {
    margin-left: auto;
    margin-right: 30%;
}

.offset-35,
.flex-offset-35 {
    margin-left: 35%;
}

[dir=rtl] .offset-35,
[dir=rtl] .flex-offset-35 {
    margin-left: auto;
    margin-right: 35%;
}

.offset-40,
.flex-offset-40 {
    margin-left: 40%;
}

[dir=rtl] .offset-40,
[dir=rtl] .flex-offset-40 {
    margin-left: auto;
    margin-right: 40%;
}

.offset-45,
.flex-offset-45 {
    margin-left: 45%;
}

[dir=rtl] .offset-45,
[dir=rtl] .flex-offset-45 {
    margin-left: auto;
    margin-right: 45%;
}

.offset-50,
.flex-offset-50 {
    margin-left: 50%;
}

[dir=rtl] .offset-50,
[dir=rtl] .flex-offset-50 {
    margin-left: auto;
    margin-right: 50%;
}

.offset-55,
.flex-offset-55 {
    margin-left: 55%;
}

[dir=rtl] .offset-55,
[dir=rtl] .flex-offset-55 {
    margin-left: auto;
    margin-right: 55%;
}

.offset-60,
.flex-offset-60 {
    margin-left: 60%;
}

[dir=rtl] .offset-60,
[dir=rtl] .flex-offset-60 {
    margin-left: auto;
    margin-right: 60%;
}

.offset-65,
.flex-offset-65 {
    margin-left: 65%;
}

[dir=rtl] .offset-65,
[dir=rtl] .flex-offset-65 {
    margin-left: auto;
    margin-right: 65%;
}

.offset-70,
.flex-offset-70 {
    margin-left: 70%;
}

[dir=rtl] .offset-70,
[dir=rtl] .flex-offset-70 {
    margin-left: auto;
    margin-right: 70%;
}

.offset-75,
.flex-offset-75 {
    margin-left: 75%;
}

[dir=rtl] .offset-75,
[dir=rtl] .flex-offset-75 {
    margin-left: auto;
    margin-right: 75%;
}

.offset-80,
.flex-offset-80 {
    margin-left: 80%;
}

[dir=rtl] .offset-80,
[dir=rtl] .flex-offset-80 {
    margin-left: auto;
    margin-right: 80%;
}

.offset-85,
.flex-offset-85 {
    margin-left: 85%;
}

[dir=rtl] .offset-85,
[dir=rtl] .flex-offset-85 {
    margin-left: auto;
    margin-right: 85%;
}

.offset-90,
.flex-offset-90 {
    margin-left: 90%;
}

[dir=rtl] .offset-90,
[dir=rtl] .flex-offset-90 {
    margin-left: auto;
    margin-right: 90%;
}

.offset-95,
.flex-offset-95 {
    margin-left: 95%;
}

[dir=rtl] .offset-95,
[dir=rtl] .flex-offset-95 {
    margin-left: auto;
    margin-right: 95%;
}

.offset-33,
.flex-offset-33 {
    margin-left: calc(100% / 3);
}

.offset-66,
.flex-offset-66 {
    margin-left: calc(200% / 3);
}

[dir=rtl] .offset-66,
[dir=rtl] .flex-offset-66 {
    margin-left: auto;
    margin-right: calc(200% / 3);
}

.layout-align,
.layout-align-start-stretch {
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-align-content: stretch;
    align-content: stretch;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
}

.layout-align-start,
.layout-align-start-start,
.layout-align-start-center,
.layout-align-start-end,
.layout-align-start-stretch {
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
}

.layout-align-center,
.layout-align-center-start,
.layout-align-center-center,
.layout-align-center-end,
.layout-align-center-stretch {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}

.layout-align-end,
.layout-align-end-start,
.layout-align-end-center,
.layout-align-end-end,
.layout-align-end-stretch {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
}

.layout-align-space-around,
.layout-align-space-around-center,
.layout-align-space-around-start,
.layout-align-space-around-end,
.layout-align-space-around-stretch {
    -webkit-justify-content: space-around;
    justify-content: space-around;
}

.layout-align-space-between,
.layout-align-space-between-center,
.layout-align-space-between-start,
.layout-align-space-between-end,
.layout-align-space-between-stretch {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}

.layout-align-start-start,
.layout-align-center-start,
.layout-align-end-start,
.layout-align-space-between-start,
.layout-align-space-around-start {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-align-content: flex-start;
    align-content: flex-start;
}

.layout-align-start-center,
.layout-align-center-center,
.layout-align-end-center,
.layout-align-space-between-center,
.layout-align-space-around-center {
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-align-content: center;
    align-content: center;
    max-width: 100%;
}

.layout-align-start-center>*,
.layout-align-center-center>*,
.layout-align-end-center>*,
.layout-align-space-between-center>*,
.layout-align-space-around-center>* {
    max-width: 100%;
    box-sizing: border-box;
}

.layout-align-start-end,
.layout-align-center-end,
.layout-align-end-end,
.layout-align-space-between-end,
.layout-align-space-around-end {
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end;
    -webkit-align-content: flex-end;
    align-content: flex-end;
}

.layout-align-start-stretch,
.layout-align-center-stretch,
.layout-align-end-stretch,
.layout-align-space-between-stretch,
.layout-align-space-around-stretch {
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
    -webkit-align-content: stretch;
    align-content: stretch;
}

.flex {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    box-sizing: border-box;
}

.flex-grow {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    box-sizing: border-box;
}

.flex-initial {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    flex: 0 1 auto;
    box-sizing: border-box;
}

.flex-auto {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    box-sizing: border-box;
}

.flex-none {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    box-sizing: border-box;
}

.flex-noshrink {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 auto;
    flex: 1 0 auto;
    box-sizing: border-box;
}

.flex-nogrow {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    flex: 0 1 auto;
    box-sizing: border-box;
}

.flex-0 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-0 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box;
    min-width: 0;
}

.layout-column>.flex-0 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 0%;
    box-sizing: border-box;
}

.layout-row>.flex-0 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 0%;
    max-height: 100%;
    box-sizing: border-box;
    min-width: 0;
}

.layout-column>.flex-0 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 0%;
    box-sizing: border-box;
    min-height: 0;
}

.flex-5 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-5 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-5 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 5%;
    box-sizing: border-box;
}

.layout-row>.flex-5 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 5%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-5 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 5%;
    box-sizing: border-box;
}

.flex-10 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-10 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-10 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 10%;
    box-sizing: border-box;
}

.layout-row>.flex-10 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 10%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-10 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 10%;
    box-sizing: border-box;
}

.flex-15 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-15 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-15 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 15%;
    box-sizing: border-box;
}

.layout-row>.flex-15 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 15%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-15 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 15%;
    box-sizing: border-box;
}

.flex-20 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-20 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-20 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 20%;
    box-sizing: border-box;
}

.layout-row>.flex-20 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 20%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-20 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 20%;
    box-sizing: border-box;
}

.flex-25 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-25 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-25 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 25%;
    box-sizing: border-box;
}

.layout-row>.flex-25 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 25%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-25 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 25%;
    box-sizing: border-box;
}

.flex-30 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-30 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-30 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 30%;
    box-sizing: border-box;
}

.layout-row>.flex-30 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 30%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-30 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 30%;
    box-sizing: border-box;
}

.flex-35 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-35 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-35 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 35%;
    box-sizing: border-box;
}

.layout-row>.flex-35 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 35%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-35 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 35%;
    box-sizing: border-box;
}

.flex-40 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-40 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-40 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 40%;
    box-sizing: border-box;
}

.layout-row>.flex-40 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 40%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-40 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 40%;
    box-sizing: border-box;
}

.flex-45 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-45 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-45 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 45%;
    box-sizing: border-box;
}

.layout-row>.flex-45 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 45%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-45 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 45%;
    box-sizing: border-box;
}

.flex-50 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-50 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-50 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 50%;
    box-sizing: border-box;
}

.layout-row>.flex-50 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 50%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-50 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 50%;
    box-sizing: border-box;
}

.flex-55 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-55 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-55 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 55%;
    box-sizing: border-box;
}

.layout-row>.flex-55 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 55%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-55 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 55%;
    box-sizing: border-box;
}

.flex-60 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-60 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-60 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 60%;
    box-sizing: border-box;
}

.layout-row>.flex-60 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 60%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-60 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 60%;
    box-sizing: border-box;
}

.flex-65 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-65 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-65 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 65%;
    box-sizing: border-box;
}

.layout-row>.flex-65 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 65%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-65 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 65%;
    box-sizing: border-box;
}

.flex-70 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-70 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-70 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 70%;
    box-sizing: border-box;
}

.layout-row>.flex-70 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 70%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-70 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 70%;
    box-sizing: border-box;
}

.flex-75 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-75 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-75 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 75%;
    box-sizing: border-box;
}

.layout-row>.flex-75 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 75%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-75 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 75%;
    box-sizing: border-box;
}

.flex-80 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-80 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-80 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 80%;
    box-sizing: border-box;
}

.layout-row>.flex-80 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 80%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-80 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 80%;
    box-sizing: border-box;
}

.flex-85 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-85 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-85 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 85%;
    box-sizing: border-box;
}

.layout-row>.flex-85 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 85%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-85 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 85%;
    box-sizing: border-box;
}

.flex-90 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-90 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-90 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 90%;
    box-sizing: border-box;
}

.layout-row>.flex-90 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 90%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-90 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 90%;
    box-sizing: border-box;
}

.flex-95 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-95 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-95 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 95%;
    box-sizing: border-box;
}

.layout-row>.flex-95 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 95%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-95 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 95%;
    box-sizing: border-box;
}

.flex-100 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-100 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-100 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-100 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-100 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-33 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 33.33%;
    flex: 1 1 33.33%;
    max-width: 33.33%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-66 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 66.66%;
    flex: 1 1 66.66%;
    max-width: 66.66%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-column>.flex-33 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 33.33%;
    flex: 1 1 33.33%;
    max-width: 100%;
    max-height: 33.33%;
    box-sizing: border-box;
}

.layout-column>.flex-66 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 66.66%;
    flex: 1 1 66.66%;
    max-width: 100%;
    max-height: 66.66%;
    box-sizing: border-box;
}

.layout-row>.flex-33 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 33.33%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex-66 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 66.66%;
    max-height: 100%;
    box-sizing: border-box;
}

.layout-row>.flex {
    min-width: 0;
}

.layout-column>.flex-33 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 33.33%;
    box-sizing: border-box;
}

.layout-column>.flex-66 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    max-width: 100%;
    max-height: 66.66%;
    box-sizing: border-box;
}

.layout-column>.flex {
    min-height: 0;
}

.layout,
.layout-column,
.layout-row {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

.layout-column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
}

.layout-row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
}

.layout-padding-sm>*,
.layout-padding>.flex-sm {
    padding: 4px;
}

.layout-padding,
.layout-padding-gt-sm,
.layout-padding-md,
.layout-padding>*,
.layout-padding-gt-sm>*,
.layout-padding-md>*,
.layout-padding>.flex,
.layout-padding>.flex-gt-sm,
.layout-padding>.flex-md {
    padding: 8px;
}

.layout-padding-gt-md>*,
.layout-padding-lg>*,
.layout-padding-gt-lg>*,
.layout-padding>.flex-gt-md,
.layout-padding>.flex-lg,
.layout-padding>.flex-lg,
.layout-padding>.flex-gt-lg {
    padding: 16px;
}

.layout-margin-sm>*,
.layout-margin>.flex-sm {
    margin: 4px;
}

.layout-margin,
.layout-margin-gt-sm,
.layout-margin-md,
.layout-margin>*,
.layout-margin-gt-sm>*,
.layout-margin-md>*,
.layout-margin>.flex,
.layout-margin>.flex-gt-sm,
.layout-margin>.flex-md {
    margin: 8px;
}

.layout-margin-gt-md>*,
.layout-margin-lg>*,
.layout-margin-gt-lg>*,
.layout-margin>.flex-gt-md,
.layout-margin>.flex-lg,
.layout-margin>.flex-gt-lg {
    margin: 16px;
}

.layout-wrap {
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
}

.layout-nowrap {
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
}

.layout-fill {
    margin: 0;
    width: 100%;
    min-height: 100%;
    height: 100%;
}
  // *
   * `hide-gt-sm show-gt-lg` should hide from 600px to 1200px
   * `show-md hide-gt-sm` should show from 0px to 960px and hide at >960px
   * `hide-gt-md show-gt-sm` should show everywhere (show overrides hide)`
   *
   *  hide means hide everywhere
   *  Sizes:
   *         $layout-breakpoint-xs:     600px !default;
   *         $layout-breakpoint-sm:     960px !default;
   *         $layout-breakpoint-md:     1280px !default;
   *         $layout-breakpoint-lg:     1920px !default;
  // @media (max-width: 599px) {
    .hide-xs:not(.show-xs):not(.show),
    .hide:not(.show-xs):not(.show) {
        display: none;
    }
    .flex-order-xs--20 {
        -webkit-box-ordinal-group: -19;
        -webkit-order: -20;
        order: -20;
    }
    .flex-order-xs--19 {
        -webkit-box-ordinal-group: -18;
        -webkit-order: -19;
        order: -19;
    }
    .flex-order-xs--18 {
        -webkit-box-ordinal-group: -17;
        -webkit-order: -18;
        order: -18;
    }
    .flex-order-xs--17 {
        -webkit-box-ordinal-group: -16;
        -webkit-order: -17;
        order: -17;
    }
    .flex-order-xs--16 {
        -webkit-box-ordinal-group: -15;
        -webkit-order: -16;
        order: -16;
    }
    .flex-order-xs--15 {
        -webkit-box-ordinal-group: -14;
        -webkit-order: -15;
        order: -15;
    }
    .flex-order-xs--14 {
        -webkit-box-ordinal-group: -13;
        -webkit-order: -14;
        order: -14;
    }
    .flex-order-xs--13 {
        -webkit-box-ordinal-group: -12;
        -webkit-order: -13;
        order: -13;
    }
    .flex-order-xs--12 {
        -webkit-box-ordinal-group: -11;
        -webkit-order: -12;
        order: -12;
    }
    .flex-order-xs--11 {
        -webkit-box-ordinal-group: -10;
        -webkit-order: -11;
        order: -11;
    }
    .flex-order-xs--10 {
        -webkit-box-ordinal-group: -9;
        -webkit-order: -10;
        order: -10;
    }
    .flex-order-xs--9 {
        -webkit-box-ordinal-group: -8;
        -webkit-order: -9;
        order: -9;
    }
    .flex-order-xs--8 {
        -webkit-box-ordinal-group: -7;
        -webkit-order: -8;
        order: -8;
    }
    .flex-order-xs--7 {
        -webkit-box-ordinal-group: -6;
        -webkit-order: -7;
        order: -7;
    }
    .flex-order-xs--6 {
        -webkit-box-ordinal-group: -5;
        -webkit-order: -6;
        order: -6;
    }
    .flex-order-xs--5 {
        -webkit-box-ordinal-group: -4;
        -webkit-order: -5;
        order: -5;
    }
    .flex-order-xs--4 {
        -webkit-box-ordinal-group: -3;
        -webkit-order: -4;
        order: -4;
    }
    .flex-order-xs--3 {
        -webkit-box-ordinal-group: -2;
        -webkit-order: -3;
        order: -3;
    }
    .flex-order-xs--2 {
        -webkit-box-ordinal-group: -1;
        -webkit-order: -2;
        order: -2;
    }
    .flex-order-xs--1 {
        -webkit-box-ordinal-group: 0;
        -webkit-order: -1;
        order: -1;
    }
    .flex-order-xs-0 {
        -webkit-box-ordinal-group: 1;
        -webkit-order: 0;
        order: 0;
    }
    .flex-order-xs-1 {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        order: 1;
    }
    .flex-order-xs-2 {
        -webkit-box-ordinal-group: 3;
        -webkit-order: 2;
        order: 2;
    }
    .flex-order-xs-3 {
        -webkit-box-ordinal-group: 4;
        -webkit-order: 3;
        order: 3;
    }
    .flex-order-xs-4 {
        -webkit-box-ordinal-group: 5;
        -webkit-order: 4;
        order: 4;
    }
    .flex-order-xs-5 {
        -webkit-box-ordinal-group: 6;
        -webkit-order: 5;
        order: 5;
    }
    .flex-order-xs-6 {
        -webkit-box-ordinal-group: 7;
        -webkit-order: 6;
        order: 6;
    }
    .flex-order-xs-7 {
        -webkit-box-ordinal-group: 8;
        -webkit-order: 7;
        order: 7;
    }
    .flex-order-xs-8 {
        -webkit-box-ordinal-group: 9;
        -webkit-order: 8;
        order: 8;
    }
    .flex-order-xs-9 {
        -webkit-box-ordinal-group: 10;
        -webkit-order: 9;
        order: 9;
    }
    .flex-order-xs-10 {
        -webkit-box-ordinal-group: 11;
        -webkit-order: 10;
        order: 10;
    }
    .flex-order-xs-11 {
        -webkit-box-ordinal-group: 12;
        -webkit-order: 11;
        order: 11;
    }
    .flex-order-xs-12 {
        -webkit-box-ordinal-group: 13;
        -webkit-order: 12;
        order: 12;
    }
    .flex-order-xs-13 {
        -webkit-box-ordinal-group: 14;
        -webkit-order: 13;
        order: 13;
    }
    .flex-order-xs-14 {
        -webkit-box-ordinal-group: 15;
        -webkit-order: 14;
        order: 14;
    }
    .flex-order-xs-15 {
        -webkit-box-ordinal-group: 16;
        -webkit-order: 15;
        order: 15;
    }
    .flex-order-xs-16 {
        -webkit-box-ordinal-group: 17;
        -webkit-order: 16;
        order: 16;
    }
    .flex-order-xs-17 {
        -webkit-box-ordinal-group: 18;
        -webkit-order: 17;
        order: 17;
    }
    .flex-order-xs-18 {
        -webkit-box-ordinal-group: 19;
        -webkit-order: 18;
        order: 18;
    }
    .flex-order-xs-19 {
        -webkit-box-ordinal-group: 20;
        -webkit-order: 19;
        order: 19;
    }
    .flex-order-xs-20 {
        -webkit-box-ordinal-group: 21;
        -webkit-order: 20;
        order: 20;
    }
    .offset-xs-0,
    .flex-offset-xs-0 {
        margin-left: 0;
    }
    [dir=rtl] .offset-xs-0,
    [dir=rtl] .flex-offset-xs-0 {
        margin-left: auto;
        margin-right: 0;
    }
    .offset-xs-5,
    .flex-offset-xs-5 {
        margin-left: 5%;
    }
    [dir=rtl] .offset-xs-5,
    [dir=rtl] .flex-offset-xs-5 {
        margin-left: auto;
        margin-right: 5%;
    }
    .offset-xs-10,
    .flex-offset-xs-10 {
        margin-left: 10%;
    }
    [dir=rtl] .offset-xs-10,
    [dir=rtl] .flex-offset-xs-10 {
        margin-left: auto;
        margin-right: 10%;
    }
    .offset-xs-15,
    .flex-offset-xs-15 {
        margin-left: 15%;
    }
    [dir=rtl] .offset-xs-15,
    [dir=rtl] .flex-offset-xs-15 {
        margin-left: auto;
        margin-right: 15%;
    }
    .offset-xs-20,
    .flex-offset-xs-20 {
        margin-left: 20%;
    }
    [dir=rtl] .offset-xs-20,
    [dir=rtl] .flex-offset-xs-20 {
        margin-left: auto;
        margin-right: 20%;
    }
    .offset-xs-25,
    .flex-offset-xs-25 {
        margin-left: 25%;
    }
    [dir=rtl] .offset-xs-25,
    [dir=rtl] .flex-offset-xs-25 {
        margin-left: auto;
        margin-right: 25%;
    }
    .offset-xs-30,
    .flex-offset-xs-30 {
        margin-left: 30%;
    }
    [dir=rtl] .offset-xs-30,
    [dir=rtl] .flex-offset-xs-30 {
        margin-left: auto;
        margin-right: 30%;
    }
    .offset-xs-35,
    .flex-offset-xs-35 {
        margin-left: 35%;
    }
    [dir=rtl] .offset-xs-35,
    [dir=rtl] .flex-offset-xs-35 {
        margin-left: auto;
        margin-right: 35%;
    }
    .offset-xs-40,
    .flex-offset-xs-40 {
        margin-left: 40%;
    }
    [dir=rtl] .offset-xs-40,
    [dir=rtl] .flex-offset-xs-40 {
        margin-left: auto;
        margin-right: 40%;
    }
    .offset-xs-45,
    .flex-offset-xs-45 {
        margin-left: 45%;
    }
    [dir=rtl] .offset-xs-45,
    [dir=rtl] .flex-offset-xs-45 {
        margin-left: auto;
        margin-right: 45%;
    }
    .offset-xs-50,
    .flex-offset-xs-50 {
        margin-left: 50%;
    }
    [dir=rtl] .offset-xs-50,
    [dir=rtl] .flex-offset-xs-50 {
        margin-left: auto;
        margin-right: 50%;
    }
    .offset-xs-55,
    .flex-offset-xs-55 {
        margin-left: 55%;
    }
    [dir=rtl] .offset-xs-55,
    [dir=rtl] .flex-offset-xs-55 {
        margin-left: auto;
        margin-right: 55%;
    }
    .offset-xs-60,
    .flex-offset-xs-60 {
        margin-left: 60%;
    }
    [dir=rtl] .offset-xs-60,
    [dir=rtl] .flex-offset-xs-60 {
        margin-left: auto;
        margin-right: 60%;
    }
    .offset-xs-65,
    .flex-offset-xs-65 {
        margin-left: 65%;
    }
    [dir=rtl] .offset-xs-65,
    [dir=rtl] .flex-offset-xs-65 {
        margin-left: auto;
        margin-right: 65%;
    }
    .offset-xs-70,
    .flex-offset-xs-70 {
        margin-left: 70%;
    }
    [dir=rtl] .offset-xs-70,
    [dir=rtl] .flex-offset-xs-70 {
        margin-left: auto;
        margin-right: 70%;
    }
    .offset-xs-75,
    .flex-offset-xs-75 {
        margin-left: 75%;
    }
    [dir=rtl] .offset-xs-75,
    [dir=rtl] .flex-offset-xs-75 {
        margin-left: auto;
        margin-right: 75%;
    }
    .offset-xs-80,
    .flex-offset-xs-80 {
        margin-left: 80%;
    }
    [dir=rtl] .offset-xs-80,
    [dir=rtl] .flex-offset-xs-80 {
        margin-left: auto;
        margin-right: 80%;
    }
    .offset-xs-85,
    .flex-offset-xs-85 {
        margin-left: 85%;
    }
    [dir=rtl] .offset-xs-85,
    [dir=rtl] .flex-offset-xs-85 {
        margin-left: auto;
        margin-right: 85%;
    }
    .offset-xs-90,
    .flex-offset-xs-90 {
        margin-left: 90%;
    }
    [dir=rtl] .offset-xs-90,
    [dir=rtl] .flex-offset-xs-90 {
        margin-left: auto;
        margin-right: 90%;
    }
    .offset-xs-95,
    .flex-offset-xs-95 {
        margin-left: 95%;
    }
    [dir=rtl] .offset-xs-95,
    [dir=rtl] .flex-offset-xs-95 {
        margin-left: auto;
        margin-right: 95%;
    }
    .offset-xs-33,
    .flex-offset-xs-33 {
        margin-left: calc(100% / 3);
    }
    .offset-xs-66,
    .flex-offset-xs-66 {
        margin-left: calc(200% / 3);
    }
    [dir=rtl] .offset-xs-66,
    [dir=rtl] .flex-offset-xs-66 {
        margin-left: auto;
        margin-right: calc(200% / 3);
    }
    .layout-align-xs,
    .layout-align-xs-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        -webkit-align-content: stretch;
        align-content: stretch;
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
    }
    .layout-align-xs-start,
    .layout-align-xs-start-start,
    .layout-align-xs-start-center,
    .layout-align-xs-start-end,
    .layout-align-xs-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }
    .layout-align-xs-center,
    .layout-align-xs-center-start,
    .layout-align-xs-center-center,
    .layout-align-xs-center-end,
    .layout-align-xs-center-stretch {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .layout-align-xs-end,
    .layout-align-xs-end-start,
    .layout-align-xs-end-center,
    .layout-align-xs-end-end,
    .layout-align-xs-end-stretch {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }
    .layout-align-xs-space-around,
    .layout-align-xs-space-around-center,
    .layout-align-xs-space-around-start,
    .layout-align-xs-space-around-end,
    .layout-align-xs-space-around-stretch {
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }
    .layout-align-xs-space-between,
    .layout-align-xs-space-between-center,
    .layout-align-xs-space-between-start,
    .layout-align-xs-space-between-end,
    .layout-align-xs-space-between-stretch {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
    .layout-align-xs-start-start,
    .layout-align-xs-center-start,
    .layout-align-xs-end-start,
    .layout-align-xs-space-between-start,
    .layout-align-xs-space-around-start {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }
    .layout-align-xs-start-center,
    .layout-align-xs-center-center,
    .layout-align-xs-end-center,
    .layout-align-xs-space-between-center,
    .layout-align-xs-space-around-center {
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-align-content: center;
        align-content: center;
        max-width: 100%;
    }
    .layout-align-xs-start-center>*,
    .layout-align-xs-center-center>*,
    .layout-align-xs-end-center>*,
    .layout-align-xs-space-between-center>*,
    .layout-align-xs-space-around-center>* {
        max-width: 100%;
        box-sizing: border-box;
    }
    .layout-align-xs-start-end,
    .layout-align-xs-center-end,
    .layout-align-xs-end-end,
    .layout-align-xs-space-between-end,
    .layout-align-xs-space-around-end {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }
    .layout-align-xs-start-stretch,
    .layout-align-xs-center-stretch,
    .layout-align-xs-end-stretch,
    .layout-align-xs-space-between-stretch,
    .layout-align-xs-space-around-stretch {
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
        -webkit-align-content: stretch;
        align-content: stretch;
    }
    .flex-xs {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        box-sizing: border-box;
    }
    .flex-xs-grow {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        box-sizing: border-box;
    }
    .flex-xs-initial {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-xs-auto {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        box-sizing: border-box;
    }
    .flex-xs-none {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        box-sizing: border-box;
    }
    .flex-xs-noshrink {
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
        box-sizing: border-box;
    }
    .flex-xs-nogrow {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-xs-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-column>.flex-xs-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-xs-column>.flex-xs-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
        min-height: 0;
    }
    .flex-xs-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .flex-xs-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .flex-xs-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .flex-xs-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .flex-xs-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .flex-xs-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .flex-xs-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .flex-xs-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .flex-xs-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .flex-xs-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .flex-xs-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .flex-xs-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .flex-xs-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .flex-xs-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .flex-xs-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .flex-xs-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .flex-xs-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .flex-xs-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .flex-xs-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .flex-xs-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xs-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xs-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex-xs-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xs-row>.flex {
        min-width: 0;
    }
    .layout-xs-column>.flex-xs-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex-xs-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-xs-column>.flex {
        min-height: 0;
    }
    .layout-xs,
    .layout-xs-column,
    .layout-xs-row {
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .layout-xs-column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
    }
    .layout-xs-row {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
    }
}

@media (min-width: 600px) {
    .flex-order-gt-xs--20 {
        -webkit-box-ordinal-group: -19;
        -webkit-order: -20;
        order: -20;
    }
    .flex-order-gt-xs--19 {
        -webkit-box-ordinal-group: -18;
        -webkit-order: -19;
        order: -19;
    }
    .flex-order-gt-xs--18 {
        -webkit-box-ordinal-group: -17;
        -webkit-order: -18;
        order: -18;
    }
    .flex-order-gt-xs--17 {
        -webkit-box-ordinal-group: -16;
        -webkit-order: -17;
        order: -17;
    }
    .flex-order-gt-xs--16 {
        -webkit-box-ordinal-group: -15;
        -webkit-order: -16;
        order: -16;
    }
    .flex-order-gt-xs--15 {
        -webkit-box-ordinal-group: -14;
        -webkit-order: -15;
        order: -15;
    }
    .flex-order-gt-xs--14 {
        -webkit-box-ordinal-group: -13;
        -webkit-order: -14;
        order: -14;
    }
    .flex-order-gt-xs--13 {
        -webkit-box-ordinal-group: -12;
        -webkit-order: -13;
        order: -13;
    }
    .flex-order-gt-xs--12 {
        -webkit-box-ordinal-group: -11;
        -webkit-order: -12;
        order: -12;
    }
    .flex-order-gt-xs--11 {
        -webkit-box-ordinal-group: -10;
        -webkit-order: -11;
        order: -11;
    }
    .flex-order-gt-xs--10 {
        -webkit-box-ordinal-group: -9;
        -webkit-order: -10;
        order: -10;
    }
    .flex-order-gt-xs--9 {
        -webkit-box-ordinal-group: -8;
        -webkit-order: -9;
        order: -9;
    }
    .flex-order-gt-xs--8 {
        -webkit-box-ordinal-group: -7;
        -webkit-order: -8;
        order: -8;
    }
    .flex-order-gt-xs--7 {
        -webkit-box-ordinal-group: -6;
        -webkit-order: -7;
        order: -7;
    }
    .flex-order-gt-xs--6 {
        -webkit-box-ordinal-group: -5;
        -webkit-order: -6;
        order: -6;
    }
    .flex-order-gt-xs--5 {
        -webkit-box-ordinal-group: -4;
        -webkit-order: -5;
        order: -5;
    }
    .flex-order-gt-xs--4 {
        -webkit-box-ordinal-group: -3;
        -webkit-order: -4;
        order: -4;
    }
    .flex-order-gt-xs--3 {
        -webkit-box-ordinal-group: -2;
        -webkit-order: -3;
        order: -3;
    }
    .flex-order-gt-xs--2 {
        -webkit-box-ordinal-group: -1;
        -webkit-order: -2;
        order: -2;
    }
    .flex-order-gt-xs--1 {
        -webkit-box-ordinal-group: 0;
        -webkit-order: -1;
        order: -1;
    }
    .flex-order-gt-xs-0 {
        -webkit-box-ordinal-group: 1;
        -webkit-order: 0;
        order: 0;
    }
    .flex-order-gt-xs-1 {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        order: 1;
    }
    .flex-order-gt-xs-2 {
        -webkit-box-ordinal-group: 3;
        -webkit-order: 2;
        order: 2;
    }
    .flex-order-gt-xs-3 {
        -webkit-box-ordinal-group: 4;
        -webkit-order: 3;
        order: 3;
    }
    .flex-order-gt-xs-4 {
        -webkit-box-ordinal-group: 5;
        -webkit-order: 4;
        order: 4;
    }
    .flex-order-gt-xs-5 {
        -webkit-box-ordinal-group: 6;
        -webkit-order: 5;
        order: 5;
    }
    .flex-order-gt-xs-6 {
        -webkit-box-ordinal-group: 7;
        -webkit-order: 6;
        order: 6;
    }
    .flex-order-gt-xs-7 {
        -webkit-box-ordinal-group: 8;
        -webkit-order: 7;
        order: 7;
    }
    .flex-order-gt-xs-8 {
        -webkit-box-ordinal-group: 9;
        -webkit-order: 8;
        order: 8;
    }
    .flex-order-gt-xs-9 {
        -webkit-box-ordinal-group: 10;
        -webkit-order: 9;
        order: 9;
    }
    .flex-order-gt-xs-10 {
        -webkit-box-ordinal-group: 11;
        -webkit-order: 10;
        order: 10;
    }
    .flex-order-gt-xs-11 {
        -webkit-box-ordinal-group: 12;
        -webkit-order: 11;
        order: 11;
    }
    .flex-order-gt-xs-12 {
        -webkit-box-ordinal-group: 13;
        -webkit-order: 12;
        order: 12;
    }
    .flex-order-gt-xs-13 {
        -webkit-box-ordinal-group: 14;
        -webkit-order: 13;
        order: 13;
    }
    .flex-order-gt-xs-14 {
        -webkit-box-ordinal-group: 15;
        -webkit-order: 14;
        order: 14;
    }
    .flex-order-gt-xs-15 {
        -webkit-box-ordinal-group: 16;
        -webkit-order: 15;
        order: 15;
    }
    .flex-order-gt-xs-16 {
        -webkit-box-ordinal-group: 17;
        -webkit-order: 16;
        order: 16;
    }
    .flex-order-gt-xs-17 {
        -webkit-box-ordinal-group: 18;
        -webkit-order: 17;
        order: 17;
    }
    .flex-order-gt-xs-18 {
        -webkit-box-ordinal-group: 19;
        -webkit-order: 18;
        order: 18;
    }
    .flex-order-gt-xs-19 {
        -webkit-box-ordinal-group: 20;
        -webkit-order: 19;
        order: 19;
    }
    .flex-order-gt-xs-20 {
        -webkit-box-ordinal-group: 21;
        -webkit-order: 20;
        order: 20;
    }
    .offset-gt-xs-0,
    .flex-offset-gt-xs-0 {
        margin-left: 0;
    }
    [dir=rtl] .offset-gt-xs-0,
    [dir=rtl] .flex-offset-gt-xs-0 {
        margin-left: auto;
        margin-right: 0;
    }
    .offset-gt-xs-5,
    .flex-offset-gt-xs-5 {
        margin-left: 5%;
    }
    [dir=rtl] .offset-gt-xs-5,
    [dir=rtl] .flex-offset-gt-xs-5 {
        margin-left: auto;
        margin-right: 5%;
    }
    .offset-gt-xs-10,
    .flex-offset-gt-xs-10 {
        margin-left: 10%;
    }
    [dir=rtl] .offset-gt-xs-10,
    [dir=rtl] .flex-offset-gt-xs-10 {
        margin-left: auto;
        margin-right: 10%;
    }
    .offset-gt-xs-15,
    .flex-offset-gt-xs-15 {
        margin-left: 15%;
    }
    [dir=rtl] .offset-gt-xs-15,
    [dir=rtl] .flex-offset-gt-xs-15 {
        margin-left: auto;
        margin-right: 15%;
    }
    .offset-gt-xs-20,
    .flex-offset-gt-xs-20 {
        margin-left: 20%;
    }
    [dir=rtl] .offset-gt-xs-20,
    [dir=rtl] .flex-offset-gt-xs-20 {
        margin-left: auto;
        margin-right: 20%;
    }
    .offset-gt-xs-25,
    .flex-offset-gt-xs-25 {
        margin-left: 25%;
    }
    [dir=rtl] .offset-gt-xs-25,
    [dir=rtl] .flex-offset-gt-xs-25 {
        margin-left: auto;
        margin-right: 25%;
    }
    .offset-gt-xs-30,
    .flex-offset-gt-xs-30 {
        margin-left: 30%;
    }
    [dir=rtl] .offset-gt-xs-30,
    [dir=rtl] .flex-offset-gt-xs-30 {
        margin-left: auto;
        margin-right: 30%;
    }
    .offset-gt-xs-35,
    .flex-offset-gt-xs-35 {
        margin-left: 35%;
    }
    [dir=rtl] .offset-gt-xs-35,
    [dir=rtl] .flex-offset-gt-xs-35 {
        margin-left: auto;
        margin-right: 35%;
    }
    .offset-gt-xs-40,
    .flex-offset-gt-xs-40 {
        margin-left: 40%;
    }
    [dir=rtl] .offset-gt-xs-40,
    [dir=rtl] .flex-offset-gt-xs-40 {
        margin-left: auto;
        margin-right: 40%;
    }
    .offset-gt-xs-45,
    .flex-offset-gt-xs-45 {
        margin-left: 45%;
    }
    [dir=rtl] .offset-gt-xs-45,
    [dir=rtl] .flex-offset-gt-xs-45 {
        margin-left: auto;
        margin-right: 45%;
    }
    .offset-gt-xs-50,
    .flex-offset-gt-xs-50 {
        margin-left: 50%;
    }
    [dir=rtl] .offset-gt-xs-50,
    [dir=rtl] .flex-offset-gt-xs-50 {
        margin-left: auto;
        margin-right: 50%;
    }
    .offset-gt-xs-55,
    .flex-offset-gt-xs-55 {
        margin-left: 55%;
    }
    [dir=rtl] .offset-gt-xs-55,
    [dir=rtl] .flex-offset-gt-xs-55 {
        margin-left: auto;
        margin-right: 55%;
    }
    .offset-gt-xs-60,
    .flex-offset-gt-xs-60 {
        margin-left: 60%;
    }
    [dir=rtl] .offset-gt-xs-60,
    [dir=rtl] .flex-offset-gt-xs-60 {
        margin-left: auto;
        margin-right: 60%;
    }
    .offset-gt-xs-65,
    .flex-offset-gt-xs-65 {
        margin-left: 65%;
    }
    [dir=rtl] .offset-gt-xs-65,
    [dir=rtl] .flex-offset-gt-xs-65 {
        margin-left: auto;
        margin-right: 65%;
    }
    .offset-gt-xs-70,
    .flex-offset-gt-xs-70 {
        margin-left: 70%;
    }
    [dir=rtl] .offset-gt-xs-70,
    [dir=rtl] .flex-offset-gt-xs-70 {
        margin-left: auto;
        margin-right: 70%;
    }
    .offset-gt-xs-75,
    .flex-offset-gt-xs-75 {
        margin-left: 75%;
    }
    [dir=rtl] .offset-gt-xs-75,
    [dir=rtl] .flex-offset-gt-xs-75 {
        margin-left: auto;
        margin-right: 75%;
    }
    .offset-gt-xs-80,
    .flex-offset-gt-xs-80 {
        margin-left: 80%;
    }
    [dir=rtl] .offset-gt-xs-80,
    [dir=rtl] .flex-offset-gt-xs-80 {
        margin-left: auto;
        margin-right: 80%;
    }
    .offset-gt-xs-85,
    .flex-offset-gt-xs-85 {
        margin-left: 85%;
    }
    [dir=rtl] .offset-gt-xs-85,
    [dir=rtl] .flex-offset-gt-xs-85 {
        margin-left: auto;
        margin-right: 85%;
    }
    .offset-gt-xs-90,
    .flex-offset-gt-xs-90 {
        margin-left: 90%;
    }
    [dir=rtl] .offset-gt-xs-90,
    [dir=rtl] .flex-offset-gt-xs-90 {
        margin-left: auto;
        margin-right: 90%;
    }
    .offset-gt-xs-95,
    .flex-offset-gt-xs-95 {
        margin-left: 95%;
    }
    [dir=rtl] .offset-gt-xs-95,
    [dir=rtl] .flex-offset-gt-xs-95 {
        margin-left: auto;
        margin-right: 95%;
    }
    .offset-gt-xs-33,
    .flex-offset-gt-xs-33 {
        margin-left: calc(100% / 3);
    }
    .offset-gt-xs-66,
    .flex-offset-gt-xs-66 {
        margin-left: calc(200% / 3);
    }
    [dir=rtl] .offset-gt-xs-66,
    [dir=rtl] .flex-offset-gt-xs-66 {
        margin-left: auto;
        margin-right: calc(200% / 3);
    }
    .layout-align-gt-xs,
    .layout-align-gt-xs-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        -webkit-align-content: stretch;
        align-content: stretch;
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
    }
    .layout-align-gt-xs-start,
    .layout-align-gt-xs-start-start,
    .layout-align-gt-xs-start-center,
    .layout-align-gt-xs-start-end,
    .layout-align-gt-xs-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }
    .layout-align-gt-xs-center,
    .layout-align-gt-xs-center-start,
    .layout-align-gt-xs-center-center,
    .layout-align-gt-xs-center-end,
    .layout-align-gt-xs-center-stretch {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .layout-align-gt-xs-end,
    .layout-align-gt-xs-end-start,
    .layout-align-gt-xs-end-center,
    .layout-align-gt-xs-end-end,
    .layout-align-gt-xs-end-stretch {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }
    .layout-align-gt-xs-space-around,
    .layout-align-gt-xs-space-around-center,
    .layout-align-gt-xs-space-around-start,
    .layout-align-gt-xs-space-around-end,
    .layout-align-gt-xs-space-around-stretch {
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }
    .layout-align-gt-xs-space-between,
    .layout-align-gt-xs-space-between-center,
    .layout-align-gt-xs-space-between-start,
    .layout-align-gt-xs-space-between-end,
    .layout-align-gt-xs-space-between-stretch {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
    .layout-align-gt-xs-start-start,
    .layout-align-gt-xs-center-start,
    .layout-align-gt-xs-end-start,
    .layout-align-gt-xs-space-between-start,
    .layout-align-gt-xs-space-around-start {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }
    .layout-align-gt-xs-start-center,
    .layout-align-gt-xs-center-center,
    .layout-align-gt-xs-end-center,
    .layout-align-gt-xs-space-between-center,
    .layout-align-gt-xs-space-around-center {
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-align-content: center;
        align-content: center;
        max-width: 100%;
    }
    .layout-align-gt-xs-start-center>*,
    .layout-align-gt-xs-center-center>*,
    .layout-align-gt-xs-end-center>*,
    .layout-align-gt-xs-space-between-center>*,
    .layout-align-gt-xs-space-around-center>* {
        max-width: 100%;
        box-sizing: border-box;
    }
    .layout-align-gt-xs-start-end,
    .layout-align-gt-xs-center-end,
    .layout-align-gt-xs-end-end,
    .layout-align-gt-xs-space-between-end,
    .layout-align-gt-xs-space-around-end {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }
    .layout-align-gt-xs-start-stretch,
    .layout-align-gt-xs-center-stretch,
    .layout-align-gt-xs-end-stretch,
    .layout-align-gt-xs-space-between-stretch,
    .layout-align-gt-xs-space-around-stretch {
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
        -webkit-align-content: stretch;
        align-content: stretch;
    }
    .flex-gt-xs {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        box-sizing: border-box;
    }
    .flex-gt-xs-grow {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        box-sizing: border-box;
    }
    .flex-gt-xs-initial {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-gt-xs-auto {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        box-sizing: border-box;
    }
    .flex-gt-xs-none {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        box-sizing: border-box;
    }
    .flex-gt-xs-noshrink {
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
        box-sizing: border-box;
    }
    .flex-gt-xs-nogrow {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-gt-xs-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-column>.flex-gt-xs-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-gt-xs-column>.flex-gt-xs-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
        min-height: 0;
    }
    .flex-gt-xs-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .flex-gt-xs-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .flex-gt-xs-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .flex-gt-xs-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .flex-gt-xs-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .flex-gt-xs-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .flex-gt-xs-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .flex-gt-xs-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .flex-gt-xs-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .flex-gt-xs-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .flex-gt-xs-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .flex-gt-xs-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .flex-gt-xs-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .flex-gt-xs-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .flex-gt-xs-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .flex-gt-xs-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .flex-gt-xs-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .flex-gt-xs-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .flex-gt-xs-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .flex-gt-xs-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-xs-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-xs-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex-gt-xs-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-xs-row>.flex {
        min-width: 0;
    }
    .layout-gt-xs-column>.flex-gt-xs-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex-gt-xs-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-gt-xs-column>.flex {
        min-height: 0;
    }
    .layout-gt-xs,
    .layout-gt-xs-column,
    .layout-gt-xs-row {
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .layout-gt-xs-column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
    }
    .layout-gt-xs-row {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
    }
}

@media (min-width: 600px) and (max-width: 959px) {
    .hide:not(.show-gt-xs):not(.show-sm):not(.show),
    .hide-gt-xs:not(.show-gt-xs):not(.show-sm):not(.show) {
        display: none;
    }
    .hide-sm:not(.show-gt-xs):not(.show-sm):not(.show) {
        display: none;
    }
    .flex-order-sm--20 {
        -webkit-box-ordinal-group: -19;
        -webkit-order: -20;
        order: -20;
    }
    .flex-order-sm--19 {
        -webkit-box-ordinal-group: -18;
        -webkit-order: -19;
        order: -19;
    }
    .flex-order-sm--18 {
        -webkit-box-ordinal-group: -17;
        -webkit-order: -18;
        order: -18;
    }
    .flex-order-sm--17 {
        -webkit-box-ordinal-group: -16;
        -webkit-order: -17;
        order: -17;
    }
    .flex-order-sm--16 {
        -webkit-box-ordinal-group: -15;
        -webkit-order: -16;
        order: -16;
    }
    .flex-order-sm--15 {
        -webkit-box-ordinal-group: -14;
        -webkit-order: -15;
        order: -15;
    }
    .flex-order-sm--14 {
        -webkit-box-ordinal-group: -13;
        -webkit-order: -14;
        order: -14;
    }
    .flex-order-sm--13 {
        -webkit-box-ordinal-group: -12;
        -webkit-order: -13;
        order: -13;
    }
    .flex-order-sm--12 {
        -webkit-box-ordinal-group: -11;
        -webkit-order: -12;
        order: -12;
    }
    .flex-order-sm--11 {
        -webkit-box-ordinal-group: -10;
        -webkit-order: -11;
        order: -11;
    }
    .flex-order-sm--10 {
        -webkit-box-ordinal-group: -9;
        -webkit-order: -10;
        order: -10;
    }
    .flex-order-sm--9 {
        -webkit-box-ordinal-group: -8;
        -webkit-order: -9;
        order: -9;
    }
    .flex-order-sm--8 {
        -webkit-box-ordinal-group: -7;
        -webkit-order: -8;
        order: -8;
    }
    .flex-order-sm--7 {
        -webkit-box-ordinal-group: -6;
        -webkit-order: -7;
        order: -7;
    }
    .flex-order-sm--6 {
        -webkit-box-ordinal-group: -5;
        -webkit-order: -6;
        order: -6;
    }
    .flex-order-sm--5 {
        -webkit-box-ordinal-group: -4;
        -webkit-order: -5;
        order: -5;
    }
    .flex-order-sm--4 {
        -webkit-box-ordinal-group: -3;
        -webkit-order: -4;
        order: -4;
    }
    .flex-order-sm--3 {
        -webkit-box-ordinal-group: -2;
        -webkit-order: -3;
        order: -3;
    }
    .flex-order-sm--2 {
        -webkit-box-ordinal-group: -1;
        -webkit-order: -2;
        order: -2;
    }
    .flex-order-sm--1 {
        -webkit-box-ordinal-group: 0;
        -webkit-order: -1;
        order: -1;
    }
    .flex-order-sm-0 {
        -webkit-box-ordinal-group: 1;
        -webkit-order: 0;
        order: 0;
    }
    .flex-order-sm-1 {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        order: 1;
    }
    .flex-order-sm-2 {
        -webkit-box-ordinal-group: 3;
        -webkit-order: 2;
        order: 2;
    }
    .flex-order-sm-3 {
        -webkit-box-ordinal-group: 4;
        -webkit-order: 3;
        order: 3;
    }
    .flex-order-sm-4 {
        -webkit-box-ordinal-group: 5;
        -webkit-order: 4;
        order: 4;
    }
    .flex-order-sm-5 {
        -webkit-box-ordinal-group: 6;
        -webkit-order: 5;
        order: 5;
    }
    .flex-order-sm-6 {
        -webkit-box-ordinal-group: 7;
        -webkit-order: 6;
        order: 6;
    }
    .flex-order-sm-7 {
        -webkit-box-ordinal-group: 8;
        -webkit-order: 7;
        order: 7;
    }
    .flex-order-sm-8 {
        -webkit-box-ordinal-group: 9;
        -webkit-order: 8;
        order: 8;
    }
    .flex-order-sm-9 {
        -webkit-box-ordinal-group: 10;
        -webkit-order: 9;
        order: 9;
    }
    .flex-order-sm-10 {
        -webkit-box-ordinal-group: 11;
        -webkit-order: 10;
        order: 10;
    }
    .flex-order-sm-11 {
        -webkit-box-ordinal-group: 12;
        -webkit-order: 11;
        order: 11;
    }
    .flex-order-sm-12 {
        -webkit-box-ordinal-group: 13;
        -webkit-order: 12;
        order: 12;
    }
    .flex-order-sm-13 {
        -webkit-box-ordinal-group: 14;
        -webkit-order: 13;
        order: 13;
    }
    .flex-order-sm-14 {
        -webkit-box-ordinal-group: 15;
        -webkit-order: 14;
        order: 14;
    }
    .flex-order-sm-15 {
        -webkit-box-ordinal-group: 16;
        -webkit-order: 15;
        order: 15;
    }
    .flex-order-sm-16 {
        -webkit-box-ordinal-group: 17;
        -webkit-order: 16;
        order: 16;
    }
    .flex-order-sm-17 {
        -webkit-box-ordinal-group: 18;
        -webkit-order: 17;
        order: 17;
    }
    .flex-order-sm-18 {
        -webkit-box-ordinal-group: 19;
        -webkit-order: 18;
        order: 18;
    }
    .flex-order-sm-19 {
        -webkit-box-ordinal-group: 20;
        -webkit-order: 19;
        order: 19;
    }
    .flex-order-sm-20 {
        -webkit-box-ordinal-group: 21;
        -webkit-order: 20;
        order: 20;
    }
    .offset-sm-0,
    .flex-offset-sm-0 {
        margin-left: 0;
    }
    [dir=rtl] .offset-sm-0,
    [dir=rtl] .flex-offset-sm-0 {
        margin-left: auto;
        margin-right: 0;
    }
    .offset-sm-5,
    .flex-offset-sm-5 {
        margin-left: 5%;
    }
    [dir=rtl] .offset-sm-5,
    [dir=rtl] .flex-offset-sm-5 {
        margin-left: auto;
        margin-right: 5%;
    }
    .offset-sm-10,
    .flex-offset-sm-10 {
        margin-left: 10%;
    }
    [dir=rtl] .offset-sm-10,
    [dir=rtl] .flex-offset-sm-10 {
        margin-left: auto;
        margin-right: 10%;
    }
    .offset-sm-15,
    .flex-offset-sm-15 {
        margin-left: 15%;
    }
    [dir=rtl] .offset-sm-15,
    [dir=rtl] .flex-offset-sm-15 {
        margin-left: auto;
        margin-right: 15%;
    }
    .offset-sm-20,
    .flex-offset-sm-20 {
        margin-left: 20%;
    }
    [dir=rtl] .offset-sm-20,
    [dir=rtl] .flex-offset-sm-20 {
        margin-left: auto;
        margin-right: 20%;
    }
    .offset-sm-25,
    .flex-offset-sm-25 {
        margin-left: 25%;
    }
    [dir=rtl] .offset-sm-25,
    [dir=rtl] .flex-offset-sm-25 {
        margin-left: auto;
        margin-right: 25%;
    }
    .offset-sm-30,
    .flex-offset-sm-30 {
        margin-left: 30%;
    }
    [dir=rtl] .offset-sm-30,
    [dir=rtl] .flex-offset-sm-30 {
        margin-left: auto;
        margin-right: 30%;
    }
    .offset-sm-35,
    .flex-offset-sm-35 {
        margin-left: 35%;
    }
    [dir=rtl] .offset-sm-35,
    [dir=rtl] .flex-offset-sm-35 {
        margin-left: auto;
        margin-right: 35%;
    }
    .offset-sm-40,
    .flex-offset-sm-40 {
        margin-left: 40%;
    }
    [dir=rtl] .offset-sm-40,
    [dir=rtl] .flex-offset-sm-40 {
        margin-left: auto;
        margin-right: 40%;
    }
    .offset-sm-45,
    .flex-offset-sm-45 {
        margin-left: 45%;
    }
    [dir=rtl] .offset-sm-45,
    [dir=rtl] .flex-offset-sm-45 {
        margin-left: auto;
        margin-right: 45%;
    }
    .offset-sm-50,
    .flex-offset-sm-50 {
        margin-left: 50%;
    }
    [dir=rtl] .offset-sm-50,
    [dir=rtl] .flex-offset-sm-50 {
        margin-left: auto;
        margin-right: 50%;
    }
    .offset-sm-55,
    .flex-offset-sm-55 {
        margin-left: 55%;
    }
    [dir=rtl] .offset-sm-55,
    [dir=rtl] .flex-offset-sm-55 {
        margin-left: auto;
        margin-right: 55%;
    }
    .offset-sm-60,
    .flex-offset-sm-60 {
        margin-left: 60%;
    }
    [dir=rtl] .offset-sm-60,
    [dir=rtl] .flex-offset-sm-60 {
        margin-left: auto;
        margin-right: 60%;
    }
    .offset-sm-65,
    .flex-offset-sm-65 {
        margin-left: 65%;
    }
    [dir=rtl] .offset-sm-65,
    [dir=rtl] .flex-offset-sm-65 {
        margin-left: auto;
        margin-right: 65%;
    }
    .offset-sm-70,
    .flex-offset-sm-70 {
        margin-left: 70%;
    }
    [dir=rtl] .offset-sm-70,
    [dir=rtl] .flex-offset-sm-70 {
        margin-left: auto;
        margin-right: 70%;
    }
    .offset-sm-75,
    .flex-offset-sm-75 {
        margin-left: 75%;
    }
    [dir=rtl] .offset-sm-75,
    [dir=rtl] .flex-offset-sm-75 {
        margin-left: auto;
        margin-right: 75%;
    }
    .offset-sm-80,
    .flex-offset-sm-80 {
        margin-left: 80%;
    }
    [dir=rtl] .offset-sm-80,
    [dir=rtl] .flex-offset-sm-80 {
        margin-left: auto;
        margin-right: 80%;
    }
    .offset-sm-85,
    .flex-offset-sm-85 {
        margin-left: 85%;
    }
    [dir=rtl] .offset-sm-85,
    [dir=rtl] .flex-offset-sm-85 {
        margin-left: auto;
        margin-right: 85%;
    }
    .offset-sm-90,
    .flex-offset-sm-90 {
        margin-left: 90%;
    }
    [dir=rtl] .offset-sm-90,
    [dir=rtl] .flex-offset-sm-90 {
        margin-left: auto;
        margin-right: 90%;
    }
    .offset-sm-95,
    .flex-offset-sm-95 {
        margin-left: 95%;
    }
    [dir=rtl] .offset-sm-95,
    [dir=rtl] .flex-offset-sm-95 {
        margin-left: auto;
        margin-right: 95%;
    }
    .offset-sm-33,
    .flex-offset-sm-33 {
        margin-left: calc(100% / 3);
    }
    .offset-sm-66,
    .flex-offset-sm-66 {
        margin-left: calc(200% / 3);
    }
    [dir=rtl] .offset-sm-66,
    [dir=rtl] .flex-offset-sm-66 {
        margin-left: auto;
        margin-right: calc(200% / 3);
    }
    .layout-align-sm,
    .layout-align-sm-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        -webkit-align-content: stretch;
        align-content: stretch;
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
    }
    .layout-align-sm-start,
    .layout-align-sm-start-start,
    .layout-align-sm-start-center,
    .layout-align-sm-start-end,
    .layout-align-sm-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }
    .layout-align-sm-center,
    .layout-align-sm-center-start,
    .layout-align-sm-center-center,
    .layout-align-sm-center-end,
    .layout-align-sm-center-stretch {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .layout-align-sm-end,
    .layout-align-sm-end-start,
    .layout-align-sm-end-center,
    .layout-align-sm-end-end,
    .layout-align-sm-end-stretch {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }
    .layout-align-sm-space-around,
    .layout-align-sm-space-around-center,
    .layout-align-sm-space-around-start,
    .layout-align-sm-space-around-end,
    .layout-align-sm-space-around-stretch {
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }
    .layout-align-sm-space-between,
    .layout-align-sm-space-between-center,
    .layout-align-sm-space-between-start,
    .layout-align-sm-space-between-end,
    .layout-align-sm-space-between-stretch {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
    .layout-align-sm-start-start,
    .layout-align-sm-center-start,
    .layout-align-sm-end-start,
    .layout-align-sm-space-between-start,
    .layout-align-sm-space-around-start {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }
    .layout-align-sm-start-center,
    .layout-align-sm-center-center,
    .layout-align-sm-end-center,
    .layout-align-sm-space-between-center,
    .layout-align-sm-space-around-center {
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-align-content: center;
        align-content: center;
        max-width: 100%;
    }
    .layout-align-sm-start-center>*,
    .layout-align-sm-center-center>*,
    .layout-align-sm-end-center>*,
    .layout-align-sm-space-between-center>*,
    .layout-align-sm-space-around-center>* {
        max-width: 100%;
        box-sizing: border-box;
    }
    .layout-align-sm-start-end,
    .layout-align-sm-center-end,
    .layout-align-sm-end-end,
    .layout-align-sm-space-between-end,
    .layout-align-sm-space-around-end {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }
    .layout-align-sm-start-stretch,
    .layout-align-sm-center-stretch,
    .layout-align-sm-end-stretch,
    .layout-align-sm-space-between-stretch,
    .layout-align-sm-space-around-stretch {
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
        -webkit-align-content: stretch;
        align-content: stretch;
    }
    .flex-sm {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        box-sizing: border-box;
    }
    .flex-sm-grow {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        box-sizing: border-box;
    }
    .flex-sm-initial {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-sm-auto {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        box-sizing: border-box;
    }
    .flex-sm-none {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        box-sizing: border-box;
    }
    .flex-sm-noshrink {
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
        box-sizing: border-box;
    }
    .flex-sm-nogrow {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-sm-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-column>.flex-sm-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-sm-column>.flex-sm-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
        min-height: 0;
    }
    .flex-sm-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .flex-sm-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .flex-sm-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .flex-sm-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .flex-sm-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .flex-sm-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .flex-sm-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .flex-sm-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .flex-sm-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .flex-sm-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .flex-sm-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .flex-sm-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .flex-sm-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .flex-sm-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .flex-sm-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .flex-sm-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .flex-sm-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .flex-sm-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .flex-sm-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .flex-sm-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-sm-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-column>.flex-sm-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex-sm-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-sm-row>.flex {
        min-width: 0;
    }
    .layout-sm-column>.flex-sm-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex-sm-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-sm-column>.flex {
        min-height: 0;
    }
    .layout-sm,
    .layout-sm-column,
    .layout-sm-row {
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .layout-sm-column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
    }
    .layout-sm-row {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
    }
}

@media (min-width: 960px) {
    .flex-order-gt-sm--20 {
        -webkit-box-ordinal-group: -19;
        -webkit-order: -20;
        order: -20;
    }
    .flex-order-gt-sm--19 {
        -webkit-box-ordinal-group: -18;
        -webkit-order: -19;
        order: -19;
    }
    .flex-order-gt-sm--18 {
        -webkit-box-ordinal-group: -17;
        -webkit-order: -18;
        order: -18;
    }
    .flex-order-gt-sm--17 {
        -webkit-box-ordinal-group: -16;
        -webkit-order: -17;
        order: -17;
    }
    .flex-order-gt-sm--16 {
        -webkit-box-ordinal-group: -15;
        -webkit-order: -16;
        order: -16;
    }
    .flex-order-gt-sm--15 {
        -webkit-box-ordinal-group: -14;
        -webkit-order: -15;
        order: -15;
    }
    .flex-order-gt-sm--14 {
        -webkit-box-ordinal-group: -13;
        -webkit-order: -14;
        order: -14;
    }
    .flex-order-gt-sm--13 {
        -webkit-box-ordinal-group: -12;
        -webkit-order: -13;
        order: -13;
    }
    .flex-order-gt-sm--12 {
        -webkit-box-ordinal-group: -11;
        -webkit-order: -12;
        order: -12;
    }
    .flex-order-gt-sm--11 {
        -webkit-box-ordinal-group: -10;
        -webkit-order: -11;
        order: -11;
    }
    .flex-order-gt-sm--10 {
        -webkit-box-ordinal-group: -9;
        -webkit-order: -10;
        order: -10;
    }
    .flex-order-gt-sm--9 {
        -webkit-box-ordinal-group: -8;
        -webkit-order: -9;
        order: -9;
    }
    .flex-order-gt-sm--8 {
        -webkit-box-ordinal-group: -7;
        -webkit-order: -8;
        order: -8;
    }
    .flex-order-gt-sm--7 {
        -webkit-box-ordinal-group: -6;
        -webkit-order: -7;
        order: -7;
    }
    .flex-order-gt-sm--6 {
        -webkit-box-ordinal-group: -5;
        -webkit-order: -6;
        order: -6;
    }
    .flex-order-gt-sm--5 {
        -webkit-box-ordinal-group: -4;
        -webkit-order: -5;
        order: -5;
    }
    .flex-order-gt-sm--4 {
        -webkit-box-ordinal-group: -3;
        -webkit-order: -4;
        order: -4;
    }
    .flex-order-gt-sm--3 {
        -webkit-box-ordinal-group: -2;
        -webkit-order: -3;
        order: -3;
    }
    .flex-order-gt-sm--2 {
        -webkit-box-ordinal-group: -1;
        -webkit-order: -2;
        order: -2;
    }
    .flex-order-gt-sm--1 {
        -webkit-box-ordinal-group: 0;
        -webkit-order: -1;
        order: -1;
    }
    .flex-order-gt-sm-0 {
        -webkit-box-ordinal-group: 1;
        -webkit-order: 0;
        order: 0;
    }
    .flex-order-gt-sm-1 {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        order: 1;
    }
    .flex-order-gt-sm-2 {
        -webkit-box-ordinal-group: 3;
        -webkit-order: 2;
        order: 2;
    }
    .flex-order-gt-sm-3 {
        -webkit-box-ordinal-group: 4;
        -webkit-order: 3;
        order: 3;
    }
    .flex-order-gt-sm-4 {
        -webkit-box-ordinal-group: 5;
        -webkit-order: 4;
        order: 4;
    }
    .flex-order-gt-sm-5 {
        -webkit-box-ordinal-group: 6;
        -webkit-order: 5;
        order: 5;
    }
    .flex-order-gt-sm-6 {
        -webkit-box-ordinal-group: 7;
        -webkit-order: 6;
        order: 6;
    }
    .flex-order-gt-sm-7 {
        -webkit-box-ordinal-group: 8;
        -webkit-order: 7;
        order: 7;
    }
    .flex-order-gt-sm-8 {
        -webkit-box-ordinal-group: 9;
        -webkit-order: 8;
        order: 8;
    }
    .flex-order-gt-sm-9 {
        -webkit-box-ordinal-group: 10;
        -webkit-order: 9;
        order: 9;
    }
    .flex-order-gt-sm-10 {
        -webkit-box-ordinal-group: 11;
        -webkit-order: 10;
        order: 10;
    }
    .flex-order-gt-sm-11 {
        -webkit-box-ordinal-group: 12;
        -webkit-order: 11;
        order: 11;
    }
    .flex-order-gt-sm-12 {
        -webkit-box-ordinal-group: 13;
        -webkit-order: 12;
        order: 12;
    }
    .flex-order-gt-sm-13 {
        -webkit-box-ordinal-group: 14;
        -webkit-order: 13;
        order: 13;
    }
    .flex-order-gt-sm-14 {
        -webkit-box-ordinal-group: 15;
        -webkit-order: 14;
        order: 14;
    }
    .flex-order-gt-sm-15 {
        -webkit-box-ordinal-group: 16;
        -webkit-order: 15;
        order: 15;
    }
    .flex-order-gt-sm-16 {
        -webkit-box-ordinal-group: 17;
        -webkit-order: 16;
        order: 16;
    }
    .flex-order-gt-sm-17 {
        -webkit-box-ordinal-group: 18;
        -webkit-order: 17;
        order: 17;
    }
    .flex-order-gt-sm-18 {
        -webkit-box-ordinal-group: 19;
        -webkit-order: 18;
        order: 18;
    }
    .flex-order-gt-sm-19 {
        -webkit-box-ordinal-group: 20;
        -webkit-order: 19;
        order: 19;
    }
    .flex-order-gt-sm-20 {
        -webkit-box-ordinal-group: 21;
        -webkit-order: 20;
        order: 20;
    }
    .offset-gt-sm-0,
    .flex-offset-gt-sm-0 {
        margin-left: 0;
    }
    [dir=rtl] .offset-gt-sm-0,
    [dir=rtl] .flex-offset-gt-sm-0 {
        margin-left: auto;
        margin-right: 0;
    }
    .offset-gt-sm-5,
    .flex-offset-gt-sm-5 {
        margin-left: 5%;
    }
    [dir=rtl] .offset-gt-sm-5,
    [dir=rtl] .flex-offset-gt-sm-5 {
        margin-left: auto;
        margin-right: 5%;
    }
    .offset-gt-sm-10,
    .flex-offset-gt-sm-10 {
        margin-left: 10%;
    }
    [dir=rtl] .offset-gt-sm-10,
    [dir=rtl] .flex-offset-gt-sm-10 {
        margin-left: auto;
        margin-right: 10%;
    }
    .offset-gt-sm-15,
    .flex-offset-gt-sm-15 {
        margin-left: 15%;
    }
    [dir=rtl] .offset-gt-sm-15,
    [dir=rtl] .flex-offset-gt-sm-15 {
        margin-left: auto;
        margin-right: 15%;
    }
    .offset-gt-sm-20,
    .flex-offset-gt-sm-20 {
        margin-left: 20%;
    }
    [dir=rtl] .offset-gt-sm-20,
    [dir=rtl] .flex-offset-gt-sm-20 {
        margin-left: auto;
        margin-right: 20%;
    }
    .offset-gt-sm-25,
    .flex-offset-gt-sm-25 {
        margin-left: 25%;
    }
    [dir=rtl] .offset-gt-sm-25,
    [dir=rtl] .flex-offset-gt-sm-25 {
        margin-left: auto;
        margin-right: 25%;
    }
    .offset-gt-sm-30,
    .flex-offset-gt-sm-30 {
        margin-left: 30%;
    }
    [dir=rtl] .offset-gt-sm-30,
    [dir=rtl] .flex-offset-gt-sm-30 {
        margin-left: auto;
        margin-right: 30%;
    }
    .offset-gt-sm-35,
    .flex-offset-gt-sm-35 {
        margin-left: 35%;
    }
    [dir=rtl] .offset-gt-sm-35,
    [dir=rtl] .flex-offset-gt-sm-35 {
        margin-left: auto;
        margin-right: 35%;
    }
    .offset-gt-sm-40,
    .flex-offset-gt-sm-40 {
        margin-left: 40%;
    }
    [dir=rtl] .offset-gt-sm-40,
    [dir=rtl] .flex-offset-gt-sm-40 {
        margin-left: auto;
        margin-right: 40%;
    }
    .offset-gt-sm-45,
    .flex-offset-gt-sm-45 {
        margin-left: 45%;
    }
    [dir=rtl] .offset-gt-sm-45,
    [dir=rtl] .flex-offset-gt-sm-45 {
        margin-left: auto;
        margin-right: 45%;
    }
    .offset-gt-sm-50,
    .flex-offset-gt-sm-50 {
        margin-left: 50%;
    }
    [dir=rtl] .offset-gt-sm-50,
    [dir=rtl] .flex-offset-gt-sm-50 {
        margin-left: auto;
        margin-right: 50%;
    }
    .offset-gt-sm-55,
    .flex-offset-gt-sm-55 {
        margin-left: 55%;
    }
    [dir=rtl] .offset-gt-sm-55,
    [dir=rtl] .flex-offset-gt-sm-55 {
        margin-left: auto;
        margin-right: 55%;
    }
    .offset-gt-sm-60,
    .flex-offset-gt-sm-60 {
        margin-left: 60%;
    }
    [dir=rtl] .offset-gt-sm-60,
    [dir=rtl] .flex-offset-gt-sm-60 {
        margin-left: auto;
        margin-right: 60%;
    }
    .offset-gt-sm-65,
    .flex-offset-gt-sm-65 {
        margin-left: 65%;
    }
    [dir=rtl] .offset-gt-sm-65,
    [dir=rtl] .flex-offset-gt-sm-65 {
        margin-left: auto;
        margin-right: 65%;
    }
    .offset-gt-sm-70,
    .flex-offset-gt-sm-70 {
        margin-left: 70%;
    }
    [dir=rtl] .offset-gt-sm-70,
    [dir=rtl] .flex-offset-gt-sm-70 {
        margin-left: auto;
        margin-right: 70%;
    }
    .offset-gt-sm-75,
    .flex-offset-gt-sm-75 {
        margin-left: 75%;
    }
    [dir=rtl] .offset-gt-sm-75,
    [dir=rtl] .flex-offset-gt-sm-75 {
        margin-left: auto;
        margin-right: 75%;
    }
    .offset-gt-sm-80,
    .flex-offset-gt-sm-80 {
        margin-left: 80%;
    }
    [dir=rtl] .offset-gt-sm-80,
    [dir=rtl] .flex-offset-gt-sm-80 {
        margin-left: auto;
        margin-right: 80%;
    }
    .offset-gt-sm-85,
    .flex-offset-gt-sm-85 {
        margin-left: 85%;
    }
    [dir=rtl] .offset-gt-sm-85,
    [dir=rtl] .flex-offset-gt-sm-85 {
        margin-left: auto;
        margin-right: 85%;
    }
    .offset-gt-sm-90,
    .flex-offset-gt-sm-90 {
        margin-left: 90%;
    }
    [dir=rtl] .offset-gt-sm-90,
    [dir=rtl] .flex-offset-gt-sm-90 {
        margin-left: auto;
        margin-right: 90%;
    }
    .offset-gt-sm-95,
    .flex-offset-gt-sm-95 {
        margin-left: 95%;
    }
    [dir=rtl] .offset-gt-sm-95,
    [dir=rtl] .flex-offset-gt-sm-95 {
        margin-left: auto;
        margin-right: 95%;
    }
    .offset-gt-sm-33,
    .flex-offset-gt-sm-33 {
        margin-left: calc(100% / 3);
    }
    .offset-gt-sm-66,
    .flex-offset-gt-sm-66 {
        margin-left: calc(200% / 3);
    }
    [dir=rtl] .offset-gt-sm-66,
    [dir=rtl] .flex-offset-gt-sm-66 {
        margin-left: auto;
        margin-right: calc(200% / 3);
    }
    .layout-align-gt-sm,
    .layout-align-gt-sm-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        -webkit-align-content: stretch;
        align-content: stretch;
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
    }
    .layout-align-gt-sm-start,
    .layout-align-gt-sm-start-start,
    .layout-align-gt-sm-start-center,
    .layout-align-gt-sm-start-end,
    .layout-align-gt-sm-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }
    .layout-align-gt-sm-center,
    .layout-align-gt-sm-center-start,
    .layout-align-gt-sm-center-center,
    .layout-align-gt-sm-center-end,
    .layout-align-gt-sm-center-stretch {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .layout-align-gt-sm-end,
    .layout-align-gt-sm-end-start,
    .layout-align-gt-sm-end-center,
    .layout-align-gt-sm-end-end,
    .layout-align-gt-sm-end-stretch {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }
    .layout-align-gt-sm-space-around,
    .layout-align-gt-sm-space-around-center,
    .layout-align-gt-sm-space-around-start,
    .layout-align-gt-sm-space-around-end,
    .layout-align-gt-sm-space-around-stretch {
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }
    .layout-align-gt-sm-space-between,
    .layout-align-gt-sm-space-between-center,
    .layout-align-gt-sm-space-between-start,
    .layout-align-gt-sm-space-between-end,
    .layout-align-gt-sm-space-between-stretch {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
    .layout-align-gt-sm-start-start,
    .layout-align-gt-sm-center-start,
    .layout-align-gt-sm-end-start,
    .layout-align-gt-sm-space-between-start,
    .layout-align-gt-sm-space-around-start {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }
    .layout-align-gt-sm-start-center,
    .layout-align-gt-sm-center-center,
    .layout-align-gt-sm-end-center,
    .layout-align-gt-sm-space-between-center,
    .layout-align-gt-sm-space-around-center {
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-align-content: center;
        align-content: center;
        max-width: 100%;
    }
    .layout-align-gt-sm-start-center>*,
    .layout-align-gt-sm-center-center>*,
    .layout-align-gt-sm-end-center>*,
    .layout-align-gt-sm-space-between-center>*,
    .layout-align-gt-sm-space-around-center>* {
        max-width: 100%;
        box-sizing: border-box;
    }
    .layout-align-gt-sm-start-end,
    .layout-align-gt-sm-center-end,
    .layout-align-gt-sm-end-end,
    .layout-align-gt-sm-space-between-end,
    .layout-align-gt-sm-space-around-end {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }
    .layout-align-gt-sm-start-stretch,
    .layout-align-gt-sm-center-stretch,
    .layout-align-gt-sm-end-stretch,
    .layout-align-gt-sm-space-between-stretch,
    .layout-align-gt-sm-space-around-stretch {
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
        -webkit-align-content: stretch;
        align-content: stretch;
    }
    .flex-gt-sm {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        box-sizing: border-box;
    }
    .flex-gt-sm-grow {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        box-sizing: border-box;
    }
    .flex-gt-sm-initial {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-gt-sm-auto {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        box-sizing: border-box;
    }
    .flex-gt-sm-none {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        box-sizing: border-box;
    }
    .flex-gt-sm-noshrink {
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
        box-sizing: border-box;
    }
    .flex-gt-sm-nogrow {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-gt-sm-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-column>.flex-gt-sm-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-gt-sm-column>.flex-gt-sm-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
        min-height: 0;
    }
    .flex-gt-sm-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .flex-gt-sm-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .flex-gt-sm-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .flex-gt-sm-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .flex-gt-sm-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .flex-gt-sm-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .flex-gt-sm-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .flex-gt-sm-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .flex-gt-sm-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .flex-gt-sm-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .flex-gt-sm-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .flex-gt-sm-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .flex-gt-sm-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .flex-gt-sm-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .flex-gt-sm-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .flex-gt-sm-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .flex-gt-sm-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .flex-gt-sm-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .flex-gt-sm-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .flex-gt-sm-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-sm-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-sm-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex-gt-sm-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-sm-row>.flex {
        min-width: 0;
    }
    .layout-gt-sm-column>.flex-gt-sm-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex-gt-sm-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-gt-sm-column>.flex {
        min-height: 0;
    }
    .layout-gt-sm,
    .layout-gt-sm-column,
    .layout-gt-sm-row {
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .layout-gt-sm-column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
    }
    .layout-gt-sm-row {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
    }
}

@media (min-width: 960px) and (max-width: 1279px) {
    .hide:not(.show-gt-xs):not(.show-gt-sm):not(.show-md):not(.show),
    .hide-gt-xs:not(.show-gt-xs):not(.show-gt-sm):not(.show-md):not(.show),
    .hide-gt-sm:not(.show-gt-xs):not(.show-gt-sm):not(.show-md):not(.show) {
        display: none;
    }
    .hide-md:not(.show-md):not(.show-gt-sm):not(.show-gt-xs):not(.show) {
        display: none;
    }
    .flex-order-md--20 {
        -webkit-box-ordinal-group: -19;
        -webkit-order: -20;
        order: -20;
    }
    .flex-order-md--19 {
        -webkit-box-ordinal-group: -18;
        -webkit-order: -19;
        order: -19;
    }
    .flex-order-md--18 {
        -webkit-box-ordinal-group: -17;
        -webkit-order: -18;
        order: -18;
    }
    .flex-order-md--17 {
        -webkit-box-ordinal-group: -16;
        -webkit-order: -17;
        order: -17;
    }
    .flex-order-md--16 {
        -webkit-box-ordinal-group: -15;
        -webkit-order: -16;
        order: -16;
    }
    .flex-order-md--15 {
        -webkit-box-ordinal-group: -14;
        -webkit-order: -15;
        order: -15;
    }
    .flex-order-md--14 {
        -webkit-box-ordinal-group: -13;
        -webkit-order: -14;
        order: -14;
    }
    .flex-order-md--13 {
        -webkit-box-ordinal-group: -12;
        -webkit-order: -13;
        order: -13;
    }
    .flex-order-md--12 {
        -webkit-box-ordinal-group: -11;
        -webkit-order: -12;
        order: -12;
    }
    .flex-order-md--11 {
        -webkit-box-ordinal-group: -10;
        -webkit-order: -11;
        order: -11;
    }
    .flex-order-md--10 {
        -webkit-box-ordinal-group: -9;
        -webkit-order: -10;
        order: -10;
    }
    .flex-order-md--9 {
        -webkit-box-ordinal-group: -8;
        -webkit-order: -9;
        order: -9;
    }
    .flex-order-md--8 {
        -webkit-box-ordinal-group: -7;
        -webkit-order: -8;
        order: -8;
    }
    .flex-order-md--7 {
        -webkit-box-ordinal-group: -6;
        -webkit-order: -7;
        order: -7;
    }
    .flex-order-md--6 {
        -webkit-box-ordinal-group: -5;
        -webkit-order: -6;
        order: -6;
    }
    .flex-order-md--5 {
        -webkit-box-ordinal-group: -4;
        -webkit-order: -5;
        order: -5;
    }
    .flex-order-md--4 {
        -webkit-box-ordinal-group: -3;
        -webkit-order: -4;
        order: -4;
    }
    .flex-order-md--3 {
        -webkit-box-ordinal-group: -2;
        -webkit-order: -3;
        order: -3;
    }
    .flex-order-md--2 {
        -webkit-box-ordinal-group: -1;
        -webkit-order: -2;
        order: -2;
    }
    .flex-order-md--1 {
        -webkit-box-ordinal-group: 0;
        -webkit-order: -1;
        order: -1;
    }
    .flex-order-md-0 {
        -webkit-box-ordinal-group: 1;
        -webkit-order: 0;
        order: 0;
    }
    .flex-order-md-1 {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        order: 1;
    }
    .flex-order-md-2 {
        -webkit-box-ordinal-group: 3;
        -webkit-order: 2;
        order: 2;
    }
    .flex-order-md-3 {
        -webkit-box-ordinal-group: 4;
        -webkit-order: 3;
        order: 3;
    }
    .flex-order-md-4 {
        -webkit-box-ordinal-group: 5;
        -webkit-order: 4;
        order: 4;
    }
    .flex-order-md-5 {
        -webkit-box-ordinal-group: 6;
        -webkit-order: 5;
        order: 5;
    }
    .flex-order-md-6 {
        -webkit-box-ordinal-group: 7;
        -webkit-order: 6;
        order: 6;
    }
    .flex-order-md-7 {
        -webkit-box-ordinal-group: 8;
        -webkit-order: 7;
        order: 7;
    }
    .flex-order-md-8 {
        -webkit-box-ordinal-group: 9;
        -webkit-order: 8;
        order: 8;
    }
    .flex-order-md-9 {
        -webkit-box-ordinal-group: 10;
        -webkit-order: 9;
        order: 9;
    }
    .flex-order-md-10 {
        -webkit-box-ordinal-group: 11;
        -webkit-order: 10;
        order: 10;
    }
    .flex-order-md-11 {
        -webkit-box-ordinal-group: 12;
        -webkit-order: 11;
        order: 11;
    }
    .flex-order-md-12 {
        -webkit-box-ordinal-group: 13;
        -webkit-order: 12;
        order: 12;
    }
    .flex-order-md-13 {
        -webkit-box-ordinal-group: 14;
        -webkit-order: 13;
        order: 13;
    }
    .flex-order-md-14 {
        -webkit-box-ordinal-group: 15;
        -webkit-order: 14;
        order: 14;
    }
    .flex-order-md-15 {
        -webkit-box-ordinal-group: 16;
        -webkit-order: 15;
        order: 15;
    }
    .flex-order-md-16 {
        -webkit-box-ordinal-group: 17;
        -webkit-order: 16;
        order: 16;
    }
    .flex-order-md-17 {
        -webkit-box-ordinal-group: 18;
        -webkit-order: 17;
        order: 17;
    }
    .flex-order-md-18 {
        -webkit-box-ordinal-group: 19;
        -webkit-order: 18;
        order: 18;
    }
    .flex-order-md-19 {
        -webkit-box-ordinal-group: 20;
        -webkit-order: 19;
        order: 19;
    }
    .flex-order-md-20 {
        -webkit-box-ordinal-group: 21;
        -webkit-order: 20;
        order: 20;
    }
    .offset-md-0,
    .flex-offset-md-0 {
        margin-left: 0;
    }
    [dir=rtl] .offset-md-0,
    [dir=rtl] .flex-offset-md-0 {
        margin-left: auto;
        margin-right: 0;
    }
    .offset-md-5,
    .flex-offset-md-5 {
        margin-left: 5%;
    }
    [dir=rtl] .offset-md-5,
    [dir=rtl] .flex-offset-md-5 {
        margin-left: auto;
        margin-right: 5%;
    }
    .offset-md-10,
    .flex-offset-md-10 {
        margin-left: 10%;
    }
    [dir=rtl] .offset-md-10,
    [dir=rtl] .flex-offset-md-10 {
        margin-left: auto;
        margin-right: 10%;
    }
    .offset-md-15,
    .flex-offset-md-15 {
        margin-left: 15%;
    }
    [dir=rtl] .offset-md-15,
    [dir=rtl] .flex-offset-md-15 {
        margin-left: auto;
        margin-right: 15%;
    }
    .offset-md-20,
    .flex-offset-md-20 {
        margin-left: 20%;
    }
    [dir=rtl] .offset-md-20,
    [dir=rtl] .flex-offset-md-20 {
        margin-left: auto;
        margin-right: 20%;
    }
    .offset-md-25,
    .flex-offset-md-25 {
        margin-left: 25%;
    }
    [dir=rtl] .offset-md-25,
    [dir=rtl] .flex-offset-md-25 {
        margin-left: auto;
        margin-right: 25%;
    }
    .offset-md-30,
    .flex-offset-md-30 {
        margin-left: 30%;
    }
    [dir=rtl] .offset-md-30,
    [dir=rtl] .flex-offset-md-30 {
        margin-left: auto;
        margin-right: 30%;
    }
    .offset-md-35,
    .flex-offset-md-35 {
        margin-left: 35%;
    }
    [dir=rtl] .offset-md-35,
    [dir=rtl] .flex-offset-md-35 {
        margin-left: auto;
        margin-right: 35%;
    }
    .offset-md-40,
    .flex-offset-md-40 {
        margin-left: 40%;
    }
    [dir=rtl] .offset-md-40,
    [dir=rtl] .flex-offset-md-40 {
        margin-left: auto;
        margin-right: 40%;
    }
    .offset-md-45,
    .flex-offset-md-45 {
        margin-left: 45%;
    }
    [dir=rtl] .offset-md-45,
    [dir=rtl] .flex-offset-md-45 {
        margin-left: auto;
        margin-right: 45%;
    }
    .offset-md-50,
    .flex-offset-md-50 {
        margin-left: 50%;
    }
    [dir=rtl] .offset-md-50,
    [dir=rtl] .flex-offset-md-50 {
        margin-left: auto;
        margin-right: 50%;
    }
    .offset-md-55,
    .flex-offset-md-55 {
        margin-left: 55%;
    }
    [dir=rtl] .offset-md-55,
    [dir=rtl] .flex-offset-md-55 {
        margin-left: auto;
        margin-right: 55%;
    }
    .offset-md-60,
    .flex-offset-md-60 {
        margin-left: 60%;
    }
    [dir=rtl] .offset-md-60,
    [dir=rtl] .flex-offset-md-60 {
        margin-left: auto;
        margin-right: 60%;
    }
    .offset-md-65,
    .flex-offset-md-65 {
        margin-left: 65%;
    }
    [dir=rtl] .offset-md-65,
    [dir=rtl] .flex-offset-md-65 {
        margin-left: auto;
        margin-right: 65%;
    }
    .offset-md-70,
    .flex-offset-md-70 {
        margin-left: 70%;
    }
    [dir=rtl] .offset-md-70,
    [dir=rtl] .flex-offset-md-70 {
        margin-left: auto;
        margin-right: 70%;
    }
    .offset-md-75,
    .flex-offset-md-75 {
        margin-left: 75%;
    }
    [dir=rtl] .offset-md-75,
    [dir=rtl] .flex-offset-md-75 {
        margin-left: auto;
        margin-right: 75%;
    }
    .offset-md-80,
    .flex-offset-md-80 {
        margin-left: 80%;
    }
    [dir=rtl] .offset-md-80,
    [dir=rtl] .flex-offset-md-80 {
        margin-left: auto;
        margin-right: 80%;
    }
    .offset-md-85,
    .flex-offset-md-85 {
        margin-left: 85%;
    }
    [dir=rtl] .offset-md-85,
    [dir=rtl] .flex-offset-md-85 {
        margin-left: auto;
        margin-right: 85%;
    }
    .offset-md-90,
    .flex-offset-md-90 {
        margin-left: 90%;
    }
    [dir=rtl] .offset-md-90,
    [dir=rtl] .flex-offset-md-90 {
        margin-left: auto;
        margin-right: 90%;
    }
    .offset-md-95,
    .flex-offset-md-95 {
        margin-left: 95%;
    }
    [dir=rtl] .offset-md-95,
    [dir=rtl] .flex-offset-md-95 {
        margin-left: auto;
        margin-right: 95%;
    }
    .offset-md-33,
    .flex-offset-md-33 {
        margin-left: calc(100% / 3);
    }
    .offset-md-66,
    .flex-offset-md-66 {
        margin-left: calc(200% / 3);
    }
    [dir=rtl] .offset-md-66,
    [dir=rtl] .flex-offset-md-66 {
        margin-left: auto;
        margin-right: calc(200% / 3);
    }
    .layout-align-md,
    .layout-align-md-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        -webkit-align-content: stretch;
        align-content: stretch;
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
    }
    .layout-align-md-start,
    .layout-align-md-start-start,
    .layout-align-md-start-center,
    .layout-align-md-start-end,
    .layout-align-md-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }
    .layout-align-md-center,
    .layout-align-md-center-start,
    .layout-align-md-center-center,
    .layout-align-md-center-end,
    .layout-align-md-center-stretch {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .layout-align-md-end,
    .layout-align-md-end-start,
    .layout-align-md-end-center,
    .layout-align-md-end-end,
    .layout-align-md-end-stretch {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }
    .layout-align-md-space-around,
    .layout-align-md-space-around-center,
    .layout-align-md-space-around-start,
    .layout-align-md-space-around-end,
    .layout-align-md-space-around-stretch {
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }
    .layout-align-md-space-between,
    .layout-align-md-space-between-center,
    .layout-align-md-space-between-start,
    .layout-align-md-space-between-end,
    .layout-align-md-space-between-stretch {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
    .layout-align-md-start-start,
    .layout-align-md-center-start,
    .layout-align-md-end-start,
    .layout-align-md-space-between-start,
    .layout-align-md-space-around-start {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }
    .layout-align-md-start-center,
    .layout-align-md-center-center,
    .layout-align-md-end-center,
    .layout-align-md-space-between-center,
    .layout-align-md-space-around-center {
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-align-content: center;
        align-content: center;
        max-width: 100%;
    }
    .layout-align-md-start-center>*,
    .layout-align-md-center-center>*,
    .layout-align-md-end-center>*,
    .layout-align-md-space-between-center>*,
    .layout-align-md-space-around-center>* {
        max-width: 100%;
        box-sizing: border-box;
    }
    .layout-align-md-start-end,
    .layout-align-md-center-end,
    .layout-align-md-end-end,
    .layout-align-md-space-between-end,
    .layout-align-md-space-around-end {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }
    .layout-align-md-start-stretch,
    .layout-align-md-center-stretch,
    .layout-align-md-end-stretch,
    .layout-align-md-space-between-stretch,
    .layout-align-md-space-around-stretch {
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
        -webkit-align-content: stretch;
        align-content: stretch;
    }
    .flex-md {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        box-sizing: border-box;
    }
    .flex-md-grow {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        box-sizing: border-box;
    }
    .flex-md-initial {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-md-auto {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        box-sizing: border-box;
    }
    .flex-md-none {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        box-sizing: border-box;
    }
    .flex-md-noshrink {
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
        box-sizing: border-box;
    }
    .flex-md-nogrow {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-md-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-column>.flex-md-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-md-column>.flex-md-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
        min-height: 0;
    }
    .flex-md-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .flex-md-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .flex-md-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .flex-md-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .flex-md-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .flex-md-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .flex-md-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .flex-md-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .flex-md-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .flex-md-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .flex-md-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .flex-md-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .flex-md-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .flex-md-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .flex-md-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .flex-md-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .flex-md-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .flex-md-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .flex-md-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .flex-md-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-md-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-column>.flex-md-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex-md-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-md-row>.flex {
        min-width: 0;
    }
    .layout-md-column>.flex-md-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex-md-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-md-column>.flex {
        min-height: 0;
    }
    .layout-md,
    .layout-md-column,
    .layout-md-row {
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .layout-md-column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
    }
    .layout-md-row {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
    }
}

@media (min-width: 1280px) {
    .flex-order-gt-md--20 {
        -webkit-box-ordinal-group: -19;
        -webkit-order: -20;
        order: -20;
    }
    .flex-order-gt-md--19 {
        -webkit-box-ordinal-group: -18;
        -webkit-order: -19;
        order: -19;
    }
    .flex-order-gt-md--18 {
        -webkit-box-ordinal-group: -17;
        -webkit-order: -18;
        order: -18;
    }
    .flex-order-gt-md--17 {
        -webkit-box-ordinal-group: -16;
        -webkit-order: -17;
        order: -17;
    }
    .flex-order-gt-md--16 {
        -webkit-box-ordinal-group: -15;
        -webkit-order: -16;
        order: -16;
    }
    .flex-order-gt-md--15 {
        -webkit-box-ordinal-group: -14;
        -webkit-order: -15;
        order: -15;
    }
    .flex-order-gt-md--14 {
        -webkit-box-ordinal-group: -13;
        -webkit-order: -14;
        order: -14;
    }
    .flex-order-gt-md--13 {
        -webkit-box-ordinal-group: -12;
        -webkit-order: -13;
        order: -13;
    }
    .flex-order-gt-md--12 {
        -webkit-box-ordinal-group: -11;
        -webkit-order: -12;
        order: -12;
    }
    .flex-order-gt-md--11 {
        -webkit-box-ordinal-group: -10;
        -webkit-order: -11;
        order: -11;
    }
    .flex-order-gt-md--10 {
        -webkit-box-ordinal-group: -9;
        -webkit-order: -10;
        order: -10;
    }
    .flex-order-gt-md--9 {
        -webkit-box-ordinal-group: -8;
        -webkit-order: -9;
        order: -9;
    }
    .flex-order-gt-md--8 {
        -webkit-box-ordinal-group: -7;
        -webkit-order: -8;
        order: -8;
    }
    .flex-order-gt-md--7 {
        -webkit-box-ordinal-group: -6;
        -webkit-order: -7;
        order: -7;
    }
    .flex-order-gt-md--6 {
        -webkit-box-ordinal-group: -5;
        -webkit-order: -6;
        order: -6;
    }
    .flex-order-gt-md--5 {
        -webkit-box-ordinal-group: -4;
        -webkit-order: -5;
        order: -5;
    }
    .flex-order-gt-md--4 {
        -webkit-box-ordinal-group: -3;
        -webkit-order: -4;
        order: -4;
    }
    .flex-order-gt-md--3 {
        -webkit-box-ordinal-group: -2;
        -webkit-order: -3;
        order: -3;
    }
    .flex-order-gt-md--2 {
        -webkit-box-ordinal-group: -1;
        -webkit-order: -2;
        order: -2;
    }
    .flex-order-gt-md--1 {
        -webkit-box-ordinal-group: 0;
        -webkit-order: -1;
        order: -1;
    }
    .flex-order-gt-md-0 {
        -webkit-box-ordinal-group: 1;
        -webkit-order: 0;
        order: 0;
    }
    .flex-order-gt-md-1 {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        order: 1;
    }
    .flex-order-gt-md-2 {
        -webkit-box-ordinal-group: 3;
        -webkit-order: 2;
        order: 2;
    }
    .flex-order-gt-md-3 {
        -webkit-box-ordinal-group: 4;
        -webkit-order: 3;
        order: 3;
    }
    .flex-order-gt-md-4 {
        -webkit-box-ordinal-group: 5;
        -webkit-order: 4;
        order: 4;
    }
    .flex-order-gt-md-5 {
        -webkit-box-ordinal-group: 6;
        -webkit-order: 5;
        order: 5;
    }
    .flex-order-gt-md-6 {
        -webkit-box-ordinal-group: 7;
        -webkit-order: 6;
        order: 6;
    }
    .flex-order-gt-md-7 {
        -webkit-box-ordinal-group: 8;
        -webkit-order: 7;
        order: 7;
    }
    .flex-order-gt-md-8 {
        -webkit-box-ordinal-group: 9;
        -webkit-order: 8;
        order: 8;
    }
    .flex-order-gt-md-9 {
        -webkit-box-ordinal-group: 10;
        -webkit-order: 9;
        order: 9;
    }
    .flex-order-gt-md-10 {
        -webkit-box-ordinal-group: 11;
        -webkit-order: 10;
        order: 10;
    }
    .flex-order-gt-md-11 {
        -webkit-box-ordinal-group: 12;
        -webkit-order: 11;
        order: 11;
    }
    .flex-order-gt-md-12 {
        -webkit-box-ordinal-group: 13;
        -webkit-order: 12;
        order: 12;
    }
    .flex-order-gt-md-13 {
        -webkit-box-ordinal-group: 14;
        -webkit-order: 13;
        order: 13;
    }
    .flex-order-gt-md-14 {
        -webkit-box-ordinal-group: 15;
        -webkit-order: 14;
        order: 14;
    }
    .flex-order-gt-md-15 {
        -webkit-box-ordinal-group: 16;
        -webkit-order: 15;
        order: 15;
    }
    .flex-order-gt-md-16 {
        -webkit-box-ordinal-group: 17;
        -webkit-order: 16;
        order: 16;
    }
    .flex-order-gt-md-17 {
        -webkit-box-ordinal-group: 18;
        -webkit-order: 17;
        order: 17;
    }
    .flex-order-gt-md-18 {
        -webkit-box-ordinal-group: 19;
        -webkit-order: 18;
        order: 18;
    }
    .flex-order-gt-md-19 {
        -webkit-box-ordinal-group: 20;
        -webkit-order: 19;
        order: 19;
    }
    .flex-order-gt-md-20 {
        -webkit-box-ordinal-group: 21;
        -webkit-order: 20;
        order: 20;
    }
    .offset-gt-md-0,
    .flex-offset-gt-md-0 {
        margin-left: 0;
    }
    [dir=rtl] .offset-gt-md-0,
    [dir=rtl] .flex-offset-gt-md-0 {
        margin-left: auto;
        margin-right: 0;
    }
    .offset-gt-md-5,
    .flex-offset-gt-md-5 {
        margin-left: 5%;
    }
    [dir=rtl] .offset-gt-md-5,
    [dir=rtl] .flex-offset-gt-md-5 {
        margin-left: auto;
        margin-right: 5%;
    }
    .offset-gt-md-10,
    .flex-offset-gt-md-10 {
        margin-left: 10%;
    }
    [dir=rtl] .offset-gt-md-10,
    [dir=rtl] .flex-offset-gt-md-10 {
        margin-left: auto;
        margin-right: 10%;
    }
    .offset-gt-md-15,
    .flex-offset-gt-md-15 {
        margin-left: 15%;
    }
    [dir=rtl] .offset-gt-md-15,
    [dir=rtl] .flex-offset-gt-md-15 {
        margin-left: auto;
        margin-right: 15%;
    }
    .offset-gt-md-20,
    .flex-offset-gt-md-20 {
        margin-left: 20%;
    }
    [dir=rtl] .offset-gt-md-20,
    [dir=rtl] .flex-offset-gt-md-20 {
        margin-left: auto;
        margin-right: 20%;
    }
    .offset-gt-md-25,
    .flex-offset-gt-md-25 {
        margin-left: 25%;
    }
    [dir=rtl] .offset-gt-md-25,
    [dir=rtl] .flex-offset-gt-md-25 {
        margin-left: auto;
        margin-right: 25%;
    }
    .offset-gt-md-30,
    .flex-offset-gt-md-30 {
        margin-left: 30%;
    }
    [dir=rtl] .offset-gt-md-30,
    [dir=rtl] .flex-offset-gt-md-30 {
        margin-left: auto;
        margin-right: 30%;
    }
    .offset-gt-md-35,
    .flex-offset-gt-md-35 {
        margin-left: 35%;
    }
    [dir=rtl] .offset-gt-md-35,
    [dir=rtl] .flex-offset-gt-md-35 {
        margin-left: auto;
        margin-right: 35%;
    }
    .offset-gt-md-40,
    .flex-offset-gt-md-40 {
        margin-left: 40%;
    }
    [dir=rtl] .offset-gt-md-40,
    [dir=rtl] .flex-offset-gt-md-40 {
        margin-left: auto;
        margin-right: 40%;
    }
    .offset-gt-md-45,
    .flex-offset-gt-md-45 {
        margin-left: 45%;
    }
    [dir=rtl] .offset-gt-md-45,
    [dir=rtl] .flex-offset-gt-md-45 {
        margin-left: auto;
        margin-right: 45%;
    }
    .offset-gt-md-50,
    .flex-offset-gt-md-50 {
        margin-left: 50%;
    }
    [dir=rtl] .offset-gt-md-50,
    [dir=rtl] .flex-offset-gt-md-50 {
        margin-left: auto;
        margin-right: 50%;
    }
    .offset-gt-md-55,
    .flex-offset-gt-md-55 {
        margin-left: 55%;
    }
    [dir=rtl] .offset-gt-md-55,
    [dir=rtl] .flex-offset-gt-md-55 {
        margin-left: auto;
        margin-right: 55%;
    }
    .offset-gt-md-60,
    .flex-offset-gt-md-60 {
        margin-left: 60%;
    }
    [dir=rtl] .offset-gt-md-60,
    [dir=rtl] .flex-offset-gt-md-60 {
        margin-left: auto;
        margin-right: 60%;
    }
    .offset-gt-md-65,
    .flex-offset-gt-md-65 {
        margin-left: 65%;
    }
    [dir=rtl] .offset-gt-md-65,
    [dir=rtl] .flex-offset-gt-md-65 {
        margin-left: auto;
        margin-right: 65%;
    }
    .offset-gt-md-70,
    .flex-offset-gt-md-70 {
        margin-left: 70%;
    }
    [dir=rtl] .offset-gt-md-70,
    [dir=rtl] .flex-offset-gt-md-70 {
        margin-left: auto;
        margin-right: 70%;
    }
    .offset-gt-md-75,
    .flex-offset-gt-md-75 {
        margin-left: 75%;
    }
    [dir=rtl] .offset-gt-md-75,
    [dir=rtl] .flex-offset-gt-md-75 {
        margin-left: auto;
        margin-right: 75%;
    }
    .offset-gt-md-80,
    .flex-offset-gt-md-80 {
        margin-left: 80%;
    }
    [dir=rtl] .offset-gt-md-80,
    [dir=rtl] .flex-offset-gt-md-80 {
        margin-left: auto;
        margin-right: 80%;
    }
    .offset-gt-md-85,
    .flex-offset-gt-md-85 {
        margin-left: 85%;
    }
    [dir=rtl] .offset-gt-md-85,
    [dir=rtl] .flex-offset-gt-md-85 {
        margin-left: auto;
        margin-right: 85%;
    }
    .offset-gt-md-90,
    .flex-offset-gt-md-90 {
        margin-left: 90%;
    }
    [dir=rtl] .offset-gt-md-90,
    [dir=rtl] .flex-offset-gt-md-90 {
        margin-left: auto;
        margin-right: 90%;
    }
    .offset-gt-md-95,
    .flex-offset-gt-md-95 {
        margin-left: 95%;
    }
    [dir=rtl] .offset-gt-md-95,
    [dir=rtl] .flex-offset-gt-md-95 {
        margin-left: auto;
        margin-right: 95%;
    }
    .offset-gt-md-33,
    .flex-offset-gt-md-33 {
        margin-left: calc(100% / 3);
    }
    .offset-gt-md-66,
    .flex-offset-gt-md-66 {
        margin-left: calc(200% / 3);
    }
    [dir=rtl] .offset-gt-md-66,
    [dir=rtl] .flex-offset-gt-md-66 {
        margin-left: auto;
        margin-right: calc(200% / 3);
    }
    .layout-align-gt-md,
    .layout-align-gt-md-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        -webkit-align-content: stretch;
        align-content: stretch;
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
    }
    .layout-align-gt-md-start,
    .layout-align-gt-md-start-start,
    .layout-align-gt-md-start-center,
    .layout-align-gt-md-start-end,
    .layout-align-gt-md-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }
    .layout-align-gt-md-center,
    .layout-align-gt-md-center-start,
    .layout-align-gt-md-center-center,
    .layout-align-gt-md-center-end,
    .layout-align-gt-md-center-stretch {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .layout-align-gt-md-end,
    .layout-align-gt-md-end-start,
    .layout-align-gt-md-end-center,
    .layout-align-gt-md-end-end,
    .layout-align-gt-md-end-stretch {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }
    .layout-align-gt-md-space-around,
    .layout-align-gt-md-space-around-center,
    .layout-align-gt-md-space-around-start,
    .layout-align-gt-md-space-around-end,
    .layout-align-gt-md-space-around-stretch {
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }
    .layout-align-gt-md-space-between,
    .layout-align-gt-md-space-between-center,
    .layout-align-gt-md-space-between-start,
    .layout-align-gt-md-space-between-end,
    .layout-align-gt-md-space-between-stretch {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
    .layout-align-gt-md-start-start,
    .layout-align-gt-md-center-start,
    .layout-align-gt-md-end-start,
    .layout-align-gt-md-space-between-start,
    .layout-align-gt-md-space-around-start {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }
    .layout-align-gt-md-start-center,
    .layout-align-gt-md-center-center,
    .layout-align-gt-md-end-center,
    .layout-align-gt-md-space-between-center,
    .layout-align-gt-md-space-around-center {
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-align-content: center;
        align-content: center;
        max-width: 100%;
    }
    .layout-align-gt-md-start-center>*,
    .layout-align-gt-md-center-center>*,
    .layout-align-gt-md-end-center>*,
    .layout-align-gt-md-space-between-center>*,
    .layout-align-gt-md-space-around-center>* {
        max-width: 100%;
        box-sizing: border-box;
    }
    .layout-align-gt-md-start-end,
    .layout-align-gt-md-center-end,
    .layout-align-gt-md-end-end,
    .layout-align-gt-md-space-between-end,
    .layout-align-gt-md-space-around-end {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }
    .layout-align-gt-md-start-stretch,
    .layout-align-gt-md-center-stretch,
    .layout-align-gt-md-end-stretch,
    .layout-align-gt-md-space-between-stretch,
    .layout-align-gt-md-space-around-stretch {
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
        -webkit-align-content: stretch;
        align-content: stretch;
    }
    .flex-gt-md {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        box-sizing: border-box;
    }
    .flex-gt-md-grow {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        box-sizing: border-box;
    }
    .flex-gt-md-initial {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-gt-md-auto {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        box-sizing: border-box;
    }
    .flex-gt-md-none {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        box-sizing: border-box;
    }
    .flex-gt-md-noshrink {
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
        box-sizing: border-box;
    }
    .flex-gt-md-nogrow {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-gt-md-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-column>.flex-gt-md-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-gt-md-column>.flex-gt-md-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
        min-height: 0;
    }
    .flex-gt-md-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .flex-gt-md-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .flex-gt-md-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .flex-gt-md-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .flex-gt-md-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .flex-gt-md-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .flex-gt-md-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .flex-gt-md-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .flex-gt-md-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .flex-gt-md-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .flex-gt-md-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .flex-gt-md-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .flex-gt-md-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .flex-gt-md-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .flex-gt-md-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .flex-gt-md-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .flex-gt-md-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .flex-gt-md-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .flex-gt-md-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .flex-gt-md-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-md-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-md-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex-gt-md-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-md-row>.flex {
        min-width: 0;
    }
    .layout-gt-md-column>.flex-gt-md-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex-gt-md-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-gt-md-column>.flex {
        min-height: 0;
    }
    .layout-gt-md,
    .layout-gt-md-column,
    .layout-gt-md-row {
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .layout-gt-md-column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
    }
    .layout-gt-md-row {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
    }
}

@media (min-width: 1280px) and (max-width: 1919px) {
    .hide:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show),
    .hide-gt-xs:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show),
    .hide-gt-sm:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show),
    .hide-gt-md:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-lg):not(.show) {
        display: none;
    }
    .hide-lg:not(.show-lg):not(.show-gt-md):not(.show-gt-sm):not(.show-gt-xs):not(.show) {
        display: none;
    }
    .flex-order-lg--20 {
        -webkit-box-ordinal-group: -19;
        -webkit-order: -20;
        order: -20;
    }
    .flex-order-lg--19 {
        -webkit-box-ordinal-group: -18;
        -webkit-order: -19;
        order: -19;
    }
    .flex-order-lg--18 {
        -webkit-box-ordinal-group: -17;
        -webkit-order: -18;
        order: -18;
    }
    .flex-order-lg--17 {
        -webkit-box-ordinal-group: -16;
        -webkit-order: -17;
        order: -17;
    }
    .flex-order-lg--16 {
        -webkit-box-ordinal-group: -15;
        -webkit-order: -16;
        order: -16;
    }
    .flex-order-lg--15 {
        -webkit-box-ordinal-group: -14;
        -webkit-order: -15;
        order: -15;
    }
    .flex-order-lg--14 {
        -webkit-box-ordinal-group: -13;
        -webkit-order: -14;
        order: -14;
    }
    .flex-order-lg--13 {
        -webkit-box-ordinal-group: -12;
        -webkit-order: -13;
        order: -13;
    }
    .flex-order-lg--12 {
        -webkit-box-ordinal-group: -11;
        -webkit-order: -12;
        order: -12;
    }
    .flex-order-lg--11 {
        -webkit-box-ordinal-group: -10;
        -webkit-order: -11;
        order: -11;
    }
    .flex-order-lg--10 {
        -webkit-box-ordinal-group: -9;
        -webkit-order: -10;
        order: -10;
    }
    .flex-order-lg--9 {
        -webkit-box-ordinal-group: -8;
        -webkit-order: -9;
        order: -9;
    }
    .flex-order-lg--8 {
        -webkit-box-ordinal-group: -7;
        -webkit-order: -8;
        order: -8;
    }
    .flex-order-lg--7 {
        -webkit-box-ordinal-group: -6;
        -webkit-order: -7;
        order: -7;
    }
    .flex-order-lg--6 {
        -webkit-box-ordinal-group: -5;
        -webkit-order: -6;
        order: -6;
    }
    .flex-order-lg--5 {
        -webkit-box-ordinal-group: -4;
        -webkit-order: -5;
        order: -5;
    }
    .flex-order-lg--4 {
        -webkit-box-ordinal-group: -3;
        -webkit-order: -4;
        order: -4;
    }
    .flex-order-lg--3 {
        -webkit-box-ordinal-group: -2;
        -webkit-order: -3;
        order: -3;
    }
    .flex-order-lg--2 {
        -webkit-box-ordinal-group: -1;
        -webkit-order: -2;
        order: -2;
    }
    .flex-order-lg--1 {
        -webkit-box-ordinal-group: 0;
        -webkit-order: -1;
        order: -1;
    }
    .flex-order-lg-0 {
        -webkit-box-ordinal-group: 1;
        -webkit-order: 0;
        order: 0;
    }
    .flex-order-lg-1 {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        order: 1;
    }
    .flex-order-lg-2 {
        -webkit-box-ordinal-group: 3;
        -webkit-order: 2;
        order: 2;
    }
    .flex-order-lg-3 {
        -webkit-box-ordinal-group: 4;
        -webkit-order: 3;
        order: 3;
    }
    .flex-order-lg-4 {
        -webkit-box-ordinal-group: 5;
        -webkit-order: 4;
        order: 4;
    }
    .flex-order-lg-5 {
        -webkit-box-ordinal-group: 6;
        -webkit-order: 5;
        order: 5;
    }
    .flex-order-lg-6 {
        -webkit-box-ordinal-group: 7;
        -webkit-order: 6;
        order: 6;
    }
    .flex-order-lg-7 {
        -webkit-box-ordinal-group: 8;
        -webkit-order: 7;
        order: 7;
    }
    .flex-order-lg-8 {
        -webkit-box-ordinal-group: 9;
        -webkit-order: 8;
        order: 8;
    }
    .flex-order-lg-9 {
        -webkit-box-ordinal-group: 10;
        -webkit-order: 9;
        order: 9;
    }
    .flex-order-lg-10 {
        -webkit-box-ordinal-group: 11;
        -webkit-order: 10;
        order: 10;
    }
    .flex-order-lg-11 {
        -webkit-box-ordinal-group: 12;
        -webkit-order: 11;
        order: 11;
    }
    .flex-order-lg-12 {
        -webkit-box-ordinal-group: 13;
        -webkit-order: 12;
        order: 12;
    }
    .flex-order-lg-13 {
        -webkit-box-ordinal-group: 14;
        -webkit-order: 13;
        order: 13;
    }
    .flex-order-lg-14 {
        -webkit-box-ordinal-group: 15;
        -webkit-order: 14;
        order: 14;
    }
    .flex-order-lg-15 {
        -webkit-box-ordinal-group: 16;
        -webkit-order: 15;
        order: 15;
    }
    .flex-order-lg-16 {
        -webkit-box-ordinal-group: 17;
        -webkit-order: 16;
        order: 16;
    }
    .flex-order-lg-17 {
        -webkit-box-ordinal-group: 18;
        -webkit-order: 17;
        order: 17;
    }
    .flex-order-lg-18 {
        -webkit-box-ordinal-group: 19;
        -webkit-order: 18;
        order: 18;
    }
    .flex-order-lg-19 {
        -webkit-box-ordinal-group: 20;
        -webkit-order: 19;
        order: 19;
    }
    .flex-order-lg-20 {
        -webkit-box-ordinal-group: 21;
        -webkit-order: 20;
        order: 20;
    }
    .offset-lg-0,
    .flex-offset-lg-0 {
        margin-left: 0;
    }
    [dir=rtl] .offset-lg-0,
    [dir=rtl] .flex-offset-lg-0 {
        margin-left: auto;
        margin-right: 0;
    }
    .offset-lg-5,
    .flex-offset-lg-5 {
        margin-left: 5%;
    }
    [dir=rtl] .offset-lg-5,
    [dir=rtl] .flex-offset-lg-5 {
        margin-left: auto;
        margin-right: 5%;
    }
    .offset-lg-10,
    .flex-offset-lg-10 {
        margin-left: 10%;
    }
    [dir=rtl] .offset-lg-10,
    [dir=rtl] .flex-offset-lg-10 {
        margin-left: auto;
        margin-right: 10%;
    }
    .offset-lg-15,
    .flex-offset-lg-15 {
        margin-left: 15%;
    }
    [dir=rtl] .offset-lg-15,
    [dir=rtl] .flex-offset-lg-15 {
        margin-left: auto;
        margin-right: 15%;
    }
    .offset-lg-20,
    .flex-offset-lg-20 {
        margin-left: 20%;
    }
    [dir=rtl] .offset-lg-20,
    [dir=rtl] .flex-offset-lg-20 {
        margin-left: auto;
        margin-right: 20%;
    }
    .offset-lg-25,
    .flex-offset-lg-25 {
        margin-left: 25%;
    }
    [dir=rtl] .offset-lg-25,
    [dir=rtl] .flex-offset-lg-25 {
        margin-left: auto;
        margin-right: 25%;
    }
    .offset-lg-30,
    .flex-offset-lg-30 {
        margin-left: 30%;
    }
    [dir=rtl] .offset-lg-30,
    [dir=rtl] .flex-offset-lg-30 {
        margin-left: auto;
        margin-right: 30%;
    }
    .offset-lg-35,
    .flex-offset-lg-35 {
        margin-left: 35%;
    }
    [dir=rtl] .offset-lg-35,
    [dir=rtl] .flex-offset-lg-35 {
        margin-left: auto;
        margin-right: 35%;
    }
    .offset-lg-40,
    .flex-offset-lg-40 {
        margin-left: 40%;
    }
    [dir=rtl] .offset-lg-40,
    [dir=rtl] .flex-offset-lg-40 {
        margin-left: auto;
        margin-right: 40%;
    }
    .offset-lg-45,
    .flex-offset-lg-45 {
        margin-left: 45%;
    }
    [dir=rtl] .offset-lg-45,
    [dir=rtl] .flex-offset-lg-45 {
        margin-left: auto;
        margin-right: 45%;
    }
    .offset-lg-50,
    .flex-offset-lg-50 {
        margin-left: 50%;
    }
    [dir=rtl] .offset-lg-50,
    [dir=rtl] .flex-offset-lg-50 {
        margin-left: auto;
        margin-right: 50%;
    }
    .offset-lg-55,
    .flex-offset-lg-55 {
        margin-left: 55%;
    }
    [dir=rtl] .offset-lg-55,
    [dir=rtl] .flex-offset-lg-55 {
        margin-left: auto;
        margin-right: 55%;
    }
    .offset-lg-60,
    .flex-offset-lg-60 {
        margin-left: 60%;
    }
    [dir=rtl] .offset-lg-60,
    [dir=rtl] .flex-offset-lg-60 {
        margin-left: auto;
        margin-right: 60%;
    }
    .offset-lg-65,
    .flex-offset-lg-65 {
        margin-left: 65%;
    }
    [dir=rtl] .offset-lg-65,
    [dir=rtl] .flex-offset-lg-65 {
        margin-left: auto;
        margin-right: 65%;
    }
    .offset-lg-70,
    .flex-offset-lg-70 {
        margin-left: 70%;
    }
    [dir=rtl] .offset-lg-70,
    [dir=rtl] .flex-offset-lg-70 {
        margin-left: auto;
        margin-right: 70%;
    }
    .offset-lg-75,
    .flex-offset-lg-75 {
        margin-left: 75%;
    }
    [dir=rtl] .offset-lg-75,
    [dir=rtl] .flex-offset-lg-75 {
        margin-left: auto;
        margin-right: 75%;
    }
    .offset-lg-80,
    .flex-offset-lg-80 {
        margin-left: 80%;
    }
    [dir=rtl] .offset-lg-80,
    [dir=rtl] .flex-offset-lg-80 {
        margin-left: auto;
        margin-right: 80%;
    }
    .offset-lg-85,
    .flex-offset-lg-85 {
        margin-left: 85%;
    }
    [dir=rtl] .offset-lg-85,
    [dir=rtl] .flex-offset-lg-85 {
        margin-left: auto;
        margin-right: 85%;
    }
    .offset-lg-90,
    .flex-offset-lg-90 {
        margin-left: 90%;
    }
    [dir=rtl] .offset-lg-90,
    [dir=rtl] .flex-offset-lg-90 {
        margin-left: auto;
        margin-right: 90%;
    }
    .offset-lg-95,
    .flex-offset-lg-95 {
        margin-left: 95%;
    }
    [dir=rtl] .offset-lg-95,
    [dir=rtl] .flex-offset-lg-95 {
        margin-left: auto;
        margin-right: 95%;
    }
    .offset-lg-33,
    .flex-offset-lg-33 {
        margin-left: calc(100% / 3);
    }
    .offset-lg-66,
    .flex-offset-lg-66 {
        margin-left: calc(200% / 3);
    }
    [dir=rtl] .offset-lg-66,
    [dir=rtl] .flex-offset-lg-66 {
        margin-left: auto;
        margin-right: calc(200% / 3);
    }
    .layout-align-lg,
    .layout-align-lg-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        -webkit-align-content: stretch;
        align-content: stretch;
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
    }
    .layout-align-lg-start,
    .layout-align-lg-start-start,
    .layout-align-lg-start-center,
    .layout-align-lg-start-end,
    .layout-align-lg-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }
    .layout-align-lg-center,
    .layout-align-lg-center-start,
    .layout-align-lg-center-center,
    .layout-align-lg-center-end,
    .layout-align-lg-center-stretch {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .layout-align-lg-end,
    .layout-align-lg-end-start,
    .layout-align-lg-end-center,
    .layout-align-lg-end-end,
    .layout-align-lg-end-stretch {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }
    .layout-align-lg-space-around,
    .layout-align-lg-space-around-center,
    .layout-align-lg-space-around-start,
    .layout-align-lg-space-around-end,
    .layout-align-lg-space-around-stretch {
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }
    .layout-align-lg-space-between,
    .layout-align-lg-space-between-center,
    .layout-align-lg-space-between-start,
    .layout-align-lg-space-between-end,
    .layout-align-lg-space-between-stretch {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
    .layout-align-lg-start-start,
    .layout-align-lg-center-start,
    .layout-align-lg-end-start,
    .layout-align-lg-space-between-start,
    .layout-align-lg-space-around-start {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }
    .layout-align-lg-start-center,
    .layout-align-lg-center-center,
    .layout-align-lg-end-center,
    .layout-align-lg-space-between-center,
    .layout-align-lg-space-around-center {
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-align-content: center;
        align-content: center;
        max-width: 100%;
    }
    .layout-align-lg-start-center>*,
    .layout-align-lg-center-center>*,
    .layout-align-lg-end-center>*,
    .layout-align-lg-space-between-center>*,
    .layout-align-lg-space-around-center>* {
        max-width: 100%;
        box-sizing: border-box;
    }
    .layout-align-lg-start-end,
    .layout-align-lg-center-end,
    .layout-align-lg-end-end,
    .layout-align-lg-space-between-end,
    .layout-align-lg-space-around-end {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }
    .layout-align-lg-start-stretch,
    .layout-align-lg-center-stretch,
    .layout-align-lg-end-stretch,
    .layout-align-lg-space-between-stretch,
    .layout-align-lg-space-around-stretch {
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
        -webkit-align-content: stretch;
        align-content: stretch;
    }
    .flex-lg {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        box-sizing: border-box;
    }
    .flex-lg-grow {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        box-sizing: border-box;
    }
    .flex-lg-initial {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-lg-auto {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        box-sizing: border-box;
    }
    .flex-lg-none {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        box-sizing: border-box;
    }
    .flex-lg-noshrink {
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
        box-sizing: border-box;
    }
    .flex-lg-nogrow {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-lg-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-column>.flex-lg-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-lg-column>.flex-lg-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
        min-height: 0;
    }
    .flex-lg-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .flex-lg-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .flex-lg-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .flex-lg-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .flex-lg-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .flex-lg-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .flex-lg-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .flex-lg-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .flex-lg-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .flex-lg-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .flex-lg-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .flex-lg-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .flex-lg-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .flex-lg-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .flex-lg-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .flex-lg-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .flex-lg-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .flex-lg-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .flex-lg-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .flex-lg-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-lg-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-column>.flex-lg-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex-lg-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-lg-row>.flex {
        min-width: 0;
    }
    .layout-lg-column>.flex-lg-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex-lg-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-lg-column>.flex {
        min-height: 0;
    }
    .layout-lg,
    .layout-lg-column,
    .layout-lg-row {
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .layout-lg-column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
    }
    .layout-lg-row {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
    }
}

@media (min-width: 1920px) {
    .flex-order-gt-lg--20 {
        -webkit-box-ordinal-group: -19;
        -webkit-order: -20;
        order: -20;
    }
    .flex-order-gt-lg--19 {
        -webkit-box-ordinal-group: -18;
        -webkit-order: -19;
        order: -19;
    }
    .flex-order-gt-lg--18 {
        -webkit-box-ordinal-group: -17;
        -webkit-order: -18;
        order: -18;
    }
    .flex-order-gt-lg--17 {
        -webkit-box-ordinal-group: -16;
        -webkit-order: -17;
        order: -17;
    }
    .flex-order-gt-lg--16 {
        -webkit-box-ordinal-group: -15;
        -webkit-order: -16;
        order: -16;
    }
    .flex-order-gt-lg--15 {
        -webkit-box-ordinal-group: -14;
        -webkit-order: -15;
        order: -15;
    }
    .flex-order-gt-lg--14 {
        -webkit-box-ordinal-group: -13;
        -webkit-order: -14;
        order: -14;
    }
    .flex-order-gt-lg--13 {
        -webkit-box-ordinal-group: -12;
        -webkit-order: -13;
        order: -13;
    }
    .flex-order-gt-lg--12 {
        -webkit-box-ordinal-group: -11;
        -webkit-order: -12;
        order: -12;
    }
    .flex-order-gt-lg--11 {
        -webkit-box-ordinal-group: -10;
        -webkit-order: -11;
        order: -11;
    }
    .flex-order-gt-lg--10 {
        -webkit-box-ordinal-group: -9;
        -webkit-order: -10;
        order: -10;
    }
    .flex-order-gt-lg--9 {
        -webkit-box-ordinal-group: -8;
        -webkit-order: -9;
        order: -9;
    }
    .flex-order-gt-lg--8 {
        -webkit-box-ordinal-group: -7;
        -webkit-order: -8;
        order: -8;
    }
    .flex-order-gt-lg--7 {
        -webkit-box-ordinal-group: -6;
        -webkit-order: -7;
        order: -7;
    }
    .flex-order-gt-lg--6 {
        -webkit-box-ordinal-group: -5;
        -webkit-order: -6;
        order: -6;
    }
    .flex-order-gt-lg--5 {
        -webkit-box-ordinal-group: -4;
        -webkit-order: -5;
        order: -5;
    }
    .flex-order-gt-lg--4 {
        -webkit-box-ordinal-group: -3;
        -webkit-order: -4;
        order: -4;
    }
    .flex-order-gt-lg--3 {
        -webkit-box-ordinal-group: -2;
        -webkit-order: -3;
        order: -3;
    }
    .flex-order-gt-lg--2 {
        -webkit-box-ordinal-group: -1;
        -webkit-order: -2;
        order: -2;
    }
    .flex-order-gt-lg--1 {
        -webkit-box-ordinal-group: 0;
        -webkit-order: -1;
        order: -1;
    }
    .flex-order-gt-lg-0 {
        -webkit-box-ordinal-group: 1;
        -webkit-order: 0;
        order: 0;
    }
    .flex-order-gt-lg-1 {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        order: 1;
    }
    .flex-order-gt-lg-2 {
        -webkit-box-ordinal-group: 3;
        -webkit-order: 2;
        order: 2;
    }
    .flex-order-gt-lg-3 {
        -webkit-box-ordinal-group: 4;
        -webkit-order: 3;
        order: 3;
    }
    .flex-order-gt-lg-4 {
        -webkit-box-ordinal-group: 5;
        -webkit-order: 4;
        order: 4;
    }
    .flex-order-gt-lg-5 {
        -webkit-box-ordinal-group: 6;
        -webkit-order: 5;
        order: 5;
    }
    .flex-order-gt-lg-6 {
        -webkit-box-ordinal-group: 7;
        -webkit-order: 6;
        order: 6;
    }
    .flex-order-gt-lg-7 {
        -webkit-box-ordinal-group: 8;
        -webkit-order: 7;
        order: 7;
    }
    .flex-order-gt-lg-8 {
        -webkit-box-ordinal-group: 9;
        -webkit-order: 8;
        order: 8;
    }
    .flex-order-gt-lg-9 {
        -webkit-box-ordinal-group: 10;
        -webkit-order: 9;
        order: 9;
    }
    .flex-order-gt-lg-10 {
        -webkit-box-ordinal-group: 11;
        -webkit-order: 10;
        order: 10;
    }
    .flex-order-gt-lg-11 {
        -webkit-box-ordinal-group: 12;
        -webkit-order: 11;
        order: 11;
    }
    .flex-order-gt-lg-12 {
        -webkit-box-ordinal-group: 13;
        -webkit-order: 12;
        order: 12;
    }
    .flex-order-gt-lg-13 {
        -webkit-box-ordinal-group: 14;
        -webkit-order: 13;
        order: 13;
    }
    .flex-order-gt-lg-14 {
        -webkit-box-ordinal-group: 15;
        -webkit-order: 14;
        order: 14;
    }
    .flex-order-gt-lg-15 {
        -webkit-box-ordinal-group: 16;
        -webkit-order: 15;
        order: 15;
    }
    .flex-order-gt-lg-16 {
        -webkit-box-ordinal-group: 17;
        -webkit-order: 16;
        order: 16;
    }
    .flex-order-gt-lg-17 {
        -webkit-box-ordinal-group: 18;
        -webkit-order: 17;
        order: 17;
    }
    .flex-order-gt-lg-18 {
        -webkit-box-ordinal-group: 19;
        -webkit-order: 18;
        order: 18;
    }
    .flex-order-gt-lg-19 {
        -webkit-box-ordinal-group: 20;
        -webkit-order: 19;
        order: 19;
    }
    .flex-order-gt-lg-20 {
        -webkit-box-ordinal-group: 21;
        -webkit-order: 20;
        order: 20;
    }
    .offset-gt-lg-0,
    .flex-offset-gt-lg-0 {
        margin-left: 0;
    }
    [dir=rtl] .offset-gt-lg-0,
    [dir=rtl] .flex-offset-gt-lg-0 {
        margin-left: auto;
        margin-right: 0;
    }
    .offset-gt-lg-5,
    .flex-offset-gt-lg-5 {
        margin-left: 5%;
    }
    [dir=rtl] .offset-gt-lg-5,
    [dir=rtl] .flex-offset-gt-lg-5 {
        margin-left: auto;
        margin-right: 5%;
    }
    .offset-gt-lg-10,
    .flex-offset-gt-lg-10 {
        margin-left: 10%;
    }
    [dir=rtl] .offset-gt-lg-10,
    [dir=rtl] .flex-offset-gt-lg-10 {
        margin-left: auto;
        margin-right: 10%;
    }
    .offset-gt-lg-15,
    .flex-offset-gt-lg-15 {
        margin-left: 15%;
    }
    [dir=rtl] .offset-gt-lg-15,
    [dir=rtl] .flex-offset-gt-lg-15 {
        margin-left: auto;
        margin-right: 15%;
    }
    .offset-gt-lg-20,
    .flex-offset-gt-lg-20 {
        margin-left: 20%;
    }
    [dir=rtl] .offset-gt-lg-20,
    [dir=rtl] .flex-offset-gt-lg-20 {
        margin-left: auto;
        margin-right: 20%;
    }
    .offset-gt-lg-25,
    .flex-offset-gt-lg-25 {
        margin-left: 25%;
    }
    [dir=rtl] .offset-gt-lg-25,
    [dir=rtl] .flex-offset-gt-lg-25 {
        margin-left: auto;
        margin-right: 25%;
    }
    .offset-gt-lg-30,
    .flex-offset-gt-lg-30 {
        margin-left: 30%;
    }
    [dir=rtl] .offset-gt-lg-30,
    [dir=rtl] .flex-offset-gt-lg-30 {
        margin-left: auto;
        margin-right: 30%;
    }
    .offset-gt-lg-35,
    .flex-offset-gt-lg-35 {
        margin-left: 35%;
    }
    [dir=rtl] .offset-gt-lg-35,
    [dir=rtl] .flex-offset-gt-lg-35 {
        margin-left: auto;
        margin-right: 35%;
    }
    .offset-gt-lg-40,
    .flex-offset-gt-lg-40 {
        margin-left: 40%;
    }
    [dir=rtl] .offset-gt-lg-40,
    [dir=rtl] .flex-offset-gt-lg-40 {
        margin-left: auto;
        margin-right: 40%;
    }
    .offset-gt-lg-45,
    .flex-offset-gt-lg-45 {
        margin-left: 45%;
    }
    [dir=rtl] .offset-gt-lg-45,
    [dir=rtl] .flex-offset-gt-lg-45 {
        margin-left: auto;
        margin-right: 45%;
    }
    .offset-gt-lg-50,
    .flex-offset-gt-lg-50 {
        margin-left: 50%;
    }
    [dir=rtl] .offset-gt-lg-50,
    [dir=rtl] .flex-offset-gt-lg-50 {
        margin-left: auto;
        margin-right: 50%;
    }
    .offset-gt-lg-55,
    .flex-offset-gt-lg-55 {
        margin-left: 55%;
    }
    [dir=rtl] .offset-gt-lg-55,
    [dir=rtl] .flex-offset-gt-lg-55 {
        margin-left: auto;
        margin-right: 55%;
    }
    .offset-gt-lg-60,
    .flex-offset-gt-lg-60 {
        margin-left: 60%;
    }
    [dir=rtl] .offset-gt-lg-60,
    [dir=rtl] .flex-offset-gt-lg-60 {
        margin-left: auto;
        margin-right: 60%;
    }
    .offset-gt-lg-65,
    .flex-offset-gt-lg-65 {
        margin-left: 65%;
    }
    [dir=rtl] .offset-gt-lg-65,
    [dir=rtl] .flex-offset-gt-lg-65 {
        margin-left: auto;
        margin-right: 65%;
    }
    .offset-gt-lg-70,
    .flex-offset-gt-lg-70 {
        margin-left: 70%;
    }
    [dir=rtl] .offset-gt-lg-70,
    [dir=rtl] .flex-offset-gt-lg-70 {
        margin-left: auto;
        margin-right: 70%;
    }
    .offset-gt-lg-75,
    .flex-offset-gt-lg-75 {
        margin-left: 75%;
    }
    [dir=rtl] .offset-gt-lg-75,
    [dir=rtl] .flex-offset-gt-lg-75 {
        margin-left: auto;
        margin-right: 75%;
    }
    .offset-gt-lg-80,
    .flex-offset-gt-lg-80 {
        margin-left: 80%;
    }
    [dir=rtl] .offset-gt-lg-80,
    [dir=rtl] .flex-offset-gt-lg-80 {
        margin-left: auto;
        margin-right: 80%;
    }
    .offset-gt-lg-85,
    .flex-offset-gt-lg-85 {
        margin-left: 85%;
    }
    [dir=rtl] .offset-gt-lg-85,
    [dir=rtl] .flex-offset-gt-lg-85 {
        margin-left: auto;
        margin-right: 85%;
    }
    .offset-gt-lg-90,
    .flex-offset-gt-lg-90 {
        margin-left: 90%;
    }
    [dir=rtl] .offset-gt-lg-90,
    [dir=rtl] .flex-offset-gt-lg-90 {
        margin-left: auto;
        margin-right: 90%;
    }
    .offset-gt-lg-95,
    .flex-offset-gt-lg-95 {
        margin-left: 95%;
    }
    [dir=rtl] .offset-gt-lg-95,
    [dir=rtl] .flex-offset-gt-lg-95 {
        margin-left: auto;
        margin-right: 95%;
    }
    .offset-gt-lg-33,
    .flex-offset-gt-lg-33 {
        margin-left: calc(100% / 3);
    }
    .offset-gt-lg-66,
    .flex-offset-gt-lg-66 {
        margin-left: calc(200% / 3);
    }
    [dir=rtl] .offset-gt-lg-66,
    [dir=rtl] .flex-offset-gt-lg-66 {
        margin-left: auto;
        margin-right: calc(200% / 3);
    }
    .layout-align-gt-lg,
    .layout-align-gt-lg-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        -webkit-align-content: stretch;
        align-content: stretch;
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
    }
    .layout-align-gt-lg-start,
    .layout-align-gt-lg-start-start,
    .layout-align-gt-lg-start-center,
    .layout-align-gt-lg-start-end,
    .layout-align-gt-lg-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }
    .layout-align-gt-lg-center,
    .layout-align-gt-lg-center-start,
    .layout-align-gt-lg-center-center,
    .layout-align-gt-lg-center-end,
    .layout-align-gt-lg-center-stretch {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .layout-align-gt-lg-end,
    .layout-align-gt-lg-end-start,
    .layout-align-gt-lg-end-center,
    .layout-align-gt-lg-end-end,
    .layout-align-gt-lg-end-stretch {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }
    .layout-align-gt-lg-space-around,
    .layout-align-gt-lg-space-around-center,
    .layout-align-gt-lg-space-around-start,
    .layout-align-gt-lg-space-around-end,
    .layout-align-gt-lg-space-around-stretch {
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }
    .layout-align-gt-lg-space-between,
    .layout-align-gt-lg-space-between-center,
    .layout-align-gt-lg-space-between-start,
    .layout-align-gt-lg-space-between-end,
    .layout-align-gt-lg-space-between-stretch {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
    .layout-align-gt-lg-start-start,
    .layout-align-gt-lg-center-start,
    .layout-align-gt-lg-end-start,
    .layout-align-gt-lg-space-between-start,
    .layout-align-gt-lg-space-around-start {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }
    .layout-align-gt-lg-start-center,
    .layout-align-gt-lg-center-center,
    .layout-align-gt-lg-end-center,
    .layout-align-gt-lg-space-between-center,
    .layout-align-gt-lg-space-around-center {
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-align-content: center;
        align-content: center;
        max-width: 100%;
    }
    .layout-align-gt-lg-start-center>*,
    .layout-align-gt-lg-center-center>*,
    .layout-align-gt-lg-end-center>*,
    .layout-align-gt-lg-space-between-center>*,
    .layout-align-gt-lg-space-around-center>* {
        max-width: 100%;
        box-sizing: border-box;
    }
    .layout-align-gt-lg-start-end,
    .layout-align-gt-lg-center-end,
    .layout-align-gt-lg-end-end,
    .layout-align-gt-lg-space-between-end,
    .layout-align-gt-lg-space-around-end {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }
    .layout-align-gt-lg-start-stretch,
    .layout-align-gt-lg-center-stretch,
    .layout-align-gt-lg-end-stretch,
    .layout-align-gt-lg-space-between-stretch,
    .layout-align-gt-lg-space-around-stretch {
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
        -webkit-align-content: stretch;
        align-content: stretch;
    }
    .flex-gt-lg {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        box-sizing: border-box;
    }
    .flex-gt-lg-grow {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        box-sizing: border-box;
    }
    .flex-gt-lg-initial {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-gt-lg-auto {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        box-sizing: border-box;
    }
    .flex-gt-lg-none {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        box-sizing: border-box;
    }
    .flex-gt-lg-noshrink {
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
        box-sizing: border-box;
    }
    .flex-gt-lg-nogrow {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-gt-lg-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-column>.flex-gt-lg-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-gt-lg-column>.flex-gt-lg-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
        min-height: 0;
    }
    .flex-gt-lg-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .flex-gt-lg-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .flex-gt-lg-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .flex-gt-lg-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .flex-gt-lg-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .flex-gt-lg-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .flex-gt-lg-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .flex-gt-lg-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .flex-gt-lg-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .flex-gt-lg-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .flex-gt-lg-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .flex-gt-lg-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .flex-gt-lg-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .flex-gt-lg-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .flex-gt-lg-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .flex-gt-lg-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .flex-gt-lg-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .flex-gt-lg-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .flex-gt-lg-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .flex-gt-lg-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-gt-lg-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-column>.flex-gt-lg-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex-gt-lg-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-gt-lg-row>.flex {
        min-width: 0;
    }
    .layout-gt-lg-column>.flex-gt-lg-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex-gt-lg-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-gt-lg-column>.flex {
        min-height: 0;
    }
    .layout-gt-lg,
    .layout-gt-lg-column,
    .layout-gt-lg-row {
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .layout-gt-lg-column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
    }
    .layout-gt-lg-row {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
    }
    .flex-order-xl--20 {
        -webkit-box-ordinal-group: -19;
        -webkit-order: -20;
        order: -20;
    }
    .flex-order-xl--19 {
        -webkit-box-ordinal-group: -18;
        -webkit-order: -19;
        order: -19;
    }
    .flex-order-xl--18 {
        -webkit-box-ordinal-group: -17;
        -webkit-order: -18;
        order: -18;
    }
    .flex-order-xl--17 {
        -webkit-box-ordinal-group: -16;
        -webkit-order: -17;
        order: -17;
    }
    .flex-order-xl--16 {
        -webkit-box-ordinal-group: -15;
        -webkit-order: -16;
        order: -16;
    }
    .flex-order-xl--15 {
        -webkit-box-ordinal-group: -14;
        -webkit-order: -15;
        order: -15;
    }
    .flex-order-xl--14 {
        -webkit-box-ordinal-group: -13;
        -webkit-order: -14;
        order: -14;
    }
    .flex-order-xl--13 {
        -webkit-box-ordinal-group: -12;
        -webkit-order: -13;
        order: -13;
    }
    .flex-order-xl--12 {
        -webkit-box-ordinal-group: -11;
        -webkit-order: -12;
        order: -12;
    }
    .flex-order-xl--11 {
        -webkit-box-ordinal-group: -10;
        -webkit-order: -11;
        order: -11;
    }
    .flex-order-xl--10 {
        -webkit-box-ordinal-group: -9;
        -webkit-order: -10;
        order: -10;
    }
    .flex-order-xl--9 {
        -webkit-box-ordinal-group: -8;
        -webkit-order: -9;
        order: -9;
    }
    .flex-order-xl--8 {
        -webkit-box-ordinal-group: -7;
        -webkit-order: -8;
        order: -8;
    }
    .flex-order-xl--7 {
        -webkit-box-ordinal-group: -6;
        -webkit-order: -7;
        order: -7;
    }
    .flex-order-xl--6 {
        -webkit-box-ordinal-group: -5;
        -webkit-order: -6;
        order: -6;
    }
    .flex-order-xl--5 {
        -webkit-box-ordinal-group: -4;
        -webkit-order: -5;
        order: -5;
    }
    .flex-order-xl--4 {
        -webkit-box-ordinal-group: -3;
        -webkit-order: -4;
        order: -4;
    }
    .flex-order-xl--3 {
        -webkit-box-ordinal-group: -2;
        -webkit-order: -3;
        order: -3;
    }
    .flex-order-xl--2 {
        -webkit-box-ordinal-group: -1;
        -webkit-order: -2;
        order: -2;
    }
    .flex-order-xl--1 {
        -webkit-box-ordinal-group: 0;
        -webkit-order: -1;
        order: -1;
    }
    .flex-order-xl-0 {
        -webkit-box-ordinal-group: 1;
        -webkit-order: 0;
        order: 0;
    }
    .flex-order-xl-1 {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        order: 1;
    }
    .flex-order-xl-2 {
        -webkit-box-ordinal-group: 3;
        -webkit-order: 2;
        order: 2;
    }
    .flex-order-xl-3 {
        -webkit-box-ordinal-group: 4;
        -webkit-order: 3;
        order: 3;
    }
    .flex-order-xl-4 {
        -webkit-box-ordinal-group: 5;
        -webkit-order: 4;
        order: 4;
    }
    .flex-order-xl-5 {
        -webkit-box-ordinal-group: 6;
        -webkit-order: 5;
        order: 5;
    }
    .flex-order-xl-6 {
        -webkit-box-ordinal-group: 7;
        -webkit-order: 6;
        order: 6;
    }
    .flex-order-xl-7 {
        -webkit-box-ordinal-group: 8;
        -webkit-order: 7;
        order: 7;
    }
    .flex-order-xl-8 {
        -webkit-box-ordinal-group: 9;
        -webkit-order: 8;
        order: 8;
    }
    .flex-order-xl-9 {
        -webkit-box-ordinal-group: 10;
        -webkit-order: 9;
        order: 9;
    }
    .flex-order-xl-10 {
        -webkit-box-ordinal-group: 11;
        -webkit-order: 10;
        order: 10;
    }
    .flex-order-xl-11 {
        -webkit-box-ordinal-group: 12;
        -webkit-order: 11;
        order: 11;
    }
    .flex-order-xl-12 {
        -webkit-box-ordinal-group: 13;
        -webkit-order: 12;
        order: 12;
    }
    .flex-order-xl-13 {
        -webkit-box-ordinal-group: 14;
        -webkit-order: 13;
        order: 13;
    }
    .flex-order-xl-14 {
        -webkit-box-ordinal-group: 15;
        -webkit-order: 14;
        order: 14;
    }
    .flex-order-xl-15 {
        -webkit-box-ordinal-group: 16;
        -webkit-order: 15;
        order: 15;
    }
    .flex-order-xl-16 {
        -webkit-box-ordinal-group: 17;
        -webkit-order: 16;
        order: 16;
    }
    .flex-order-xl-17 {
        -webkit-box-ordinal-group: 18;
        -webkit-order: 17;
        order: 17;
    }
    .flex-order-xl-18 {
        -webkit-box-ordinal-group: 19;
        -webkit-order: 18;
        order: 18;
    }
    .flex-order-xl-19 {
        -webkit-box-ordinal-group: 20;
        -webkit-order: 19;
        order: 19;
    }
    .flex-order-xl-20 {
        -webkit-box-ordinal-group: 21;
        -webkit-order: 20;
        order: 20;
    }
    .offset-xl-0,
    .flex-offset-xl-0 {
        margin-left: 0;
    }
    [dir=rtl] .offset-xl-0,
    [dir=rtl] .flex-offset-xl-0 {
        margin-left: auto;
        margin-right: 0;
    }
    .offset-xl-5,
    .flex-offset-xl-5 {
        margin-left: 5%;
    }
    [dir=rtl] .offset-xl-5,
    [dir=rtl] .flex-offset-xl-5 {
        margin-left: auto;
        margin-right: 5%;
    }
    .offset-xl-10,
    .flex-offset-xl-10 {
        margin-left: 10%;
    }
    [dir=rtl] .offset-xl-10,
    [dir=rtl] .flex-offset-xl-10 {
        margin-left: auto;
        margin-right: 10%;
    }
    .offset-xl-15,
    .flex-offset-xl-15 {
        margin-left: 15%;
    }
    [dir=rtl] .offset-xl-15,
    [dir=rtl] .flex-offset-xl-15 {
        margin-left: auto;
        margin-right: 15%;
    }
    .offset-xl-20,
    .flex-offset-xl-20 {
        margin-left: 20%;
    }
    [dir=rtl] .offset-xl-20,
    [dir=rtl] .flex-offset-xl-20 {
        margin-left: auto;
        margin-right: 20%;
    }
    .offset-xl-25,
    .flex-offset-xl-25 {
        margin-left: 25%;
    }
    [dir=rtl] .offset-xl-25,
    [dir=rtl] .flex-offset-xl-25 {
        margin-left: auto;
        margin-right: 25%;
    }
    .offset-xl-30,
    .flex-offset-xl-30 {
        margin-left: 30%;
    }
    [dir=rtl] .offset-xl-30,
    [dir=rtl] .flex-offset-xl-30 {
        margin-left: auto;
        margin-right: 30%;
    }
    .offset-xl-35,
    .flex-offset-xl-35 {
        margin-left: 35%;
    }
    [dir=rtl] .offset-xl-35,
    [dir=rtl] .flex-offset-xl-35 {
        margin-left: auto;
        margin-right: 35%;
    }
    .offset-xl-40,
    .flex-offset-xl-40 {
        margin-left: 40%;
    }
    [dir=rtl] .offset-xl-40,
    [dir=rtl] .flex-offset-xl-40 {
        margin-left: auto;
        margin-right: 40%;
    }
    .offset-xl-45,
    .flex-offset-xl-45 {
        margin-left: 45%;
    }
    [dir=rtl] .offset-xl-45,
    [dir=rtl] .flex-offset-xl-45 {
        margin-left: auto;
        margin-right: 45%;
    }
    .offset-xl-50,
    .flex-offset-xl-50 {
        margin-left: 50%;
    }
    [dir=rtl] .offset-xl-50,
    [dir=rtl] .flex-offset-xl-50 {
        margin-left: auto;
        margin-right: 50%;
    }
    .offset-xl-55,
    .flex-offset-xl-55 {
        margin-left: 55%;
    }
    [dir=rtl] .offset-xl-55,
    [dir=rtl] .flex-offset-xl-55 {
        margin-left: auto;
        margin-right: 55%;
    }
    .offset-xl-60,
    .flex-offset-xl-60 {
        margin-left: 60%;
    }
    [dir=rtl] .offset-xl-60,
    [dir=rtl] .flex-offset-xl-60 {
        margin-left: auto;
        margin-right: 60%;
    }
    .offset-xl-65,
    .flex-offset-xl-65 {
        margin-left: 65%;
    }
    [dir=rtl] .offset-xl-65,
    [dir=rtl] .flex-offset-xl-65 {
        margin-left: auto;
        margin-right: 65%;
    }
    .offset-xl-70,
    .flex-offset-xl-70 {
        margin-left: 70%;
    }
    [dir=rtl] .offset-xl-70,
    [dir=rtl] .flex-offset-xl-70 {
        margin-left: auto;
        margin-right: 70%;
    }
    .offset-xl-75,
    .flex-offset-xl-75 {
        margin-left: 75%;
    }
    [dir=rtl] .offset-xl-75,
    [dir=rtl] .flex-offset-xl-75 {
        margin-left: auto;
        margin-right: 75%;
    }
    .offset-xl-80,
    .flex-offset-xl-80 {
        margin-left: 80%;
    }
    [dir=rtl] .offset-xl-80,
    [dir=rtl] .flex-offset-xl-80 {
        margin-left: auto;
        margin-right: 80%;
    }
    .offset-xl-85,
    .flex-offset-xl-85 {
        margin-left: 85%;
    }
    [dir=rtl] .offset-xl-85,
    [dir=rtl] .flex-offset-xl-85 {
        margin-left: auto;
        margin-right: 85%;
    }
    .offset-xl-90,
    .flex-offset-xl-90 {
        margin-left: 90%;
    }
    [dir=rtl] .offset-xl-90,
    [dir=rtl] .flex-offset-xl-90 {
        margin-left: auto;
        margin-right: 90%;
    }
    .offset-xl-95,
    .flex-offset-xl-95 {
        margin-left: 95%;
    }
    [dir=rtl] .offset-xl-95,
    [dir=rtl] .flex-offset-xl-95 {
        margin-left: auto;
        margin-right: 95%;
    }
    .offset-xl-33,
    .flex-offset-xl-33 {
        margin-left: calc(100% / 3);
    }
    .offset-xl-66,
    .flex-offset-xl-66 {
        margin-left: calc(200% / 3);
    }
    [dir=rtl] .offset-xl-66,
    [dir=rtl] .flex-offset-xl-66 {
        margin-left: auto;
        margin-right: calc(200% / 3);
    }
    .layout-align-xl,
    .layout-align-xl-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        -webkit-align-content: stretch;
        align-content: stretch;
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
    }
    .layout-align-xl-start,
    .layout-align-xl-start-start,
    .layout-align-xl-start-center,
    .layout-align-xl-start-end,
    .layout-align-xl-start-stretch {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }
    .layout-align-xl-center,
    .layout-align-xl-center-start,
    .layout-align-xl-center-center,
    .layout-align-xl-center-end,
    .layout-align-xl-center-stretch {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .layout-align-xl-end,
    .layout-align-xl-end-start,
    .layout-align-xl-end-center,
    .layout-align-xl-end-end,
    .layout-align-xl-end-stretch {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }
    .layout-align-xl-space-around,
    .layout-align-xl-space-around-center,
    .layout-align-xl-space-around-start,
    .layout-align-xl-space-around-end,
    .layout-align-xl-space-around-stretch {
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }
    .layout-align-xl-space-between,
    .layout-align-xl-space-between-center,
    .layout-align-xl-space-between-start,
    .layout-align-xl-space-between-end,
    .layout-align-xl-space-between-stretch {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
    .layout-align-xl-start-start,
    .layout-align-xl-center-start,
    .layout-align-xl-end-start,
    .layout-align-xl-space-between-start,
    .layout-align-xl-space-around-start {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }
    .layout-align-xl-start-center,
    .layout-align-xl-center-center,
    .layout-align-xl-end-center,
    .layout-align-xl-space-between-center,
    .layout-align-xl-space-around-center {
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-align-content: center;
        align-content: center;
        max-width: 100%;
    }
    .layout-align-xl-start-center>*,
    .layout-align-xl-center-center>*,
    .layout-align-xl-end-center>*,
    .layout-align-xl-space-between-center>*,
    .layout-align-xl-space-around-center>* {
        max-width: 100%;
        box-sizing: border-box;
    }
    .layout-align-xl-start-end,
    .layout-align-xl-center-end,
    .layout-align-xl-end-end,
    .layout-align-xl-space-between-end,
    .layout-align-xl-space-around-end {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }
    .layout-align-xl-start-stretch,
    .layout-align-xl-center-stretch,
    .layout-align-xl-end-stretch,
    .layout-align-xl-space-between-stretch,
    .layout-align-xl-space-around-stretch {
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
        -webkit-align-content: stretch;
        align-content: stretch;
    }
    .flex-xl {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        box-sizing: border-box;
    }
    .flex-xl-grow {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        box-sizing: border-box;
    }
    .flex-xl-initial {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-xl-auto {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        box-sizing: border-box;
    }
    .flex-xl-none {
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        box-sizing: border-box;
    }
    .flex-xl-noshrink {
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
        box-sizing: border-box;
    }
    .flex-xl-nogrow {
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        flex: 0 1 auto;
        box-sizing: border-box;
    }
    .flex-xl-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-column>.flex-xl-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 0%;
        max-height: 100%;
        box-sizing: border-box;
        min-width: 0;
    }
    .layout-xl-column>.flex-xl-0 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 0%;
        box-sizing: border-box;
        min-height: 0;
    }
    .flex-xl-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 5%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-5 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 5%;
        box-sizing: border-box;
    }
    .flex-xl-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 10%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-10 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 10%;
        box-sizing: border-box;
    }
    .flex-xl-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 15%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-15 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 15%;
        box-sizing: border-box;
    }
    .flex-xl-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 20%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-20 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 20%;
        box-sizing: border-box;
    }
    .flex-xl-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 25%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-25 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 25%;
        box-sizing: border-box;
    }
    .flex-xl-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 30%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-30 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 30%;
        box-sizing: border-box;
    }
    .flex-xl-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 35%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-35 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 35%;
        box-sizing: border-box;
    }
    .flex-xl-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 40%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-40 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 40%;
        box-sizing: border-box;
    }
    .flex-xl-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 45%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-45 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 45%;
        box-sizing: border-box;
    }
    .flex-xl-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 50%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-50 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 50%;
        box-sizing: border-box;
    }
    .flex-xl-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 55%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-55 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 55%;
        box-sizing: border-box;
    }
    .flex-xl-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 60%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-60 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 60%;
        box-sizing: border-box;
    }
    .flex-xl-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 65%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-65 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 65%;
        box-sizing: border-box;
    }
    .flex-xl-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 70%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-70 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 70%;
        box-sizing: border-box;
    }
    .flex-xl-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 75%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-75 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 75%;
        box-sizing: border-box;
    }
    .flex-xl-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 80%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-80 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 80%;
        box-sizing: border-box;
    }
    .flex-xl-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 85%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-85 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 85%;
        box-sizing: border-box;
    }
    .flex-xl-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 90%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-90 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 90%;
        box-sizing: border-box;
    }
    .flex-xl-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 95%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-95 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 95%;
        box-sizing: border-box;
    }
    .flex-xl-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-100 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-row>.flex-xl-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 33.33%;
        flex: 1 1 33.33%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-column>.flex-xl-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 66.66%;
        flex: 1 1 66.66%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 33.33%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex-xl-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 66.66%;
        max-height: 100%;
        box-sizing: border-box;
    }
    .layout-xl-row>.flex {
        min-width: 0;
    }
    .layout-xl-column>.flex-xl-33 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 33.33%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex-xl-66 {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 100%;
        flex: 1 1 100%;
        max-width: 100%;
        max-height: 66.66%;
        box-sizing: border-box;
    }
    .layout-xl-column>.flex {
        min-height: 0;
    }
    .layout-xl,
    .layout-xl-column,
    .layout-xl-row {
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .layout-xl-column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
    }
    .layout-xl-row {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
    }
    .hide:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show),
    .hide-gt-xs:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show),
    .hide-gt-sm:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show),
    .hide-gt-md:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show),
    .hide-gt-lg:not(.show-gt-xs):not(.show-gt-sm):not(.show-gt-md):not(.show-gt-lg):not(.show-xl):not(.show) {
        display: none;
    }
    .hide-xl:not(.show-xl):not(.show-gt-lg):not(.show-gt-md):not(.show-gt-sm):not(.show-gt-xs):not(.show) {
        display: none;
    }
}

@media print {
    .hide-print:not(.show-print):not(.show) {
        display: none !important;
    }
}
  // *********************************************************************************************************************************************
  // ******************              PRIMENG                 ******************************************
  'ui-widget': {
    'boxSizing': 'border-box'
  },
  'ui-widget *': {
    'boxSizing': 'border-box'
  },
  'ui-helper-hidden': {
    'display': 'none !important'
  },
  'ui-helper-hidden-accessible': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'clip': 'rect(0 0 0 0)',
    'height': [{ 'unit': 'px', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-helper-hidden-accessible input': {
    'transform': 'scale(0)'
  },
  'ui-helper-hidden-accessible select': {
    'transform': 'scale(0)'
  },
  'ui-helper-reset': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'outline': '0',
    'lineHeight': [{ 'unit': 'px', 'value': 1.3 }],
    'textDecoration': 'none',
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'listStyle': 'none'
  },
  'ui-helper-clearfix::before': {
    'content': '""',
    'display': 'table'
  },
  'ui-helper-clearfix::after': {
    'content': '""',
    'display': 'table'
  },
  'ui-helper-clearfix::after': {
    'clear': 'both'
  },
  'ui-helper-clearfix': {
    'zoom': '1'
  },
  'ui-helper-zfix': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'opacity': '0',
    'filter': 'Alpha(Opacity=0)'
  },
  'ui-state-disabled': {
    'cursor': 'default !important'
  },
  'ui-state-disabled a': {
    'cursor': 'default !important'
  },
  'ui-icon': {
    'display': 'block',
    'textIndent': '-99999px',
    'overflow': 'hidden',
    'backgroundRepeat': 'no-repeat'
  },
  'ui-widget-overlay': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-resizable': {
    'position': 'relative'
  },
  'ui-resizable-handle': {
    'position': 'absolute',
    'fontSize': [{ 'unit': 'px', 'value': 0.1 }],
    'display': 'block'
  },
  'ui-resizable-disabled ui-resizable-handle': {
    'display': 'none'
  },
  'ui-resizable-autohide ui-resizable-handle': {
    'display': 'none'
  },
  'ui-resizable-n': {
    'cursor': 'n-resize',
    'height': [{ 'unit': 'px', 'value': 7 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': -5 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-resizable-s': {
    'cursor': 's-resize',
    'height': [{ 'unit': 'px', 'value': 7 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': -5 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-resizable-e': {
    'cursor': 'e-resize',
    'width': [{ 'unit': 'px', 'value': 7 }],
    'right': [{ 'unit': 'px', 'value': -5 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-resizable-w': {
    'cursor': 'w-resize',
    'width': [{ 'unit': 'px', 'value': 7 }],
    'left': [{ 'unit': 'px', 'value': -5 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-resizable-se': {
    'cursor': 'se-resize',
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'right': [{ 'unit': 'px', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-resizable-sw': {
    'cursor': 'sw-resize',
    'width': [{ 'unit': 'px', 'value': 9 }],
    'height': [{ 'unit': 'px', 'value': 9 }],
    'left': [{ 'unit': 'px', 'value': -5 }],
    'bottom': [{ 'unit': 'px', 'value': -5 }]
  },
  'ui-resizable-nw': {
    'cursor': 'nw-resize',
    'width': [{ 'unit': 'px', 'value': 9 }],
    'height': [{ 'unit': 'px', 'value': 9 }],
    'left': [{ 'unit': 'px', 'value': -5 }],
    'top': [{ 'unit': 'px', 'value': -5 }]
  },
  'ui-resizable-ne': {
    'cursor': 'ne-resize',
    'width': [{ 'unit': 'px', 'value': 9 }],
    'height': [{ 'unit': 'px', 'value': 9 }],
    'right': [{ 'unit': 'px', 'value': -5 }],
    'top': [{ 'unit': 'px', 'value': -5 }]
  },
  'ui-shadow': {
    'WebkitBoxShadow': '0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
    'MozBoxShadow': '0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }]
  },
  'ui-unselectable-text': {
    'WebkitUserSelect': 'none',
    'KhtmlUserSelect': 'none',
    'MozUserSelect': 'none',
    'OUserSelect': 'none',
    'userSelect': 'none'
  },
  'ui-scrollbar-measure': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'overflow': 'scroll',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -9999 }]
  },
  'ui-overflow-hidden': {
    'overflow': 'hidden'
  },
  '::-webkit-input-placeholder': {
    // WebKit, Blink, Edge
    'color': '#898989'
  },
  ':-moz-placeholder': {
    // Mozilla Firefox 4 to 18
    'color': '#898989',
    'opacity': '1'
  },
  '::-moz-placeholder': {
    // Mozilla Firefox 19+
    'color': '#898989',
    'opacity': '1'
  },
  ':-ms-input-placeholder': {
    // Internet Explorer 10-11
    'color': '#898989'
  },
  '::-ms-input-placeholder': {
    // Microsoft Edge
    'color': '#898989'
  },
  'ui-placeholder': {
    'color': '#898989'
  },
  'input[type="button"]': {
    'MozBorderRadius': '0',
    'WebkitBorderRadius': '0',
    'borderRadius': '0'
  },
  'input[type="submit"]': {
    'MozBorderRadius': '0',
    'WebkitBorderRadius': '0',
    'borderRadius': '0'
  },
  'input[type="reset"]': {
    'MozBorderRadius': '0',
    'WebkitBorderRadius': '0',
    'borderRadius': '0'
  },
  'input[type="file"]::-webkit-file-upload-button': {
    'MozBorderRadius': '0',
    'WebkitBorderRadius': '0',
    'borderRadius': '0'
  },
  'button': {
    'MozBorderRadius': '0',
    'WebkitBorderRadius': '0',
    'borderRadius': '0'
  },
  'ui-accordion': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-accordion ui-accordion-header': {
    'cursor': 'pointer',
    'position': 'relative',
    'marginTop': [{ 'unit': 'px', 'value': 1 }],
    'zoom': '1'
  },
  'ui-accordion ui-accordion-header a': {
    'display': 'block',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-accordion ui-accordion-content': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'visible',
    'zoom': '1'
  },
  'ui-accordion ui-accordion-headerui-state-disabled': {
    'cursor': 'default'
  },
  'ui-accordion ui-accordion-headerui-state-disabled a': {
    'cursor': 'default'
  },
  'ui-accordion-content-wrapper-overflown': {
    'overflow': 'hidden'
  },
  'ui-rtl ui-accordion ui-accordion-header a': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-rtl ui-accordion ui-accordion-toggle-icon': {
    'left': [{ 'unit': 'string', 'value': 'initial' }],
    'right': [{ 'unit': 'em', 'value': 0.5 }]
  },
  'ui-rtl ui-accordion ui-accordion-toggle-iconfa-caret-right:before': {
    'content': ''\f0d9''
  },
  'ui-autocomplete': {
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'zoom': '1',
    'cursor': 'pointer',
    'MozBoxShadow': 'none',
    'WebkitBoxShadow': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'position': 'relative',
    'display': 'inline-block'
  },
  'ui-autocomplete ui-autocomplete-dropdown': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'em', 'value': 2 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'top'
  },
  'ui-autocomplete ui-autocomplete-input': {
    'paddingRight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'ui-autocomplete-loader': {
    'position': 'absolute',
    'right': [{ 'unit': 'em', 'value': 0.25 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }]
  },
  'ui-autocomplete-query': {
    'fontWeight': 'bold'
  },
  'ui-autocomplete ui-autocomplete-panel': {
    'minWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-autocomplete-panel': {
    'position': 'absolute',
    'overflow': 'auto'
  },
  'ui-autocomplete-panel ui-autocomplete-list': {
    'padding': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-autocomplete-panel ui-autocomplete-list-item': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'fontWeight': 'normal',
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.186 }, { 'unit': 'em', 'value': 0.313 }, { 'unit': 'em', 'value': 0.186 }, { 'unit': 'em', 'value': 0.313 }],
    'textAlign': 'left'
  },
  'ui-autocomplete ui-button-icon-only': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-autocomplete ui-button-icon-only:enabled:hover': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-autocomplete ui-button-icon-only:enabled:focus': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-autocomplete ui-button-icon-only:enabled:active': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  // Multiple Selection
  'ui-autocomplete-multiple-container': {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'ui-autocomplete-multiple-containerui-inputtext': {
    'clear': 'left',
    'cursor': 'text',
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-autocomplete-token': {
    'cursor': 'default',
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'overflow': 'hidden',
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.5 }],
    'whiteSpace': 'nowrap',
    'position': 'relative',
    'marginRight': [{ 'unit': 'em', 'value': 0.125 }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }]
  },
  'ui-autocomplete-token-label': {
    'display': 'block',
    'marginRight': [{ 'unit': 'em', 'value': 2 }]
  },
  'ui-autocomplete-token-icon': {
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'position': 'absolute',
    'right': [{ 'unit': 'em', 'value': 0.2 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'cursor': 'pointer'
  },
  'ui-autocomplete-input-token': {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-autocomplete-input-token input': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'width': [{ 'unit': 'em', 'value': 10 }],
    'outline': 'medium none',
    'backgroundColor': 'transparent',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'MozBorderRadius': '0',
    'WebkitBorderRadius': '0',
    'borderRadius': '0'
  },
  'ui-autocomplete-dd ui-autocomplete-loader': {
    'right': [{ 'unit': 'em', 'value': 2.25 }]
  },
  'ui-autocomplete-dd inputui-corner-all': {
    'MozBorderRadiusTopright': '0px',
    'WebkitBorderTopRightRadius': '0px',
    'borderTopRightRadius': '0px',
    'MozBorderRadiusBottomright': '0px',
    'WebkitBorderBottomRightRadius': '0px',
    'borderBottomRightRadius': '0px'
  },
  'ui-autocomplete-dd ui-autocomplete-multiple-containerui-corner-all': {
    'MozBorderRadiusTopright': '0px',
    'WebkitBorderTopRightRadius': '0px',
    'borderTopRightRadius': '0px',
    'MozBorderRadiusBottomright': '0px',
    'WebkitBorderBottomRightRadius': '0px',
    'borderBottomRightRadius': '0px'
  },
  'ui-autocomplete-dd ui-autocomplete-dropdownui-corner-all': {
    'MozBorderRadiusTopleft': '0px',
    'WebkitBorderTopLeftRadius': '0px',
    'borderTopLeftRadius': '0px',
    'MozBorderRadiusBottomleft': '0px',
    'WebkitBorderBottomLeftRadius': '0px',
    'borderBottomLeftRadius': '0px'
  },
  // * AutoComplete *
  'ui-fluid p-autocomplete': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-fluid ui-autocomplete': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-fluid ui-autocomplete-input': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-fluid ui-autocompleteui-autocomplete-dd ui-autocomplete-input': {
    'width': [{ 'unit': '%H', 'value': NaN }]
  },
  'ui-fluid ui-autocompleteui-autocomplete-dd ui-autocomplete-multiple-container': {
    'width': [{ 'unit': '%H', 'value': NaN }]
  },
  'ui-fluid ui-autocomplete ui-autocomplete-dropdownui-button': {
    'width': [{ 'unit': 'em', 'value': 2 }]
  },
  'ui-blockui': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-blockui-document': {
    'position': 'fixed'
  },
  // * Breadcrumb *
  'ui-breadcrumb': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-breadcrumb ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-breadcrumb ul li': {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-breadcrumb ul li ui-menuitem-link': {
    'textDecoration': 'none'
  },
  // Button
  'ui-button': {
    'display': 'inline-block',
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textDecoration': 'none !important',
    'cursor': 'pointer',
    'textAlign': 'center',
    'zoom': '1',
    'overflow': 'visible',
    // the overflow property removes extra width in IE
  },
  'p-button': {
    'display': 'inline-block'
  },
  'ui-button-icon-only': {
    'width': [{ 'unit': 'em', 'value': 2 }]
  },
  // button text element
  'ui-button ui-button-text': {
    'display': 'block',
    'lineHeight': [{ 'unit': 'string', 'value': 'normal' }]
  },
  'ui-button-text-only ui-button-text': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 1 }]
  },
  'ui-button-icon-only ui-button-text': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'textIndent': '-9999999px'
  },
  'ui-button-text-empty ui-button-text': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'textIndent': '-9999999px'
  },
  'ui-button-text-icon-left ui-button-text': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 2.1 }]
  },
  'ui-button-text-icon-right ui-button-text': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 2.1 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 1 }]
  },
  // button icon element(s)
  'ui-button-icon-only fa': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'height': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-button-text-icon-left fa': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'height': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-button-text-icon-right fa': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'height': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-button-icon-only fa': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'marginLeft': [{ 'unit': 'em', 'value': -0.5 }],
    'width': [{ 'unit': 'em', 'value': 1 }],
    'height': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-button-icon-left': {
    'left': [{ 'unit': 'em', 'value': 0.5 }]
  },
  'ui-button-icon-right': {
    'right': [{ 'unit': 'em', 'value': 0.5 }]
  },
  // button sets
  'ui-buttonset ui-button': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  // workarounds
  'buttonui-button::-moz-focus-inner': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // reset extra padding in Firefox
  },
  // * Fluid *
  'ui-fluid ui-button': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-fluid ui-button-text-icon-left ui-button-text': {
    'paddingLeft': [{ 'unit': 'em', 'value': 1 }],
    'paddingRight': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-fluid ui-button-text-icon-right ui-button-text': {
    'paddingLeft': [{ 'unit': 'em', 'value': 1 }],
    'paddingRight': [{ 'unit': 'em', 'value': 1 }]
  },
  // * ButtonSet *
  'ui-fluid ui-buttonset': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-fluid ui-buttonsetui-buttonset-1 ui-button': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    '<w640': {
      'width': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'ui-fluid ui-buttonsetui-buttonset-2 ui-button': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'ui-fluid ui-buttonsetui-buttonset-3 ui-button': {
    'width': [{ 'unit': '%H', 'value': 0.33299999999999996 }]
  },
  'ui-fluid ui-buttonsetui-buttonset-4 ui-button': {
    'width': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'ui-fluid ui-buttonsetui-buttonset-5 ui-button': {
    'width': [{ 'unit': '%H', 'value': 0.2 }]
  },
  'ui-fluid ui-buttonsetui-buttonset-6 ui-button': {
    'width': [{ 'unit': '%H', 'value': 0.166 }]
  },
  // Severity Buttons
  // Secondary
  'ui-buttonui-button-secondaryui-state-default': {
    'backgroundColor': '#ffffff',
    'borderColor': '#cccccc',
    'color': '#373a3c'
  },
  'ui-splitbuttonui-button-secondary ui-buttonui-state-default': {
    'backgroundColor': '#ffffff',
    'borderColor': '#cccccc',
    'color': '#373a3c'
  },
  'ui-buttonui-button-secondary:enabled:hover': {
    'backgroundColor': '#f2f2f2',
    'borderColor': '#cccccc',
    'color': '#373a3c'
  },
  'ui-buttonui-button-secondary:focus': {
    'backgroundColor': '#f2f2f2',
    'borderColor': '#cccccc',
    'color': '#373a3c'
  },
  'ui-splitbuttonui-button-secondary ui-button:enabled:hover': {
    'backgroundColor': '#f2f2f2',
    'borderColor': '#cccccc',
    'color': '#373a3c'
  },
  'ui-splitbuttonui-button-secondary ui-button:focus': {
    'backgroundColor': '#f2f2f2',
    'borderColor': '#cccccc',
    'color': '#373a3c'
  },
  'ui-buttonui-button-secondary:enabled:active': {
    'backgroundColor': '#e6e6e6',
    'borderColor': '#cccccc',
    'color': '#373a3c'
  },
  'ui-splitbuttonui-button-secondary ui-button:enabled:active': {
    'backgroundColor': '#e6e6e6',
    'borderColor': '#cccccc',
    'color': '#373a3c'
  },
  // Success
  'ui-buttonui-button-successui-state-default': {
    'backgroundColor': '#5cb85c',
    'borderColor': '#5cb85c',
    'color': '#ffffff'
  },
  'ui-splitbuttonui-button-success ui-buttonui-state-default': {
    'backgroundColor': '#5cb85c',
    'borderColor': '#5cb85c',
    'color': '#ffffff'
  },
  'ui-buttonui-button-success:enabled:hover': {
    'backgroundColor': '#4cae4c',
    'borderColor': '#5cb85c'
  },
  'ui-buttonui-button-success:focus': {
    'backgroundColor': '#4cae4c',
    'borderColor': '#5cb85c'
  },
  'ui-splitbuttonui-button-success ui-button:enabled:hover': {
    'backgroundColor': '#4cae4c',
    'borderColor': '#5cb85c'
  },
  'ui-splitbuttonui-button-success ui-button:focus': {
    'backgroundColor': '#4cae4c',
    'borderColor': '#5cb85c'
  },
  'ui-buttonui-button-success:enabled:active': {
    'backgroundColor': '#449d44',
    'borderColor': '#5cb85c'
  },
  'ui-splitbuttonui-button-success ui-button:enabled:active': {
    'backgroundColor': '#449d44',
    'borderColor': '#5cb85c'
  },
  // Info
  'ui-buttonui-button-infoui-state-default': {
    'backgroundColor': '#5bc0de',
    'borderColor': '#5bc0de',
    'color': '#ffffff'
  },
  'ui-splitbuttonui-button-info ui-buttonui-state-default': {
    'backgroundColor': '#5bc0de',
    'borderColor': '#5bc0de',
    'color': '#ffffff'
  },
  'ui-buttonui-button-info:enabled:hover': {
    'backgroundColor': '#46b8da',
    'borderColor': '#5bc0de'
  },
  'ui-buttonui-button-info:focus': {
    'backgroundColor': '#46b8da',
    'borderColor': '#5bc0de'
  },
  'ui-splitbuttonui-button-info ui-button:enabled:hover': {
    'backgroundColor': '#46b8da',
    'borderColor': '#5bc0de'
  },
  'ui-splitbuttonui-button-info ui-button:focus': {
    'backgroundColor': '#46b8da',
    'borderColor': '#5bc0de'
  },
  'ui-buttonui-button-info:enabled:active': {
    'backgroundColor': '#31b0d5',
    'borderColor': '#5bc0de'
  },
  'ui-splitbuttonui-button-info ui-button:enabled:active': {
    'backgroundColor': '#31b0d5',
    'borderColor': '#5bc0de'
  },
  // Warning
  'ui-buttonui-button-warningui-state-default': {
    'backgroundColor': '#f0ad4e',
    'borderColor': '#f0ad4e',
    'color': '#ffffff'
  },
  'ui-splitbuttonui-button-warning ui-buttonui-state-default': {
    'backgroundColor': '#f0ad4e',
    'borderColor': '#f0ad4e',
    'color': '#ffffff'
  },
  'ui-buttonui-button-warning:enabled:hover': {
    'backgroundColor': '#eea236',
    'borderColor': '#f0ad4e'
  },
  'ui-buttonui-button-warning:focus': {
    'backgroundColor': '#eea236',
    'borderColor': '#f0ad4e'
  },
  'ui-splitbuttonui-button-warning ui-button:enabled:hover': {
    'backgroundColor': '#eea236',
    'borderColor': '#f0ad4e'
  },
  'ui-splitbuttonui-button-warning ui-button:focus': {
    'backgroundColor': '#eea236',
    'borderColor': '#f0ad4e'
  },
  'ui-buttonui-button-warning:enabled:active': {
    'backgroundColor': '#ec971f',
    'borderColor': '#f0ad4e'
  },
  'ui-splitbuttonui-button-warning ui-button:enabled:active': {
    'backgroundColor': '#ec971f',
    'borderColor': '#f0ad4e'
  },
  // Danger
  'ui-buttonui-button-dangerui-state-default': {
    'backgroundColor': '#d9534f',
    'borderColor': '#d9534f',
    'color': '#ffffff'
  },
  'ui-splitbuttonui-button-danger ui-buttonui-state-default': {
    'backgroundColor': '#d9534f',
    'borderColor': '#d9534f',
    'color': '#ffffff'
  },
  'ui-buttonui-button-danger:enabled:hover': {
    'backgroundColor': '#d43f3a',
    'borderColor': '#d9534f'
  },
  'ui-buttonui-button-danger:focus': {
    'backgroundColor': '#d43f3a',
    'borderColor': '#d9534f'
  },
  'ui-splitbuttonui-button-danger ui-button:enabled:hover': {
    'backgroundColor': '#d43f3a',
    'borderColor': '#d9534f'
  },
  'ui-splitbuttonui-button-danger ui-button:focus': {
    'backgroundColor': '#d43f3a',
    'borderColor': '#d9534f'
  },
  'ui-buttonui-button-danger:enabled:active': {
    'backgroundColor': '#c9302c',
    'borderColor': '#d9534f'
  },
  'ui-splitbuttonui-button-danger ui-button:enabled:active': {
    'backgroundColor': '#c9302c',
    'borderColor': '#d9534f'
  },
  'ui-calendar': {
    'position': 'relative',
    'display': 'inline-block'
  },
  'ui-calendar ui-calendar-button': {
    'position': 'absolute',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'borderTopLeftRadius': '0px',
    'borderBottomLeftRadius': '0px',
    'width': [{ 'unit': 'em', 'value': 2 }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-calendar ui-calendar-button:enabled:hover': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-calendar ui-calendar-button:focus': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  // Fluid
  'ui-fluid ui-calendar': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-fluid ui-calendar-button': {
    'width': [{ 'unit': 'em', 'value': 2 }]
  },
  'ui-fluid ui-datepicker-buttonbar button': {
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-fluid ui-calendarui-calendar-w-btn ui-inputtext': {
    'width': [{ 'unit': '%H', 'value': NaN }]
  },
  // Datepicker
  'ui-datepicker': {
    'width': [{ 'unit': 'em', 'value': 17 }],
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }],
    'display': 'none',
    'position': 'absolute'
  },
  'ui-datepickerui-datepicker-inline': {
    'display': 'inline-block',
    'position': 'static'
  },
  'ui-datepicker ui-datepicker-header': {
    'position': 'relative',
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker ui-datepicker-prev': {
    'position': 'absolute',
    'top': [{ 'unit': 'em', 'value': 0.125 }],
    'width': [{ 'unit': 'em', 'value': 1.8 }],
    'height': [{ 'unit': 'em', 'value': 1.8 }]
  },
  'ui-datepicker ui-datepicker-next': {
    'position': 'absolute',
    'top': [{ 'unit': 'em', 'value': 0.125 }],
    'width': [{ 'unit': 'em', 'value': 1.8 }],
    'height': [{ 'unit': 'em', 'value': 1.8 }]
  },
  'ui-datepicker ui-datepicker-prev': {
    'left': [{ 'unit': 'em', 'value': 0.125 }]
  },
  'ui-datepicker ui-datepicker-next': {
    'right': [{ 'unit': 'em', 'value': 0.125 }]
  },
  'ui-datepicker ui-datepicker-prev span': {
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }]
  },
  'ui-datepicker ui-datepicker-next span': {
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }]
  },
  'ui-datepicker ui-datepicker-prev span': {
    'marginLeft': [{ 'unit': 'em', 'value': -0.25 }]
  },
  'ui-datepicker ui-datepicker-next span': {
    'marginLeft': [{ 'unit': 'em', 'value': -0.125 }]
  },
  'ui-datepicker ui-datepicker-title': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2.3 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.8 }],
    'textAlign': 'center'
  },
  'ui-datepicker ui-datepicker-title select': {
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'margin': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'ui-datepicker selectui-datepicker-month': {
    'width': [{ 'unit': '%H', 'value': 0.55 }]
  },
  'ui-datepicker selectui-datepicker-year': {
    'width': [{ 'unit': '%H', 'value': 0.35 }]
  },
  'ui-datepicker selectui-datepicker-month': {
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-datepicker table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }],
    'borderCollapse': 'collapse',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker th': {
    'padding': [{ 'unit': 'em', 'value': 0.7 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'em', 'value': 0.7 }, { 'unit': 'em', 'value': 0.3 }],
    'textAlign': 'center',
    'fontWeight': 'bold',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker td': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }]
  },
  'ui-datepicker td span': {
    'display': 'block',
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }],
    'textAlign': 'right',
    'textDecoration': 'none'
  },
  'ui-datepicker td a': {
    'display': 'block',
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }],
    'textAlign': 'right',
    'textDecoration': 'none'
  },
  'ui-datepicker ui-datepicker-buttonpane': {
    'backgroundImage': 'none',
    'margin': [{ 'unit': 'em', 'value': 0.7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker ui-datepicker-buttonpane button': {
    'float': 'right',
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.2 }],
    'cursor': 'pointer',
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.6 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'em', 'value': 0.6 }],
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'visible'
  },
  'ui-datepicker ui-datepicker-buttonpane buttonui-datepicker-current': {
    'float': 'left'
  },
  // with multiple calendars
  'ui-datepickerui-datepicker-multi': {
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-datepicker-multi ui-datepicker-group': {
    'float': 'left'
  },
  'ui-datepicker-multi ui-datepicker-group table': {
    'width': [{ 'unit': '%H', 'value': 0.95 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'ui-datepicker-multi-2 ui-datepicker-group': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'ui-datepicker-multi-3 ui-datepicker-group': {
    'width': [{ 'unit': '%H', 'value': 0.33299999999999996 }]
  },
  'ui-datepicker-multi-4 ui-datepicker-group': {
    'width': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'ui-datepicker-multi ui-datepicker-group-last ui-datepicker-header': {
    'borderLeftWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker-multi ui-datepicker-group-middle ui-datepicker-header': {
    'borderLeftWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker-multi ui-datepicker-buttonpane': {
    'clear': 'left'
  },
  'ui-datepicker-row-break': {
    'clear': 'both',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker ui-datepicker-buttonbar': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }]
  },
  'ui-datepicker ui-datepicker-buttonbar>ui-g>div:last-child': {
    'textAlign': 'right'
  },
  'ui-datepicker ui-datepicker-buttonbar>ui-g>div': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-calendarui-calendar-w-btn input': {
    'MozBorderRadiusTopright': '0px',
    'WebkitBorderTopRightRadius': '0px',
    'KhtmlBorderTopRightRadius': '0px',
    'borderTopRightRadius': '0px',
    'MozBorderRadiusBottomright': '0px',
    'WebkitBorderBottomRightRadius': '0px',
    'KhtmlBorderBottomRightRadius': '0px',
    'borderBottomRightRadius': '0px'
  },
  'ui-timepicker': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-timepicker>div': {
    'display': 'inline-block',
    'marginLeft': [{ 'unit': 'em', 'value': 0.5 }],
    'minWidth': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'ui-timepicker>ui-minute-picker': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-timepicker>ui-second-picker': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-timepicker>ui-separator': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'minWidth': [{ 'unit': 'em', 'value': 0.75 }]
  },
  'ui-timepicker>ui-separator a': {
    'visibility': 'hidden'
  },
  'ui-timepicker>div a': {
    'display': 'block',
    'opacity': '0.7',
    'filter': 'Alpha(Opacity=70)'
  },
  'ui-timepicker>div a:hover': {
    'display': 'block',
    'opacity': '1',
    'filter': 'Alpha(Opacity=100)'
  },
  'ui-card-header img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-card-body': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  'ui-card-title': {
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'fontWeight': 'bold',
    'marginBottom': [{ 'unit': 'em', 'value': 0.5 }]
  },
  'ui-card-subtitle': {
    'opacity': '.7',
    'marginBottom': [{ 'unit': 'em', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.25 }],
    'fontWeight': 'bold'
  },
  'ui-card-footer': {
    'paddingTop': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-card-shadow': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12)' }],
    'WebkitBoxShadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)',
    'MozBoxShadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)'
  },
  'ui-carousel': {
    'position': 'relative',
    'padding': [{ 'unit': 'em', 'value': 0.063 }, { 'unit': 'em', 'value': 0.063 }, { 'unit': 'em', 'value': 0.063 }, { 'unit': 'em', 'value': 0.063 }]
  },
  'ui-carousel ui-carousel-viewport ui-carousel-items': {
    'listStyle': 'none outside none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 32000 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-carousel ui-carousel-viewport ui-carousel-items ui-carousel-item': {
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-carousel ui-carousel-viewport': {
    'overflow': 'hidden',
    'position': 'relative',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-carousel ui-carousel-footer': {
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }],
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }],
    'overflow': 'hidden'
  },
  'ui-carousel ui-carousel-header': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.625 }]
  },
  'ui-carousel ui-carousel-header ui-carousel-header-title': {
    'display': 'inline-block',
    'overflow': 'hidden'
  },
  'ui-carousel ui-carousel-dropdown': {
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.625 }],
    'backgroundImage': 'none'
  },
  'ui-carousel ui-carousel-mobiledropdown': {
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.625 }],
    'backgroundImage': 'none'
  },
  'ui-carousel ui-carousel-dropdown option': {
    'backgroundImage': 'none',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'MozBoxShadow': 'none',
    'WebkitBoxShadow': 'none'
  },
  'ui-carousel ui-carousel-mobiledropdown option': {
    'backgroundImage': 'none',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'MozBoxShadow': 'none',
    'WebkitBoxShadow': 'none'
  },
  'ui-carousel ui-carousel-button': {
    'float': 'right',
    'margin': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }]
  },
  'ui-carousel ui-carousel-page-link': {
    'float': 'left',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }],
    'textDecoration': 'none'
  },
  'ui-carousel ui-carousel-page-link': {
    'cursor': 'pointer'
  },
  'ui-carousel ui-carousel-button': {
    'cursor': 'pointer'
  },
  'ui-carousel ui-carousel-page-links': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': 0.125 }],
    'float': 'right'
  },
  'ui-carousel ui-carousel-mobiledropdown': {
    'display': 'none'
  },
  'ui-chkbox': {
    'display': 'inline-block',
    'cursor': 'pointer',
    'verticalAlign': 'middle',
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-chkbox ui-chkbox-box': {
    'width': [{ 'unit': 'em', 'value': 1.125 }],
    'height': [{ 'unit': 'em', 'value': 1.125 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.125 }],
    'MozBorderRadius': '2px',
    'WebkitBorderRadius': '2px',
    'borderRadius': '2px',
    'textAlign': 'center'
  },
  'ui-chkbox ui-chkbox-icon': {
    'display': 'block'
  },
  'ui-chkbox-label': {
    'verticalAlign': 'middle'
  },
  'ui-chips>ului-inputtext': {
    'clear': 'left',
    'cursor': 'text',
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-chips-token': {
    'cursor': 'default',
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'overflow': 'hidden',
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.5 }],
    'whiteSpace': 'nowrap',
    'position': 'relative',
    'marginRight': [{ 'unit': 'em', 'value': 0.125 }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }]
  },
  'ui-chips-token ui-chips-token-label': {
    'display': 'block',
    'marginRight': [{ 'unit': 'em', 'value': 2 }]
  },
  'ui-chips>ui-state-disabled ui-chips-token-label': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-chips-token ui-chips-token-icon': {
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'position': 'absolute',
    'right': [{ 'unit': 'em', 'value': 0.2 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'cursor': 'pointer'
  },
  'ui-chips-input-token': {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-chips-input-token input': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'width': [{ 'unit': 'em', 'value': 10 }],
    'outline': 'medium none',
    'backgroundColor': 'transparent',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'MozBorderRadius': '0',
    'WebkitBorderRadius': '0',
    'borderRadius': '0'
  },
  'ui-colorpicker': {
    'display': 'inline-block'
  },
  'ui-colorpicker-dragging': {
    'cursor': 'pointer'
  },
  'ui-colorpicker-overlay': {
    'position': 'relative'
  },
  'ui-colorpicker-panel': {
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 193 }],
    'height': [{ 'unit': 'px', 'value': 166 }],
    'backgroundColor': '#323232',
    'borderColor': '#191919'
  },
  'ui-colorpicker-overlay-panel': {
    'display': 'none',
    'position': 'absolute'
  },
  'ui-colorpicker-preview': {
    'width': [{ 'unit': 'em', 'value': 2 }],
    'cursor': 'pointer'
  },
  'ui-colorpicker-panel ui-colorpicker-content': {
    'position': 'relative'
  },
  'ui-colorpicker-panel ui-colorpicker-color-selector': {
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 150 }],
    'top': [{ 'unit': 'px', 'value': 8 }],
    'left': [{ 'unit': 'px', 'value': 8 }],
    'position': 'absolute'
  },
  'ui-colorpicker-panel ui-colorpicker-color': {
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 150 }],
    // background: transparent url("./images/color.png") no-repeat left top;
  },
  'ui-colorpicker-panel ui-colorpicker-color-handle': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 150 }],
    'borderRadius': '100%',
    'width': [{ 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffffff' }],
    'margin': [{ 'unit': 'px', 'value': -5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -5 }],
    'cursor': 'pointer'
  },
  'ui-colorpicker-panel ui-colorpicker-hue': {
    // background: transparent url("./images/hue.png") no-repeat left top;
    'width': [{ 'unit': 'px', 'value': 17 }],
    'height': [{ 'unit': 'px', 'value': 150 }],
    'top': [{ 'unit': 'px', 'value': 8 }],
    'left': [{ 'unit': 'px', 'value': 167 }],
    'position': 'absolute',
    'opacity': '.85'
  },
  'ui-colorpicker-panel ui-colorpicker-hue-handle': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 150 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 21 }],
    'marginLeft': [{ 'unit': 'px', 'value': -2 }],
    'marginTop': [{ 'unit': 'px', 'value': -5 }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffffff' }],
    'opacity': '.85',
    'cursor': 'pointer'
  },
  'ui-colorpicker-panelui-state-disabled ui-colorpicker-hue-handle': {
    'opacity': '.5'
  },
  'ui-colorpicker-panelui-state-disabled ui-colorpicker-color-handle': {
    'opacity': '.5'
  },
  'ui-contextmenu': {
    'width': [{ 'unit': 'em', 'value': 12.5 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'position': 'absolute',
    'display': 'none'
  },
  'ui-contextmenu ui-menu-separator': {
    'borderWidth': '1px 0 0 0'
  },
  'ui-contextmenu ul': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-contextmenu ui-submenu-list': {
    'display': 'none',
    'position': 'absolute',
    'width': [{ 'unit': 'em', 'value': 12.5 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-contextmenu ui-menuitem-link': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'display': 'block',
    'position': 'relative'
  },
  'ui-contextmenu ui-menuitem-icon': {
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-contextmenu ui-menuitem': {
    'position': 'relative'
  },
  'ui-contextmenu ui-menuitem-link ui-submenu-icon': {
    'position': 'absolute',
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'ui-contextmenu ui-menuitem-active>ui-submenu>ui-submenu-list': {
    'display': 'block !important'
  },
  'ui-datagrid ui-paginator': {
    'textAlign': 'center'
  },
  'ui-datagrid-column': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-datagrid-content-empty': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.625 }]
  },
  'ui-datagrid ui-datagrid-header': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }]
  },
  'ui-datagrid ui-datagrid-footer': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }]
  },
  'ui-datagrid ui-datagrid-header': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datagrid ui-datagrid-footer': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datagrid ui-paginator-top': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datagrid ui-paginator-bottom': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datalist ui-datalist-header': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }]
  },
  'ui-datalist ui-datalist-footer': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }]
  },
  'ui-datalist ui-datalist-header': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datalist ui-datalist-footer': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datalist ui-datalist-data': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-datalist ui-datalist-data>li': {
    'listStyleType': 'none'
  },
  'ui-datalist ui-datalist-emptymessage': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }]
  },
  'ui-datalistui-datalist-scrollable ui-datalist-content': {
    'overflow': 'auto'
  },
  'ui-datalist ui-paginator-top': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datalist ui-paginator-bottom': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datascroller': {
  },
  'ui-datascroller ui-datascroller-header': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datascroller ui-datascroller-footer': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.625 }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datascroller ui-datascroller-content': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.625 }]
  },
  'ui-datascroller-inline ui-datascroller-content': {
    'overflow': 'auto'
  },
  'ui-datascroller ui-datascroller-list': {
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-datatable': {
    'position': 'relative'
  },
  'ui-datatable table': {
    'borderCollapse': 'collapse',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'tableLayout': 'fixed'
  },
  'ui-datatable ui-datatable-header': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }],
    'boxSizing': 'border-box'
  },
  'ui-datatable ui-datatable-caption': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }],
    'boxSizing': 'border-box'
  },
  'ui-datatable ui-datatable-footer': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }],
    'boxSizing': 'border-box'
  },
  'ui-datatable ui-datatable-caption': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datatable ui-datatable-header': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datatable ui-datatable-footer': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datatable thead th': {
    'textAlign': 'center'
  },
  'ui-datatable tfoot td': {
    'textAlign': 'center'
  },
  'ui-datatable thead tr': {
    'borderWidth': '0'
  },
  'ui-datatable ui-datatable-thead>tr>th': {
    'borderColor': 'inherit',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'borderWidth': '1px',
    'borderStyle': 'solid'
  },
  'ui-datatable ui-datatable-tfoot>tr>td': {
    'borderColor': 'inherit',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'borderWidth': '1px',
    'borderStyle': 'solid'
  },
  'ui-datatable ui-datatable-data>tr>td': {
    'borderColor': 'inherit',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'borderWidth': '1px',
    'borderStyle': 'solid'
  },
  'ui-datatableui-datatable-resizable ui-datatable-thead>tr>th': {
    'overflow': 'hidden'
  },
  'ui-datatableui-datatable-resizable ui-datatable-tfoot>tr>td': {
    'overflow': 'hidden'
  },
  'ui-datatableui-datatable-resizable ui-datatable-data>tr>td': {
    'overflow': 'hidden'
  },
  'ui-datatable ui-datatable-thead>tr>th': {
    'fontWeight': 'normal'
  },
  'ui-datatable ui-datatable-tfoot>tr>td': {
    'fontWeight': 'normal'
  },
  'ui-datatable tbody': {
    'outline': '0'
  },
  'ui-datatable ui-sortable-column': {
    'cursor': 'pointer'
  },
  'ui-datatable ui-sortable-column-icon': {
    'display': 'inline-block',
    'marginLeft': [{ 'unit': 'em', 'value': 0.125 }]
  },
  'ui-datatable trui-state-highlight': {
    'cursor': 'pointer'
  },
  // Scrollable
  'ui-datatable-scrollable-body': {
    'overflow': 'auto',
    'overflowAnchor': 'none',
    'minHeight': [{ 'unit': '%V', 'value': 0 }]
  },
  'ui-datatable-scrollable-header': {
    'overflow': 'hidden'
  },
  'ui-datatable-scrollable-footer': {
    'overflow': 'hidden'
  },
  'ui-datatable-scrollable ui-datatable-scrollable-header': {
    'position': 'relative',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datatable-scrollable ui-datatable-scrollable-footer': {
    'position': 'relative',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datatable-scrollable ui-datatable-scrollable-header td': {
    'fontWeight': 'normal'
  },
  'ui-datatable-scrollable-body ui-datatable-data': {
    'borderTopColor': 'transparent'
  },
  'ui-datatable-scrollable-body ui-datatable-data>tr:first-child': {
    'borderTopColor': 'transparent'
  },
  'ui-datatable ui-datatable-data trui-state-hover': {
    'borderColor': 'inherit',
    'fontWeight': 'inherit',
    'cursor': 'pointer'
  },
  'ui-datatable ui-datatable-data trui-state-highlight': {
    'borderColor': 'inherit',
    'fontWeight': 'inherit',
    'cursor': 'pointer'
  },
  'ui-datatable ui-datatable-data trui-rowgroup-header td a': {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'ui-datatable ui-datatable-data trui-rowgroup-header td spanui-rowgroup-header-name': {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'ui-datatable-scrollable-theadclone': {
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datatable-scrollable-theadclone tr': {
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datatable-scrollable-theadclone thui-state-default': {
    'height': [{ 'unit': 'px', 'value': 0 }],
    'borderBottomWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderTopWidth': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'outline': '0 none'
  },
  'ui-datatable-scrollable-theadclone th spanui-column-title': {
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datatable ui-paginator': {
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }]
  },
  'ui-datatable ui-paginator-top': {
    'borderBottomWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datatable ui-paginator-bottom': {
    'borderTopWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datatable-rtl': {
    'direction': 'rtl'
  },
  'ui-datatable-rtlui-datatable thead th': {
    'textAlign': 'right'
  },
  'ui-datatable-rtlui-datatable tfoot td': {
    'textAlign': 'right'
  },
  // Row Toggler
  'ui-row-toggler': {
    'cursor': 'pointer'
  },
  // Resizable
  'ui-datatable ui-column-resizer': {
    'display': 'block',
    'position': 'absolute !important',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'em', 'value': 0.5 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'cursor': 'col-resize',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'ui-datatable ui-column-resizer-helper': {
    'width': [{ 'unit': 'px', 'value': 1 }],
    'position': 'absolute',
    'zIndex': '10',
    'display': 'none'
  },
  'ui-datatable-resizable': {
    'paddingBottom': [{ 'unit': 'px', 'value': 1 }],
    // fix for webkit overlow
    'overflow': 'auto'
  },
  'ui-datatable-resizable thead th': {
    'whiteSpace': 'nowrap'
  },
  'ui-datatable-resizable tbody td': {
    'whiteSpace': 'nowrap'
  },
  'ui-datatable-resizable tfoot td': {
    'whiteSpace': 'nowrap'
  },
  'ui-datatable-resizable thui-resizable-column': {
    'backgroundClip': 'padding-box',
    'position': 'relative'
  },
  // * Reflow *
  'ui-datatable-reflow ui-datatable-data td ui-column-title': {
    'display': 'none',
    '<w35': {
      'padding': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }],
      'minWidth': [{ 'unit': '%H', 'value': 0.3 }],
      'display': 'inline-block',
      'margin': [{ 'unit': 'em', 'value': -0.4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': -0.4 }, { 'unit': 'em', 'value': -0.4 }],
      'fontWeight': 'bold'
    }
  },
  // Filter
  'ui-datatable ui-column-filter': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'boxSizing': 'border-box',
    'marginTop': [{ 'unit': 'em', 'value': 0.25 }]
  },
  // Editing
  'ui-datatable ui-editable-column input': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'outline': '0'
  },
  'ui-datatable ui-datatable-data>tr>tdui-editable-column': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-datatable ui-editable-column>ui-cell-editor': {
    'display': 'none'
  },
  'ui-datatable ui-datatable-data>tr>tdui-editable-columnui-cell-editing': {
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }]
  },
  'ui-datatable ui-editable-columnui-cell-editing>ui-cell-editor': {
    'display': 'block'
  },
  'ui-datatable ui-editable-columnui-cell-editing>ui-cell-data': {
    'display': 'none'
  },
  'ui-datatable-stacked thead th': {
    'display': 'none !important'
  },
  'ui-datatable-stacked tfoot td': {
    'display': 'none !important'
  },
  'ui-datatableui-datatable-stacked ui-datatable-data>tr>td': {
    'textAlign': 'left',
    'display': 'block',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box',
    'float': 'left',
    'clear': 'left'
  },
  'ui-datatableui-datatable-stacked ui-datatable-dataui-widget-content': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datatable-stacked ui-datatable-data trui-widget-content': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-datatable-stacked ui-datatable-data td ui-column-title': {
    'padding': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }],
    'minWidth': [{ 'unit': '%H', 'value': 0.3 }],
    'display': 'inline-block',
    'margin': [{ 'unit': 'em', 'value': -0.4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': -0.4 }, { 'unit': 'em', 'value': -0.4 }],
    'fontWeight': 'bold'
  },
  'ui-datatable ui-selection-column ui-chkbox': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block'
  },
  'ui-datatable ui-selection-column ui-radiobutton': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block'
  },
  'ui-datatable ui-selection-column ui-chkbox-box': {
    'display': 'block',
    'boxSizing': 'border-box',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-datatable ui-selection-column ui-radiobutton-box': {
    'display': 'block',
    'boxSizing': 'border-box',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-datatable-scrollable-wrapper': {
    'position': 'relative'
  },
  'ui-datatable-scrollable-view': {
  },
  'ui-datatable-frozen-view ui-datatable-scrollable-body': {
    'overflow': 'hidden'
  },
  'ui-datatable-unfrozen-view': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datatable ui-datatable-load-status': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datatable ui-datatable-virtual-table': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datatable ui-datatable-loading': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'MsFilter': '"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)"',
    'opacity': '0.1',
    'zIndex': '1'
  },
  'ui-datatable ui-datatable-loading-content': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.25 }],
    'zIndex': '2'
  },
  'ui-dataview': {
    'position': 'relative'
  },
  'ui-dataview ui-paginator': {
    'textAlign': 'center'
  },
  'ui-dataview-column': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-dataview-content-empty': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.625 }]
  },
  'ui-dataview ui-dataview-header': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }]
  },
  'ui-dataview ui-dataview-footer': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }]
  },
  'ui-dataview ui-dataview-header': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-dataview ui-dataview-footer': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-dataview ui-paginator-top': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-dataview ui-paginator-bottom': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-dataviewui-dataview-list>ui-dataview-content>divui-g>div': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  // Loader
  'ui-dataview-loading': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'MsFilter': '"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)"',
    'opacity': '0.1',
    'zIndex': '1'
  },
  'ui-dataview-loading-content': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'zIndex': '2',
    'marginTop': [{ 'unit': 'em', 'value': -1 }],
    'marginLeft': [{ 'unit': 'em', 'value': -1 }]
  },
  'ui-dialog': {
    'position': 'fixed',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-dialog ui-dialog-titlebar': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }],
    'position': 'relative',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-dialog ui-dialog-content': {
    'position': 'relative',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }],
    'background': 'none',
    'overflow': 'auto',
    'zoom': '1'
  },
  'ui-dialog ui-resizable-se': {
    'width': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'right': [{ 'unit': 'px', 'value': 3 }],
    'bottom': [{ 'unit': 'px', 'value': 3 }]
  },
  'ui-draggable ui-dialog-titlebar': {
    'cursor': 'move'
  },
  'ui-dialog ui-dialog-titlebar-icon': {
    'textDecoration': 'none'
  },
  'ui-dialog ui-dialog-titlebar-close': {
    'float': 'right',
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }],
    'cursor': 'pointer',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'ui-dialog ui-dialog-titlebar-close span': {
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-dialog-footer': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'borderWidth': '1px 0 0 0',
    'textAlign': 'right'
  },
  'ui-dialog-mask': {
    'position': 'fixed',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  // ConfirmDialog
  'ui-confirmdialog': {
    'width': [{ 'unit': 'em', 'value': 30 }],
    'screen&&<w40': {
      'width': [{ 'unit': '%H', 'value': 0.9 }]
    }
  },
  'ui-confirmdialogui-dialog ui-dialog-content': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 2 }]
  },
  'ui-confirmdialog ui-dialog-content fa': {
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'verticalAlign': 'middle',
    'marginRight': [{ 'unit': 'em', 'value': 0.5 }]
  },
  'ui-confirmdialog ui-dialog-content ui-confirmdialog-message': {
    'verticalAlign': 'middle'
  },
  'ui-dialog-footer ui-button': {
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  // Fluid
  'ui-fluid ui-dialog-footer ui-button': {
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  // RTL
  'ui-rtl ui-dialog ui-dialog-titlebar-close': {
    'float': 'left'
  },
  'ui-rtl ui-dialog ui-dialog-buttonpane button': {
    'textAlign': 'right'
  },
  'ui-dropdown': {
    'display': 'inline-block',
    'position': 'relative',
    'cursor': 'pointer',
    'verticalAlign': 'middle'
  },
  'ui-dropdown ui-dropdown-clear-icon': {
    'position': 'absolute',
    'right': [{ 'unit': 'em', 'value': 2 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.75 }],
    'height': [{ 'unit': 'em', 'value': 1 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'right': [{ 'unit': 'em', 'value': 2.5 }]
  },
  'ui-dropdown ui-dropdown-trigger': {
    'borderRight': [{ 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'string', 'value': 'none' }],
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'width': [{ 'unit': 'em', 'value': 1.5 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-dropdown ui-dropdown-trigger fa': {
    'marginTop': [{ 'unit': 'em', 'value': 0.3 }],
    'marginLeft': [{ 'unit': 'em', 'value': -0.125 }]
  },
  'ui-dropdown ui-dropdown-label': {
    'display': 'block',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'whiteSpace': 'nowrap',
    'overflow': 'hidden',
    'fontWeight': 'normal',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': 'em', 'value': 2.5 }]
  },
  'ui-dropdown-item-empty': {
    'textIndent': '-9999px',
    'overflow': 'hidden'
  },
  'ui-dropdown-label-empty': {
    'textIndent': '-9999px',
    'overflow': 'hidden'
  },
  'ui-dropdownui-state-disabled ui-dropdown-trigger': {
    'cursor': 'default'
  },
  'ui-dropdownui-state-disabled ui-dropdown-label': {
    'cursor': 'default'
  },
  'ui-dropdown labelui-dropdown-label': {
    'cursor': 'pointer'
  },
  'ui-dropdown inputui-dropdown-label': {
    'cursor': 'default'
  },
  'ui-dropdown ui-dropdown-panel': {
    'minWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-dropdown-panel': {
    'position': 'absolute',
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'display': 'none'
  },
  'ui-dropdown-panel ui-dropdown-items-wrapper': {
    'overflow': 'auto'
  },
  'ui-dropdown-panel ui-dropdown-item': {
    'fontWeight': 'normal',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.25 }],
    'textAlign': 'left'
  },
  'ui-dropdown-panel ui-dropdown-item-group': {
    'fontWeight': 'bold',
    'cursor': 'default'
  },
  'ui-dropdown-panel ui-dropdown-list': {
    'padding': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-dropdown-panel ui-dropdown-filter': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'boxSizing': 'border-box',
    'paddingRight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'ui-dropdown-panel ui-dropdown-filter-container': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }],
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-dropdown-panel ui-dropdown-filter-container fa': {
    'position': 'absolute',
    'top': [{ 'unit': 'em', 'value': 0.8 }],
    'right': [{ 'unit': 'em', 'value': 1 }]
  },
  // * Dropdown *
  'ui-fluid ui-dropdown': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-fieldset': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }]
  },
  'ui-fieldset ui-fieldset-legend': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }]
  },
  'ui-fieldset-toggleable ui-fieldset-legend': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-fieldset-toggleable ui-fieldset-legend a': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }],
    'cursor': 'pointer',
    'whiteSpace': 'nowrap',
    'display': 'block'
  },
  'ui-fieldset ui-fieldset-toggler': {
    'marginRight': [{ 'unit': 'em', 'value': 0.1 }],
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'ui-fieldset ui-fieldset-legend-text': {
    'verticalAlign': 'middle'
  },
  'ui-fieldset ui-fieldset-content-wrapper-overflown': {
    'overflow': 'hidden'
  },
  // * FileUpload
  'ui-fileupload-buttonbar ui-fileupload-chooseui-state-disabled input': {
    'cursor': 'default'
  },
  'ui-fileupload-buttonbar': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-fileupload-buttonbar ui-button': {
    'verticalAlign': 'middle',
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }],
    '<w40': {
      'display': 'block',
      'width': [{ 'unit': '%H', 'value': 1 }],
      'marginRight': [{ 'unit': 'px', 'value': 0 }],
      'marginBottom': [{ 'unit': 'em', 'value': 0.25 }]
    }
  },
  'ui-fileupload-content': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'position': 'relative',
    'transition': 'border-color .3s'
  },
  'ui-fileupload-contentui-fileupload-highlight': {
    'borderColor': '#156090'
  },
  'ui-fileupload-files img': {
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'ui-fileupload-files': {
    'display': 'table'
  },
  'ui-fileupload-row': {
    'display': 'table-row'
  },
  'ui-fileupload-row>div': {
    'display': 'table-cell',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }],
    'verticalAlign': 'middle'
  },
  'ui-fileupload-content ui-progressbar': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'em', 'value': 0.25 }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-fileupload-content ui-progressbar-value': {
    'MozBorderRadius': '0',
    'WebkitBorderRadius': '0',
    'borderRadius': '0',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  // Simple
  'ui-fileupload-choose': {
    'position': 'relative',
    'overflow': 'hidden'
  },
  'ui-fileupload-choose input[type=file]': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'opacity': '0',
    'minHeight': [{ 'unit': '%V', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 100 }],
    'textAlign': 'right',
    'filter': 'alpha(opacity=0)',
    'direction': 'ltr',
    'cursor': 'pointer'
  },
  'ui-fileupload-chooseui-fileupload-choose-selected input[type=file]': {
    'display': 'none'
  },
  // ui-fluid
  'ui-fluid ui-fileupload ui-button': {
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-fluid ui-fileupload-content ui-button-icon-only': {
    'width': [{ 'unit': 'em', 'value': 2 }]
  },
  'ui-galleria': {
    'overflow': 'hidden',
    'visibility': 'hidden',
    'position': 'relative'
  },
  'ui-galleria-panel-wrapper': {
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-galleria-panel': {
    'filter': 'inherit',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'listStyleType': 'none'
  },
  'ui-galleria-filmstrip-wrapper': {
    'overflow': 'hidden',
    'margin': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative'
  },
  'ui-galleria-filmstrip': {
    'listStyle': 'none outside none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 2340 }],
    'zIndex': '900',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-galleria-frame': {
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'opacity': '0.3',
    'cursor': 'pointer'
  },
  'ui-galleria-frame-active': {
    'opacity': '1'
  },
  'ui-galleria-frame-content': {
    'overflow': 'hidden'
  },
  'ui-galleria-nav-next': {
    'cursor': 'pointer',
    'position': 'absolute',
    'zIndex': '910'
  },
  'ui-galleria-nav-prev': {
    'cursor': 'pointer',
    'position': 'absolute',
    'zIndex': '910'
  },
  'ui-galleria-nav-prev': {
    'left': [{ 'unit': 'px', 'value': 5 }]
  },
  'ui-galleria-nav-next': {
    'right': [{ 'unit': 'px', 'value': 5 }]
  },
  'ui-galleria-caption': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 1 }],
    'backgroundColor': 'rgba(0, 0, 0, 0.5)',
    'display': 'none',
    'color': '#ededed',
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 1 }]
  },
  'ui-galleria-caption h4': {
    'color': '#ededed'
  },
  'ui-galleria-panel-content': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1.4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1.4 }]
  },
  'ui-growl': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 20 }],
    'right': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'em', 'value': 20 }]
  },
  'ui-growl-item-container': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'opacity': '0.95',
    'filter': 'alpha(opacity=95)'
  },
  'ui-growl-item': {
    'position': 'relative',
    'display': 'block',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }]
  },
  'ui-growl-item p': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-growl-icon-close': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 4 }],
    'right': [{ 'unit': 'px', 'value': 4 }],
    'cursor': 'pointer'
  },
  'ui-growl-title': {
    'fontWeight': 'bold',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block'
  },
  'ui-growl-image': {
    'position': 'absolute',
    'display': 'inline-block',
    'left': [{ 'unit': 'em', 'value': 0.5 }],
    'top': [{ 'unit': 'em', 'value': 0.25 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-growl-message': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'em', 'value': 2.5 }]
  },
  'ui-growl-message p': {
    'fontWeight': 'normal'
  },
  // Deprecated Grid CSS
  'ui-grid': {
    'clear': 'both',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-grid::before': {
    'content': '""',
    'display': 'table'
  },
  'ui-grid::after': {
    'content': '""',
    'display': 'table'
  },
  'ui-grid::after': {
    'clear': 'both'
  },
  'ui-grid ui-grid-row': {
    'display': '-webkit-box',
    'display': '-moz-box',
    'display': '-ms-flexbox',
    'display': '-webkit-flex',
    'display': 'flex',
    'clear': 'both'
  },
  'ui-grid-row::after': {
    'clear': 'both',
    'content': '""',
    'display': 'table'
  },
  'ui-grid-col-1': {
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-grid-col-2': {
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-grid-col-3': {
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-grid-col-4': {
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-grid-col-5': {
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-grid-col-6': {
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-grid-col-7': {
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-grid-col-8': {
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-grid-col-9': {
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-grid-col-10': {
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-grid-col-11': {
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-grid-col-12': {
    'float': 'left',
    'boxSizing': 'border-box'
  },
  'ui-grid-col-1': {
    'width': [{ 'unit': '%H', 'value': 0.0833333 }]
  },
  'ui-grid-col-2': {
    'width': [{ 'unit': '%H', 'value': 0.1666666 }]
  },
  'ui-grid-col-3': {
    'width': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'ui-grid-col-4': {
    'width': [{ 'unit': '%H', 'value': 0.33333329999999994 }]
  },
  'ui-grid-col-5': {
    'width': [{ 'unit': '%H', 'value': 0.4166666 }]
  },
  'ui-grid-col-6': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'ui-grid-col-7': {
    'width': [{ 'unit': '%H', 'value': 0.5833332999999999 }]
  },
  'ui-grid-col-8': {
    'width': [{ 'unit': '%H', 'value': 0.6666665999999999 }]
  },
  'ui-grid-col-9': {
    'width': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'ui-grid-col-10': {
    'width': [{ 'unit': '%H', 'value': 0.8333333 }]
  },
  'ui-grid-col-11': {
    'width': [{ 'unit': '%H', 'value': 0.9166665999999999 }]
  },
  'ui-grid-col-12': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  // Responsive
  'ui-gridui-grid-pad>ui-grid-row>div': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }]
  },
  // Responsive
  // New Grid CSS
  'ui-g': {
    'display': '-webkit-box',
    'display': '-moz-box',
    'display': '-ms-flexbox',
    'display': '-webkit-flex',
    'display': 'flex',
    'flexWrap': 'wrap',
    'boxSizing': 'border-box'
  },
  'ui-g::after': {
    'clear': 'both',
    'content': '""',
    'display': 'table',
    'boxSizing': 'border-box'
  },
  'ui-g-1': {
    'float': 'left',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-g-2': {
    'float': 'left',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-g-3': {
    'float': 'left',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-g-4': {
    'float': 'left',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-g-5': {
    'float': 'left',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-g-6': {
    'float': 'left',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-g-7': {
    'float': 'left',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-g-8': {
    'float': 'left',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-g-9': {
    'float': 'left',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-g-10': {
    'float': 'left',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-g-11': {
    'float': 'left',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-g-12': {
    'float': 'left',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-g-1': {
    'width': [{ 'unit': '%H', 'value': 0.08333299999999999 }]
  },
  'ui-g-2': {
    'width': [{ 'unit': '%H', 'value': 0.16666699999999998 }]
  },
  'ui-g-3': {
    'width': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'ui-g-4': {
    'width': [{ 'unit': '%H', 'value': 0.333333 }]
  },
  'ui-g-5': {
    'width': [{ 'unit': '%H', 'value': 0.416667 }]
  },
  'ui-g-6': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'ui-g-7': {
    'width': [{ 'unit': '%H', 'value': 0.583333 }]
  },
  'ui-g-8': {
    'width': [{ 'unit': '%H', 'value': 0.666667 }]
  },
  'ui-g-9': {
    'width': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'ui-g-10': {
    'width': [{ 'unit': '%H', 'value': 0.833333 }]
  },
  'ui-g-11': {
    'width': [{ 'unit': '%H', 'value': 0.916667 }]
  },
  'ui-g-12': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-g-offset-12': {
    'marginLeft': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-g-offset-11': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.9166666667 }]
  },
  'ui-g-offset-10': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.8333333333 }]
  },
  'ui-g-offset-9': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'ui-g-offset-8': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.6666666667 }]
  },
  'ui-g-offset-7': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.5833333333 }]
  },
  'ui-g-offset-6': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'ui-g-offset-5': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.41666666669999997 }]
  },
  'ui-g-offset-4': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.33333333330000003 }]
  },
  'ui-g-offset-3': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'ui-g-offset-2': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.16666666670000002 }]
  },
  'ui-g-offset-1': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.0833333333 }]
  },
  'ui-g-offset-0': {
    'marginLeft': [{ 'unit': '%H', 'value': 0 }]
  },
  'ui-g-nopad': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-inplace ui-inplace-display': {
    'display': 'inline',
    'cursor': 'pointer',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'fontWeight': 'normal'
  },
  'ui-inplace ui-inplace-content': {
    'display': 'inline'
  },
  'ui-inputswitch': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'overflow': 'hidden',
    'cursor': 'pointer',
    'userSelect': 'none',
    'MozUserSelect': 'none',
    'KhtmlUserSelect': 'none',
    'WebkitUserSelect': 'none',
    'height': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'ui-inputswitch ui-inputswitch-on': {
    'whiteSpace': 'nowrap',
    'display': 'inline-block',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'userSelect': 'none',
    'MozUserSelect': 'none',
    'KhtmlUserSelect': 'none',
    'WebkitUserSelect': 'none',
    'fontWeight': 'bold',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'ui-inputswitch ui-inputswitch-off': {
    'whiteSpace': 'nowrap',
    'display': 'inline-block',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'hidden',
    'userSelect': 'none',
    'MozUserSelect': 'none',
    'KhtmlUserSelect': 'none',
    'WebkitUserSelect': 'none',
    'fontWeight': 'bold',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'ui-inputswitch ui-inputswitch-on': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-inputswitch ui-inputswitch-off': {
    'right': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'right'
  },
  'ui-inputswitch ui-inputswitch-on span': {
    'display': 'inline-block',
    'textAlign': 'center',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'ui-inputswitch ui-inputswitch-off span': {
    'display': 'inline-block',
    'textAlign': 'center',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'ui-inputswitch ui-inputswitch-handle': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-inputtext': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'outline': 'medium none',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'fontWeight': 'normal'
  },
  'ui-widget-header ui-inputtext': {
    'fontWeight': 'normal'
  },
  'ui-widget-content ui-inputtext': {
    'fontWeight': 'normal'
  },
  'ui-fluid ui-inputtext': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'boxSizing': 'border-box',
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box'
  },
  'ui-inputgroup': {
    'display': '-webkit-box',
    'display': '-webkit-flex',
    'display': 'flex'
  },
  'ui-inputgroup ui-inputgroup-addon': {
    'display': 'inline-block',
    'textAlign': 'center',
    'minWidth': [{ 'unit': 'em', 'value': 1.5 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'borderWidth': '1px',
    'borderStyle': 'solid'
  },
  'ui-inputgroup ui-inputgroup-addon+ui-inputgroup-addon': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-inputgroup ui-inputtext': {
    'paddingLeft': [{ 'unit': 'em', 'value': 0.5 }]
  },
  'ui-inputgroup ui-inputtext:not(:first-child)': {
    'borderTopLeftRadius': '0',
    'borderBottomLeftRadius': '0',
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-inputgroup ui-inputtext:not(:last-child)': {
    'borderTopRightRadius': '0',
    'borderBottomRightRadius': '0',
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-inputgroup ui-button': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0'
  },
  'ui-fluid ui-inputgroup ui-button': {
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-fluid ui-inputgroup ui-inputtext': {
    'WebkitBoxFlex': '1',
    'WebkitFlex': '1 1 auto',
    'MsFlex': '1 1 auto',
    'flex': '1 1 auto'
  },
  'ui-inputgroup ui-chkbox': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'bottom'
  },
  'ui-inputgroup ui-radiobutton': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'bottom'
  },
  // Floating Label
  'ui-float-label': {
    'display': 'block',
    'position': 'relative'
  },
  'ui-float-label>label': {
    'fontWeight': 'normal',
    'position': 'absolute',
    'pointerEvents': 'none',
    'left': [{ 'unit': 'em', 'value': 0.25 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'transition': '0.3s ease all',
    'MozTransition': '0.3s ease all',
    'WebkitTransition': '0.3s ease all',
    'color': '#898989',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-float-label>input:focus~label': {
    'top': [{ 'unit': 'em', 'value': -0.75 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'ui-float-label>input:-webkit-autofill~label': {
    'top': [{ 'unit': 'em', 'value': -0.75 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'ui-float-label>inputui-state-filled~label': {
    'top': [{ 'unit': 'em', 'value': -0.75 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'ui-float-label>ui-inputwrapper-focus~label': {
    'top': [{ 'unit': 'em', 'value': -0.75 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'ui-float-label>ui-inputwrapper-filled~label': {
    'top': [{ 'unit': 'em', 'value': -0.75 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'ui-inputtextarea-resizable': {
    'overflow': 'hidden',
    'resize': 'none'
  },
  'ui-fluid ui-inputtextarea': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-float-label textarea:focus~label': {
    'top': [{ 'unit': 'em', 'value': -0.75 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'ui-float-label textareaui-state-filled~label': {
    'top': [{ 'unit': 'em', 'value': -0.75 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'ui-float-label textarea:-webkit-autofill~label': {
    'top': [{ 'unit': 'em', 'value': -0.75 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'ui-lightbox': {
    'position': 'fixed',
    'display': 'none'
  },
  'ui-lightbox-content-wrapper': {
    'position': 'relative'
  },
  'ui-lightbox-content': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#000000'
  },
  'ui-lightbox-nav-right': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'cursor': 'pointer'
  },
  'ui-lightbox-nav-left': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'cursor': 'pointer'
  },
  'ui-lightbox-nav-left': {
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-lightbox-nav-right': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-lightbox-loading ui-lightbox-content': {
    // background: url("./images/loading.gif") #000000 center center no-repeat;
  },
  'ui-lightbox-caption': {
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.4 }],
    'display': 'none'
  },
  'ui-lightbox-caption-text': {
    'margin': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.1 }, { 'unit': 'px', 'value': 0 }],
    'float': 'left'
  },
  'ui-lightbox-close': {
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }]
  },
  'ui-lightbox-closeui-state-hover': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-lightbox-nav-left': {
    'opacity': '.5'
  },
  'ui-lightbox-nav-right': {
    'opacity': '.5'
  },
  'ui-lightbox-nav-left:hover': {
    'opacity': '1'
  },
  'ui-lightbox-nav-right:hover': {
    'opacity': '1'
  },
  'ui-listbox': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'width': [{ 'unit': 'em', 'value': 10 }]
  },
  'ui-listbox ui-listbox-list-wrapper': {
    'overflow': 'auto'
  },
  'ui-listbox ui-listbox-list': {
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-listbox ui-listbox-item': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'fontWeight': 'normal',
    'marginBottom': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-listbox ui-listbox-item>span': {
    'verticalAlign': 'middle'
  },
  'ui-listbox ui-listbox-item:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-listboxui-state-disabled ui-listbox-item': {
    'cursor': 'default'
  },
  'ui-listbox-header': {
    'marginBottom': [{ 'unit': 'em', 'value': 0.3 }],
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.2 }],
    'position': 'relative'
  },
  'ui-listbox-header ui-chkbox': {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'cursor': 'pointer'
  },
  'ui-listbox-header ui-listbox-filter-container': {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-listbox-headerui-listbox-header-w-checkbox ui-listbox-filter-container': {
    'width': [{ 'unit': '%H', 'value': NaN }]
  },
  'ui-listbox-header ui-listbox-filter-container fa': {
    'position': 'absolute',
    'top': [{ 'unit': 'em', 'value': 0.25 }],
    'left': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-listbox-header ui-inputtext': {
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 1.25 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-listbox-footer': {
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.2 }]
  },
  'ui-megamenu': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-megamenu-root-list': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'ui-megamenu-root-list>ui-menuitem': {
    'position': 'relative'
  },
  'ui-megamenu ui-menuitem-link': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'display': 'block',
    'textDecoration': 'none'
  },
  'ui-megamenu ui-menuitem-icon': {
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-megamenu-panel': {
    'display': 'none',
    'position': 'absolute',
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-megamenu-root-list>ui-menuitem-active>ui-megamenu-panel': {
    'display': 'block'
  },
  'ui-megamenu-panel ui-menuitem': {
    'margin': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-megamenu-submenu': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none',
    'width': [{ 'unit': 'em', 'value': 12.5 }]
  },
  'ui-megamenu-submenu-header': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  // Horizontal
  'ui-megamenu-horizontal ui-megamenu-root-list>ui-menuitem': {
    'display': 'inline-block'
  },
  // Vertical
  'ui-megamenu-vertical': {
    'width': [{ 'unit': 'em', 'value': 12.5 }]
  },
  'ui-megamenu-vertical ui-megamenu-root-list>ui-menuitem': {
    'display': 'block'
  },
  'ui-megamenu-vertical ui-megamenu-root-list>ui-menuitem>ui-menuitem-link': {
    'position': 'relative'
  },
  'ui-megamenu-vertical ui-megamenu-root-list>ui-menuitem>ui-menuitem-link>ui-submenu-icon': {
    'position': 'absolute',
    'width': [{ 'unit': 'em', 'value': 1 }],
    'height': [{ 'unit': 'em', 'value': 1 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }]
  },
  'ui-megamenu ui-g': {
    'MsFlexWrap': 'nowrap',
    'flexWrap': 'nowrap'
  },
  'ui-menu': {
    'width': [{ 'unit': 'em', 'value': 12.5 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-menuui-menu-dynamic': {
    'position': 'absolute',
    'display': 'none'
  },
  'ui-menu ui-menu-separator': {
    'borderWidth': '1px 0 0 0'
  },
  'ui-menu ul': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-menu ui-submenu-header': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'margin': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-menu ui-menuitem': {
    'margin': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-menu ui-menuitem-link': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'display': 'block',
    'textDecoration': 'none'
  },
  'ui-menu ui-menuitem-icon': {
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-menubar': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-menubar ui-menu-separator': {
    'borderWidth': '1px 0 0 0'
  },
  'ui-menubar:after': {
    'content': '""',
    'clear': 'both',
    'display': 'table'
  },
  'ui-menubar ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'ui-menubar ui-menuitem-link': {
    'display': 'block',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'position': 'relative',
    'textDecoration': 'none'
  },
  'ui-menubar ui-menuitem-icon': {
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-menubar ui-menubar-root-list': {
    'display': 'inline-block'
  },
  'ui-menubar ui-menubar-root-list>ui-menuitem': {
    'display': 'inline-block',
    'position': 'relative'
  },
  'ui-menubar ui-menubar-root-list>ui-menuitem>ui-menuitem-link': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-menubar ui-menubar-root-list>li ul': {
    'display': 'none'
  },
  'ui-menubar ui-submenu-list': {
    'display': 'none',
    'position': 'absolute',
    'minWidth': [{ 'unit': 'em', 'value': 12.5 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-menubar ui-submenu-list ui-menuitem': {
    'margin': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative'
  },
  'ui-menubar ui-submenu-list ui-menuitem-link ui-submenu-icon': {
    'position': 'absolute',
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'ui-menubar ui-menuitem-active>ui-submenu>ui-submenu-list': {
    'display': 'block'
  },
  'ui-menubar ui-menubar-custom': {
    'float': 'right',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-message': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'display': 'inline-block'
  },
  'ui-fluid ui-message': {
    'display': 'block'
  },
  'ui-messages': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }],
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }],
    'display': 'none',
    'position': 'relative'
  },
  'ui-messages-icon': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'ui-messages-summary': {
    'fontWeight': 'bold',
    'marginLeft': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-messages-detail': {
    'marginLeft': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-messages-success': {
    'color': '#2C832f',
    'backgroundColor': '#B4F0B6',
    'borderColor': '#B4F0B6'
  },
  'ui-messages-success ui-messages-close': {
    'color': '#2C832f'
  },
  'ui-messages-info': {
    'color': '#1765A3',
    'backgroundColor': '#BFE0FA',
    'borderColor': '#BFE0FA'
  },
  'ui-messages-info ui-messages-close': {
    'color': '#1765A3'
  },
  'ui-messages-warn': {
    'color': '#8A6714',
    'backgroundColor': '#FFE9B5',
    'borderColor': '#FFE9B5'
  },
  'ui-messages-warn ui-messages-close': {
    'color': '#8A6714'
  },
  'ui-messages-error': {
    'color': '#AB1A0F',
    'backgroundColor': '#FFCBC8',
    'borderColor': '#FFCBC8'
  },
  'ui-messages-error ui-messages-close': {
    'color': '#AB1A0F'
  },
  'ui-messages ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyleType': 'none',
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'ui-messagesui-messages-noicon ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-messages ui-messages-close': {
    'cursor': 'pointer',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 5 }],
    'right': [{ 'unit': 'px', 'value': 5 }]
  },
  'ui-multiselect': {
    'display': 'inline-block',
    'position': 'relative',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'cursor': 'pointer'
  },
  'ui-multiselect ui-multiselect-trigger': {
    'borderRight': [{ 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'string', 'value': 'none' }],
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'width': [{ 'unit': 'em', 'value': 1.5 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-multiselect ui-multiselect-trigger fa': {
    'marginTop': [{ 'unit': 'em', 'value': 0.4 }],
    'marginLeft': [{ 'unit': 'em', 'value': -0.125 }]
  },
  'ui-multiselect ui-multiselect-label-container': {
    'overflow': 'hidden'
  },
  'ui-multiselect ui-multiselect-label': {
    'display': 'block',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'textOverflow': 'ellipsis',
    'overflow': 'hidden'
  },
  'ui-multiselectui-state-disabled ui-multiselect-trigger': {
    'cursor': 'auto'
  },
  'ui-multiselectui-state-disabled ui-multiselect-label': {
    'cursor': 'auto'
  },
  'ui-multiselect-panel': {
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }],
    'position': 'absolute',
    'minWidth': [{ 'unit': 'em', 'value': 12 }]
  },
  'ui-multiselect ui-multiselect-panel': {
    'minWidth': [{ 'unit': '%H', 'value': 1 }],
    'display': 'none'
  },
  'ui-multiselect-panel ui-multiselect-items-wrapper': {
    'overflow': 'auto',
    'position': 'relative',
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-multiselect-panel ui-multiselect-list': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-multiselect-panel ui-multiselect-item': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'cursor': 'pointer',
    'fontWeight': 'normal',
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.25 }],
    'textAlign': 'left',
    'whiteSpace': 'nowrap',
    'display': 'block',
    'position': 'relative'
  },
  'ui-multiselect-panel ui-multiselect-item ui-chkbox': {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'ui-multiselect-panel ui-multiselect-item label': {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'ui-multiselect-header': {
    'marginBottom': [{ 'unit': 'em', 'value': 0.3 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'position': 'relative',
    'textAlign': 'left',
    'minHeight': [{ 'unit': 'em', 'value': 2 }]
  },
  'ui-multiselect-header ui-chkbox': {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'cursor': 'pointer'
  },
  'ui-multiselect-header ui-multiselect-filter-container': {
    'position': 'relative',
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'width': [{ 'unit': '%H', 'value': 0.65 }]
  },
  'ui-multiselect-headerui-multiselect-header-no-toggleall ui-multiselect-filter-container': {
    'width': [{ 'unit': '%H', 'value': 0.85 }]
  },
  'ui-multiselect-header ui-multiselect-filter-container fa': {
    'position': 'absolute',
    'top': [{ 'unit': 'em', 'value': 0.25 }],
    'left': [{ 'unit': 'em', 'value': 0.125 }]
  },
  'ui-multiselect-header ui-inputtext': {
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 1.25 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-multiselect-header ui-multiselect-close': {
    'position': 'absolute',
    'right': [{ 'unit': 'em', 'value': 0.375 }],
    'top': [{ 'unit': 'em', 'value': 0.375 }],
    'display': 'block',
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-multiselect-header aui-multiselect-all': {
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'display': 'block'
  },
  'ui-multiselect-header aui-multiselect-none': {
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'display': 'block'
  },
  'ui-multiselect-header ui-multiselect-closeui-state-hover': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-multiselect-footer': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-fluid ui-multiselect': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'boxSizing': 'border-box'
  },
  'ui-organizationchart ui-organizationchart-table': {
    'borderSpacing': '0',
    'borderCollapse': 'separate',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'ui-organizationchart ui-organizationchart-table>tr>td': {
    'textAlign': 'center',
    'verticalAlign': 'top',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.75 }]
  },
  'ui-organizationchart ui-organizationchart-node-content': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }],
    'display': 'inline-block',
    'position': 'relative'
  },
  'ui-organizationchart ui-organizationchart-node-content ui-node-toggler': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': -9 }],
    'marginLeft': [{ 'unit': 'px', 'value': -8 }],
    'zIndex': '2',
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'ui-organizationchart ui-organizationchart-line-down': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 1 }],
    'float': 'none'
  },
  'ui-organizationchart ui-organizationchart-line-right': {
    'float': 'none',
    'borderRadius': '0px'
  },
  'ui-organizationchart ui-organizationchart-line-left': {
    'float': 'none',
    'borderRadius': '0'
  },
  'ui-organizationchart ui-organizationchart-node-contentui-organizationchart-selectable-node': {
    'cursor': 'pointer'
  },
  'ui-orderlist': {
    'display': 'table'
  },
  'ui-orderlist ui-orderlist-controls': {
    'height': [{ 'unit': 'em', 'value': 12.5 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }],
    'verticalAlign': 'middle',
    'display': 'table-cell'
  },
  'ui-orderlist ui-orderlist-controls ui-button': {
    'display': 'block',
    'marginBottom': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-orderlist ui-orderlist-container': {
    'display': 'table-cell',
    'verticalAlign': 'top'
  },
  'ui-orderlist ui-orderlist-list': {
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'auto',
    'height': [{ 'unit': 'em', 'value': 12.5 }],
    'width': [{ 'unit': 'em', 'value': 12.5 }]
  },
  'ui-orderlist ui-orderlist-caption': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-orderlist ui-orderlist-list ui-orderlist-item': {
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }],
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }],
    'cursor': 'pointer',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'fontWeight': 'inherit'
  },
  'ui-orderlist ui-orderlist-filter-container': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.6 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.6 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-orderlist ui-orderlist-filter-container ui-inputtext': {
    'textIndent': '1.1em',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-orderlist ui-orderlist-filter-container fa': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': 'em', 'value': 1 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.6 }]
  },
  'ui-orderlistui-state-disabled ui-orderlist-item': {
    'cursor': 'default'
  },
  'ui-orderlistui-state-disabled ui-button': {
    'cursor': 'default'
  },
  'ui-orderlistui-state-disabled ui-orderlist-list': {
    'overflow': 'hidden'
  },
  // Responsive
  'ui-orderlistui-orderlist-responsive': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-orderlistui-orderlist-responsive ui-orderlist-controls': {
    'width': [{ 'unit': '%H', 'value': 0.1666666 }],
    'paddingRight': [{ 'unit': 'em', 'value': 0.5 }],
    '<w40': {
      'textAlign': 'center',
      'width': [{ 'unit': '%H', 'value': 1 }],
      'display': 'inline-block',
      'height': [{ 'unit': 'string', 'value': 'auto' }]
    }
  },
  'ui-orderlistui-orderlist-responsive ui-orderlist-list-container': {
    'width': [{ 'unit': '%H', 'value': 0.8333333 }]
  },
  'ui-orderlistui-orderlist-responsive ui-orderlist-list': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-orderlistui-orderlist-responsive ui-orderlist-caption': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-orderlistui-orderlist-responsive ui-orderlist-controls>ui-button': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-orderlist ui-orderlist-droppoint': {
    'height': [{ 'unit': 'px', 'value': 6 }],
    'listStyleType': 'none'
  },
  'ui-overlaypanel': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute'
  },
  'ui-overlaypanel-content': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }]
  },
  'ui-overlaypanel-close': {
    'position': 'absolute',
    'top': [{ 'unit': 'em', 'value': -0.5 }],
    'right': [{ 'unit': 'em', 'value': -0.5 }],
    'MozBorderRadius': '100%',
    'WebkitBorderRadius': '100%',
    'borderRadius': '100%'
  },
  'ui-panel': {
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }]
  },
  'ui-panel ui-panel-titlebar': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }]
  },
  'ui-panel ui-panel-titlebar-icon': {
    'float': 'right',
    'cursor': 'pointer'
  },
  'ui-panel ui-panel-titlebar-icon': {
    'marginLeft': [{ 'unit': 'em', 'value': 0.2 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.1 }]
  },
  'ui-panel ui-panel-content': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'background': 'none',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }]
  },
  'ui-panel ui-panel-footer': {
    'borderWidth': '1px 0 0',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'textAlign': 'left'
  },
  'ui-panel-content-wrapper-overflown': {
    'overflow': 'hidden'
  },
  'ui-paginator': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }]
  },
  'ui-paginator ui-paginator-top': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-paginator ui-paginator-bottom': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-paginator ui-paginator-left-content': {
    'float': 'left'
  },
  'ui-paginator ui-paginator-right-content': {
    'float': 'right'
  },
  'ui-paginator ui-paginator-page': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }],
    'zoom': '1',
    'marginLeft': [{ 'unit': 'em', 'value': 0.063 }],
    'marginRight': [{ 'unit': 'em', 'value': 0.063 }],
    'textDecoration': 'none',
    'verticalAlign': 'middle'
  },
  'ui-paginator ui-paginator-pages': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }],
    'zoom': '1',
    'marginLeft': [{ 'unit': 'em', 'value': 0.063 }],
    'marginRight': [{ 'unit': 'em', 'value': 0.063 }],
    'textDecoration': 'none',
    'verticalAlign': 'middle'
  },
  'ui-paginator ui-paginator-next': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }],
    'zoom': '1',
    'marginLeft': [{ 'unit': 'em', 'value': 0.063 }],
    'marginRight': [{ 'unit': 'em', 'value': 0.063 }],
    'textDecoration': 'none',
    'verticalAlign': 'middle'
  },
  'ui-paginator ui-paginator-last': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }],
    'zoom': '1',
    'marginLeft': [{ 'unit': 'em', 'value': 0.063 }],
    'marginRight': [{ 'unit': 'em', 'value': 0.063 }],
    'textDecoration': 'none',
    'verticalAlign': 'middle'
  },
  'ui-paginator ui-paginator-first': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }],
    'zoom': '1',
    'marginLeft': [{ 'unit': 'em', 'value': 0.063 }],
    'marginRight': [{ 'unit': 'em', 'value': 0.063 }],
    'textDecoration': 'none',
    'verticalAlign': 'middle'
  },
  'ui-paginator ui-paginator-prev': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }],
    'zoom': '1',
    'marginLeft': [{ 'unit': 'em', 'value': 0.063 }],
    'marginRight': [{ 'unit': 'em', 'value': 0.063 }],
    'textDecoration': 'none',
    'verticalAlign': 'middle'
  },
  'ui-paginator ui-paginator-current': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.375 }],
    'zoom': '1',
    'marginLeft': [{ 'unit': 'em', 'value': 0.063 }],
    'marginRight': [{ 'unit': 'em', 'value': 0.063 }],
    'textDecoration': 'none',
    'verticalAlign': 'middle'
  },
  'ui-paginator ui-paginator-page': {
    'cursor': 'pointer'
  },
  'ui-paginator ui-paginator-next': {
    'cursor': 'pointer'
  },
  'ui-paginator ui-paginator-last': {
    'cursor': 'pointer'
  },
  'ui-paginator ui-paginator-first': {
    'cursor': 'pointer'
  },
  'ui-paginator ui-paginator-prev': {
    'cursor': 'pointer'
  },
  'ui-paginator ui-paginator-current': {
    'marginLeft': [{ 'unit': 'em', 'value': 1 }],
    'marginRight': [{ 'unit': 'em', 'value': 1 }],
    'backgroundImage': 'none'
  },
  'ui-paginator ui-paginator-rpp-options': {
    'marginLeft': [{ 'unit': 'em', 'value': 1 }],
    'marginRight': [{ 'unit': 'em', 'value': 1 }],
    'backgroundImage': 'none'
  },
  'ui-paginator ui-paginator-jtp-select option': {
    'backgroundImage': 'none',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'MozBoxShadow': 'none',
    'WebkitBoxShadow': 'none'
  },
  'ui-paginator ui-paginator-rpp-options option': {
    'backgroundImage': 'none',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'MozBoxShadow': 'none',
    'WebkitBoxShadow': 'none'
  },
  'ui-paginator aui-state-disabled': {
    'outline': '0 none'
  },
  'ui-paginator ui-dropdown': {
    'minWidth': [{ 'unit': 'em', 'value': 4 }],
    'marginLeft': [{ 'unit': 'em', 'value': 0.375 }]
  },
  'ui-fluid ui-paginator ui-dropdown': {
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-panelmenu': {
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-panelmenu ui-menu-separator': {
    'borderWidth': '1px 0 0 0'
  },
  'ui-panelmenu ui-panelmenu-content-wrapper': {
    'overflow': 'hidden'
  },
  'ui-panelmenu ui-panelmenu-header': {
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'zoom': '1'
  },
  'ui-panelmenu ui-panelmenu-header-link': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }],
    'display': 'block',
    'textDecoration': 'none'
  },
  'ui-panelmenu ui-menuitem-icon': {
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-panelmenu ui-panelmenu-content': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-panelmenu ui-submenu-list': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none',
    'marginLeft': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'ui-panelmenu ui-panelmenu-content>ui-panelmenu-root-submenu>ui-submenu-list': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-panelmenu ui-menuitem': {
    'overflow': 'hidden',
    'margin': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-panelmenu ui-menuitem-link': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'display': 'block',
    'textDecoration': 'none'
  },
  'ui-password-panel': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'width': [{ 'unit': 'em', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 2 }]
  },
  'ui-password-panel ui-password-meter': {
    'height': [{ 'unit': 'px', 'value': 10 }],
    // background:transparent url("./images/password-meter.png") no-repeat left top;
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-password-info': {
    'marginTop': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-password-panel-overlay': {
    'position': 'absolute'
  },
  'ui-picklist>div': {
    'float': 'left'
  },
  'ui-picklist ui-picklist-buttons': {
    'height': [{ 'unit': 'em', 'value': 12.5 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-picklist ui-picklist-list': {
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'auto',
    'height': [{ 'unit': 'em', 'value': 12.5 }],
    'width': [{ 'unit': 'em', 'value': 12.5 }]
  },
  'ui-picklist ui-picklist-list li': {
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }],
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.125 }]
  },
  'ui-picklist ui-button': {
    'display': 'block',
    'marginBottom': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-picklist ui-button-text-icon-left': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-picklist ui-picklist-item': {
    'cursor': 'pointer',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'fontWeight': 'inherit'
  },
  'ui-picklist ui-picklist-caption': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-picklist table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderCollapse': 'collapse'
  },
  'ui-picklist ui-picklist-filter-container': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.6 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.6 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-picklist ui-picklist-filter-container ui-picklist-filter': {
    'textIndent': '1.1em',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-picklist ui-picklist-filter-container fa': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': 'em', 'value': 1 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.6 }]
  },
  'ui-picklist': {
    'display': 'table'
  },
  'ui-picklist>div': {
    'float': 'none',
    'display': 'table-cell',
    'verticalAlign': 'top'
  },
  'ui-picklist ui-picklist-buttons': {
    'verticalAlign': 'middle'
  },
  // Vertical
  'ui-picklistui-picklist-vertical': {
    'display': 'table'
  },
  'ui-picklistui-picklist-vertical>div': {
    'float': 'none',
    'display': 'table-row',
    'verticalAlign': 'top'
  },
  'ui-picklistui-picklist-vertical ui-picklist-buttons': {
    'textAlign': 'center',
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-picklistui-picklist-vertical ui-picklist-buttons ui-button': {
    'display': 'inline-block'
  },
  'ui-picklistui-picklist-vertical ui-button': {
    'marginTop': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-picklist-outline': {
    'outline': '1px dotted black',
    'zIndex': '1'
  },
  'ui-picklist ui-picklist-droppoint': {
    'height': [{ 'unit': 'px', 'value': 6 }],
    'listStyleType': 'none'
  },
  'ui-picklist ui-picklist-list ui-picklist-droppoint-empty': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'listStyleType': 'none'
  },
  'ui-picklist-listui-picklist-source': {
    'outline': 'none'
  },
  'ui-picklist-listui-picklist-target': {
    'outline': 'none'
  },
  // Responsive
  'ui-picklistui-picklist-responsive *': {
    'boxSizing': 'border-box'
  },
  'ui-picklistui-picklist-responsive': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    '<w40': {
      'display': 'block'
    }
  },
  'ui-picklistui-picklist-responsive ui-picklist-listwrapper': {
    'width': [{ 'unit': '%H', 'value': 0.35 }]
  },
  'ui-picklistui-picklist-responsive ui-picklist-listwrapperui-picklist-listwrapper-nocontrols': {
    'width': [{ 'unit': '%H', 'value': 0.45 }]
  },
  'ui-picklistui-picklist-responsive ui-picklist-buttons': {
    'width': [{ 'unit': '%H', 'value': 0.1 }]
  },
  'ui-picklistui-picklist-responsive ui-picklist-buttons button': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-picklistui-picklist-responsive ui-picklist-list': {
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  // Responsive
  'ui-progressbar': {
    'height': [{ 'unit': 'em', 'value': 1.2 }],
    'textAlign': 'left',
    'position': 'relative',
    'overflow': 'hidden'
  },
  'ui-progressbar-determinate ui-progressbar-value': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 0 }],
    'position': 'absolute',
    'display': 'none',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-progressbar-determinate ui-progressbar-value-animate': {
    'WebkitTransition': 'width 1s ease-in-out',
    'MozTransition': 'width 1s ease-in-out',
    'OTransition': 'width 1s ease-in-out',
    'transition': 'width 1s ease-in-out'
  },
  'ui-progressbar-determinate ui-progressbar-label': {
    'textAlign': 'center',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'absolute',
    'display': 'none',
    'fontWeight': 'bold'
  },
  'ui-progressbar-indeterminate': {
    'height': [{ 'unit': 'em', 'value': 0.5 }]
  },
  'ui-progressbar-indeterminate ui-progressbar-value': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-progressbar-indeterminate ui-progressbar-value::before': {
    'content': '''',
    'position': 'absolute',
    'backgroundColor': 'inherit',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'willChange': 'left, right',
    'WebkitAnimation': 'ui-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite',
    'animation': 'ui-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
  },
  'ui-progressbar-indeterminate ui-progressbar-value::after': {
    'content': '''',
    'position': 'absolute',
    'backgroundColor': 'inherit',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'willChange': 'left, right',
    'WebkitAnimation': 'ui-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
    'animation': 'ui-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
    'WebkitAnimationDelay': '1.15s',
    'animationDelay': '1.15s'
  },
  'ui-progress-spinner': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'display': 'inline-block'
  },
  'ui-progress-spinner::before': {
    'content': '''',
    'display': 'block',
    'paddingTop': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-progress-spinner-svg': {
    'animation': 'ui-progress-spinner-rotate 2s linear infinite',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'transformOrigin': 'center center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'ui-progress-spinner-circle': {
    'strokeDasharray': '1, 200',
    'strokeDashoffset': '0',
    'animation': 'ui-progress-spinner-dash 1.5s ease-in-out infinite, ui-progress-spinner-color 6s ease-in-out infinite',
    'strokeLinecap': 'round'
  },
  'ui-radiobutton': {
    'display': 'inline-block',
    'cursor': 'pointer',
    'verticalAlign': 'middle',
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-radiobutton-box': {
    'width': [{ 'unit': 'em', 'value': 1.125 }],
    'height': [{ 'unit': 'em', 'value': 1.125 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.125 }],
    'MozBorderRadius': '100%',
    'WebkitBorderRadius': '100%',
    'borderRadius': '100%',
    'textAlign': 'center'
  },
  'ui-radiobutton-icon': {
    'display': 'block',
    'fontSize': [{ 'unit': 'em', 'value': 0.5 }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }],
    'marginTop': [{ 'unit': 'px', 'value': -1 }]
  },
  'ui-radiobutton': {
    'verticalAlign': 'middle'
  },
  'ui-radiobutton-label': {
    'verticalAlign': 'middle'
  },
  'ui-fluid fc ui-button': {
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-selectbutton': {
    'display': 'inline-block'
  },
  'ui-selectbuttonui-state-error': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-selectbutton ui-buttonui-state-focus': {
    'outline': 'none'
  },
  'ui-scrollpanel-wrapper': {
    'overflow': 'hidden',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'position': 'relative',
    'zIndex': '1',
    'float': 'left'
  },
  'ui-scrollpanel-content': {
    'height': [{ 'unit': '%V', 'value': NaN }],
    'width': [{ 'unit': '%H', 'value': NaN }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'overflow': 'auto',
    'boxSizing': 'border-box'
  },
  'ui-scrollpanel-bar': {
    'position': 'relative',
    'background': '#c1c1c1',
    'borderRadius': '3px',
    'zIndex': '2',
    'cursor': 'pointer',
    'opacity': '0',
    'transition': 'opacity 0.25s linear'
  },
  'ui-scrollpanel-bar-y': {
    'width': [{ 'unit': 'px', 'value': 9 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-scrollpanel-bar-x': {
    'height': [{ 'unit': 'px', 'value': 9 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-scrollpanel-hidden': {
    'visibility': 'hidden'
  },
  'ui-scrollpanel:hover ui-scrollpanel-bar': {
    'opacity': '1'
  },
  'ui-scrollpanel:active ui-scrollpanel-bar': {
    'opacity': '1'
  },
  'ui-scrollpanel-grabbed': {
    'OUserSelect': 'none',
    'MsUserSelect': 'none',
    'MozUserSelect': 'none',
    'WebkitUserSelect': 'none',
    'userSelect': 'none'
  },
  'ui-sidebar': {
    'position': 'fixed',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }],
    'WebkitTransition': 'transform .3s',
    'transition': 'transform .3s'
  },
  'ui-sidebar-left': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'em', 'value': 20 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'WebkitTransform': 'translateX(-100%)',
    'MsTransform': 'translateX(-100%)',
    'transform': 'translateX(-100%)'
  },
  'ui-sidebar-right': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'em', 'value': 20 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'WebkitTransform': 'translateX(100%)',
    'MsTransform': 'translateX(100%)',
    'transform': 'translateX(100%)'
  },
  'ui-sidebar-top': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'em', 'value': 10 }],
    'WebkitTransform': 'translateY(-100%)',
    'MsTransform': 'translateY(-100%)',
    'transform': 'translateY(-100%)'
  },
  'ui-sidebar-bottom': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'em', 'value': 10 }],
    'WebkitTransform': 'translateY(100%)',
    'MsTransform': 'translateY(100%)',
    'transform': 'translateY(100%)'
  },
  'ui-sidebar-full': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'WebkitTransition': 'transform 0s',
    'transition': 'transform 0s'
  },
  'ui-sidebar-leftui-sidebar-active': {
    'WebkitTransform': 'translateX(0)',
    'MsTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'ui-sidebar-rightui-sidebar-active': {
    'WebkitTransform': 'translateX(0)',
    'MsTransform': 'translateX(0)',
    'transform': 'translateX(0)'
  },
  'ui-sidebar-leftui-sidebar-sm': {
    'width': [{ 'unit': 'em', 'value': 20 }]
  },
  'ui-sidebar-rightui-sidebar-sm': {
    'width': [{ 'unit': 'em', 'value': 20 }]
  },
  'ui-sidebar-leftui-sidebar-md': {
    'width': [{ 'unit': 'em', 'value': 40 }]
  },
  'ui-sidebar-rightui-sidebar-md': {
    'width': [{ 'unit': 'em', 'value': 40 }]
  },
  'ui-sidebar-leftui-sidebar-lg': {
    'width': [{ 'unit': 'em', 'value': 60 }],
    'screen&&<w64': {
      'width': [{ 'unit': 'em', 'value': 20 }]
    }
  },
  'ui-sidebar-rightui-sidebar-lg': {
    'width': [{ 'unit': 'em', 'value': 60 }],
    'screen&&<w64': {
      'width': [{ 'unit': 'em', 'value': 20 }]
    }
  },
  'ui-sidebar-topui-sidebar-active': {
    'WebkitTransform': 'translateY(0)',
    'MsTransform': 'translateY(0)',
    'transform': 'translateY(0)'
  },
  'ui-sidebar-bottomui-sidebar-active': {
    'WebkitTransform': 'translateY(0)',
    'MsTransform': 'translateY(0)',
    'transform': 'translateY(0)'
  },
  'ui-sidebar-topui-sidebar-sm': {
    'height': [{ 'unit': 'em', 'value': 10 }]
  },
  'ui-sidebar-bottomui-sidebar-sm': {
    'height': [{ 'unit': 'em', 'value': 10 }]
  },
  'ui-sidebar-topui-sidebar-md': {
    'height': [{ 'unit': 'em', 'value': 20 }]
  },
  'ui-sidebar-bottomui-sidebar-md': {
    'height': [{ 'unit': 'em', 'value': 20 }]
  },
  'ui-sidebar-topui-sidebar-lg': {
    'height': [{ 'unit': 'em', 'value': 30 }]
  },
  'ui-sidebar-bottomui-sidebar-lg': {
    'height': [{ 'unit': 'em', 'value': 30 }]
  },
  'ui-sidebar-mask': {
    'position': 'fixed',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-sidebar-close': {
    'float': 'right'
  },
  'ui-slidemenu': {
    'width': [{ 'unit': 'em', 'value': 12.5 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-slidemenuui-slidemenu-dynamic': {
    'position': 'absolute',
    'display': 'none'
  },
  'ui-slidemenu ui-menu-separator': {
    'borderWidth': '1px 0 0 0'
  },
  'ui-slidemenu ul': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-slidemenu ui-slidemenu-rootlist': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-slidemenu ui-submenu-list': {
    'display': 'none',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'em', 'value': 12.5 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-slidemenu ui-menuitem-link': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'display': 'block',
    'position': 'relative',
    'textDecoration': 'none'
  },
  'ui-slidemenu ui-menuitem-icon': {
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-slidemenu ui-menuitem': {
    'position': 'relative',
    'margin': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-slidemenu ui-menuitem-link ui-submenu-icon': {
    'position': 'absolute',
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'ui-slidemenu ui-slidemenu-wrapper': {
    'position': 'relative'
  },
  'ui-slidemenu ui-slidemenu-content': {
    'overflowX': 'hidden',
    'overflowY': 'auto',
    'position': 'relative'
  },
  'ui-slidemenu-backward': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'cursor': 'pointer',
    'display': 'none'
  },
  'ui-slidemenu-backward ui-slidemenu-backward-icon': {
    'verticalAlign': 'middle'
  },
  'ui-slidemenu-backward span': {
    'verticalAlign': 'middle'
  },
  'ui-slidemenu ui-menuitem-active': {
    'position': 'static'
  },
  'ui-slidemenu ui-menuitem-active>ui-submenu>ui-submenu-list': {
    'display': 'block'
  },
  'ui-slider': {
    'position': 'relative',
    'textAlign': 'left'
  },
  'ui-slider ui-slider-handle': {
    'position': 'absolute',
    'width': [{ 'unit': 'em', 'value': 1.2 }],
    'height': [{ 'unit': 'em', 'value': 1.2 }],
    'cursor': 'default',
    'MsTouchAction': 'none',
    'touchAction': 'none',
    'zIndex': '1'
  },
  'ui-slider ui-slider-handleui-slider-handle-active': {
    'zIndex': '2'
  },
  'ui-slider ui-slider-range': {
    'position': 'absolute',
    'fontSize': [{ 'unit': 'em', 'value': 0.7 }],
    'display': 'block',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'backgroundPosition': '0 0'
  },
  'ui-slider-horizontal': {
    'height': [{ 'unit': 'em', 'value': 0.8 }]
  },
  'ui-slider-horizontal ui-slider-handle': {
    'top': [{ 'unit': 'em', 'value': -0.25 }],
    'marginLeft': [{ 'unit': 'em', 'value': -0.6 }]
  },
  'ui-slider-horizontal ui-slider-range': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-slider-horizontal ui-slider-range-min': {
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-slider-horizontal ui-slider-range-max': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-slider-vertical': {
    'width': [{ 'unit': 'em', 'value': 0.8 }],
    'height': [{ 'unit': 'px', 'value': 100 }]
  },
  'ui-slider-vertical ui-slider-handle': {
    'left': [{ 'unit': 'em', 'value': -0.25 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'em', 'value': -0.6 }]
  },
  'ui-slider-vertical ui-slider-range': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-slider-vertical ui-slider-range-min': {
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-slider-vertical ui-slider-range-max': {
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-slider-animate ui-slider-handle': {
    'transition': 'left .3s'
  },
  'ui-spinner': {
    'display': 'inline-block',
    'overflow': 'visible',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'middle'
  },
  'ui-spinner-input': {
    'verticalAlign': 'middle',
    'paddingRight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'ui-spinner-button': {
    'cursor': 'default',
    'display': 'block',
    'height': [{ 'unit': '%V', 'value': 0.5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'verticalAlign': 'middle',
    'width': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'ui-spinner fa': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'marginLeft': [{ 'unit': 'em', 'value': -0.5 }],
    'width': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-spinner-up': {
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-spinner-down': {
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // Fluid
  'ui-fluid ui-spinner': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-fluid ui-spinner ui-spinner-input': {
    'paddingRight': [{ 'unit': 'em', 'value': 2 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-fluid ui-spinner ui-spinner-button': {
    'width': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'ui-fluid ui-spinner ui-spinner-button fa': {
    'left': [{ 'unit': 'em', 'value': 0.7 }]
  },
  'ui-splitbutton': {
    'position': 'relative',
    'display': 'inline-block',
    'zoom': '1'
  },
  'ui-splitbutton ui-buttonui-splitbutton-menubutton': {
    'width': [{ 'unit': 'em', 'value': 2 }],
    'verticalAlign': 'top'
  },
  'ui-splitbuttonui-state-disabled button': {
    'cursor': 'default'
  },
  'ui-fluid ui-splitbutton': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-fluid ui-splitbutton ui-button:first-child': {
    'width': [{ 'unit': '%H', 'value': NaN }]
  },
  'ui-fluid ui-splitbutton ui-buttonui-splitbutton-menubutton': {
    'width': [{ 'unit': 'em', 'value': 2 }]
  },
  'ui-steps ul': {
    'listStyleType': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-steps ui-steps-item': {
    'float': 'left',
    'boxSizing': 'border-box',
    'cursor': 'pointer'
  },
  'ui-stepsui-steps-readonly ui-steps-item': {
    'cursor': 'auto'
  },
  'ui-steps ui-steps-item ui-menuitem-link': {
    'textDecoration': 'none',
    'display': 'block',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'position': 'relative',
    'textAlign': 'center',
    '<w40': {
      'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
    }
  },
  'ui-steps ui-steps-itemui-state-highlight ui-menuitem-link': {
    'cursor': 'default'
  },
  'ui-steps ui-steps-itemui-state-disabled ui-menuitem-link': {
    'cursor': 'default'
  },
  'ui-steps ui-steps-number': {
    'fontSize': [{ 'unit': '%V', 'value': 2 }],
    'display': 'block'
  },
  'ui-steps ui-steps-title': {
    'display': 'block',
    'whiteSpace': 'nowrap'
  },
  // Responsive
  'ui-table': {
    'position': 'relative'
  },
  'ui-table table': {
    'borderCollapse': 'collapse',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'tableLayout': 'fixed'
  },
  'ui-table ui-table-thead>tr>th': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-table ui-table-tbody>tr>td': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-table ui-table-tfoot>tr>td': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-table ui-sortable-column': {
    'cursor': 'pointer'
  },
  'ui-table-auto-layout>ui-table-wrapper': {
    'overflowX': 'auto'
  },
  'ui-table-auto-layout>ui-table-wrapper>table': {
    'tableLayout': 'auto'
  },
  // Sections
  'ui-table-caption': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'textAlign': 'center',
    'fontWeight': 'bold'
  },
  'ui-table-summary': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'textAlign': 'center',
    'fontWeight': 'bold'
  },
  'ui-table-caption': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-table-summary': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  // Paginator
  'ui-table ui-paginator-top': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-table ui-paginator-bottom': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  // Scrollable
  'ui-table-scrollable-wrapper': {
    'position': 'relative'
  },
  'ui-table-scrollable-header': {
    'overflow': 'hidden',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-table-scrollable-footer': {
    'overflow': 'hidden',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-table-scrollable-body': {
    'overflow': 'auto',
    'position': 'relative'
  },
  'ui-table-scrollable-body>table>ui-table-tbody>tr:first-child>td': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-table-virtual-table': {
    'position': 'absolute'
  },
  // Frozen Columns
  'ui-table-frozen-view ui-table-scrollable-body': {
    'overflow': 'hidden'
  },
  'ui-table-frozen-view>ui-table-scrollable-body>table>ui-table-tbody>tr>td:last-child': {
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-table-unfrozen-view': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  // Resizable
  'ui-table-resizable>ui-table-wrapper': {
    'overflowX': 'auto'
  },
  'ui-table-resizable ui-table-thead>tr>th': {
    'overflow': 'hidden'
  },
  'ui-table-resizable ui-table-tfoot>tr>td': {
    'overflow': 'hidden'
  },
  'ui-table-resizable ui-table-data>tr>td': {
    'overflow': 'hidden'
  },
  'ui-resizable-column': {
    'backgroundClip': 'padding-box',
    'position': 'relative'
  },
  'ui-table-resizable-fit ui-resizable-column:last-child ui-column-resizer': {
    'display': 'none'
  },
  'ui-table ui-column-resizer': {
    'display': 'block',
    'position': 'absolute !important',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'em', 'value': 0.5 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'cursor': 'col-resize',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'ui-table ui-column-resizer-helper': {
    'width': [{ 'unit': 'px', 'value': 1 }],
    'position': 'absolute',
    'zIndex': '10',
    'display': 'none'
  },
  // Edit
  'ui-table ui-table-tbody>tr>tdui-editing-cell': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-table ui-table-tbody>tr>tdui-editing-cell p-celleditor>*': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  // Reorder
  'ui-table-reorder-indicator-up': {
    'position': 'absolute',
    'display': 'none'
  },
  'ui-table-reorder-indicator-down': {
    'position': 'absolute',
    'display': 'none'
  },
  // Responsive
  'ui-table-responsive ui-table-tbody>tr>td ui-column-title': {
    'display': 'none',
    'screen&&<w40': {
      'padding': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.4 }],
      'minWidth': [{ 'unit': '%H', 'value': 0.3 }],
      'display': 'inline-block',
      'margin': [{ 'unit': 'em', 'value': -0.4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': -0.4 }, { 'unit': 'em', 'value': -0.4 }],
      'fontWeight': 'bold'
    }
  },
  // Loader
  'ui-table-loading': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'MsFilter': '"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)"',
    'opacity': '0.1',
    'zIndex': '1'
  },
  'ui-table-loading-content': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'zIndex': '2',
    'marginTop': [{ 'unit': 'em', 'value': -1 }],
    'marginLeft': [{ 'unit': 'em', 'value': -1 }]
  },
  // * TabMenu *
  'ui-tabmenu ui-tabmenu-nav': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-tabmenu ui-tabmenu-nav ui-tabmenuitem': {
    'listStyle': 'none',
    'float': 'left',
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'nowrap',
    'display': 'block',
    'borderBottom': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-tabmenu ui-tabmenu-nav ui-tabmenuitem a': {
    'float': 'left',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }],
    'textDecoration': 'none'
  },
  'ui-tabmenu ui-tabmenu-nav a': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }]
  },
  'ui-tabmenu ui-menuitem-icon': {
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-tabmenu ui-tabmenu-nav ui-tabmenuitemui-state-disabled a': {
    'cursor': 'default'
  },
  'ui-tabview': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-tabview ui-tabview-nav': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-tabview ui-tabview-nav li': {
    'listStyle': 'none',
    'float': 'left',
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'nowrap'
  },
  'ui-tabview ui-tabview-nav li a': {
    'float': 'left',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }],
    'textDecoration': 'none'
  },
  'ui-tabview ui-tabview-nav liui-tabview-selected a': {
    'cursor': 'text'
  },
  'ui-tabview ui-tabview-nav liui-state-disabled a': {
    'cursor': 'text'
  },
  'ui-tabview ui-tabview-nav liui-state-processing a': {
    'cursor': 'text'
  },
  'ui-tabview ui-tabview-nav li a': {
    'cursor': 'pointer'
  },
  'ui-tabviewui-tabview-collapsible ui-tabview-nav liui-tabview-selected a': {
    'cursor': 'pointer'
  },
  'ui-tabview ui-tabview-panel': {
    'borderWidth': '0',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'background': 'none'
  },
  'ui-tabview ui-tabview-nav li': {
    'display': 'block'
  },
  'ui-tabview ui-tabview-nav li ui-tabview-left-icon': {
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-tabview ui-tabview-nav li ui-tabview-right-icon': {
    'marginLeft': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-tabview ui-tabview-nav li ui-tabview-close': {
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer'
  },
  // per orientation settings
  // top and bottom
  'ui-tabviewui-tabview-top>ui-tabview-nav li': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-tabviewui-tabview-top>ui-tabview-nav': {
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }]
  },
  'ui-tabviewui-tabview-bottom>ui-tabview-nav': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }]
  },
  'ui-tabviewui-tabview-bottom>ui-tabview-nav li': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }]
  },
  // left and right
  'ui-tabview-left::after': {
    'clear': 'both',
    'content': '"."',
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'visibility': 'hidden'
  },
  'ui-tabview-right::after': {
    'clear': 'both',
    'content': '"."',
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'visibility': 'hidden'
  },
  'ui-tabview-left>ui-tabview-nav': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.25 }],
    'height': [{ 'unit': 'px', 'value': 300 }],
    'backgroundImage': 'none',
    'paddingTop': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-tabview-left>ui-tabview-panels': {
    'float': 'right',
    'width': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'ui-tabviewui-tabview-left>ui-tabview-nav li': {
    'display': 'block',
    'float': 'right',
    'whiteSpace': 'normal',
    'width': [{ 'unit': '%H', 'value': 0.99 }]
  },
  'ui-tabviewui-tabview-right>ui-tabview-nav li': {
    'display': 'block',
    'float': 'right',
    'whiteSpace': 'normal',
    'width': [{ 'unit': '%H', 'value': 0.99 }]
  },
  'ui-tabviewui-tabview-left>ui-tabview-nav li': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-tabviewui-tabview-right>ui-tabview-nav': {
    'float': 'right',
    'width': [{ 'unit': '%H', 'value': 0.25 }],
    'height': [{ 'unit': 'px', 'value': 300 }],
    'backgroundImage': 'none',
    'paddingTop': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-tabviewui-tabview-right>ui-tabview-panels': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'ui-tabviewui-tabview-right>ui-tabview-nav li': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  // RTL
  'ui-rtl ui-tabview ui-tabview-nav li': {
    'float': 'right'
  },
  'ui-terminal': {
    'height': [{ 'unit': 'em', 'value': 18 }],
    'overflow': 'auto',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-terminal-input': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'backgroundColor': 'transparent',
    'color': 'inherit',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }],
    'width': [{ 'unit': '%H', 'value': 0.75 }],
    'outline': 'none',
    'verticalAlign': 'baseline'
  },
  'ui-terminal-command': {
    'marginLeft': [{ 'unit': 'em', 'value': 0.125 }],
    'MozMarginStart': '.125em'
  },
  'ui-terminal-input::-ms-clear': {
    'display': 'none'
  },
  'ui-tieredmenu': {
    'width': [{ 'unit': 'em', 'value': 12.5 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-tieredmenuui-tieredmenu-dynamic': {
    'position': 'absolute',
    'display': 'none'
  },
  'ui-tieredmenu ui-menu-separator': {
    'borderWidth': '1px 0 0 0'
  },
  'ui-tieredmenu ul': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-tieredmenu ui-submenu-list': {
    'display': 'none',
    'position': 'absolute',
    'width': [{ 'unit': 'em', 'value': 12.5 }],
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-tieredmenu ui-menuitem-link': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'display': 'block',
    'position': 'relative',
    'textDecoration': 'none'
  },
  'ui-tieredmenu ui-menuitem-icon': {
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  'ui-tieredmenu ui-menuitem': {
    'position': 'relative',
    'margin': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-tieredmenu ui-menuitem-link ui-submenu-icon': {
    'position': 'absolute',
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'ui-tieredmenu ui-menuitem-active>ui-submenu>ui-submenu-list': {
    'display': 'block'
  },
  'ui-toolbar': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }]
  },
  'ui-toolbar-group-left': {
    'float': 'left'
  },
  'ui-toolbar-group-right': {
    'float': 'right'
  },
  'ui-tooltip': {
    'position': 'absolute',
    'display': 'none',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'maxWidth': [{ 'unit': 'em', 'value': 12.5 }]
  },
  'ui-tooltipui-tooltip-right': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-tooltipui-tooltip-left': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-tooltipui-tooltip-top': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-tooltipui-tooltip-bottom': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-tooltip ui-tooltip-text': {
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.125 }, { 'unit': 'em', 'value': 0.5 }],
    'backgroundColor': 'rgb(76, 76, 76)',
    'color': '#ffffff',
    'whiteSpace': 'pre-line'
  },
  'ui-tooltip-arrow': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'borderColor': 'transparent',
    'borderStyle': 'solid'
  },
  'ui-tooltip-right ui-tooltip-arrow': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.25 }],
    'borderWidth': '.25em .25em .25em 0',
    'borderRightColor': 'rgb(76, 76, 76)'
  },
  'ui-tooltip-left ui-tooltip-arrow': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.25 }],
    'borderWidth': '.25em 0 .25em .25em',
    'borderLeftColor': 'rgb(76, 76, 76)'
  },
  'ui-tooltipui-tooltip-top': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-tooltip-top ui-tooltip-arrow': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'em', 'value': -0.25 }],
    'borderWidth': '.25em .25em 0',
    'borderTopColor': 'rgb(76, 76, 76)'
  },
  'ui-tooltip-bottom ui-tooltip-arrow': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'em', 'value': -0.25 }],
    'borderWidth': '0 .25em .25em',
    'borderBottomColor': 'rgb(76, 76, 76)'
  },
  'ui-tree': {
    'width': [{ 'unit': 'em', 'value': 18 }]
  },
  'ui-tree ui-treenode-selectableui-treenode-content': {
    'cursor': 'pointer'
  },
  'ui-tree ui-tree-container': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'auto',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }],
    'whiteSpace': 'nowrap'
  },
  'ui-tree-empty-message': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.25 }]
  },
  'ui-tree ui-treenode-children': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }]
  },
  'ui-tree ui-treenode': {
    'backgroundAttachment': 'scroll',
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'backgroundPosition': '0 0',
    'backgroundRepeat': 'repeat-y',
    'listStyle': 'none outside none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-tree ui-treenode-droppoint': {
    'height': [{ 'unit': 'px', 'value': 4 }],
    'listStyleType': 'none'
  },
  'ui-tree ui-treenode-droppoint-active': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-tree ui-tree-toggler': {
    'cursor': 'pointer',
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'ui-tree ui-treenode-icon': {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'ui-tree ui-treenode-label': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }],
    'verticalAlign': 'middle'
  },
  'ui-tree ui-treenode-labelui-state-hover': {
    'fontWeight': 'normal',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-tree ui-treenode-labelui-state-highlight': {
    'fontWeight': 'normal',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-tree ui-treenodeui-treenode-leaf>ui-treenode-content>ui-tree-toggler': {
    'visibility': 'hidden'
  },
  'ui-tree ui-chkbox-box': {
    'cursor': 'pointer'
  },
  'ui-tree ui-chkbox': {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'ui-tree ui-chkbox ui-chkbox-icon': {
    'marginLeft': [{ 'unit': 'px', 'value': 1 }]
  },
  // * Fluid *
  'ui-fluid ui-tree': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  // * Horizontal Tree *
  'ui-tree-horizontal': {
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'auto'
  },
  'ui-treeui-tree-horizontal table': {
    'borderCollapse': 'collapse',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'ui-treeui-tree-horizontal tr': {
    'borderCollapse': 'collapse',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'ui-treeui-tree-horizontal td': {
    'borderCollapse': 'collapse',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'ui-treeui-tree-horizontal ui-tree-toggler': {
    'verticalAlign': 'middle',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-tree-horizontal ui-treenode-content': {
    'fontWeight': 'normal',
    'padding': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.2 }]
  },
  'ui-treeui-tree-horizontal ui-tree-node-label': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-tree-horizontal ui-treenode-parent ui-treenode-content': {
    'fontWeight': 'normal',
    'whiteSpace': 'nowrap'
  },
  'ui-treeui-tree-horizontal ui-treenode': {
    // background: url("./images/line.gif") repeat-x scroll center center transparent;
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 2.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 2.5 }]
  },
  'ui-treeui-tree-horizontal ui-treenodeui-treenode-leaf': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-treeui-tree-horizontal ui-treenodeui-treenode-collapsed': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-treeui-tree-horizontal ui-treenode-children': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-treeui-tree-horizontal ui-treenode-connector': {
    'width': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-treeui-tree-horizontal ui-treenode-connector-table': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-treeui-tree-horizontal ui-treenode-connector-line': {
    // background: url("./images/line.gif") repeat-y scroll 0 0 transparent;
    'width': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-treeui-tree-horizontal table': {
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-treeui-tree-horizontal ui-chkbox': {
    'verticalAlign': 'bottom',
    'marginRight': [{ 'unit': 'em', 'value': 0.25 }]
  },
  // * Loading *
  'ui-treeui-tree-loading': {
    'position': 'relative',
    'minHeight': [{ 'unit': 'em', 'value': 4 }]
  },
  'ui-tree ui-tree-loading-mask': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'MsFilter': '"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)"',
    'opacity': '0.1',
    'zIndex': '1'
  },
  'ui-tree ui-tree-loading-content': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'zIndex': '2',
    'marginTop': [{ 'unit': 'em', 'value': -1 }],
    'marginLeft': [{ 'unit': 'em', 'value': -1 }]
  },
  'ui-treetable': {
    'position': 'relative'
  },
  'ui-treetable table': {
    'borderCollapse': 'collapse',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'tableLayout': 'fixed'
  },
  'ui-treetable ui-treetable-header': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }]
  },
  'ui-treetable ui-treetable-footer': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.75 }]
  },
  'ui-treetable ui-treetable-header': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-treetable ui-treetable-footer': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-treetable th': {
    'textAlign': 'center'
  },
  'ui-treetable tfoot td': {
    'textAlign': 'center'
  },
  'ui-treetable thead th': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'overflow': 'hidden',
    'whiteSpace': 'nowrap',
    'borderWidth': '1px',
    'borderStyle': 'solid'
  },
  'ui-treetable tbody td': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'overflow': 'hidden',
    'whiteSpace': 'nowrap',
    'borderWidth': '1px',
    'borderStyle': 'solid'
  },
  'ui-treetable tfoot td': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }],
    'overflow': 'hidden',
    'whiteSpace': 'nowrap',
    'borderWidth': '1px',
    'borderStyle': 'solid'
  },
  'ui-treetable tbody td': {
    'borderColor': 'inherit'
  },
  'ui-treetable tbody td:first-child span': {
    'verticalAlign': 'middle'
  },
  'ui-treetable ui-treetable-toggler': {
    'verticalAlign': 'middle',
    'cursor': 'pointer',
    'textDecoration': 'none'
  },
  'ui-treetable ui-treetable-checkbox': {
    'marginRight': [{ 'unit': 'em', 'value': 0.5 }]
  },
  'ui-treetable ui-treetable-checkbox ui-chkbox-icon': {
    'marginLeft': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-treetable ui-treetable-rowui-treetable-row-selectable': {
    'cursor': 'pointer'
  },
  'ui-treetable ui-treetable-rowui-state-highlight': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-treetable trui-state-hover': {
    'borderColor': 'inherit',
    'fontWeight': 'inherit'
  },
  'ui-treetable ui-treetable-indent': {
    'width': [{ 'unit': 'em', 'value': 1 }],
    'height': [{ 'unit': 'em', 'value': 1 }],
    'float': 'left'
  },
  // Resizable
  'ui-treetable ui-column-resizer': {
    'display': 'block',
    'position': 'absolute !important',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'em', 'value': 0.5 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'cursor': 'col-resize',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'ui-treetable ui-column-resizer-helper': {
    'width': [{ 'unit': 'px', 'value': 1 }],
    'position': 'absolute',
    'zIndex': '10',
    'display': 'none'
  },
  'ui-treetable-resizable': {
    'paddingBottom': [{ 'unit': 'px', 'value': 1 }],
    // fix for webkit overlow
    'overflow': 'auto'
  },
  'ui-treetable-resizable thead th': {
    'whiteSpace': 'nowrap'
  },
  'ui-treetable-resizable tbody td': {
    'whiteSpace': 'nowrap'
  },
  'ui-treetable-resizable tfoot td': {
    'whiteSpace': 'nowrap'
  },
  'ui-treetable-resizable thui-resizable-column': {
    'backgroundClip': 'padding-box',
    'position': 'relative'
  },
  // PrimeNG
  'ui-treetable tdui-treetable-child-table-container': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-treetable ui-treetable-row': {
    'display': 'table-row',
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'ui-treetable tbody ui-treetable-row td': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'ui-treetable tbody ui-treetable-row td input': {
    'outline': '0 none'
  }
});
