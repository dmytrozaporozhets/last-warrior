import React, {useState} from 'react';
import {Button, Checkbox, Header, ScreenView} from '../../components';
import {View} from 'react-native';
import {Colors, sg} from '../../styling';

const arrowCheckbox = [
  {title: 'Click 1', id: 1},
  {title: 'Click 2', id: 2},
  {title: 'Click 3', id: 3},
  {title: 'Click 4', id: 4},
];

const SelectCheckbox = ({navigation}) => {
  const [values, setValues] = useState([]);
  console.log(values);
  const goBack = () => navigation.goBack();

  const onSelectValue = (item) => () => {
    if (values.includes(item.id)) {
      setValues(values.filter((it) => it !== item.id));
    } else {
      if (values.length === item.length) {
        return;
      }
      setValues([...values, item.id]);
    }
  };

  const onReset = () => setValues([]);

  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header title="Select Checkbox" onBack={goBack} />
      <Button
        title="RESET"
        size="small"
        style={[sg.aSCenter, sg.mT20, sg.aSEnd, sg.mR30]}
        onPress={onReset}
      />
      <View style={{...sg.mH30, ...sg.mT25}}>
        {arrowCheckbox.map((it, index) => (
          <View key={it.id}>
            <Checkbox
              {...it}
              containerStyle={[index !== 0 && sg.mT10]}
              onPress={onSelectValue(it)}
              icon={values.includes(it.id)}
              colorIcon={Colors.btnPrimaryBG}
              sizeIcon={20}
            />
          </View>
        ))}
      </View>
    </ScreenView>
  );
};

export default SelectCheckbox;
