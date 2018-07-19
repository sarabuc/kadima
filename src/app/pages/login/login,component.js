import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'intro-2': {
    'backgroundImage': '"" no-repeat center center',
    'backgroundSize': 'cover'
  },
  'view': {
    'height': [{ 'unit': 'vh', 'value': 100 }, { 'unit': 'string', 'value': '!important' }]
  },
  'top-nav-collapse': {
    'backgroundColor': '#ff8a65 !important'
  },
  'navbar:not(top-nav-collapse)': {
    'background': 'transparent !important',
    '<w768': {
      'background': '#ff8a65 !important'
    }
  },
  'md-form prefix': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }],
    'marginTop': [{ 'unit': 'rem', 'value': 1 }]
  },
  'h6': {
    'lineHeight': [{ 'unit': 'px', 'value': 1.7 }]
  }
});
