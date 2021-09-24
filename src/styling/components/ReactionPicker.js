import {StyleSheet} from 'react-native';
import {sg} from '../../styling';

export const ReactionPickerStyle = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  viewTopSpace: {...sg.width100p, ...sg.height100},
  viewBody: {
    flex: 1,
    flexDirection: 'column',
  },
  viewContent: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  viewBox: {
    borderRadius: 30,
    width: 320,
    height: 50,
    marginTop: 100,
    marginLeft: 20,
    position: 'absolute',
    backgroundColor: '#FFE4B5',
  },
  viewBtn: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginTop: 170,
    backgroundColor: 'white',
  },
  textBtn: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
  },
  imgLikeInBtn: {
    width: 20,
    height: 20,
  },
  viewWrapGroupIcon: {
    flexDirection: 'row',
    width: 320,
    height: 120,
    marginTop: 50,
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
  },
  viewWrapIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgIcon: {
    width: 36,
    height: 36,
  },
  viewWrapTextDescription: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 2,
    paddingBottom: 2,
    position: 'absolute',
  },
  textDescription: {
    color: 'white',
    fontSize: 8,
  },
  viewWrapGroupJumpIcon: {
    flexDirection: 'row',
    width: 330,
    height: 140,
    marginTop: 30,
    marginLeft: 10,
    position: 'absolute',
    alignItems: 'flex-end',
  },
  box: {width: 40, height: 40, position: 'absolute'},
});
