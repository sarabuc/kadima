import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'html': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'view': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  // Navigation
  'navbar': {
    'backgroundColor': 'transparent',
    'only screen&&<w768': {
      'backgroundColor': '#1C2331'
    }
  },
  'scrolling-navbar': {
    'WebkitTransition': 'background .5s ease-in-out, padding .5s ease-in-out',
    'MozTransition': 'background .5s ease-in-out, padding .5s ease-in-out',
    'transition': 'background .5s ease-in-out, padding .5s ease-in-out'
  },
  'top-nav-collapse': {
    'backgroundColor': '#1C2331'
  },
  'footerpage-footer': {
    'backgroundColor': '#1C2331',
    'marginTop': [{ 'unit': 'px', 'value': -1 }]
  },
  'navbar btn-group dropdown-menu a:hover': {
    'color': '#000 !important'
  },
  'navbar btn-group dropdown-menu a:active': {
    'color': '#fff !important'
  },
  // Call to action
  'flex-center': {
    'color': '#fff'
  },
  'view': {
    'background': 'black no-repeat center center fixed',
    'WebkitBackgroundSize': 'cover',
    'MozBackgroundSize': 'cover',
    'OBackgroundSize': 'cover',
    'backgroundSize': 'cover'
  },
  'link': {
    'cursor': 'pointer',
    'WebkitTapHighlightColor': 'transparent'
  },
  'body-margin': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }]
  }
});
