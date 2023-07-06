import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  inputTask: {
    height: 52,
    backgroundColor: '#262626',
    flex: 1,
    marginRight: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0D0D0D',
    color: '#F2F2F2',
    fontSize: 16,
  },

  inputTaskFocused: {
    borderColor: '#5E60CE',
  },

  btnAdd: {
    height: 52,
    width: 52,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    color: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});