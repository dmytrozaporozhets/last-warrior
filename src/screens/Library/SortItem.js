import React, {useState} from 'react';
import {DropDown, Header, ScreenView, Text} from '../../components';
import {ScrollView, View, TouchableWithoutFeedback} from 'react-native';
import {Colors, sg} from '../../styling';
import {footballChampionships, footballClub} from '../../constants';
import {SortItemStyle} from '../../styling/screens/SortItem';

const SortItem = ({navigation}) => {
  const dropdown = React.createRef();
  const goBack = () => navigation.goBack();
  const [selectedTab, setSelectedTab] = useState(null);
  const [value, setValue] = useState('');
  const data =
    value.length !== 0
      ? footballClub.filter((it) => it.championship === selectedTab)
      : footballClub;
  const onSelect = (item) => setSelectedTab(item.value);
  const switchTabs = (item) => {
    setValue(item.value);
    onSelect(item);
  };
  const setController = (instance) => {
    dropdown.current = instance;
  };
  const onCloseDropdown = () => {
    dropdown.current.close();
  };
  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header title="Sort Item" onBack={goBack} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScrollBeginDrag={onCloseDropdown}>
        <TouchableWithoutFeedback onPress={onCloseDropdown}>
          <View style={[sg.pH40, SortItemStyle.zIndex]}>
            <DropDown
              items={footballChampionships}
              value={value}
              onChange={switchTabs}
              placeholder="Selected championships..."
              placeholderStyle={SortItemStyle.color}
              controller={setController}
              zIndex={9000}
              containerStyle={[sg.mT20, sg.height50]}
            />
            <View style={[SortItemStyle.zIndex]}>
              {data.map((it, index) => (
                <View
                  key={it.id}
                  style={[SortItemStyle.box, index === 0 ? sg.mT10 : sg.mT10]}>
                  <Text style={SortItemStyle.text}>{it.title}</Text>
                </View>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </ScreenView>
  );
};

export default SortItem;
