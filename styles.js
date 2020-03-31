import {StyleSheet} from 'react-native'

export const color = {
  darkBg: '#222',
  lightBg: '#333',
  darkHl: '#666',
  lightHl: '#888',
  pink: '#ea3372',
  text: '#fff',
  textSec: '#AAA'
}
export const gs = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginBottom: 8,
    backgroundColor: color.lightBg
  },
  sectionTitle: {
    fontWeight: '700',
    color: color.text,
    fontSize: 15,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    borderBottomColor: '#444',
    borderWidth: 1,
    marginVertical: 2
  },
  title: {
    color: color.text,
    fontSize: 30
  }
})
