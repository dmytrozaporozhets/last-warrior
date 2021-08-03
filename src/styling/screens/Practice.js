import {StyleSheet} from 'react-native';

export const PracticeStyle = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: 200,
    width: 220,
    borderWidth: 2,
    borderColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  containerWeekends: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  containerDays: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 5,
    marginRight: 5,
  },
  boxDays: {flexDirection: 'row', flex: 1, flexWrap: 'wrap'},
  boxWeekends: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  header: {fontSize: 24, marginTop: 10},
  title: {fontSize: 16, marginVertical: 5},
});
