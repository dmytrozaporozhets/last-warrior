import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from '../../components';
import {weekends, days} from '../../constants';
import {PracticeStyle} from '../../styling/screens/Practice';
import {sg} from '../../styling';

const Practice = () => {
  return (
    <View style={[sg.flex, sg.aICenter]}>
      <Text style={PracticeStyle.header} bold>
        Календарь
      </Text>
      <Text style={PracticeStyle.title} bold>
        Апрель
      </Text>
      <View style={PracticeStyle.container}>
        <View style={PracticeStyle.boxWeekends}>
          {weekends.map((it) => (
            <View style={PracticeStyle.containerWeekends} key={it.id}>
              <Text
                style={[
                  sg.textCenter,
                  {
                    color: it.select ? 'white' : it.color,
                  },
                ]}>
                {it.title}
              </Text>
            </View>
          ))}
        </View>
        <View style={PracticeStyle.boxDays}>
          {days.map((it) => (
            <TouchableOpacity
              style={[
                PracticeStyle.containerDays,
                {backgroundColor: it.select ? 'black' : 'white'},
              ]}
              key={it.id}>
              <Text
                style={[
                  sg.textCenter,
                  {
                    color: it.select ? 'white' : it.color,
                  },
                ]}>
                {it.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Practice;
