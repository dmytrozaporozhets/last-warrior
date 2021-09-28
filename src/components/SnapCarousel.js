import React from 'react';
import {Dimensions, View} from 'react-native';
import {Text} from './index';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import {Colors, sg} from '../styling';

const SnapCarousel = ({
  data,
  renderItem,
  sliderWidth,
  itemWidth,
  itemHeight,
  alignment,
  layout,
  onSnapToItem,
  index,
  inactiveSlideScale,
  slideStyle,
  containerStyle,
  textStyle,
}) => {
  const carouselWidth = Dimensions.get('screen').width;
  const carouselHeight = 200;
  return (
    <View style={containerStyle}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth || carouselWidth}
        sliderHeight={itemHeight || carouselHeight}
        itemWidth={itemWidth || carouselWidth * 0.6}
        itemHeight={itemHeight || carouselHeight}
        activeSlideAlignment={alignment || 'start'}
        layout={layout || 'default'}
        onSnapToItem={onSnapToItem}
        inactiveSlideScale={inactiveSlideScale}
        slideStyle={slideStyle}
        firstItem={index}
      />
      <Text
        style={[
          sg.fS16,
          sg.textCenter,
          sg.mT20,
          {color: Colors.white},
          textStyle,
        ]}
        semiBold>
        {index + 1} of {data.length}
      </Text>
    </View>
  );
};

SnapCarousel.defaultProps = {
  slideStyle: [],
  containerStyle: [],
  textStyle: [],
  onSnapToItem: () => null,
  renderItem: () => null,
};

SnapCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  alignment: PropTypes.oneOf(['start', 'center', 'end']),
  layout: PropTypes.oneOf(['default', 'stack', 'tinder']),
  onSnapToItem: PropTypes.func,
  index: PropTypes.number,
  sliderWidth: PropTypes.number,
  itemHeight: PropTypes.number,
  itemWidth: PropTypes.number,
  slideStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  textStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default SnapCarousel;
