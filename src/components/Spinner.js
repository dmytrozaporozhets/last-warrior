import React from 'react';
import {ActivityIndicator, View, Modal} from 'react-native';
import {Colors, sg} from '../styling';
import PropTypes from 'prop-types';

const Spinner = ({visible, color, size}) => (
  <Modal visible={visible} transparent>
    <View style={[sg.flex, sg.center, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  </Modal>
);

Spinner.defaultProps = {
  color: Colors.white,
  size: 'large',
};

Spinner.propTypes = {
  visible: PropTypes.bool.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Spinner;
