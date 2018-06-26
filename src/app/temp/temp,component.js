import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Required for full background image
  'html': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    '<w740': {
      'height': [{ 'unit': 'vh', 'value': 100 }]
    }
  },
  'body': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    '<w740': {
      'height': [{ 'unit': 'vh', 'value': 100 }]
    }
  },
  'header': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    '<w740': {
      'height': [{ 'unit': 'vh', 'value': 100 }]
    }
  },
  'view': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    '<w740': {
      'height': [{ 'unit': 'vh', 'value': 100 }]
    }
  },
  'top-nav-collapse': {
    'backgroundColor': '#f8bbd0 !important'
  },
  'navbar:not(top-nav-collapse)': {
    'background': 'transparent !important',
    '<w768': {
      'background': '#f8bbd0 !important'
    },
    '>w800&&<w850': {
      'background': '#f8bbd0 !important'
    }
  },
  'table-wrapper': {
    'display': 'block',
    'maxHeight': [{ 'unit': 'px', 'value': 300 }],
    'overflowY': 'auto',
    'MsOverflowStyle': '-ms-autohiding-scrollbar'
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
  }
});
