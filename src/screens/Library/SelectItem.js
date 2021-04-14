import React, {useState} from 'react';
import {ScreenView, SmallCard, Text} from '../../components';
import {View, ScrollView} from 'react-native';
import {Colors, sg} from '../../styling';
import {monthsOfTheYear, seasonOfTheYear} from '../../constants';
import {SelectItemStyle} from '../../styling/screens/SelectItem';

const SelectItem = () => {
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const onSelectMonth = (card) => () => {
    if (selectedMonths.includes(card.id)) {
      setSelectedMonths(selectedMonths.filter((it) => it !== card.id));
    } else {
      if (selectedMonths.length === 3) {
        return;
      }
      setSelectedMonths([...selectedMonths, card.id]);
    }
  };
  const onSelectSeason = (card) => () => {
    if (selectedSeason?.id === card.id) {
      return;
    }
    setSelectedSeason(card);
  };

  return (
    <ScreenView statusBarColor={Colors.black}>
      <ScrollView>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={SelectItemStyle.text}>Select up to 3 months</Text>
          <View style={SelectItemStyle.box}>
            {monthsOfTheYear.map((month, index) => (
              <SmallCard
                {...month}
                style={[
                  index === 0 ? [sg.mT5, sg.mR5] : [sg.mT5, sg.mR5],
                  {
                    backgroundColor: selectedMonths.includes(month.id)
                      ? Colors.yellow
                      : Colors.white,
                  },
                ]}
                onPress={onSelectMonth(month)}
                key={month.id}
              />
            ))}
          </View>
        </View>
        <Text style={SelectItemStyle.text}>Select the season</Text>
        <View style={SelectItemStyle.box}>
          {seasonOfTheYear.map((season, index) => (
            <SmallCard
              {...season}
              style={[
                index === 0 ? [sg.mT5, sg.mR5] : [sg.mT5, sg.mR5],
                {
                  backgroundColor:
                    selectedSeason?.id === season.id
                      ? Colors.yellow
                      : Colors.white,
                },
              ]}
              onPress={onSelectSeason(season)}
              key={season.id}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default SelectItem;
