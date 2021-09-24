import React from 'react';
import {Dimensions, View} from 'react-native';
import {Text} from './index';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

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
}) => {
  const carouselWidth = Dimensions.get('screen').width;
  const carouselHeight = 200;
  return (
    <View>
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
      />
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: '#000',
          marginVertical: 30,
        }}
        semiBold>
        {index + 1} of {data.length}
      </Text>
    </View>
  );
};

SnapCarousel.defaultProps = {
  slideStyle: [],
  onSnapToItem: () => null,
  renderItem: () => null,
};

SnapCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  alignment: 'start' || 'center' || 'end',
  layout: 'default' || 'stack' || 'tinder',
  onSnapToItem: PropTypes.func,
  index: PropTypes.number,
  sliderWidth: PropTypes.number,
  itemHeight: PropTypes.number,
  itemWidth: PropTypes.number,
  slideStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default SnapCarousel;
