import React, {useState} from 'react';
import {Button, Checkbox, Header, ScreenView, Text} from '../../components';
import {View} from 'react-native';
import {Colors, sg} from '../../styling';
import Icon from 'react-native-vector-icons/FontAwesome5';

const arrowCheckbox = [
  {title: 'Click 1', id: 1},
  {title: 'Click 2', id: 2},
  {title: 'Click 3', id: 3},
  {title: 'Click 4', id: 4},
];

const SelectCheckbox = ({navigation}) => {
  const [values, setValues] = useState([]);
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
        style={[sg.aSCenter, sg.mT10]}
        onPress={onReset}
      />
      <View style={{...sg.mH30, ...sg.mT25}}>
        <View
          style={{
            borderWidth: 3,
            borderStyle: 'solid',
            borderColor: values.includes(2) ? Colors.primary : Colors.lime,
            height: 50,
            justifyContent: 'center',
            backgroundColor: values.includes(3) ? Colors.bisque : Colors.olive,
          }}>
          <Icon
            name={values.includes(1) ? 'plus' : 'minus'}
            size={30}
            color={values.includes(1) ? Colors.pink : Colors.orange}
            style={[sg.mH10, sg.aSCenter]}
          />
        </View>
        {arrowCheckbox.map((it, index) => (
          <Checkbox
            {...it}
            containerStyle={index !== 0 ? sg.mT10 : sg.mT10}
            onPress={onSelectValue(it)}
            icon={values.includes(it.id) ? 'check-square' : 'square'}
            colorIcon={Colors.btnPrimaryBG}
            sizeIcon={20}
          />
        ))}
        {values.includes(4) && (
          <Text
            style={[
              sg.fS20,
              sg.aSCenter,
              sg.mT10,
              {color: Colors.white, textAlign: 'center'},
            ]}>
            You click button with name 'Click 4'
          </Text>
        )}
      </View>
    </ScreenView>
  );
};

export default SelectCheckbox;
