import React, {useState} from 'react';
import SnapCarousel, {Pagination} from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';

const Carousel = ({
  data,
  renderItem,
  sliderWidth,
  itemWidth,
  itemHeight,
  alignment,
  layout,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselWidth = Dimensions.get('screen').width;
  const carouselHeight = 130;
  const onSnap = (index) => setCurrentIndex(index);
  return (
    <>
      <SnapCarousel
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth || carouselWidth}
        sliderHeight={itemHeight || carouselHeight}
        itemWidth={itemWidth || carouselWidth * 0.85}
        itemHeight={itemHeight || carouselHeight}
        activeSlideAlignment={alignment || 'start'}
        layout={layout || 'default'}
        onSnapToItem={onSnap}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={currentIndex}
        containerStyle={{
          paddingVertical: 0,
          paddingTop: 15,
          alignSelf: 'center',
        }}
        dotStyle={{
          width: 30,
          height: 2,
          borderWidth: 1,
          backgroundColor: '#4D4D4D',
        }}
        dotContainerStyle={{marginHorizontal: 0}}
        inactiveDotStyle={{width: 15}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
};

export default Carousel;
