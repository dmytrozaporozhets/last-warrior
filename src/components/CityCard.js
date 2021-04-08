import React from 'react';
import Text from './Text';
import {View, TouchableOpacity} from 'react-native';
import {CityCardStyle} from '../styling/components/CityCard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, sg} from '../styling';
import PropTypes from 'prop-types';
import Card from './Card';
import UserCard from './UserCard';

const CityCard = ({town, country, population, onView, onChange, style}) => {
  return (
    <TouchableOpacity
      style={[CityCardStyle.container, style]}
      activeOpacity={0.5}
      onPress={onView}>
      <View style={CityCardStyle.box}>
        <View style={CityCardStyle.categories}>
          <Text style={CityCardStyle.text} semiBold>
            Town:
          </Text>
          <Text style={CityCardStyle.text} semiBold>
            Country:
          </Text>
          <Text style={CityCardStyle.text} semiBold>
            Population:
          </Text>
        </View>
        <View style={sg.jCSpaceBetween}>
          <Text style={CityCardStyle.text} semiBold>
            {town}
          </Text>
          <Text style={CityCardStyle.text} semiBold>
            {country}
          </Text>
          <Text style={CityCardStyle.text} semiBold>
            {population ? `${population}m` : null}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onChange}>
        <Icon name="ellipsis-h" size={24} color={Colors.white} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

UserCard.defaultProps = {style: []};

Card.propTypes = {
  town: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onView: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CityCard;
