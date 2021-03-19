import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {SliderStyle} from '../styling/components/Slider';

const Slider = ({
  values,
  onValuesChange,
  min,
  max,
  step,
  sliderLength,
  minMarkerOverlapDistance,
  allowOverlap,
  trackStyle,
  markerContainerStyle,
  selectedStyle,
  containerStyle,
  customMarker,
}) => {
  return (
    <View styles={SliderStyle.containerSlider}>
      <MultiSlider
        snapped
        min={min}
        max={max}
        step={step}
        allowOverlap={allowOverlap}
        minMarkerOverlapDistance={minMarkerOverlapDistance}
        sliderLength={sliderLength}
        values={values}
        onValuesChange={onValuesChange}
        customMarker={customMarker}
        trackStyle={[SliderStyle.trackStyle, trackStyle]}
        markerContainerStyle={[
          SliderStyle.markerContainerStyle,
          markerContainerStyle,
        ]}
        selectedStyle={[SliderStyle.selectedStyle, selectedStyle]}
        containerStyle={[SliderStyle.containerStyle, containerStyle]}
      />
    </View>
  );
};

Slider.defaultProps = {
  min: 7,
  max: 22,
  step: 1,
  sliderLength: 320,
  minMarkerOverlapDistance: '20',
  allowOverlap: false,
  onValuesChange: () => null,
  trackStyle: [],
  markerContainerStyle: [],
  selectedStyle: [],
  containerStyle: [],
  customMarker: () => <View style={SliderStyle.marker} />,
};

Slider.propTypes = {
  values: PropTypes.array.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  sliderLength: PropTypes.number,
  allowOverlap: PropTypes.bool,
  minMarkerOverlapDistance: PropTypes.string,
  customMarker: PropTypes.any,
  onValuesChange: PropTypes.any,
  trackStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  markerContainerStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  selectedStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Slider;
