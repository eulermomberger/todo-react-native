import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerEmpty: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 50,
    gap: 20,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },

  textEmpty: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#808080',
  },

  textEmptyBold: {
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },

  taskContainer: {
    backgroundColor: '#262626',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333333',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginBottom: 10,
    padding: 20,
  },

  taskDescriptionText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#F2F2F2',
    width: '80%',
  },

  taskCompletedDescriptionText: {
    color: '#808080',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },

  taskIcon: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
  },

  taskTrashIcon: {
    alignItems: 'flex-end',
  },

  trash: {
    color: '#E25858',
  },
});