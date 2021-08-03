import React from 'react';
import {Modal, View, TouchableOpacity, Image} from 'react-native';
import {Text} from '../../components';
import {Colors, sg} from '../../styling';
import {useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {CityInfoModalStyle} from '../../styling/screens/CityInfoModal';

const CityInfoModal = ({navigation, route}) => {
  const isFocused = useIsFocused();
  const onBack = () => navigation.goBack();
  const card = route.params.card;
  console.log(card);
  return (
    <Modal transparent visible={isFocused}>
      <View style={CityInfoModalStyle.wrapper}>
        <View style={CityInfoModalStyle.container}>
          <TouchableOpacity style={CityInfoModalStyle.close} onPress={onBack}>
            <Icon name="times" size={20} color={Colors.aqua} />
          </TouchableOpacity>
          {card?.image ? (
            <Image source={card?.image} style={CityInfoModalStyle.image} />
          ) : (
            <View style={CityInfoModalStyle.fakeImage} />
          )}
          <Text style={CityInfoModalStyle.text}>City:</Text>
          <Text style={CityInfoModalStyle.text} bold>
            {card?.city}
          </Text>

          <Text style={[CityInfoModalStyle.text, sg.mT5]}>Country:</Text>
          <Text style={CityInfoModalStyle.text} bold>
            {card?.country}
          </Text>

          <Text style={[CityInfoModalStyle.text, sg.mT5]}>Population:</Text>
          <Text style={CityInfoModalStyle.text} bold>
            {card?.population}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default CityInfoModal;
