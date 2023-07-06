import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  infoTasksContainer: {
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoTask: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 2,
  },

  infoTaskLast: {
    justifyContent: 'flex-end',
  },

  infoText: {
    fontWeight: '700',
    marginRight: 5,
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
  },

  infoCreatedText: {
    color: '#4EA8DE',
  },

  infoCompletedText: {
    color: '#8284FA',
  },

  infoCount: {
    backgroundColor: '#333333',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },

  infoCountText: {
    color: '#F2F2F2',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
  },
});