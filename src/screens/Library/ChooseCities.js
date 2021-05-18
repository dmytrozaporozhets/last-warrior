import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {CategoriesTab, CityCard, Header, ScreenView} from '../../components';
import {Colors, sg} from '../../styling';
import {fakeCities, fakeCountries} from '../../constants';
import {CITY_INFO_MODAL} from '../constants';

const ChooseCities = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const [selectedTab, setSelectedTab] = useState('England');
  const [selectedCard, setSelectedCard] = useState(null);
  const switchTabs = (value) => () => setSelectedTab(value);
  const data = fakeCities.filter((it) => it.country === selectedTab);
  const currentTabIsSelected = (name) => name === selectedTab;
  const onSelect = (item) => () => {
    if (selectedCard?.id === item.id) {
      setSelectedCard(item);
    }
    navigation.navigate(CITY_INFO_MODAL, {card: item});
  };
  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header title="Choose cities" onBack={goBack} />
      <ScrollView>
        <View style={{flex: 1, margin: 30, alignItems: 'center'}}>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            {fakeCountries.map((it, index) => (
              <CategoriesTab
                {...it}
                style={[
                  index !== 0 && sg.mL10,
                  {borderWidth: currentTabIsSelected(it.name) ? 2 : 0},
                ]}
                imageStyle={{opacity: currentTabIsSelected(it.name) ? 1 : 0.3}}
                key={it.id}
                onPress={switchTabs(it.name)}
              />
            ))}
          </View>
          {data.map((it, index) => (
            <CityCard
              {...it}
              key={it.id}
              style={index !== 0 && sg.mT10}
              onView={onSelect(it)}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default ChooseCities;
