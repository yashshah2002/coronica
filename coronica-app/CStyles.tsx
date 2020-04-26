import { StyleSheet } from 'react-native'

const CStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7C90DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    position: 'absolute',
    bottom: 0
  },
  textStyle: {
    color: '#EDFFEC',
    fontFamily: 'montserrat-regular',
    textAlign: 'center'
  },
  titleStyle: {
    fontSize: 40,
    textAlign: 'center',
    color: '#EDFFEC',
    fontFamily: 'montserrat-regular',
  },
  textInputStyle: {
    width: 200,
    height: 30,
    borderColor: '#EDFFEC',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    marginLeft: 10,
    marginTop: 10,
    paddingHorizontal:10,
    fontFamily: 'montserrat-regular',
  }
})

export { CStyles }
