import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'container': {
    'width': [{ 'unit': '%H', 'value': 0.95 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center'
  },
  'mat-toolbar': {
    'display': '-webkit-box',
    'display': '-ms-flexbox',
    'display': 'flex',
    'MsFlexWrap': 'wrap',
    'flexWrap': 'wrap',
    'WebkitBoxAlign': 'center',
    'MsFlexAlign': 'center',
    'alignItems': 'center',
    'WebkitBoxPack': 'justify',
    'MsFlexPack': 'justify',
    'justifyContent': 'space-between',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }]
  },
  'mat-grid-tile': {
    'cursor': 'pointer',
    'WebkitTapHighlightColor': 'transparent'
  },
  'mat-grid-tile :hover': {
    'opacity': '0.5'
  },
  'mat-card': {
    'width': [{ 'unit': '%H', 'value': 0.95 }],
    'height': [{ 'unit': '%V', 'value': 0.95 }],
    'borderWidth': '7px',
    'borderColor': 'white',
    'borderStyle': 'solid',
    'borderRadius': '5%',
    'borderBottomWidth': [{ 'unit': 'px', 'value': 10 }],
    'borderBottomStyle': 'solid',
    'borderBottomColor': 'white',
    'borderTopWidth': [{ 'unit': 'px', 'value': 10 }],
    'borderTopStyle': 'solid',
    'borderTopColor': 'white'
  }
});
