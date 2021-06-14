import React, {useState} from 'react';
import {Button, Header, ScreenView} from '../../components';
import {Colors, sg} from '../../styling';
import {View, Image} from 'react-native';
import {highBuild, highBuild2, highBuild3} from '../../../assets/link/image';

const tabs = [
  {title: '1', id: 1},
  {title: '2', id: 2},
  {title: '3', id: 3},
];
const images = [
  {image: highBuild, id: '1'},
  {image: highBuild2, id: '2'},
  {image: highBuild3, id: '3'},
];

const Practice = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const [selectedTab, setSelectedTab] = useState('1');
  const switchTabs = (value) => () => setSelectedTab(value);
  const currentTabIsSelected = (name) => name === selectedTab;
  const data = images.filter((it) => it.id === selectedTab);
  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header title="Practice" onBack={goBack} />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {tabs.map((it, index) => (
            <Button
              btnType="green"
              title={it.title}
              size="small"
              style={[
                {
                  backgroundColor: currentTabIsSelected(it.title)
                    ? Colors.skyBlue
                    : Colors.green,
                },
                index !== 0 && sg.mL10,
              ]}
              onPress={switchTabs(it.title)}
              key={it.id}
            />
          ))}
        </View>
        <View
          style={{alignSelf: 'center', marginTop: 20, flexDirection: 'row'}}>
          {data.map((it) => (
            <Image
              source={it.image}
              style={{
                width: 260,
                height: 400,
                borderColor: currentTabIsSelected(it.id)
                  ? Colors.skyBlue
                  : Colors.green,
                borderWidth: currentTabIsSelected(it.id) ? 3 : 0,
              }}
              key={it.id}
            />
          ))}
        </View>
      </View>
    </ScreenView>
  );
};

export default Practice;
